# EventsDryRunResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[EventsDryRunResponseObject]**](EventsDryRunResponseObject.md) |  | 

## Example

```python
from openapi.models.events_dry_run_response import EventsDryRunResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventsDryRunResponse from a JSON string
events_dry_run_response_instance = EventsDryRunResponse.from_json(json)
# print the JSON string representation of the object
print(EventsDryRunResponse.to_json())

# convert the object into a dict
events_dry_run_response_dict = events_dry_run_response_instance.to_dict()
# create an instance of EventsDryRunResponse from a dict
events_dry_run_response_from_dict = EventsDryRunResponse.from_dict(events_dry_run_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


