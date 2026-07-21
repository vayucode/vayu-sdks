# \CreditProductsAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListCreditProducts**](CreditProductsAPI.md#ListCreditProducts) | **Get** /credit-products | List credit products



## ListCreditProducts

> ListCreditProductsResponse ListCreditProducts(ctx).Execute()

List credit products



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CreditProductsAPI.ListCreditProducts(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CreditProductsAPI.ListCreditProducts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCreditProducts`: ListCreditProductsResponse
	fmt.Fprintf(os.Stdout, "Response from `CreditProductsAPI.ListCreditProducts`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListCreditProductsRequest struct via the builder pattern


### Return type

[**ListCreditProductsResponse**](ListCreditProductsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

