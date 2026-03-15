# \CatalogProductsAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCatalogProduct**](CatalogProductsAPI.md#CreateCatalogProduct) | **Post** /catalogProducts | Create Catalog product
[**DeleteCatalogProduct**](CatalogProductsAPI.md#DeleteCatalogProduct) | **Delete** /catalogProducts/{catalogProductId} | Delete Catalog product
[**GetCatalogProduct**](CatalogProductsAPI.md#GetCatalogProduct) | **Get** /catalogProducts/{catalogProductId} | Get Catalog product
[**ListCatalogProducts**](CatalogProductsAPI.md#ListCatalogProducts) | **Get** /catalogProducts | List Catalog products
[**UpdateCatalogProduct**](CatalogProductsAPI.md#UpdateCatalogProduct) | **Put** /catalogProducts/{catalogProductId} | Update Catalog product



## CreateCatalogProduct

> CreateCatalogProductResponse CreateCatalogProduct(ctx).CreateCatalogProductRequest(createCatalogProductRequest).Execute()

Create Catalog product



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	createCatalogProductRequest := *openapiclient.NewCreateCatalogProductRequest("Name_example") // CreateCatalogProductRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CatalogProductsAPI.CreateCatalogProduct(context.Background()).CreateCatalogProductRequest(createCatalogProductRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CatalogProductsAPI.CreateCatalogProduct``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCatalogProduct`: CreateCatalogProductResponse
	fmt.Fprintf(os.Stdout, "Response from `CatalogProductsAPI.CreateCatalogProduct`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCatalogProductRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCatalogProductRequest** | [**CreateCatalogProductRequest**](CreateCatalogProductRequest.md) |  | 

### Return type

[**CreateCatalogProductResponse**](CreateCatalogProductResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCatalogProduct

> DeleteCatalogProductResponse DeleteCatalogProduct(ctx, catalogProductId).Execute()

Delete Catalog product



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	catalogProductId := "catalogProductId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CatalogProductsAPI.DeleteCatalogProduct(context.Background(), catalogProductId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CatalogProductsAPI.DeleteCatalogProduct``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCatalogProduct`: DeleteCatalogProductResponse
	fmt.Fprintf(os.Stdout, "Response from `CatalogProductsAPI.DeleteCatalogProduct`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**catalogProductId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCatalogProductRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteCatalogProductResponse**](DeleteCatalogProductResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCatalogProduct

> GetCatalogProductResponse GetCatalogProduct(ctx, catalogProductId).Execute()

Get Catalog product



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	catalogProductId := "catalogProductId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CatalogProductsAPI.GetCatalogProduct(context.Background(), catalogProductId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CatalogProductsAPI.GetCatalogProduct``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCatalogProduct`: GetCatalogProductResponse
	fmt.Fprintf(os.Stdout, "Response from `CatalogProductsAPI.GetCatalogProduct`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**catalogProductId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCatalogProductRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetCatalogProductResponse**](GetCatalogProductResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListCatalogProducts

> ListCatalogProductsResponse ListCatalogProducts(ctx).Limit(limit).Cursor(cursor).Execute()

List Catalog products



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	limit := float32(8.14) // float32 |  (optional) (default to 10)
	cursor := "cursor_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CatalogProductsAPI.ListCatalogProducts(context.Background()).Limit(limit).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CatalogProductsAPI.ListCatalogProducts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCatalogProducts`: ListCatalogProductsResponse
	fmt.Fprintf(os.Stdout, "Response from `CatalogProductsAPI.ListCatalogProducts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCatalogProductsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float32** |  | [default to 10]
 **cursor** | **string** |  | 

### Return type

[**ListCatalogProductsResponse**](ListCatalogProductsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCatalogProduct

> UpdateCatalogProductResponse UpdateCatalogProduct(ctx, catalogProductId).UpdateCatalogProductRequest(updateCatalogProductRequest).Execute()

Update Catalog product



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	updateCatalogProductRequest := *openapiclient.NewUpdateCatalogProductRequest() // UpdateCatalogProductRequest | 
	catalogProductId := "catalogProductId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CatalogProductsAPI.UpdateCatalogProduct(context.Background(), catalogProductId).UpdateCatalogProductRequest(updateCatalogProductRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CatalogProductsAPI.UpdateCatalogProduct``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCatalogProduct`: UpdateCatalogProductResponse
	fmt.Fprintf(os.Stdout, "Response from `CatalogProductsAPI.UpdateCatalogProduct`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**catalogProductId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCatalogProductRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCatalogProductRequest** | [**UpdateCatalogProductRequest**](UpdateCatalogProductRequest.md) |  | 


### Return type

[**UpdateCatalogProductResponse**](UpdateCatalogProductResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

