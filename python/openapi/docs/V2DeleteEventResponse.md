# V2DeleteEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**DeleteEventResponseEvent**](DeleteEventResponseEvent.md) |  | 

## Example

```python
from openapi.models.v2_delete_event_response import V2DeleteEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2DeleteEventResponse from a JSON string
v2_delete_event_response_instance = V2DeleteEventResponse.from_json(json)
# print the JSON string representation of the object
print(V2DeleteEventResponse.to_json())

# convert the object into a dict
v2_delete_event_response_dict = v2_delete_event_response_instance.to_dict()
# create an instance of V2DeleteEventResponse from a dict
v2_delete_event_response_from_dict = V2DeleteEventResponse.from_dict(v2_delete_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


