# openapi.CustomersApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_customer**](CustomersApi.md#create_customer) | **POST** /customers | Create Customer
[**create_customer_relation**](CustomersApi.md#create_customer_relation) | **POST** /customer-relations | Create Customer relation
[**delete_customer**](CustomersApi.md#delete_customer) | **DELETE** /customers/{customerId} | Delete Customer
[**get_customer**](CustomersApi.md#get_customer) | **GET** /customers/{customerId} | Get Customer
[**get_customer_by_external_id**](CustomersApi.md#get_customer_by_external_id) | **GET** /customers/externalId/{externalId} | Get customer by externalId
[**get_customer_by_integration_id**](CustomersApi.md#get_customer_by_integration_id) | **GET** /customers/integration/{integrationType}/{integrationId} | Get customer by integration id
[**get_customer_by_name**](CustomersApi.md#get_customer_by_name) | **GET** /customers/name/{name} | Get customer by name
[**get_customer_products_consumptions**](CustomersApi.md#get_customer_products_consumptions) | **GET** /customers/products-consumptions/{customerId} | Get products consumptions by customer id
[**get_customer_products_consumptions_by_alias**](CustomersApi.md#get_customer_products_consumptions_by_alias) | **GET** /customers/products-consumptions/alias/{alias} | Get products consumptions by customer alias
[**get_customer_relation**](CustomersApi.md#get_customer_relation) | **GET** /customer-relations/{customerRelationId} | Get Customer relation
[**list_customers**](CustomersApi.md#list_customers) | **GET** /customers | List Customers
[**update_customer**](CustomersApi.md#update_customer) | **PUT** /customers/{customerId} | Update Customer


# **create_customer**
> CreateCustomerResponse create_customer(create_customer_request)

Create Customer

Create a new Customer.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.create_customer_request import CreateCustomerRequest
from openapi.models.create_customer_response import CreateCustomerResponse
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
    api_instance = openapi.CustomersApi(api_client)
    create_customer_request = openapi.CreateCustomerRequest() # CreateCustomerRequest | 

    try:
        # Create Customer
        api_response = api_instance.create_customer(create_customer_request)
        print("The response of CustomersApi->create_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->create_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_customer_request** | [**CreateCustomerRequest**](CreateCustomerRequest.md)|  | 

### Return type

[**CreateCustomerResponse**](CreateCustomerResponse.md)

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

# **create_customer_relation**
> CreateCustomerRelationResponse create_customer_relation(create_customer_relation_request)

Create Customer relation

Create a new Customer relation.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.create_customer_relation_request import CreateCustomerRelationRequest
from openapi.models.create_customer_relation_response import CreateCustomerRelationResponse
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
    api_instance = openapi.CustomersApi(api_client)
    create_customer_relation_request = openapi.CreateCustomerRelationRequest() # CreateCustomerRelationRequest | 

    try:
        # Create Customer relation
        api_response = api_instance.create_customer_relation(create_customer_relation_request)
        print("The response of CustomersApi->create_customer_relation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->create_customer_relation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_customer_relation_request** | [**CreateCustomerRelationRequest**](CreateCustomerRelationRequest.md)|  | 

### Return type

[**CreateCustomerRelationResponse**](CreateCustomerRelationResponse.md)

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

# **delete_customer**
> DeleteCustomerResponse delete_customer(customer_id)

Delete Customer

Delete a Customer by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.delete_customer_response import DeleteCustomerResponse
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
    api_instance = openapi.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | 

    try:
        # Delete Customer
        api_response = api_instance.delete_customer(customer_id)
        print("The response of CustomersApi->delete_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->delete_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 

### Return type

[**DeleteCustomerResponse**](DeleteCustomerResponse.md)

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

# **get_customer**
> GetCustomerResponse get_customer(customer_id)

Get Customer

Get a Customer by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_customer_response import GetCustomerResponse
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
    api_instance = openapi.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | 

    try:
        # Get Customer
        api_response = api_instance.get_customer(customer_id)
        print("The response of CustomersApi->get_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->get_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 

### Return type

[**GetCustomerResponse**](GetCustomerResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided externalId |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_by_external_id**
> GetCustomerResponse get_customer_by_external_id(external_id)

Get customer by externalId

Use this endpoint to get a specific customer using its external Id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_customer_response import GetCustomerResponse
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
    api_instance = openapi.CustomersApi(api_client)
    external_id = 'external_id_example' # str | 

    try:
        # Get customer by externalId
        api_response = api_instance.get_customer_by_external_id(external_id)
        print("The response of CustomersApi->get_customer_by_external_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->get_customer_by_external_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**|  | 

### Return type

[**GetCustomerResponse**](GetCustomerResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided externalId |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_by_integration_id**
> GetCustomerByIntegrationIdResponse get_customer_by_integration_id(integration_type, integration_id)

Get customer by integration id

Use this endpoint to get a specific customer using its integration provider and identifier.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_customer_by_integration_id_response import GetCustomerByIntegrationIdResponse
from openapi.models.integration_type import IntegrationType
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
    api_instance = openapi.CustomersApi(api_client)
    integration_type = openapi.IntegrationType() # IntegrationType | 
    integration_id = 'integration_id_example' # str | 

    try:
        # Get customer by integration id
        api_response = api_instance.get_customer_by_integration_id(integration_type, integration_id)
        print("The response of CustomersApi->get_customer_by_integration_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->get_customer_by_integration_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integration_type** | [**IntegrationType**](.md)|  | 
 **integration_id** | **str**|  | 

### Return type

[**GetCustomerByIntegrationIdResponse**](GetCustomerByIntegrationIdResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided integration id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_by_name**
> GetCustomerByNameResponse get_customer_by_name(name)

Get customer by name

Use this endpoint to get a specific customer using its name.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_customer_by_name_response import GetCustomerByNameResponse
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
    api_instance = openapi.CustomersApi(api_client)
    name = 'name_example' # str | 

    try:
        # Get customer by name
        api_response = api_instance.get_customer_by_name(name)
        print("The response of CustomersApi->get_customer_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->get_customer_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 

### Return type

[**GetCustomerByNameResponse**](GetCustomerByNameResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided name |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_products_consumptions**
> GetCustomerProductsConsumptionsResponse get_customer_products_consumptions(customer_id)

Get products consumptions by customer id

Use this endpoint to get the products consumptions by the customer id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_customer_products_consumptions_response import GetCustomerProductsConsumptionsResponse
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
    api_instance = openapi.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | 

    try:
        # Get products consumptions by customer id
        api_response = api_instance.get_customer_products_consumptions(customer_id)
        print("The response of CustomersApi->get_customer_products_consumptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->get_customer_products_consumptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 

### Return type

[**GetCustomerProductsConsumptionsResponse**](GetCustomerProductsConsumptionsResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the products consumptions by the customer id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_products_consumptions_by_alias**
> GetCustomerProductsConsumptionsByAliasResponse get_customer_products_consumptions_by_alias(alias)

Get products consumptions by customer alias

Use this endpoint to get the products consumptions by the customer alias.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_customer_products_consumptions_by_alias_response import GetCustomerProductsConsumptionsByAliasResponse
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
    api_instance = openapi.CustomersApi(api_client)
    alias = 'alias_example' # str | 

    try:
        # Get products consumptions by customer alias
        api_response = api_instance.get_customer_products_consumptions_by_alias(alias)
        print("The response of CustomersApi->get_customer_products_consumptions_by_alias:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->get_customer_products_consumptions_by_alias: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | **str**|  | 

### Return type

[**GetCustomerProductsConsumptionsByAliasResponse**](GetCustomerProductsConsumptionsByAliasResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the products consumptions by the customer alias |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_relation**
> GetCustomerRelationResponse get_customer_relation(customer_relation_id)

Get Customer relation

Get a Customer relation by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_customer_relation_response import GetCustomerRelationResponse
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
    api_instance = openapi.CustomersApi(api_client)
    customer_relation_id = 'customer_relation_id_example' # str | 

    try:
        # Get Customer relation
        api_response = api_instance.get_customer_relation(customer_relation_id)
        print("The response of CustomersApi->get_customer_relation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->get_customer_relation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_relation_id** | **str**|  | 

### Return type

[**GetCustomerRelationResponse**](GetCustomerRelationResponse.md)

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

# **list_customers**
> ListCustomersResponse list_customers(limit=limit, cursor=cursor)

List Customers

Get a list of Customers.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.list_customers_response import ListCustomersResponse
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
    api_instance = openapi.CustomersApi(api_client)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # List Customers
        api_response = api_instance.list_customers(limit=limit, cursor=cursor)
        print("The response of CustomersApi->list_customers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->list_customers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 

### Return type

[**ListCustomersResponse**](ListCustomersResponse.md)

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

# **update_customer**
> UpdateCustomerResponse update_customer(update_customer_request, customer_id)

Update Customer

Update a Customer by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.update_customer_request import UpdateCustomerRequest
from openapi.models.update_customer_response import UpdateCustomerResponse
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
    api_instance = openapi.CustomersApi(api_client)
    update_customer_request = openapi.UpdateCustomerRequest() # UpdateCustomerRequest | 
    customer_id = 'customer_id_example' # str | 

    try:
        # Update Customer
        api_response = api_instance.update_customer(update_customer_request, customer_id)
        print("The response of CustomersApi->update_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->update_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_customer_request** | [**UpdateCustomerRequest**](UpdateCustomerRequest.md)|  | 
 **customer_id** | **str**|  | 

### Return type

[**UpdateCustomerResponse**](UpdateCustomerResponse.md)

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

