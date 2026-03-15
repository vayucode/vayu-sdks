# \MeasurementsAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateMeasurement**](MeasurementsAPI.md#CreateMeasurement) | **Post** /measurements | Create Measurement
[**DeleteMeasurement**](MeasurementsAPI.md#DeleteMeasurement) | **Delete** /measurements/{measurementId} | Delete Measurement
[**GetMeasurement**](MeasurementsAPI.md#GetMeasurement) | **Get** /measurements/{measurementId} | Get Measurement
[**ListMeasurements**](MeasurementsAPI.md#ListMeasurements) | **Get** /measurements | List Measurements



## CreateMeasurement

> CreateMeasurementResponse CreateMeasurement(ctx).CreateMeasurementRequest(createMeasurementRequest).Execute()

Create Measurement



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
	createMeasurementRequest := *openapiclient.NewCreateMeasurementRequest("CustomerId_example", "MeterId_example", *openapiclient.NewCreateMeasurementRequestUsageDate(int32(123), int32(123), int32(123)), float32(123)) // CreateMeasurementRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MeasurementsAPI.CreateMeasurement(context.Background()).CreateMeasurementRequest(createMeasurementRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MeasurementsAPI.CreateMeasurement``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateMeasurement`: CreateMeasurementResponse
	fmt.Fprintf(os.Stdout, "Response from `MeasurementsAPI.CreateMeasurement`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMeasurementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMeasurementRequest** | [**CreateMeasurementRequest**](CreateMeasurementRequest.md) |  | 

### Return type

[**CreateMeasurementResponse**](CreateMeasurementResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteMeasurement

> DeleteMeasurementResponse DeleteMeasurement(ctx, measurementId).Execute()

Delete Measurement



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
	measurementId := "measurementId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MeasurementsAPI.DeleteMeasurement(context.Background(), measurementId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MeasurementsAPI.DeleteMeasurement``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteMeasurement`: DeleteMeasurementResponse
	fmt.Fprintf(os.Stdout, "Response from `MeasurementsAPI.DeleteMeasurement`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**measurementId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMeasurementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteMeasurementResponse**](DeleteMeasurementResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMeasurement

> GetMeasurementResponse GetMeasurement(ctx, measurementId).Execute()

Get Measurement



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
	measurementId := "measurementId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MeasurementsAPI.GetMeasurement(context.Background(), measurementId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MeasurementsAPI.GetMeasurement``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMeasurement`: GetMeasurementResponse
	fmt.Fprintf(os.Stdout, "Response from `MeasurementsAPI.GetMeasurement`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**measurementId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMeasurementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetMeasurementResponse**](GetMeasurementResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListMeasurements

> ListMeasurementsResponse ListMeasurements(ctx).Limit(limit).Cursor(cursor).Execute()

List Measurements



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
	resp, r, err := apiClient.MeasurementsAPI.ListMeasurements(context.Background()).Limit(limit).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MeasurementsAPI.ListMeasurements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListMeasurements`: ListMeasurementsResponse
	fmt.Fprintf(os.Stdout, "Response from `MeasurementsAPI.ListMeasurements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMeasurementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float32** |  | [default to 10]
 **cursor** | **string** |  | 

### Return type

[**ListMeasurementsResponse**](ListMeasurementsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

