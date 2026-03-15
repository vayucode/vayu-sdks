# DeleteEventsByRefsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refs** | **List[str]** |  | 

## Example

```python
from openapi.models.delete_events_by_refs_request import DeleteEventsByRefsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteEventsByRefsRequest from a JSON string
delete_events_by_refs_request_instance = DeleteEventsByRefsRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteEventsByRefsRequest.to_json())

# convert the object into a dict
delete_events_by_refs_request_dict = delete_events_by_refs_request_instance.to_dict()
# create an instance of DeleteEventsByRefsRequest from a dict
delete_events_by_refs_request_from_dict = DeleteEventsByRefsRequest.from_dict(delete_events_by_refs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


