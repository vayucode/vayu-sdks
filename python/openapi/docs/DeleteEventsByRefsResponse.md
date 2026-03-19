# DeleteEventsByRefsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[DeleteEventsByRefsResponseEventsInner]**](DeleteEventsByRefsResponseEventsInner.md) | The events that were deleted | 

## Example

```python
from openapi.models.delete_events_by_refs_response import DeleteEventsByRefsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteEventsByRefsResponse from a JSON string
delete_events_by_refs_response_instance = DeleteEventsByRefsResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteEventsByRefsResponse.to_json())

# convert the object into a dict
delete_events_by_refs_response_dict = delete_events_by_refs_response_instance.to_dict()
# create an instance of DeleteEventsByRefsResponse from a dict
delete_events_by_refs_response_from_dict = DeleteEventsByRefsResponse.from_dict(delete_events_by_refs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


