# \CreditsAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeductCredits**](CreditsAPI.md#DeductCredits) | **Post** /credits/deduct | Deduct credits from customer credit ledger
[**GrantCredits**](CreditsAPI.md#GrantCredits) | **Post** /credits/grant | Grant credits to a customer credit ledger
[**ListCreditLedgerEntries**](CreditsAPI.md#ListCreditLedgerEntries) | **Get** /credits | Retrieve credit ledger entries for customer.



## DeductCredits

> DeductCredits(ctx).DeductCreditsRequest(deductCreditsRequest).Execute()

Deduct credits from customer credit ledger



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
	deductCreditsRequest := *openapiclient.NewDeductCreditsRequest(float32(123), "CustomerId_example") // DeductCreditsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.CreditsAPI.DeductCredits(context.Background()).DeductCreditsRequest(deductCreditsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CreditsAPI.DeductCredits``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeductCreditsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deductCreditsRequest** | [**DeductCreditsRequest**](DeductCreditsRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GrantCredits

> GrantCredits(ctx).GrantCreditsRequest(grantCreditsRequest).Execute()

Grant credits to a customer credit ledger



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
	grantCreditsRequest := *openapiclient.NewGrantCreditsRequest(float32(123), "CustomerId_example") // GrantCreditsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.CreditsAPI.GrantCredits(context.Background()).GrantCreditsRequest(grantCreditsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CreditsAPI.GrantCredits``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGrantCreditsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantCreditsRequest** | [**GrantCreditsRequest**](GrantCreditsRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListCreditLedgerEntries

> ListCreditLedgerEntriesResponse ListCreditLedgerEntries(ctx).CustomerId(customerId).Limit(limit).Cursor(cursor).Execute()

Retrieve credit ledger entries for customer.



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
	customerId := "customerId_example" // string | 
	limit := float32(8.14) // float32 |  (optional) (default to 10)
	cursor := "cursor_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CreditsAPI.ListCreditLedgerEntries(context.Background()).CustomerId(customerId).Limit(limit).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CreditsAPI.ListCreditLedgerEntries``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCreditLedgerEntries`: ListCreditLedgerEntriesResponse
	fmt.Fprintf(os.Stdout, "Response from `CreditsAPI.ListCreditLedgerEntries`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCreditLedgerEntriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **string** |  | 
 **limit** | **float32** |  | [default to 10]
 **cursor** | **string** |  | 

### Return type

[**ListCreditLedgerEntriesResponse**](ListCreditLedgerEntriesResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

