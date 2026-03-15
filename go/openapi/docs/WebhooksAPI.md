# \WebhooksAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**WebhookSubscribe**](WebhooksAPI.md#WebhookSubscribe) | **Post** /webhook | Subscribe to webhooks



## WebhookSubscribe

> WebhookSubscribe(ctx).WebhookSubscribeRequest(webhookSubscribeRequest).Execute()

Subscribe to webhooks



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/vayucode/vayu-sdks/go/openapi"
)

func main() {
	webhookSubscribeRequest := *openapiclient.NewWebhookSubscribeRequest("CallbackUrl_example", openapiclient.NotificationEventType("AnonymousCustomer")) // WebhookSubscribeRequest | Subscribe to webhooks and receive event notifications.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WebhooksAPI.WebhookSubscribe(context.Background()).WebhookSubscribeRequest(webhookSubscribeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.WebhookSubscribe``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiWebhookSubscribeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookSubscribeRequest** | [**WebhookSubscribeRequest**](WebhookSubscribeRequest.md) | Subscribe to webhooks and receive event notifications. | 

### Return type

 (empty response body)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

