# Vayu's GO API Client Library


## Overview

The Vayu API client library in GO allows you to submit events for processing and storage, manage billing-related entities, and perform various other operations seamlessly.



## Usage

### Importing

In order to use the Vayu Client Library you would need to import it first into your go project.

```go
import (
	VayuSDK "github.com/vayucode/vayu-sdks/go"
)
```

### Initialization

Initialize the Vayu API client.

```go
    vayu := VayuSDK.NewVayu("VAYU_API_KEY")
```


### Authentication

Authentication is handled automatically — the client logs in with your API key on
the first request and refreshes the token as needed.

#### Using a pre-issued access token

If you already hold an access token (for example, a Cognito token obtained out of
band), install it directly instead of exchanging an API key:

```go
if err := vayu.SetAccessToken("YOUR_ACCESS_TOKEN"); err != nil {
    panic(err)
}
```

#### Targeting a specific host

```go
vayu.SetCustomHost("https://connect.withvayu.com")
```


### Events

#### Sending Events

To send a batch of events for processing and storage:

```go
events := []VayuSDK.Event{
    {
        Name:          "api_call",                             // The distinctive label assigned to an event
        Timestamp:     time.Now().UTC(),                       // The exact moment of event occurrence
        CustomerAlias: "customer_alias",                       // A unique identifier assigned to each customer
        Ref:           "4f6cf35x-2c4y-483z-a0a9-158621f77a21", // A universally unique identifier for each event
        Data: map[string]interface{}{
            "key1": "processing_duration", // Example additional data
            "key2": "api_url",             // Example additional data
        },
    },
}

result, err := vayu.Events.SendEvents(events)

if err != nil {
    panic(err)
}

for _, event := range result.ValidEvents {
    println(event.Name)
}
```


#### Querying Events

To fetch events occurring within a specified timestamp range:

```go
limit := float32(10)
eventsQuery := VayuSDK.QueryEventsRequest{
    StartTime: time.Date(2024, 9, 1, 0, 0, 0, 0, time.UTC),
    EndTime:   time.Date(2024, 9, 30, 23, 59, 59, 999, time.UTC),
    Name:      "api_call",
    Limit:     &limit,
}
result, err := vayu.Events.QueryEvents(eventsQuery)
if err != nil {
    panic(err)
}
for _, event := range result.Events {
    println(event.GetName())
}
```


#### Getting Event by Ref ID

To get a specific event using its reference ID:

```go
event, err := vayu.Events.GetEvent("4f6cf35x-2c4y-483z-a0a9-158621f77a21")
if err != nil {
    panic(err)
}
println(event.Name)
```

#### Deleting Event by Ref ID

To delete a specific event using its reference ID:

```go
event, err := vayu.Events.DeleteEvent("4f6cf35x-2c4y-483z-a0a9-158621f77a21")
if err != nil {
    panic(err)
}
println(event.Name)
```


### Customers

#### Creating a Customer

To create a new customer:

```go
externalId := "customer_12345"
customerPayload := VayuSDK.CreateCustomerRequest{
    Name: "Jane Doe",
    ExternalId: &externalId,
}
customer, err := vayu.Customers.CreateCustomer(customerPayload)
if err != nil {
    panic(err)
}
println(customer.Id)
```

#### Updating a Customer

To update an existing customer by ID:

```go
externalId := "customer_67890"
updateCustomerPayload := VayuSDK.UpdateCustomerRequest{
    ExternalId: &externalId,
}
updatedCustomer, err := vayu.Customers.UpdateCustomer("customer-id", updateCustomerPayload)
if err != nil {
    panic(err)
}
println(updatedCustomer.Alias)
```

#### Deleting a Customer

To delete a customer by ID:

```go
customer, err := vayu.Customers.DeleteCustomer("customer-id")
if err != nil {
    panic(err)
}
println(customer.Id)
```

#### Resolving a Customer by external id

Look a customer up by the external id you assigned it, instead of the Vayu id:

```go
customer, err := vayu.Customers.GetCustomerByExternalId("customer_12345")
if err != nil {
    panic(err)
}
println(customer.Customer.GetName())
```

`GetCustomer`, `UpdateCustomer`, and `DeleteCustomer` also accept an external id in
place of the Vayu id — the API resolves whichever you pass on the same endpoint
(note that updates use `PUT`, not `PATCH`):

```go
externalId := "customer_67890"
updated, err := vayu.Customers.UpdateCustomer("customer_12345", VayuSDK.UpdateCustomerRequest{
    ExternalId: &externalId,
})
if err != nil {
    panic(err)
}
println(updated.Customer.GetName())
```

### Contracts

#### Creating a contract from an existing plan (plan template)

Provide the customer id and the id of the plan to base the contract on. The
contract's products are derived from the plan, so you don't pass inline products.

```go
planId := "4f6cf35x-1234-483z-a0a9-158621f77a21"
contract, err := vayu.Contracts.CreateContract(VayuSDK.CreateContractRequest{
    StartDate:  time.Now().UTC(),                       // The start date of the contract
    CustomerId: "1f4cf23x-2c4y-483z-1111-158621f77a21", // The customer the contract is for
    Name:       "Acme 2026",                            // The contract name
    PlanId:     &planId,                                // Create the contract from this plan
})
if err != nil {
    panic(err)
}
println(contract.Contract.GetId())
```

A plan can back only one live contract at a time. Reusing a plan that is already
attached to a contract returns a `400` (`PlanAlreadyHasContractError`) — delete the
existing contract first to free the plan, then create the new one.

#### Getting a contract by external id

`GetContract` accepts either the Vayu contract id or your own external id — the API
resolves whichever you pass, on the same endpoint.

```go
contract, err := vayu.Contracts.GetContract("your-external-contract-id")
if err != nil {
    panic(err)
}
println(contract.Contract.GetName())
```

### Meters

Meters are entities that track and aggregate usage data based on events. They are crucial for billing and monitoring purposes.

#### Listing Meters

To get a list of meters:

```go
limit := float32(10)
cursor := "cursor"
meters, err := vayu.Meters.ListMeters(&limit, &cursor)
if err != nil {
    panic(err)
}
for _, meter := range meters.Meters {
    println(meter.Id)
}
```

### Invoices

#### Listing invoices by billing status

Filter the invoice list by billing status (and, optionally, by customer or
issue-date range). Billing-status constants are provided for convenience:

```go
limit := float32(20)
status := VayuSDK.InvoiceBillingStatusOverdue // None | Paid | Rejected | PendingPayment | Overdue
invoices, err := vayu.Invoices.ListInvoicesWithFilter(VayuSDK.ListInvoicesFilter{
    Limit:         &limit,
    BillingStatus: &status,
})
if err != nil {
    panic(err)
}
for _, invoice := range invoices.Invoices {
    println(invoice.GetId(), string(invoice.GetBillingStatus()))
}
```

## Features

The Vayu API client library provides access to the following features:

- **Auth**
  - `Login()`
  - `SetAccessToken(token)`
  - `SetCustomHost(host)`
- **Events**
  - `Events.SendEvents`
  - `Events.QueryEvents`
  - `Events.GetEvent`
  - `Events.DeleteEvent`
  - `Events.SendEventsDryRun`
- **Customers**
  - `Customers.CreateCustomer`
  - `Customers.UpdateCustomer`
  - `Customers.DeleteCustomer`
  - `Customers.ListCustomers`
  - `Customers.GetCustomer`
  - `Customers.GetCustomerByExternalId`
- **Meters**
  - `Meters.GetMeter`
  - `Meters.UpdateMeter`
  - `Meters.DeleteMeter`
  - `Meters.ListMeters`
- **Plans**
  - `Plans.GetPlan`
  - `Plans.DeletePlan`
  - `Plans.ListPlans`
- **Contracts**
  - `Contracts.CreateContract`
  - `Contracts.DeleteContract`
  - `Contracts.ListContracts`
  - `Contracts.GetContract`
- **Invoices**
  - `Invoices.GetInvoice`
  - `Invoices.ListInvoices`
  - `Invoices.ListInvoicesWithFilter` (filter by billing status / customer / issue date)

## Support

If you have any questions or need further assistance, please contact Vayu at `team@withvayu.com`.

## License

This project is licensed under the MIT License.

---

This README provides an overview and usage examples for the Vayu API client library. For more detailed information on each method, please refer to the official Vayu API documentation.