# openapi.AuthApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /login | Login by obtaining a new access token


# **login**
> LoginResponse login(login_request)

Login by obtaining a new access token

This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.

### Example


```python
import openapi
from openapi.models.login_request import LoginRequest
from openapi.models.login_response import LoginResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)


# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.AuthApi(api_client)
    login_request = openapi.LoginRequest() # LoginRequest | 

    try:
        # Login by obtaining a new access token
        api_response = api_instance.login(login_request)
        print("The response of AuthApi->login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_request** | [**LoginRequest**](LoginRequest.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

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

