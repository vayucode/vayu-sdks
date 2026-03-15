# DeleteEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**DeleteEventResponseEvent**](DeleteEventResponseEvent.md) |  | 

## Example

```python
from openapi.models.delete_event_response import DeleteEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteEventResponse from a JSON string
delete_event_response_instance = DeleteEventResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteEventResponse.to_json())

# convert the object into a dict
delete_event_response_dict = delete_event_response_instance.to_dict()
# create an instance of DeleteEventResponse from a dict
delete_event_response_from_dict = DeleteEventResponse.from_dict(delete_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


