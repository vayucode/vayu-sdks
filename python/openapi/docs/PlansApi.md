# openapi.PlansApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_plan**](PlansApi.md#delete_plan) | **DELETE** /plans/{planId} | Delete Plan
[**get_plan**](PlansApi.md#get_plan) | **GET** /plans/{planId} | Get Plan
[**list_plans**](PlansApi.md#list_plans) | **GET** /plans | List Plans


# **delete_plan**
> DeletePlanResponse delete_plan(plan_id)

Delete Plan

Delete a Plan by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.delete_plan_response import DeletePlanResponse
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
    api_instance = openapi.PlansApi(api_client)
    plan_id = 'plan_id_example' # str | 

    try:
        # Delete Plan
        api_response = api_instance.delete_plan(plan_id)
        print("The response of PlansApi->delete_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlansApi->delete_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **str**|  | 

### Return type

[**DeletePlanResponse**](DeletePlanResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_plan**
> GetPlanResponse get_plan(plan_id)

Get Plan

Get a Plan by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_plan_response import GetPlanResponse
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
    api_instance = openapi.PlansApi(api_client)
    plan_id = 'plan_id_example' # str | 

    try:
        # Get Plan
        api_response = api_instance.get_plan(plan_id)
        print("The response of PlansApi->get_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlansApi->get_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **str**|  | 

### Return type

[**GetPlanResponse**](GetPlanResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_plans**
> ListPlansResponse list_plans(limit=limit, cursor=cursor)

List Plans

Get a list of Plans.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.list_plans_response import ListPlansResponse
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
    api_instance = openapi.PlansApi(api_client)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # List Plans
        api_response = api_instance.list_plans(limit=limit, cursor=cursor)
        print("The response of PlansApi->list_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlansApi->list_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 

### Return type

[**ListPlansResponse**](ListPlansResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
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

