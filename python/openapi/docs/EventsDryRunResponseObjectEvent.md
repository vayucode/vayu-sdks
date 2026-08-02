# EventsDryRunResponseObjectEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** |  | 
**customer_alias** | **str** |  | 
**account_id** | **str** |  | 
**data** | **Dict[str, Optional[object]]** |  | [optional] 
**ref** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi.models.events_dry_run_response_object_event import EventsDryRunResponseObjectEvent

# TODO update the JSON string below
json = "{}"
# create an instance of EventsDryRunResponseObjectEvent from a JSON string
events_dry_run_response_object_event_instance = EventsDryRunResponseObjectEvent.from_json(json)
# print the JSON string representation of the object
print(EventsDryRunResponseObjectEvent.to_json())

# convert the object into a dict
events_dry_run_response_object_event_dict = events_dry_run_response_object_event_instance.to_dict()
# create an instance of EventsDryRunResponseObjectEvent from a dict
events_dry_run_response_object_event_from_dict = EventsDryRunResponseObjectEvent.from_dict(events_dry_run_response_object_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


