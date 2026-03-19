# EventsDryRunRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[Event]**](Event.md) |  | 

## Example

```python
from openapi.models.events_dry_run_request import EventsDryRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EventsDryRunRequest from a JSON string
events_dry_run_request_instance = EventsDryRunRequest.from_json(json)
# print the JSON string representation of the object
print(EventsDryRunRequest.to_json())

# convert the object into a dict
events_dry_run_request_dict = events_dry_run_request_instance.to_dict()
# create an instance of EventsDryRunRequest from a dict
events_dry_run_request_from_dict = EventsDryRunRequest.from_dict(events_dry_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


