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
[**v2DeleteEventByRefId**](EventsApi.md#v2DeleteEventByRefId) | **DELETE** /v2/events/{refId} | Delete an event by refId (v2)
[**v2DeleteEventsByRefs**](EventsApi.md#v2DeleteEventsByRefs) | **POST** /v2/events/delete-by-refs | Delete events by refs (v2)
[**v2GetEventByRefId**](EventsApi.md#v2GetEventByRefId) | **GET** /v2/events/{refId} | Get event by refId (v2)
[**v2QueryEvents**](EventsApi.md#v2QueryEvents) | **GET** /v2/events | Query events by timestamp period and optional event name (v2)
[**v2QueryEventsAggregation**](EventsApi.md#v2QueryEventsAggregation) | **POST** /v2/events/aggregation | Aggregate events (v2)
[**v2SendEvents**](EventsApi.md#v2SendEvents) | **POST** /v2/events | Submit a batch of events for ingestion (v2)
[**v2SendEventsDryRun**](EventsApi.md#v2SendEventsDryRun) | **POST** /v2/events/dry-run | Submit a batch of events for testing (v2)


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
**404** | Not Found |  -  |
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
**404** | Not Found |  -  |
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
**404** | Not Found |  -  |
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
  
  customerAlias: "customerAlias_example",
  
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
 **customerAlias** | [**string**] |  | (optional) defaults to undefined
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
**413** | Request Entity Too Large |  -  |
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
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2DeleteEventByRefId**
> V2DeleteEventResponse v2DeleteEventByRefId()

Use this endpoint to remove a specific event using its reference ID (v2).

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiV2DeleteEventByRefIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiV2DeleteEventByRefIdRequest = {
  
  refId: "refId_example",
};

const data = await apiInstance.v2DeleteEventByRefId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | [**string**] |  | defaults to undefined


### Return type

**V2DeleteEventResponse**

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2DeleteEventsByRefs**
> V2DeleteEventsByRefsResponse v2DeleteEventsByRefs(v2DeleteEventsByRefsRequest)

Delete multiple events, identified by ref, in a single request (v2).

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiV2DeleteEventsByRefsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiV2DeleteEventsByRefsRequest = {
    // A list of event refs to delete. The request deletes the matching events for the authenticated account.
  v2DeleteEventsByRefsRequest: {
    refs: [
      "refs_example",
    ],
  },
};

const data = await apiInstance.v2DeleteEventsByRefs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2DeleteEventsByRefsRequest** | **V2DeleteEventsByRefsRequest**| A list of event refs to delete. The request deletes the matching events for the authenticated account. |


### Return type

**V2DeleteEventsByRefsResponse**

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2GetEventByRefId**
> V2GetEventResponse v2GetEventByRefId()

Use this endpoint to get a specific event using its reference ID (v2).

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiV2GetEventByRefIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiV2GetEventByRefIdRequest = {
  
  refId: "refId_example",
};

const data = await apiInstance.v2GetEventByRefId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | [**string**] |  | defaults to undefined


### Return type

**V2GetEventResponse**

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2QueryEvents**
> V2QueryEventsResponse v2QueryEvents()

Fetch events occurring within a specified timestamp range via the events-service (ClickHouse-backed).

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiV2QueryEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiV2QueryEventsRequest = {
  
  startTime: new Date('1970-01-01T00:00:00.00Z'),
  
  endTime: new Date('1970-01-01T00:00:00.00Z'),
  
  eventName: "eventName_example",
  
  customerAlias: "customerAlias_example",
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.v2QueryEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | [**Date**] |  | defaults to undefined
 **endTime** | [**Date**] |  | defaults to undefined
 **eventName** | [**string**] |  | (optional) defaults to undefined
 **customerAlias** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**V2QueryEventsResponse**

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

# **v2QueryEventsAggregation**
> V2QueryEventsAggregationResponse v2QueryEventsAggregation(v2QueryEventsAggregationRequest)

Aggregate events by meters and time grouping via the events-service.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiV2QueryEventsAggregationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiV2QueryEventsAggregationRequest = {
    // Configuration for aggregating events by meters and time grouping.
  v2QueryEventsAggregationRequest: {
    customerId: "customerId_example",
    customerIdPattern: "customerIdPattern_example",
    period: {
      startTime: "startTime_example",
      endTime: "endTime_example",
    },
    meters: [
      {
        key: "key_example",
        eventName: "eventName_example",
        aggregation: {
          operator: "Count",
          field: "field_example",
          fieldArithmetic: {
            operator: "*",
            field: "field_example",
          },
        },
        sqlSelect: "sqlSelect_example",
        sqlFullQuery: {
          sql: "sql_example",
          params: {
            "key": null,
          },
        },
        filters: [
          {
            field: "field_example",
            operator: "eq",
            value: null,
          },
        ],
      },
    ],
    groupBy: "event",
    fillDates: true,
  },
};

const data = await apiInstance.v2QueryEventsAggregation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2QueryEventsAggregationRequest** | **V2QueryEventsAggregationRequest**| Configuration for aggregating events by meters and time grouping. |


### Return type

**V2QueryEventsAggregationResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Aggregated event data points grouped by the specified time period. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2SendEvents**
> V2SendEventsResponse v2SendEvents(v2SendEventsRequest)

Submit a batch of events for ingestion via the events-service.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiV2SendEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiV2SendEventsRequest = {
    // An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
  v2SendEventsRequest: {
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

const data = await apiInstance.v2SendEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2SendEventsRequest** | **V2SendEventsRequest**| An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB |


### Return type

**V2SendEventsResponse**

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
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2SendEventsDryRun**
> V2EventsDryRunResponse v2SendEventsDryRun(v2EventsDryRunRequest)

Submit a batch of events for testing via the events-service. NOTE: this is a dry run and will not store the events.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiV2SendEventsDryRunRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiV2SendEventsDryRunRequest = {
    // An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
  v2EventsDryRunRequest: {
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

const data = await apiInstance.v2SendEventsDryRun(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2EventsDryRunRequest** | **V2EventsDryRunRequest**| An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB |


### Return type

**V2EventsDryRunResponse**

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
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


