# openapi.CreditProductsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_credit_products**](CreditProductsApi.md#list_credit_products) | **GET** /credit-products | List credit products


# **list_credit_products**
> ListCreditProductsResponse list_credit_products()

List credit products

Retrieve the credit products defined in your account. Use a credit product ID to fund a credit pool (a product creditGrant.creditProductId) or to debit one (a usage product consumesCreditProductIds). Distinct from the credit ledger (GET /credits).

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.list_credit_products_response import ListCreditProductsResponse
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
    api_instance = openapi.CreditProductsApi(api_client)

    try:
        # List credit products
        api_response = api_instance.list_credit_products()
        print("The response of CreditProductsApi->list_credit_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditProductsApi->list_credit_products: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCreditProductsResponse**](ListCreditProductsResponse.md)

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

