# EventsDryRunResponseObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**EventsDryRunResponseObjectEvent**](EventsDryRunResponseObjectEvent.md) |  | 
**matched_customer** | **str** |  | [optional] 
**meter_with_values** | [**List[EventsDryRunResponseObjectMeterWithValuesInner]**](EventsDryRunResponseObjectMeterWithValuesInner.md) |  | 

## Example

```python
from openapi.models.events_dry_run_response_object import EventsDryRunResponseObject

# TODO update the JSON string below
json = "{}"
# create an instance of EventsDryRunResponseObject from a JSON string
events_dry_run_response_object_instance = EventsDryRunResponseObject.from_json(json)
# print the JSON string representation of the object
print(EventsDryRunResponseObject.to_json())

# convert the object into a dict
events_dry_run_response_object_dict = events_dry_run_response_object_instance.to_dict()
# create an instance of EventsDryRunResponseObject from a dict
events_dry_run_response_object_from_dict = EventsDryRunResponseObject.from_dict(events_dry_run_response_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


