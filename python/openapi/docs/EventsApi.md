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
[**v2_delete_event_by_ref_id**](EventsApi.md#v2_delete_event_by_ref_id) | **DELETE** /v2/events/{refId} | Delete an event by refId (v2)
[**v2_delete_events_by_refs**](EventsApi.md#v2_delete_events_by_refs) | **POST** /v2/events/delete-by-refs | Delete events by refs (v2)
[**v2_get_event_by_ref_id**](EventsApi.md#v2_get_event_by_ref_id) | **GET** /v2/events/{refId} | Get event by refId (v2)
[**v2_query_events**](EventsApi.md#v2_query_events) | **GET** /v2/events | Query events by timestamp period and optional event name (v2)
[**v2_query_events_aggregation**](EventsApi.md#v2_query_events_aggregation) | **POST** /v2/events/aggregation | Aggregate events (v2)
[**v2_send_events**](EventsApi.md#v2_send_events) | **POST** /v2/events | Submit a batch of events for ingestion (v2)
[**v2_send_events_dry_run**](EventsApi.md#v2_send_events_dry_run) | **POST** /v2/events/dry-run | Submit a batch of events for testing (v2)


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
**404** | Not Found |  -  |
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
**404** | Not Found |  -  |
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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_events**
> QueryEventsResponse query_events(start_time, end_time, event_name=event_name, customer_alias=customer_alias, limit=limit, cursor=cursor)

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
    customer_alias = 'customer_alias_example' # str |  (optional)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # Query events by timestamp period and optional event name
        api_response = api_instance.query_events(start_time, end_time, event_name=event_name, customer_alias=customer_alias, limit=limit, cursor=cursor)
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
 **customer_alias** | **str**|  | [optional] 
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
**413** | Request Entity Too Large |  -  |
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
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_delete_event_by_ref_id**
> V2DeleteEventResponse v2_delete_event_by_ref_id(ref_id)

Delete an event by refId (v2)

Use this endpoint to remove a specific event using its reference ID (v2).

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.v2_delete_event_response import V2DeleteEventResponse
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
        # Delete an event by refId (v2)
        api_response = api_instance.v2_delete_event_by_ref_id(ref_id)
        print("The response of EventsApi->v2_delete_event_by_ref_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->v2_delete_event_by_ref_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ref_id** | **str**|  | 

### Return type

[**V2DeleteEventResponse**](V2DeleteEventResponse.md)

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_delete_events_by_refs**
> V2DeleteEventsByRefsResponse v2_delete_events_by_refs(v2_delete_events_by_refs_request)

Delete events by refs (v2)

Delete multiple events, identified by ref, in a single request (v2).

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.v2_delete_events_by_refs_request import V2DeleteEventsByRefsRequest
from openapi.models.v2_delete_events_by_refs_response import V2DeleteEventsByRefsResponse
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
    v2_delete_events_by_refs_request = openapi.V2DeleteEventsByRefsRequest() # V2DeleteEventsByRefsRequest | A list of event refs to delete. The request deletes the matching events for the authenticated account.

    try:
        # Delete events by refs (v2)
        api_response = api_instance.v2_delete_events_by_refs(v2_delete_events_by_refs_request)
        print("The response of EventsApi->v2_delete_events_by_refs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->v2_delete_events_by_refs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2_delete_events_by_refs_request** | [**V2DeleteEventsByRefsRequest**](V2DeleteEventsByRefsRequest.md)| A list of event refs to delete. The request deletes the matching events for the authenticated account. | 

### Return type

[**V2DeleteEventsByRefsResponse**](V2DeleteEventsByRefsResponse.md)

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_get_event_by_ref_id**
> V2GetEventResponse v2_get_event_by_ref_id(ref_id)

Get event by refId (v2)

Use this endpoint to get a specific event using its reference ID (v2).

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.v2_get_event_response import V2GetEventResponse
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
        # Get event by refId (v2)
        api_response = api_instance.v2_get_event_by_ref_id(ref_id)
        print("The response of EventsApi->v2_get_event_by_ref_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->v2_get_event_by_ref_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ref_id** | **str**|  | 

### Return type

[**V2GetEventResponse**](V2GetEventResponse.md)

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_query_events**
> V2QueryEventsResponse v2_query_events(start_time, end_time, event_name=event_name, customer_alias=customer_alias, limit=limit, cursor=cursor)

Query events by timestamp period and optional event name (v2)

Fetch events occurring within a specified timestamp range via the events-service (ClickHouse-backed).

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.v2_query_events_response import V2QueryEventsResponse
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
    customer_alias = 'customer_alias_example' # str |  (optional)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # Query events by timestamp period and optional event name (v2)
        api_response = api_instance.v2_query_events(start_time, end_time, event_name=event_name, customer_alias=customer_alias, limit=limit, cursor=cursor)
        print("The response of EventsApi->v2_query_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->v2_query_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_time** | **datetime**|  | 
 **end_time** | **datetime**|  | 
 **event_name** | **str**|  | [optional] 
 **customer_alias** | **str**|  | [optional] 
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 

### Return type

[**V2QueryEventsResponse**](V2QueryEventsResponse.md)

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

# **v2_query_events_aggregation**
> V2QueryEventsAggregationResponse v2_query_events_aggregation(v2_query_events_aggregation_request)

Aggregate events (v2)

Aggregate events by meters and time grouping via the events-service.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.v2_query_events_aggregation_request import V2QueryEventsAggregationRequest
from openapi.models.v2_query_events_aggregation_response import V2QueryEventsAggregationResponse
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
    v2_query_events_aggregation_request = openapi.V2QueryEventsAggregationRequest() # V2QueryEventsAggregationRequest | Configuration for aggregating events by meters and time grouping.

    try:
        # Aggregate events (v2)
        api_response = api_instance.v2_query_events_aggregation(v2_query_events_aggregation_request)
        print("The response of EventsApi->v2_query_events_aggregation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->v2_query_events_aggregation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2_query_events_aggregation_request** | [**V2QueryEventsAggregationRequest**](V2QueryEventsAggregationRequest.md)| Configuration for aggregating events by meters and time grouping. | 

### Return type

[**V2QueryEventsAggregationResponse**](V2QueryEventsAggregationResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_send_events**
> V2SendEventsResponse v2_send_events(v2_send_events_request)

Submit a batch of events for ingestion (v2)

Submit a batch of events for ingestion via the events-service.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.v2_send_events_request import V2SendEventsRequest
from openapi.models.v2_send_events_response import V2SendEventsResponse
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
    v2_send_events_request = openapi.V2SendEventsRequest() # V2SendEventsRequest | An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB

    try:
        # Submit a batch of events for ingestion (v2)
        api_response = api_instance.v2_send_events(v2_send_events_request)
        print("The response of EventsApi->v2_send_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->v2_send_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2_send_events_request** | [**V2SendEventsRequest**](V2SendEventsRequest.md)| An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB | 

### Return type

[**V2SendEventsResponse**](V2SendEventsResponse.md)

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
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_send_events_dry_run**
> V2EventsDryRunResponse v2_send_events_dry_run(v2_events_dry_run_request)

Submit a batch of events for testing (v2)

Submit a batch of events for testing via the events-service. NOTE: this is a dry run and will not store the events.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.v2_events_dry_run_request import V2EventsDryRunRequest
from openapi.models.v2_events_dry_run_response import V2EventsDryRunResponse
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
    v2_events_dry_run_request = openapi.V2EventsDryRunRequest() # V2EventsDryRunRequest | An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB

    try:
        # Submit a batch of events for testing (v2)
        api_response = api_instance.v2_send_events_dry_run(v2_events_dry_run_request)
        print("The response of EventsApi->v2_send_events_dry_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->v2_send_events_dry_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2_events_dry_run_request** | [**V2EventsDryRunRequest**](V2EventsDryRunRequest.md)| An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB | 

### Return type

[**V2EventsDryRunResponse**](V2EventsDryRunResponse.md)

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
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

