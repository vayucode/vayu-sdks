# V2SendEventsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[Event]**](Event.md) |  | 

## Example

```python
from openapi.models.v2_send_events_request import V2SendEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2SendEventsRequest from a JSON string
v2_send_events_request_instance = V2SendEventsRequest.from_json(json)
# print the JSON string representation of the object
print(V2SendEventsRequest.to_json())

# convert the object into a dict
v2_send_events_request_dict = v2_send_events_request_instance.to_dict()
# create an instance of V2SendEventsRequest from a dict
v2_send_events_request_from_dict = V2SendEventsRequest.from_dict(v2_send_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


