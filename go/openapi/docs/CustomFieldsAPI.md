# \CustomFieldsAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCustomField**](CustomFieldsAPI.md#CreateCustomField) | **Post** /customFields | Create Custom field
[**DeleteCustomField**](CustomFieldsAPI.md#DeleteCustomField) | **Delete** /customFields/{customFieldId} | Delete Custom field
[**GetCustomField**](CustomFieldsAPI.md#GetCustomField) | **Get** /customFields/{customFieldId} | Get Custom field
[**ListCustomFields**](CustomFieldsAPI.md#ListCustomFields) | **Get** /customFields | List Custom fields
[**UpdateCustomField**](CustomFieldsAPI.md#UpdateCustomField) | **Put** /customFields/{customFieldId} | Update Custom field



## CreateCustomField

> CreateCustomFieldResponse CreateCustomField(ctx).CreateCustomFieldRequest(createCustomFieldRequest).Execute()

Create Custom field



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
	createCustomFieldRequest := *openapiclient.NewCreateCustomFieldRequest(openapiclient.CustomFieldEntities("Customer"), "VayuCustomFieldName_example", openapiclient.CustomFieldValueTypes("String")) // CreateCustomFieldRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomFieldsAPI.CreateCustomField(context.Background()).CreateCustomFieldRequest(createCustomFieldRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFieldsAPI.CreateCustomField``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCustomField`: CreateCustomFieldResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFieldsAPI.CreateCustomField`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomFieldRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) |  | 

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCustomField

> DeleteCustomFieldResponse DeleteCustomField(ctx, customFieldId).Execute()

Delete Custom field



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
	customFieldId := "customFieldId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomFieldsAPI.DeleteCustomField(context.Background(), customFieldId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFieldsAPI.DeleteCustomField``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCustomField`: DeleteCustomFieldResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFieldsAPI.DeleteCustomField`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**customFieldId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomFieldRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteCustomFieldResponse**](DeleteCustomFieldResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomField

> GetCustomFieldResponse GetCustomField(ctx, customFieldId).Execute()

Get Custom field



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
	customFieldId := "customFieldId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomFieldsAPI.GetCustomField(context.Background(), customFieldId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFieldsAPI.GetCustomField``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCustomField`: GetCustomFieldResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFieldsAPI.GetCustomField`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**customFieldId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomFieldRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetCustomFieldResponse**](GetCustomFieldResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListCustomFields

> ListCustomFieldsResponse ListCustomFields(ctx).Limit(limit).Cursor(cursor).Execute()

List Custom fields



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomFieldsAPI.ListCustomFields(context.Background()).Limit(limit).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFieldsAPI.ListCustomFields``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCustomFields`: ListCustomFieldsResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFieldsAPI.ListCustomFields`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCustomFieldsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float32** |  | [default to 10]
 **cursor** | **string** |  | 

### Return type

[**ListCustomFieldsResponse**](ListCustomFieldsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCustomField

> UpdateCustomFieldResponse UpdateCustomField(ctx, customFieldId).UpdateCustomFieldRequest(updateCustomFieldRequest).Execute()

Update Custom field



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
	updateCustomFieldRequest := *openapiclient.NewUpdateCustomFieldRequest() // UpdateCustomFieldRequest | 
	customFieldId := "customFieldId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomFieldsAPI.UpdateCustomField(context.Background(), customFieldId).UpdateCustomFieldRequest(updateCustomFieldRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFieldsAPI.UpdateCustomField``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCustomField`: UpdateCustomFieldResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFieldsAPI.UpdateCustomField`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**customFieldId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCustomFieldRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldRequest** | [**UpdateCustomFieldRequest**](UpdateCustomFieldRequest.md) |  | 


### Return type

[**UpdateCustomFieldResponse**](UpdateCustomFieldResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

