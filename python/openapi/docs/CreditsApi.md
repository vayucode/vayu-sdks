# openapi.CreditsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deduct_credits**](CreditsApi.md#deduct_credits) | **POST** /credits/deduct | Deduct credits from customer credit ledger
[**grant_credits**](CreditsApi.md#grant_credits) | **POST** /credits/grant | Grant credits to a customer credit ledger
[**list_credit_ledger_entries**](CreditsApi.md#list_credit_ledger_entries) | **GET** /credits | Retrieve credit ledger entries for customer.


# **deduct_credits**
> deduct_credits(deduct_credits_request)

Deduct credits from customer credit ledger

This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer's account.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.deduct_credits_request import DeductCreditsRequest
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
    api_instance = openapi.CreditsApi(api_client)
    deduct_credits_request = openapi.DeductCreditsRequest() # DeductCreditsRequest | 

    try:
        # Deduct credits from customer credit ledger
        api_instance.deduct_credits(deduct_credits_request)
    except Exception as e:
        print("Exception when calling CreditsApi->deduct_credits: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deduct_credits_request** | [**DeductCreditsRequest**](DeductCreditsRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grant_credits**
> grant_credits(grant_credits_request)

Grant credits to a customer credit ledger

This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer's account.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.grant_credits_request import GrantCreditsRequest
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
    api_instance = openapi.CreditsApi(api_client)
    grant_credits_request = openapi.GrantCreditsRequest() # GrantCreditsRequest | 

    try:
        # Grant credits to a customer credit ledger
        api_instance.grant_credits(grant_credits_request)
    except Exception as e:
        print("Exception when calling CreditsApi->grant_credits: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_credits_request** | [**GrantCreditsRequest**](GrantCreditsRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_credit_ledger_entries**
> ListCreditLedgerEntriesResponse list_credit_ledger_entries(customer_id, limit=limit, cursor=cursor)

Retrieve credit ledger entries for customer.

This endpoint is used to retrieve the credit ledger entries for a specific customer.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.list_credit_ledger_entries_response import ListCreditLedgerEntriesResponse
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
    api_instance = openapi.CreditsApi(api_client)
    customer_id = 'customer_id_example' # str | 
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # Retrieve credit ledger entries for customer.
        api_response = api_instance.list_credit_ledger_entries(customer_id, limit=limit, cursor=cursor)
        print("The response of CreditsApi->list_credit_ledger_entries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditsApi->list_credit_ledger_entries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 

### Return type

[**ListCreditLedgerEntriesResponse**](ListCreditLedgerEntriesResponse.md)

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

