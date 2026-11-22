# \InvoicesAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelInvoice**](InvoicesAPI.md#CancelInvoice) | **Post** /invoices/{invoiceId}/cancel | Cancel an invoice
[**DeleteInvoice**](InvoicesAPI.md#DeleteInvoice) | **Delete** /invoices/{invoiceId} | Delete Invoice
[**GetInvoice**](InvoicesAPI.md#GetInvoice) | **Get** /invoices/{invoiceId} | Get Invoice
[**GetInvoicePaymentStatus**](InvoicesAPI.md#GetInvoicePaymentStatus) | **Get** /invoices/{invoiceId}/payment-status | Get invoice payment status
[**ListInvoices**](InvoicesAPI.md#ListInvoices) | **Get** /invoices | List invoices
[**RecordInvoicePayment**](InvoicesAPI.md#RecordInvoicePayment) | **Post** /invoices/{invoiceId}/payments | Record a payment on an invoice
[**ReissueInvoice**](InvoicesAPI.md#ReissueInvoice) | **Post** /invoices/{invoiceId}/reissue | Reissue an invoice
[**UpdateInvoiceDueDate**](InvoicesAPI.md#UpdateInvoiceDueDate) | **Put** /invoices/{invoiceId}/due-date | Update the due date of an invoice
[**UpdateInvoiceIssueDate**](InvoicesAPI.md#UpdateInvoiceIssueDate) | **Put** /invoices/{invoiceId}/issue-date | Update the issue date of an invoice



## CancelInvoice

> CancelInvoiceResponse CancelInvoice(ctx, invoiceId).Execute()

Cancel an invoice



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	invoiceId := "invoiceId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.CancelInvoice(context.Background(), invoiceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.CancelInvoice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CancelInvoice`: CancelInvoiceResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.CancelInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CancelInvoiceResponse**](CancelInvoiceResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteInvoice

> DeleteInvoiceResponse DeleteInvoice(ctx, invoiceId).Execute()

Delete Invoice



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	invoiceId := "invoiceId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.DeleteInvoice(context.Background(), invoiceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.DeleteInvoice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteInvoice`: DeleteInvoiceResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.DeleteInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteInvoiceResponse**](DeleteInvoiceResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInvoice

> GetInvoiceResponse GetInvoice(ctx, invoiceId).Execute()

Get Invoice



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	invoiceId := "invoiceId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.GetInvoice(context.Background(), invoiceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.GetInvoice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInvoice`: GetInvoiceResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.GetInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetInvoiceResponse**](GetInvoiceResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInvoicePaymentStatus

> InvoicePaymentStatusResponse GetInvoicePaymentStatus(ctx, invoiceId).Execute()

Get invoice payment status



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	invoiceId := "invoiceId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.GetInvoicePaymentStatus(context.Background(), invoiceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.GetInvoicePaymentStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInvoicePaymentStatus`: InvoicePaymentStatusResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.GetInvoicePaymentStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInvoicePaymentStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**InvoicePaymentStatusResponse**](InvoicePaymentStatusResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListInvoices

> ListInvoicesResponse ListInvoices(ctx).Limit(limit).Cursor(cursor).CustomerId(customerId).BillingStatus(billingStatus).IssuedAfter(issuedAfter).IssuedBefore(issuedBefore).Execute()

List invoices



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	limit := float32(8.14) // float32 |  (optional) (default to 10)
	cursor := "cursor_example" // string |  (optional)
	customerId := "customerId_example" // string |  (optional)
	billingStatus := openapiclient.InvoiceBillingStatus("None") // InvoiceBillingStatus |  (optional)
	issuedAfter := "issuedAfter_example" // string |  (optional)
	issuedBefore := "issuedBefore_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.ListInvoices(context.Background()).Limit(limit).Cursor(cursor).CustomerId(customerId).BillingStatus(billingStatus).IssuedAfter(issuedAfter).IssuedBefore(issuedBefore).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.ListInvoices``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListInvoices`: ListInvoicesResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.ListInvoices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListInvoicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float32** |  | [default to 10]
 **cursor** | **string** |  | 
 **customerId** | **string** |  | 
 **billingStatus** | [**InvoiceBillingStatus**](InvoiceBillingStatus.md) |  | 
 **issuedAfter** | **string** |  | 
 **issuedBefore** | **string** |  | 

### Return type

[**ListInvoicesResponse**](ListInvoicesResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RecordInvoicePayment

> RecordInvoicePaymentResponse RecordInvoicePayment(ctx, invoiceId).RecordInvoicePaymentRequest(recordInvoicePaymentRequest).Execute()

Record a payment on an invoice



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	recordInvoicePaymentRequest := *openapiclient.NewRecordInvoicePaymentRequest(float32(123), "IdempotencyKey_example") // RecordInvoicePaymentRequest | 
	invoiceId := "invoiceId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.RecordInvoicePayment(context.Background(), invoiceId).RecordInvoicePaymentRequest(recordInvoicePaymentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.RecordInvoicePayment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RecordInvoicePayment`: RecordInvoicePaymentResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.RecordInvoicePayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRecordInvoicePaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordInvoicePaymentRequest** | [**RecordInvoicePaymentRequest**](RecordInvoicePaymentRequest.md) |  | 


### Return type

[**RecordInvoicePaymentResponse**](RecordInvoicePaymentResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReissueInvoice

> ReissueInvoiceResponse ReissueInvoice(ctx, invoiceId).Execute()

Reissue an invoice



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	invoiceId := "invoiceId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.ReissueInvoice(context.Background(), invoiceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.ReissueInvoice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReissueInvoice`: ReissueInvoiceResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.ReissueInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReissueInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ReissueInvoiceResponse**](ReissueInvoiceResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateInvoiceDueDate

> UpdateInvoiceDueDateResponse UpdateInvoiceDueDate(ctx, invoiceId).UpdateInvoiceDueDateRequest(updateInvoiceDueDateRequest).Execute()

Update the due date of an invoice



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	updateInvoiceDueDateRequest := *openapiclient.NewUpdateInvoiceDueDateRequest(time.Now()) // UpdateInvoiceDueDateRequest | 
	invoiceId := "invoiceId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.UpdateInvoiceDueDate(context.Background(), invoiceId).UpdateInvoiceDueDateRequest(updateInvoiceDueDateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.UpdateInvoiceDueDate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateInvoiceDueDate`: UpdateInvoiceDueDateResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.UpdateInvoiceDueDate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateInvoiceDueDateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInvoiceDueDateRequest** | [**UpdateInvoiceDueDateRequest**](UpdateInvoiceDueDateRequest.md) |  | 


### Return type

[**UpdateInvoiceDueDateResponse**](UpdateInvoiceDueDateResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateInvoiceIssueDate

> UpdateInvoiceIssueDateResponse UpdateInvoiceIssueDate(ctx, invoiceId).UpdateInvoiceIssueDateRequest(updateInvoiceIssueDateRequest).Execute()

Update the issue date of an invoice



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	updateInvoiceIssueDateRequest := *openapiclient.NewUpdateInvoiceIssueDateRequest(time.Now()) // UpdateInvoiceIssueDateRequest | 
	invoiceId := "invoiceId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InvoicesAPI.UpdateInvoiceIssueDate(context.Background(), invoiceId).UpdateInvoiceIssueDateRequest(updateInvoiceIssueDateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InvoicesAPI.UpdateInvoiceIssueDate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateInvoiceIssueDate`: UpdateInvoiceIssueDateResponse
	fmt.Fprintf(os.Stdout, "Response from `InvoicesAPI.UpdateInvoiceIssueDate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateInvoiceIssueDateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInvoiceIssueDateRequest** | [**UpdateInvoiceIssueDateRequest**](UpdateInvoiceIssueDateRequest.md) |  | 


### Return type

[**UpdateInvoiceIssueDateResponse**](UpdateInvoiceIssueDateResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

