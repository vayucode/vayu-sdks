package main

import (
	"fmt"
	"os"
	"time"

	vayu "github.com/vayucode/vayu-sdks/go"
)

// This example demonstrates the SDK use cases added for the Groundcover onboarding:
//
//  1. External IDs on customers/contracts/plans (ENG-7130)
//  2. Events read path — query-events + get-event-by-ref (migrated to ClickHouse)
//  3. Invoices filtered by billing status (ENG-7132)
//  4. Plan-template contract creation + validation hardening (ENG-7126)
//
// Auth: set VAYU_ACCESS_TOKEN to a pre-issued access token, or VAYU_API_KEY to an
// API key / refresh token. Optionally set VAYU_HOST (e.g. https://connect.withvayu.com).
// Write operations (creating a contract) only run when VAYU_RUN_WRITES=1.
func main() {
	v := vayu.NewVayu(os.Getenv("VAYU_API_KEY"))

	if host := os.Getenv("VAYU_HOST"); host != "" {
		v.SetCustomHost(host)
	}
	if token := os.Getenv("VAYU_ACCESS_TOKEN"); token != "" {
		if err := v.SetAccessToken(token); err != nil {
			fatal("SetAccessToken", err)
		}
	} else if os.Getenv("VAYU_API_KEY") == "" {
		fmt.Fprintln(os.Stderr, "Set VAYU_ACCESS_TOKEN (pre-issued token) or VAYU_API_KEY (API key/refresh token)")
		os.Exit(1)
	}

	externalIDsExample(v)
	eventsReadExample(v)
	invoicesByStatusExample(v)
	planTemplateContractExample(v)

	fmt.Println("\nDone!")
}

// 1. External IDs (ENG-7130): look up a customer by its external identifier.
func externalIDsExample(v *vayu.Vayu) {
	fmt.Println("=== External IDs: lookup customer by externalId ===")
	limit := float32(50)
	customers, err := v.Customers.ListCustomers(&limit, nil)
	if err != nil {
		fatal("ListCustomers", err)
	}

	externalId := ""
	for _, c := range customers.Customers {
		if c.GetExternalId() != "" {
			externalId = c.GetExternalId()
			break
		}
	}
	if externalId == "" {
		fmt.Println("No customer with an externalId found; skipping lookup.")
		return
	}

	fetched, err := v.Customers.GetCustomerByExternalId(externalId)
	if err != nil {
		fatal("GetCustomerByExternalId", err)
	}
	fmt.Printf("externalId %q -> %s (%s)\n", externalId, fetched.Customer.GetName(), fetched.Customer.GetId())
}

// 2. Events read path (ClickHouse): query events, then fetch one by its ref.
func eventsReadExample(v *vayu.Vayu) {
	fmt.Println("\n=== Events read path: query-events + get-event-by-ref ===")
	limit := float32(5)
	result, err := v.Events.QueryEvents(vayu.QueryEventsRequest{
		StartTime: time.Now().AddDate(-2, 0, 0),
		EndTime:   time.Now(),
		Limit:     &limit,
	})
	if err != nil {
		fatal("QueryEvents", err)
	}
	fmt.Printf("Queried %d events\n", len(result.Events))
	if len(result.Events) == 0 {
		return
	}

	ref := result.Events[0].GetRef()
	fmt.Printf("First event: ref=%s name=%s at %s\n", ref, result.Events[0].GetName(), result.Events[0].GetTimestamp().Format(time.RFC3339))

	event, err := v.Events.GetEvent(ref)
	if err != nil {
		fmt.Printf("GetEvent(%q) failed (non-fatal): %v\n", ref, err)
		return
	}
	fmt.Printf("Fetched by ref: %s\n", event.Event.GetName())
}

// 3. Invoices by status (ENG-7132): filter the invoice list by billing status.
func invoicesByStatusExample(v *vayu.Vayu) {
	fmt.Println("\n=== Invoices by billing status ===")
	limit := float32(5)
	for _, status := range []string{
		vayu.InvoiceBillingStatusPaid,
		vayu.InvoiceBillingStatusPendingPayment,
		vayu.InvoiceBillingStatusOverdue,
	} {
		s := status
		invoices, err := v.Invoices.ListInvoicesWithFilter(vayu.ListInvoicesFilter{
			Limit:         &limit,
			BillingStatus: &s,
		})
		if err != nil {
			fatal("ListInvoicesWithFilter", err)
		}
		allMatch := true
		for _, inv := range invoices.Invoices {
			if string(inv.GetBillingStatus()) != status {
				allMatch = false
			}
		}
		fmt.Printf("  %-16s fetched %d invoice(s), all match filter: %t\n", status, len(invoices.Invoices), allMatch)
	}
}

// 4. Plan-template contract creation + validation (ENG-7126).
// Always exercises the validation path (an invalid planId is rejected). A real
// contract is only created when VAYU_RUN_WRITES=1, and is deleted afterwards.
func planTemplateContractExample(v *vayu.Vayu) {
	fmt.Println("\n=== Plan-template contract creation (ENG-7126) ===")

	// Validation: creating from a non-existent plan template must be rejected.
	missingId := "000000000000000000000000"
	_, err := v.Contracts.CreateContract(vayu.CreateContractRequest{
		StartDate:  time.Now(),
		CustomerId: missingId, // not resolved — the request is rejected first
		Name:       "validation-check",
		PlanId:     &missingId, // planId that does not exist
	})
	if err != nil {
		fmt.Printf("Invalid plan template correctly rejected: %v\n", err)
	} else {
		fmt.Println("WARNING: expected an error for a non-existent plan template")
	}

	if os.Getenv("VAYU_RUN_WRITES") != "1" {
		fmt.Println("Set VAYU_RUN_WRITES=1 to create a real contract from an active plan.")
		return
	}

	planId, customerId := findActivePlanAndCustomer(v)
	if planId == "" || customerId == "" {
		fmt.Println("No active plan / customer available; skipping real creation.")
		return
	}

	name := fmt.Sprintf("SDK plan-template contract %d", time.Now().Unix())
	created, err := v.Contracts.CreateContract(vayu.CreateContractRequest{
		StartDate:  time.Now(),
		CustomerId: customerId,
		Name:       name,
		PlanId:     &planId,
	})
	if err != nil {
		fatal("CreateContract(from plan template)", err)
	}
	contractId := created.Contract.GetId()
	fmt.Printf("Created contract %s from plan %s\n", contractId, planId)

	if _, err := v.Contracts.DeleteContract(contractId); err != nil {
		fmt.Printf("Cleanup DeleteContract failed (non-fatal): %v\n", err)
	} else {
		fmt.Printf("Deleted contract %s\n", contractId)
	}
}

func findActivePlanAndCustomer(v *vayu.Vayu) (planId string, customerId string) {
	limit := float32(50)
	plans, err := v.Plans.ListPlans(&limit, nil)
	if err != nil {
		fatal("ListPlans", err)
	}
	for _, p := range plans.Plans {
		if p.GetStatus() == "Active" {
			planId = p.GetId()
			break
		}
	}

	customers, err := v.Customers.ListCustomers(&limit, nil)
	if err != nil {
		fatal("ListCustomers", err)
	}
	if len(customers.Customers) > 0 {
		customerId = customers.Customers[0].GetId()
	}
	return planId, customerId
}

func fatal(op string, err error) {
	fmt.Fprintf(os.Stderr, "%s failed: %v\n", op, err)
	os.Exit(1)
}
