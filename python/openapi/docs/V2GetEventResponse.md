# V2GetEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**GetEventResponseEvent**](GetEventResponseEvent.md) |  | 

## Example

```python
from openapi.models.v2_get_event_response import V2GetEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2GetEventResponse from a JSON string
v2_get_event_response_instance = V2GetEventResponse.from_json(json)
# print the JSON string representation of the object
print(V2GetEventResponse.to_json())

# convert the object into a dict
v2_get_event_response_dict = v2_get_event_response_instance.to_dict()
# create an instance of V2GetEventResponse from a dict
v2_get_event_response_from_dict = V2GetEventResponse.from_dict(v2_get_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


