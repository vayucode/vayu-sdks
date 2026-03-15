# InvalidEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**Event**](Event.md) |  | 
**error** | **str** | The error message indicating the reason the event failed validation. | 

## Example

```python
from openapi.models.invalid_event import InvalidEvent

# TODO update the JSON string below
json = "{}"
# create an instance of InvalidEvent from a JSON string
invalid_event_instance = InvalidEvent.from_json(json)
# print the JSON string representation of the object
print(InvalidEvent.to_json())

# convert the object into a dict
invalid_event_dict = invalid_event_instance.to_dict()
# create an instance of InvalidEvent from a dict
invalid_event_from_dict = InvalidEvent.from_dict(invalid_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


