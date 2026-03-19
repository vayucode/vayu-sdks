# openapi.ProductConsumptionsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_product_consumption**](ProductConsumptionsApi.md#get_product_consumption) | **GET** /product-consumption/{productId} | Get product consumption


# **get_product_consumption**
> GetProductConsumptionResponse get_product_consumption(product_id)

Get product consumption

Use this action to get the consumption data for a product

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_product_consumption_response import GetProductConsumptionResponse
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
    api_instance = openapi.ProductConsumptionsApi(api_client)
    product_id = 'product_id_example' # str | 

    try:
        # Get product consumption
        api_response = api_instance.get_product_consumption(product_id)
        print("The response of ProductConsumptionsApi->get_product_consumption:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductConsumptionsApi->get_product_consumption: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**|  | 

### Return type

[**GetProductConsumptionResponse**](GetProductConsumptionResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response from the get product consumption action |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

