# V2SendEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid_events** | [**List[AcknowledgedEvent]**](AcknowledgedEvent.md) | An array of events that were successfully processed and sent to the queue, each with its acknowledgment ID. | 
**invalid_events** | [**List[InvalidEvent]**](InvalidEvent.md) | An array of events that failed validation and were not sent to the queue. Each object contains the event and the error message. | 

## Example

```python
from openapi.models.v2_send_events_response import V2SendEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2SendEventsResponse from a JSON string
v2_send_events_response_instance = V2SendEventsResponse.from_json(json)
# print the JSON string representation of the object
print(V2SendEventsResponse.to_json())

# convert the object into a dict
v2_send_events_response_dict = v2_send_events_response_instance.to_dict()
# create an instance of V2SendEventsResponse from a dict
v2_send_events_response_from_dict = V2SendEventsResponse.from_dict(v2_send_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


