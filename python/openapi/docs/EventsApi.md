# openapi.EventsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_event_by_ref_id**](EventsApi.md#delete_event_by_ref_id) | **DELETE** /events/{refId} | Delete an event by refId
[**delete_events_by_refs**](EventsApi.md#delete_events_by_refs) | **POST** /events/delete-by-refs | Delete events by refs
[**get_event_by_ref_id**](EventsApi.md#get_event_by_ref_id) | **GET** /events/{refId} | Get event by refId
[**query_events**](EventsApi.md#query_events) | **GET** /events | Query events by timestamp period and optional event name
[**send_events**](EventsApi.md#send_events) | **POST** /events | Submit a batch of events for ingestion
[**send_events_dry_run**](EventsApi.md#send_events_dry_run) | **POST** /events/dry-run | Submit a batch of events for testing


# **delete_event_by_ref_id**
> DeleteEventResponse delete_event_by_ref_id(ref_id)

Delete an event by refId

Use this endpoint to remove a specific event using its reference ID.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.delete_event_response import DeleteEventResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.EventsApi(api_client)
    ref_id = 'ref_id_example' # str | 

    try:
        # Delete an event by refId
        api_response = api_instance.delete_event_by_ref_id(ref_id)
        print("The response of EventsApi->delete_event_by_ref_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->delete_event_by_ref_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ref_id** | **str**|  | 

### Return type

[**DeleteEventResponse**](DeleteEventResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_events_by_refs**
> DeleteEventsByRefsResponse delete_events_by_refs(delete_events_by_refs_request)

Delete events by refs

Delete multiple events, identified by ref, in a single request.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.delete_events_by_refs_request import DeleteEventsByRefsRequest
from openapi.models.delete_events_by_refs_response import DeleteEventsByRefsResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.EventsApi(api_client)
    delete_events_by_refs_request = openapi.DeleteEventsByRefsRequest() # DeleteEventsByRefsRequest | A list of event refs to delete. The request deletes the matching events for the authenticated account.

    try:
        # Delete events by refs
        api_response = api_instance.delete_events_by_refs(delete_events_by_refs_request)
        print("The response of EventsApi->delete_events_by_refs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->delete_events_by_refs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_events_by_refs_request** | [**DeleteEventsByRefsRequest**](DeleteEventsByRefsRequest.md)| A list of event refs to delete. The request deletes the matching events for the authenticated account. | 

### Return type

[**DeleteEventsByRefsResponse**](DeleteEventsByRefsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_event_by_ref_id**
> GetEventResponse get_event_by_ref_id(ref_id)

Get event by refId

Use this endpoint to get a specific event using its reference ID.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_event_response import GetEventResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.EventsApi(api_client)
    ref_id = 'ref_id_example' # str | 

    try:
        # Get event by refId
        api_response = api_instance.get_event_by_ref_id(ref_id)
        print("The response of EventsApi->get_event_by_ref_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_event_by_ref_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ref_id** | **str**|  | 

### Return type

[**GetEventResponse**](GetEventResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_events**
> QueryEventsResponse query_events(start_time, end_time, event_name=event_name, limit=limit, cursor=cursor)

Query events by timestamp period and optional event name

Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.query_events_response import QueryEventsResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.EventsApi(api_client)
    start_time = '2013-10-20T19:20:30+01:00' # datetime | 
    end_time = '2013-10-20T19:20:30+01:00' # datetime | 
    event_name = 'event_name_example' # str |  (optional)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # Query events by timestamp period and optional event name
        api_response = api_instance.query_events(start_time, end_time, event_name=event_name, limit=limit, cursor=cursor)
        print("The response of EventsApi->query_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->query_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_time** | **datetime**|  | 
 **end_time** | **datetime**|  | 
 **event_name** | **str**|  | [optional] 
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 

### Return type

[**QueryEventsResponse**](QueryEventsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_events**
> SendEventsResponse send_events(send_events_request)

Submit a batch of events for ingestion

Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.send_events_request import SendEventsRequest
from openapi.models.send_events_response import SendEventsResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.EventsApi(api_client)
    send_events_request = openapi.SendEventsRequest() # SendEventsRequest | An array of events following the EventInput schema. This request body should be included in the PUT request to '/events'       Up to 1000 events or a total payload max size of 256KB

    try:
        # Submit a batch of events for ingestion
        api_response = api_instance.send_events(send_events_request)
        print("The response of EventsApi->send_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->send_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_events_request** | [**SendEventsRequest**](SendEventsRequest.md)| An array of events following the EventInput schema. This request body should be included in the PUT request to &#39;/events&#39;       Up to 1000 events or a total payload max size of 256KB | 

### Return type

[**SendEventsResponse**](SendEventsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_events_dry_run**
> EventsDryRunResponse send_events_dry_run(events_dry_run_request)

Submit a batch of events for testing

Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.events_dry_run_request import EventsDryRunRequest
from openapi.models.events_dry_run_response import EventsDryRunResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.EventsApi(api_client)
    events_dry_run_request = openapi.EventsDryRunRequest() # EventsDryRunRequest | An array of events following the EventInput schema. This request body should be included in the PUT request to '/events'       Up to 1000 events or a total payload max size of 256KB

    try:
        # Submit a batch of events for testing
        api_response = api_instance.send_events_dry_run(events_dry_run_request)
        print("The response of EventsApi->send_events_dry_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->send_events_dry_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **events_dry_run_request** | [**EventsDryRunRequest**](EventsDryRunRequest.md)| An array of events following the EventInput schema. This request body should be included in the PUT request to &#39;/events&#39;       Up to 1000 events or a total payload max size of 256KB | 

### Return type

[**EventsDryRunResponse**](EventsDryRunResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

