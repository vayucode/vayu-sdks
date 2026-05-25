# V2DeleteEventsByRefsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[DeleteEventsByRefsResponseEventsInner]**](DeleteEventsByRefsResponseEventsInner.md) | The events that were deleted | 

## Example

```python
from openapi.models.v2_delete_events_by_refs_response import V2DeleteEventsByRefsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2DeleteEventsByRefsResponse from a JSON string
v2_delete_events_by_refs_response_instance = V2DeleteEventsByRefsResponse.from_json(json)
# print the JSON string representation of the object
print(V2DeleteEventsByRefsResponse.to_json())

# convert the object into a dict
v2_delete_events_by_refs_response_dict = v2_delete_events_by_refs_response_instance.to_dict()
# create an instance of V2DeleteEventsByRefsResponse from a dict
v2_delete_events_by_refs_response_from_dict = V2DeleteEventsByRefsResponse.from_dict(v2_delete_events_by_refs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


