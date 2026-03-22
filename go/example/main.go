package main

import (
	"fmt"
	"os"
	"time"

	vayu "github.com/vayucode/vayu-sdks/go"
)

func main() {
	apiKey := os.Getenv("VAYU_API_KEY")
	if apiKey == "" {
		fmt.Fprintln(os.Stderr, "Set VAYU_API_KEY environment variable")
		os.Exit(1)
	}

	v := vayu.NewVayu(apiKey)

	if host := os.Getenv("VAYU_HOST"); host != "" {
		v.SetCustomHost(host)
	}

	// --- Customers ---
	fmt.Println("=== List Customers ===")
	limit := float32(5)
	customers, err := v.Customers.ListCustomers(&limit, nil)
	if err != nil {
		fatal("ListCustomers", err)
	}
	fmt.Printf("Found %.0f customers\n", customers.Total)

	fmt.Println("\n=== Create Customer ===")
	suffix := fmt.Sprintf("%d", time.Now().UnixNano())
	externalId := fmt.Sprintf("example-%s", suffix)
	customerName := fmt.Sprintf("SDK Example Customer %s", suffix)
	created, err := v.Customers.CreateCustomer(vayu.CreateCustomerRequest{
		Name:       customerName,
		ExternalId: &externalId,
	})
	if err != nil {
		fatal("CreateCustomer", err)
	}
	customerId := created.Customer.Id
	fmt.Printf("Created customer: %s\n", customerId)

	fmt.Println("\n=== Get Customer ===")
	fetched, err := v.Customers.GetCustomer(customerId)
	if err != nil {
		fatal("GetCustomer", err)
	}
	fmt.Printf("Fetched: %s\n", fetched.Customer.Name)

	// --- Events ---
	fmt.Println("\n=== Send Events ===")
	ref := fmt.Sprintf("ref-%d", time.Now().UnixMilli())
	events := []vayu.Event{
		{
			Name:          "api_call",
			Timestamp:     time.Now().UTC(),
			CustomerAlias: externalId,
			Ref:           ref,
			Data: map[string]interface{}{
				"endpoint": "/users",
				"method":   "GET",
			},
		},
	}
	sendResult, err := v.Events.SendEvents(events)
	if err != nil {
		fatal("SendEvents", err)
	}
	fmt.Printf("Valid events: %d\n", len(sendResult.ValidEvents))
	fmt.Printf("Invalid events: %d\n", len(sendResult.InvalidEvents))

	// --- Meters ---
	fmt.Println("\n=== List Meters ===")
	meters, err := v.Meters.ListMeters(&limit, nil)
	if err != nil {
		fatal("ListMeters", err)
	}
	fmt.Printf("Found %.0f meters\n", meters.Total)
	for _, m := range meters.Meters {
		fmt.Printf("  - %s: %s\n", m.Id, m.Name)
	}

	// --- Contracts ---
	fmt.Println("\n=== List Contracts ===")
	contracts, err := v.Contracts.ListContracts(&limit, nil)
	if err != nil {
		fatal("ListContracts", err)
	}
	fmt.Printf("Found %.0f contracts\n", contracts.Total)

	// --- Invoices ---
	fmt.Println("\n=== List Invoices ===")
	invoices, err := v.Invoices.ListInvoices(&limit, nil)
	if err != nil {
		fatal("ListInvoices", err)
	}
	fmt.Printf("Found %.0f invoices\n", invoices.Total)

	// --- Catalog Products (new in latest update-sdks) ---
	fmt.Println("\n=== List Catalog Products ===")
	products, err := v.CatalogProducts.ListCatalogProducts(&limit, nil)
	if err != nil {
		fatal("ListCatalogProducts", err)
	}
	fmt.Printf("Found %.0f catalog products\n", products.Total)

	// --- Cleanup ---
	fmt.Println("\n=== Delete Customer ===")
	_, err = v.Customers.DeleteCustomer(customerId)
	if err != nil {
		fmt.Printf("DeleteCustomer failed (non-fatal): %v\n", err)
	} else {
		fmt.Printf("Deleted customer: %s\n", customerId)
	}

	fmt.Println("\nDone!")
}

func fatal(op string, err error) {
	fmt.Fprintf(os.Stderr, "%s failed: %v\n", op, err)
	os.Exit(1)
}
