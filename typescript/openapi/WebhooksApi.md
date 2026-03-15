# .WebhooksApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookSubscribe**](WebhooksApi.md#webhookSubscribe) | **POST** /webhook | Subscribe to webhooks


# **webhookSubscribe**
> void webhookSubscribe(webhookSubscribeRequest)

Use this endpoint to subscribe to webhooks and receive event notifications.

### Example


```typescript
import { createConfiguration, WebhooksApi } from '';
import type { WebhooksApiWebhookSubscribeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhooksApi(configuration);

const request: WebhooksApiWebhookSubscribeRequest = {
    // Subscribe to webhooks and receive event notifications.
  webhookSubscribeRequest: {
    callbackUrl: "callbackUrl_example",
    eventType: "AnonymousCustomer",
  },
};

const data = await apiInstance.webhookSubscribe(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookSubscribeRequest** | **WebhookSubscribeRequest**| Subscribe to webhooks and receive event notifications. |


### Return type

**void**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


