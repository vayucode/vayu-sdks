# .EventsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEventByRefId**](EventsApi.md#deleteEventByRefId) | **DELETE** /events/{refId} | Delete an event by refId
[**deleteEventsByRefs**](EventsApi.md#deleteEventsByRefs) | **POST** /events/delete-by-refs | Delete events by refs
[**getEventByRefId**](EventsApi.md#getEventByRefId) | **GET** /events/{refId} | Get event by refId
[**queryEvents**](EventsApi.md#queryEvents) | **GET** /events | Query events by timestamp period and optional event name
[**sendEvents**](EventsApi.md#sendEvents) | **POST** /events | Submit a batch of events for ingestion
[**sendEventsDryRun**](EventsApi.md#sendEventsDryRun) | **POST** /events/dry-run | Submit a batch of events for testing


# **deleteEventByRefId**
> DeleteEventResponse deleteEventByRefId()

Use this endpoint to remove a specific event using its reference ID.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiDeleteEventByRefIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiDeleteEventByRefIdRequest = {
  
  refId: "refId_example",
};

const data = await apiInstance.deleteEventByRefId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | [**string**] |  | defaults to undefined


### Return type

**DeleteEventResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the event that was deleted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEventsByRefs**
> DeleteEventsByRefsResponse deleteEventsByRefs(deleteEventsByRefsRequest)

Delete multiple events, identified by ref, in a single request.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiDeleteEventsByRefsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiDeleteEventsByRefsRequest = {
    // A list of event refs to delete. The request deletes the matching events for the authenticated account.
  deleteEventsByRefsRequest: {
    refs: [
      "refs_example",
    ],
  },
};

const data = await apiInstance.deleteEventsByRefs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEventsByRefsRequest** | **DeleteEventsByRefsRequest**| A list of event refs to delete. The request deletes the matching events for the authenticated account. |


### Return type

**DeleteEventsByRefsResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the events that were removed along with deletion metadata. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEventByRefId**
> GetEventResponse getEventByRefId()

Use this endpoint to get a specific event using its reference ID.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiGetEventByRefIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiGetEventByRefIdRequest = {
  
  refId: "refId_example",
};

const data = await apiInstance.getEventByRefId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | [**string**] |  | defaults to undefined


### Return type

**GetEventResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the event matching the provided refId |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **queryEvents**
> QueryEventsResponse queryEvents()

Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiQueryEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiQueryEventsRequest = {
  
  startTime: new Date('1970-01-01T00:00:00.00Z'),
  
  endTime: new Date('1970-01-01T00:00:00.00Z'),
  
  eventName: "eventName_example",
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.queryEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | [**Date**] |  | defaults to undefined
 **endTime** | [**Date**] |  | defaults to undefined
 **eventName** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**QueryEventsResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains an array of events |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendEvents**
> SendEventsResponse sendEvents(sendEventsRequest)

Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiSendEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiSendEventsRequest = {
    // An array of events following the EventInput schema. This request body should be included in the PUT request to \'/events\'       Up to 1000 events or a total payload max size of 256KB
  sendEventsRequest: {
    events: [
      {
        name: "api_call",
        timestamp: new Date('2023-09-13T18:25:43.511Z'),
        customerAlias: "customer_12345",
        ref: "4f6cf35x-2c4y-483z-a0a9-158621f77a21",
        data: {
          "key": null,
        },
      },
    ],
  },
};

const data = await apiInstance.sendEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendEventsRequest** | **SendEventsRequest**| An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB |


### Return type

**SendEventsResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendEventsDryRun**
> EventsDryRunResponse sendEventsDryRun(eventsDryRunRequest)

Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiSendEventsDryRunRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiSendEventsDryRunRequest = {
    // An array of events following the EventInput schema. This request body should be included in the PUT request to \'/events\'       Up to 1000 events or a total payload max size of 256KB
  eventsDryRunRequest: {
    events: [
      {
        name: "api_call",
        timestamp: new Date('2023-09-13T18:25:43.511Z'),
        customerAlias: "customer_12345",
        ref: "4f6cf35x-2c4y-483z-a0a9-158621f77a21",
        data: {
          "key": null,
        },
      },
    ],
  },
};

const data = await apiInstance.sendEventsDryRun(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventsDryRunRequest** | **EventsDryRunRequest**| An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB |


### Return type

**EventsDryRunResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Events with their corresponding meter and customer data. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


