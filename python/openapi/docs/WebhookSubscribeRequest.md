# WebhookSubscribeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** |  | 
**event_type** | [**NotificationEventType**](NotificationEventType.md) |  | 

## Example

```python
from openapi.models.webhook_subscribe_request import WebhookSubscribeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookSubscribeRequest from a JSON string
webhook_subscribe_request_instance = WebhookSubscribeRequest.from_json(json)
# print the JSON string representation of the object
print(WebhookSubscribeRequest.to_json())

# convert the object into a dict
webhook_subscribe_request_dict = webhook_subscribe_request_instance.to_dict()
# create an instance of WebhookSubscribeRequest from a dict
webhook_subscribe_request_from_dict = WebhookSubscribeRequest.from_dict(webhook_subscribe_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


