# \EventsAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteEventByRefId**](EventsAPI.md#DeleteEventByRefId) | **Delete** /events/{refId} | Delete an event by refId
[**DeleteEventsByRefs**](EventsAPI.md#DeleteEventsByRefs) | **Post** /events/delete-by-refs | Delete events by refs
[**GetEventByRefId**](EventsAPI.md#GetEventByRefId) | **Get** /events/{refId} | Get event by refId
[**QueryEvents**](EventsAPI.md#QueryEvents) | **Get** /events | Query events by timestamp period and optional event name
[**SendEvents**](EventsAPI.md#SendEvents) | **Post** /events | Submit a batch of events for ingestion
[**SendEventsDryRun**](EventsAPI.md#SendEventsDryRun) | **Post** /events/dry-run | Submit a batch of events for testing
[**V2DeleteEventByRefId**](EventsAPI.md#V2DeleteEventByRefId) | **Delete** /v2/events/{refId} | Delete an event by refId (v2)
[**V2DeleteEventsByRefs**](EventsAPI.md#V2DeleteEventsByRefs) | **Post** /v2/events/delete-by-refs | Delete events by refs (v2)
[**V2GetEventByRefId**](EventsAPI.md#V2GetEventByRefId) | **Get** /v2/events/{refId} | Get event by refId (v2)
[**V2QueryEvents**](EventsAPI.md#V2QueryEvents) | **Get** /v2/events | Query events by timestamp period and optional event name (v2)
[**V2QueryEventsAggregation**](EventsAPI.md#V2QueryEventsAggregation) | **Post** /v2/events/aggregation | Aggregate events (v2)
[**V2SendEvents**](EventsAPI.md#V2SendEvents) | **Post** /v2/events | Submit a batch of events for ingestion (v2)
[**V2SendEventsDryRun**](EventsAPI.md#V2SendEventsDryRun) | **Post** /v2/events/dry-run | Submit a batch of events for testing (v2)



## DeleteEventByRefId

> DeleteEventResponse DeleteEventByRefId(ctx, refId).Execute()

Delete an event by refId



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
	refId := "refId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.DeleteEventByRefId(context.Background(), refId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.DeleteEventByRefId``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteEventByRefId`: DeleteEventResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.DeleteEventByRefId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**refId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEventByRefIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteEventResponse**](DeleteEventResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteEventsByRefs

> DeleteEventsByRefsResponse DeleteEventsByRefs(ctx).DeleteEventsByRefsRequest(deleteEventsByRefsRequest).Execute()

Delete events by refs



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
	deleteEventsByRefsRequest := *openapiclient.NewDeleteEventsByRefsRequest([]string{"Refs_example"}) // DeleteEventsByRefsRequest | A list of event refs to delete. The request deletes the matching events for the authenticated account.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.DeleteEventsByRefs(context.Background()).DeleteEventsByRefsRequest(deleteEventsByRefsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.DeleteEventsByRefs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteEventsByRefs`: DeleteEventsByRefsResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.DeleteEventsByRefs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEventsByRefsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEventsByRefsRequest** | [**DeleteEventsByRefsRequest**](DeleteEventsByRefsRequest.md) | A list of event refs to delete. The request deletes the matching events for the authenticated account. | 

### Return type

[**DeleteEventsByRefsResponse**](DeleteEventsByRefsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventByRefId

> GetEventResponse GetEventByRefId(ctx, refId).Execute()

Get event by refId



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
	refId := "refId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.GetEventByRefId(context.Background(), refId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.GetEventByRefId``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEventByRefId`: GetEventResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.GetEventByRefId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**refId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventByRefIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetEventResponse**](GetEventResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## QueryEvents

> QueryEventsResponse QueryEvents(ctx).StartTime(startTime).EndTime(endTime).EventName(eventName).CustomerAlias(customerAlias).Limit(limit).Cursor(cursor).Execute()

Query events by timestamp period and optional event name



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
	startTime := time.Now() // time.Time | 
	endTime := time.Now() // time.Time | 
	eventName := "eventName_example" // string |  (optional)
	customerAlias := "customerAlias_example" // string |  (optional)
	limit := float32(8.14) // float32 |  (optional) (default to 10)
	cursor := "cursor_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.QueryEvents(context.Background()).StartTime(startTime).EndTime(endTime).EventName(eventName).CustomerAlias(customerAlias).Limit(limit).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.QueryEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `QueryEvents`: QueryEventsResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.QueryEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiQueryEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **time.Time** |  | 
 **endTime** | **time.Time** |  | 
 **eventName** | **string** |  | 
 **customerAlias** | **string** |  | 
 **limit** | **float32** |  | [default to 10]
 **cursor** | **string** |  | 

### Return type

[**QueryEventsResponse**](QueryEventsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SendEvents

> SendEventsResponse SendEvents(ctx).SendEventsRequest(sendEventsRequest).Execute()

Submit a batch of events for ingestion



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
	sendEventsRequest := *openapiclient.NewSendEventsRequest([]openapiclient.Event{*openapiclient.NewEvent("api_call", time.Now(), "customer_12345", "4f6cf35x-2c4y-483z-a0a9-158621f77a21")}) // SendEventsRequest | An array of events following the EventInput schema. This request body should be included in the PUT request to '/events'       Up to 1000 events or a total payload max size of 256KB

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.SendEvents(context.Background()).SendEventsRequest(sendEventsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.SendEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SendEvents`: SendEventsResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.SendEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendEventsRequest** | [**SendEventsRequest**](SendEventsRequest.md) | An array of events following the EventInput schema. This request body should be included in the PUT request to &#39;/events&#39;       Up to 1000 events or a total payload max size of 256KB | 

### Return type

[**SendEventsResponse**](SendEventsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SendEventsDryRun

> EventsDryRunResponse SendEventsDryRun(ctx).EventsDryRunRequest(eventsDryRunRequest).Execute()

Submit a batch of events for testing



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
	eventsDryRunRequest := *openapiclient.NewEventsDryRunRequest([]openapiclient.Event{*openapiclient.NewEvent("api_call", time.Now(), "customer_12345", "4f6cf35x-2c4y-483z-a0a9-158621f77a21")}) // EventsDryRunRequest | An array of events following the EventInput schema. This request body should be included in the PUT request to '/events'       Up to 1000 events or a total payload max size of 256KB

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.SendEventsDryRun(context.Background()).EventsDryRunRequest(eventsDryRunRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.SendEventsDryRun``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SendEventsDryRun`: EventsDryRunResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.SendEventsDryRun`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendEventsDryRunRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventsDryRunRequest** | [**EventsDryRunRequest**](EventsDryRunRequest.md) | An array of events following the EventInput schema. This request body should be included in the PUT request to &#39;/events&#39;       Up to 1000 events or a total payload max size of 256KB | 

### Return type

[**EventsDryRunResponse**](EventsDryRunResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2DeleteEventByRefId

> V2DeleteEventResponse V2DeleteEventByRefId(ctx, refId).Execute()

Delete an event by refId (v2)



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
	refId := "refId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.V2DeleteEventByRefId(context.Background(), refId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.V2DeleteEventByRefId``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2DeleteEventByRefId`: V2DeleteEventResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.V2DeleteEventByRefId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**refId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2DeleteEventByRefIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**V2DeleteEventResponse**](V2DeleteEventResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2DeleteEventsByRefs

> V2DeleteEventsByRefsResponse V2DeleteEventsByRefs(ctx).V2DeleteEventsByRefsRequest(v2DeleteEventsByRefsRequest).Execute()

Delete events by refs (v2)



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
	v2DeleteEventsByRefsRequest := *openapiclient.NewV2DeleteEventsByRefsRequest([]string{"Refs_example"}) // V2DeleteEventsByRefsRequest | A list of event refs to delete. The request deletes the matching events for the authenticated account.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.V2DeleteEventsByRefs(context.Background()).V2DeleteEventsByRefsRequest(v2DeleteEventsByRefsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.V2DeleteEventsByRefs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2DeleteEventsByRefs`: V2DeleteEventsByRefsResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.V2DeleteEventsByRefs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2DeleteEventsByRefsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2DeleteEventsByRefsRequest** | [**V2DeleteEventsByRefsRequest**](V2DeleteEventsByRefsRequest.md) | A list of event refs to delete. The request deletes the matching events for the authenticated account. | 

### Return type

[**V2DeleteEventsByRefsResponse**](V2DeleteEventsByRefsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2GetEventByRefId

> V2GetEventResponse V2GetEventByRefId(ctx, refId).Execute()

Get event by refId (v2)



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
	refId := "refId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.V2GetEventByRefId(context.Background(), refId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.V2GetEventByRefId``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2GetEventByRefId`: V2GetEventResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.V2GetEventByRefId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**refId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2GetEventByRefIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**V2GetEventResponse**](V2GetEventResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2QueryEvents

> V2QueryEventsResponse V2QueryEvents(ctx).StartTime(startTime).EndTime(endTime).EventName(eventName).CustomerAlias(customerAlias).Limit(limit).Cursor(cursor).Execute()

Query events by timestamp period and optional event name (v2)



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
	startTime := time.Now() // time.Time | 
	endTime := time.Now() // time.Time | 
	eventName := "eventName_example" // string |  (optional)
	customerAlias := "customerAlias_example" // string |  (optional)
	limit := float32(8.14) // float32 |  (optional) (default to 10)
	cursor := "cursor_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.V2QueryEvents(context.Background()).StartTime(startTime).EndTime(endTime).EventName(eventName).CustomerAlias(customerAlias).Limit(limit).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.V2QueryEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2QueryEvents`: V2QueryEventsResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.V2QueryEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2QueryEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **time.Time** |  | 
 **endTime** | **time.Time** |  | 
 **eventName** | **string** |  | 
 **customerAlias** | **string** |  | 
 **limit** | **float32** |  | [default to 10]
 **cursor** | **string** |  | 

### Return type

[**V2QueryEventsResponse**](V2QueryEventsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2QueryEventsAggregation

> V2QueryEventsAggregationResponse V2QueryEventsAggregation(ctx).V2QueryEventsAggregationRequest(v2QueryEventsAggregationRequest).Execute()

Aggregate events (v2)



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
	v2QueryEventsAggregationRequest := *openapiclient.NewV2QueryEventsAggregationRequest("CustomerId_example", *openapiclient.NewV2QueryEventsAggregationRequestPeriod("StartTime_example", "EndTime_example"), []openapiclient.V2QueryEventsAggregationRequestMetersInner{*openapiclient.NewV2QueryEventsAggregationRequestMetersInner("Key_example", "EventName_example")}, "GroupBy_example") // V2QueryEventsAggregationRequest | Configuration for aggregating events by meters and time grouping.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.V2QueryEventsAggregation(context.Background()).V2QueryEventsAggregationRequest(v2QueryEventsAggregationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.V2QueryEventsAggregation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2QueryEventsAggregation`: V2QueryEventsAggregationResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.V2QueryEventsAggregation`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2QueryEventsAggregationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2QueryEventsAggregationRequest** | [**V2QueryEventsAggregationRequest**](V2QueryEventsAggregationRequest.md) | Configuration for aggregating events by meters and time grouping. | 

### Return type

[**V2QueryEventsAggregationResponse**](V2QueryEventsAggregationResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2SendEvents

> V2SendEventsResponse V2SendEvents(ctx).V2SendEventsRequest(v2SendEventsRequest).Execute()

Submit a batch of events for ingestion (v2)



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
	v2SendEventsRequest := *openapiclient.NewV2SendEventsRequest([]openapiclient.Event{*openapiclient.NewEvent("api_call", time.Now(), "customer_12345", "4f6cf35x-2c4y-483z-a0a9-158621f77a21")}) // V2SendEventsRequest | An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.V2SendEvents(context.Background()).V2SendEventsRequest(v2SendEventsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.V2SendEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2SendEvents`: V2SendEventsResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.V2SendEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2SendEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2SendEventsRequest** | [**V2SendEventsRequest**](V2SendEventsRequest.md) | An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB | 

### Return type

[**V2SendEventsResponse**](V2SendEventsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2SendEventsDryRun

> V2EventsDryRunResponse V2SendEventsDryRun(ctx).V2EventsDryRunRequest(v2EventsDryRunRequest).Execute()

Submit a batch of events for testing (v2)



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
	v2EventsDryRunRequest := *openapiclient.NewV2EventsDryRunRequest([]openapiclient.Event{*openapiclient.NewEvent("api_call", time.Now(), "customer_12345", "4f6cf35x-2c4y-483z-a0a9-158621f77a21")}) // V2EventsDryRunRequest | An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EventsAPI.V2SendEventsDryRun(context.Background()).V2EventsDryRunRequest(v2EventsDryRunRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EventsAPI.V2SendEventsDryRun``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2SendEventsDryRun`: V2EventsDryRunResponse
	fmt.Fprintf(os.Stdout, "Response from `EventsAPI.V2SendEventsDryRun`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2SendEventsDryRunRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2EventsDryRunRequest** | [**V2EventsDryRunRequest**](V2EventsDryRunRequest.md) | An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB | 

### Return type

[**V2EventsDryRunResponse**](V2EventsDryRunResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

