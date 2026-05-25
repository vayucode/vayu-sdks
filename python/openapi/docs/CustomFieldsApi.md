# openapi.CustomFieldsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_custom_field**](CustomFieldsApi.md#create_custom_field) | **POST** /customFields | Create Custom field
[**delete_custom_field**](CustomFieldsApi.md#delete_custom_field) | **DELETE** /customFields/{customFieldId} | Delete Custom field
[**get_custom_field**](CustomFieldsApi.md#get_custom_field) | **GET** /customFields/{customFieldId} | Get Custom field
[**list_custom_fields**](CustomFieldsApi.md#list_custom_fields) | **GET** /customFields | List Custom fields
[**update_custom_field**](CustomFieldsApi.md#update_custom_field) | **PUT** /customFields/{customFieldId} | Update Custom field


# **create_custom_field**
> CreateCustomFieldResponse create_custom_field(create_custom_field_request)

Create Custom field

Create a new Custom field.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.create_custom_field_request import CreateCustomFieldRequest
from openapi.models.create_custom_field_response import CreateCustomFieldResponse
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
    api_instance = openapi.CustomFieldsApi(api_client)
    create_custom_field_request = openapi.CreateCustomFieldRequest() # CreateCustomFieldRequest | 

    try:
        # Create Custom field
        api_response = api_instance.create_custom_field(create_custom_field_request)
        print("The response of CustomFieldsApi->create_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->create_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

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

# **delete_custom_field**
> DeleteCustomFieldResponse delete_custom_field(custom_field_id)

Delete Custom field

Delete a Custom field by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.delete_custom_field_response import DeleteCustomFieldResponse
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
    api_instance = openapi.CustomFieldsApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 

    try:
        # Delete Custom field
        api_response = api_instance.delete_custom_field(custom_field_id)
        print("The response of CustomFieldsApi->delete_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->delete_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**|  | 

### Return type

[**DeleteCustomFieldResponse**](DeleteCustomFieldResponse.md)

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

# **get_custom_field**
> GetCustomFieldResponse get_custom_field(custom_field_id)

Get Custom field

Get a Custom field by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_custom_field_response import GetCustomFieldResponse
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
    api_instance = openapi.CustomFieldsApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 

    try:
        # Get Custom field
        api_response = api_instance.get_custom_field(custom_field_id)
        print("The response of CustomFieldsApi->get_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->get_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**|  | 

### Return type

[**GetCustomFieldResponse**](GetCustomFieldResponse.md)

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

# **list_custom_fields**
> ListCustomFieldsResponse list_custom_fields(limit=limit, cursor=cursor)

List Custom fields

Get a list of Custom fields.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.list_custom_fields_response import ListCustomFieldsResponse
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
    api_instance = openapi.CustomFieldsApi(api_client)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # List Custom fields
        api_response = api_instance.list_custom_fields(limit=limit, cursor=cursor)
        print("The response of CustomFieldsApi->list_custom_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->list_custom_fields: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 

### Return type

[**ListCustomFieldsResponse**](ListCustomFieldsResponse.md)

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

# **update_custom_field**
> UpdateCustomFieldResponse update_custom_field(update_custom_field_request, custom_field_id)

Update Custom field

Update a Custom field by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.update_custom_field_request import UpdateCustomFieldRequest
from openapi.models.update_custom_field_response import UpdateCustomFieldResponse
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
    api_instance = openapi.CustomFieldsApi(api_client)
    update_custom_field_request = openapi.UpdateCustomFieldRequest() # UpdateCustomFieldRequest | 
    custom_field_id = 'custom_field_id_example' # str | 

    try:
        # Update Custom field
        api_response = api_instance.update_custom_field(update_custom_field_request, custom_field_id)
        print("The response of CustomFieldsApi->update_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->update_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_custom_field_request** | [**UpdateCustomFieldRequest**](UpdateCustomFieldRequest.md)|  | 
 **custom_field_id** | **str**|  | 

### Return type

[**UpdateCustomFieldResponse**](UpdateCustomFieldResponse.md)

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

