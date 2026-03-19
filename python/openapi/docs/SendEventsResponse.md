# SendEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid_events** | [**List[Event]**](Event.md) | An array of events that were successfully processed and sent to the queue. | 
**invalid_events** | [**List[InvalidEvent]**](InvalidEvent.md) | An array of events that failed validation and were not sent to the queue. Each object contains the event and the error message. | 

## Example

```python
from openapi.models.send_events_response import SendEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SendEventsResponse from a JSON string
send_events_response_instance = SendEventsResponse.from_json(json)
# print the JSON string representation of the object
print(SendEventsResponse.to_json())

# convert the object into a dict
send_events_response_dict = send_events_response_instance.to_dict()
# create an instance of SendEventsResponse from a dict
send_events_response_from_dict = SendEventsResponse.from_dict(send_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


