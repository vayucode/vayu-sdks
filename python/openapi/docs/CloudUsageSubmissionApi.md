# openapi.CloudUsageSubmissionApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submit_cloud_usage**](CloudUsageSubmissionApi.md#submit_cloud_usage) | **POST** /cloudUsageSubmission | Submit cloud usage


# **submit_cloud_usage**
> object submit_cloud_usage(submit_cloud_usage_request)

Submit cloud usage

Submit cloud usage data

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.submit_cloud_usage_request import SubmitCloudUsageRequest
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
    api_instance = openapi.CloudUsageSubmissionApi(api_client)
    submit_cloud_usage_request = openapi.SubmitCloudUsageRequest() # SubmitCloudUsageRequest | 

    try:
        # Submit cloud usage
        api_response = api_instance.submit_cloud_usage(submit_cloud_usage_request)
        print("The response of CloudUsageSubmissionApi->submit_cloud_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudUsageSubmissionApi->submit_cloud_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_cloud_usage_request** | [**SubmitCloudUsageRequest**](SubmitCloudUsageRequest.md)|  | 

### Return type

**object**

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

