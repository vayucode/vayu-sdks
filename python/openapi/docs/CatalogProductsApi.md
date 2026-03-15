# openapi.CatalogProductsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_catalog_product**](CatalogProductsApi.md#create_catalog_product) | **POST** /catalogProducts | Create Catalog product
[**delete_catalog_product**](CatalogProductsApi.md#delete_catalog_product) | **DELETE** /catalogProducts/{catalogProductId} | Delete Catalog product
[**get_catalog_product**](CatalogProductsApi.md#get_catalog_product) | **GET** /catalogProducts/{catalogProductId} | Get Catalog product
[**list_catalog_products**](CatalogProductsApi.md#list_catalog_products) | **GET** /catalogProducts | List Catalog products
[**update_catalog_product**](CatalogProductsApi.md#update_catalog_product) | **PUT** /catalogProducts/{catalogProductId} | Update Catalog product


# **create_catalog_product**
> CreateCatalogProductResponse create_catalog_product(create_catalog_product_request)

Create Catalog product

Create a new Catalog product.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.create_catalog_product_request import CreateCatalogProductRequest
from openapi.models.create_catalog_product_response import CreateCatalogProductResponse
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
    api_instance = openapi.CatalogProductsApi(api_client)
    create_catalog_product_request = openapi.CreateCatalogProductRequest() # CreateCatalogProductRequest | 

    try:
        # Create Catalog product
        api_response = api_instance.create_catalog_product(create_catalog_product_request)
        print("The response of CatalogProductsApi->create_catalog_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->create_catalog_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_catalog_product_request** | [**CreateCatalogProductRequest**](CreateCatalogProductRequest.md)|  | 

### Return type

[**CreateCatalogProductResponse**](CreateCatalogProductResponse.md)

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

# **delete_catalog_product**
> DeleteCatalogProductResponse delete_catalog_product(catalog_product_id)

Delete Catalog product

Delete a Catalog product by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.delete_catalog_product_response import DeleteCatalogProductResponse
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
    api_instance = openapi.CatalogProductsApi(api_client)
    catalog_product_id = 'catalog_product_id_example' # str | 

    try:
        # Delete Catalog product
        api_response = api_instance.delete_catalog_product(catalog_product_id)
        print("The response of CatalogProductsApi->delete_catalog_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->delete_catalog_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_product_id** | **str**|  | 

### Return type

[**DeleteCatalogProductResponse**](DeleteCatalogProductResponse.md)

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

# **get_catalog_product**
> GetCatalogProductResponse get_catalog_product(catalog_product_id)

Get Catalog product

Get a Catalog product by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_catalog_product_response import GetCatalogProductResponse
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
    api_instance = openapi.CatalogProductsApi(api_client)
    catalog_product_id = 'catalog_product_id_example' # str | 

    try:
        # Get Catalog product
        api_response = api_instance.get_catalog_product(catalog_product_id)
        print("The response of CatalogProductsApi->get_catalog_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->get_catalog_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_product_id** | **str**|  | 

### Return type

[**GetCatalogProductResponse**](GetCatalogProductResponse.md)

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

# **list_catalog_products**
> ListCatalogProductsResponse list_catalog_products(limit=limit, cursor=cursor)

List Catalog products

Get a list of Catalog products.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.list_catalog_products_response import ListCatalogProductsResponse
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
    api_instance = openapi.CatalogProductsApi(api_client)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # List Catalog products
        api_response = api_instance.list_catalog_products(limit=limit, cursor=cursor)
        print("The response of CatalogProductsApi->list_catalog_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->list_catalog_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 

### Return type

[**ListCatalogProductsResponse**](ListCatalogProductsResponse.md)

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

# **update_catalog_product**
> UpdateCatalogProductResponse update_catalog_product(update_catalog_product_request, catalog_product_id)

Update Catalog product

Update a Catalog product by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.update_catalog_product_request import UpdateCatalogProductRequest
from openapi.models.update_catalog_product_response import UpdateCatalogProductResponse
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
    api_instance = openapi.CatalogProductsApi(api_client)
    update_catalog_product_request = openapi.UpdateCatalogProductRequest() # UpdateCatalogProductRequest | 
    catalog_product_id = 'catalog_product_id_example' # str | 

    try:
        # Update Catalog product
        api_response = api_instance.update_catalog_product(update_catalog_product_request, catalog_product_id)
        print("The response of CatalogProductsApi->update_catalog_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->update_catalog_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_catalog_product_request** | [**UpdateCatalogProductRequest**](UpdateCatalogProductRequest.md)|  | 
 **catalog_product_id** | **str**|  | 

### Return type

[**UpdateCatalogProductResponse**](UpdateCatalogProductResponse.md)

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

