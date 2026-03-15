# openapi.WebhooksApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhook_subscribe**](WebhooksApi.md#webhook_subscribe) | **POST** /webhook | Subscribe to webhooks


# **webhook_subscribe**
> webhook_subscribe(webhook_subscribe_request)

Subscribe to webhooks

Use this endpoint to subscribe to webhooks and receive event notifications.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.webhook_subscribe_request import WebhookSubscribeRequest
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
    api_instance = openapi.WebhooksApi(api_client)
    webhook_subscribe_request = openapi.WebhookSubscribeRequest() # WebhookSubscribeRequest | Subscribe to webhooks and receive event notifications.

    try:
        # Subscribe to webhooks
        api_instance.webhook_subscribe(webhook_subscribe_request)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhook_subscribe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_subscribe_request** | [**WebhookSubscribeRequest**](WebhookSubscribeRequest.md)| Subscribe to webhooks and receive event notifications. | 

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

