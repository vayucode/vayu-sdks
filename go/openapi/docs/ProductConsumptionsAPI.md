# \ProductConsumptionsAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetProductConsumption**](ProductConsumptionsAPI.md#GetProductConsumption) | **Get** /product-consumption/{productId} | Get product consumption



## GetProductConsumption

> GetProductConsumptionResponse GetProductConsumption(ctx, productId).Execute()

Get product consumption



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
	productId := "productId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProductConsumptionsAPI.GetProductConsumption(context.Background(), productId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProductConsumptionsAPI.GetProductConsumption``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetProductConsumption`: GetProductConsumptionResponse
	fmt.Fprintf(os.Stdout, "Response from `ProductConsumptionsAPI.GetProductConsumption`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**productId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProductConsumptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetProductConsumptionResponse**](GetProductConsumptionResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

