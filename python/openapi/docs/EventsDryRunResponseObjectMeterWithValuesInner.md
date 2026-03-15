# EventsDryRunResponseObjectMeterWithValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the meter | 
**event_name** | **str** | The name of the event that the meter is tracking. | 
**aggregation_method** | [**AggregationMethod**](AggregationMethod.md) |  | 
**filter** | [**Filter**](Filter.md) |  | [optional] 
**value** | **float** |  | 
**instance_value** | **object** |  | [optional] 

## Example

```python
from openapi.models.events_dry_run_response_object_meter_with_values_inner import EventsDryRunResponseObjectMeterWithValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of EventsDryRunResponseObjectMeterWithValuesInner from a JSON string
events_dry_run_response_object_meter_with_values_inner_instance = EventsDryRunResponseObjectMeterWithValuesInner.from_json(json)
# print the JSON string representation of the object
print(EventsDryRunResponseObjectMeterWithValuesInner.to_json())

# convert the object into a dict
events_dry_run_response_object_meter_with_values_inner_dict = events_dry_run_response_object_meter_with_values_inner_instance.to_dict()
# create an instance of EventsDryRunResponseObjectMeterWithValuesInner from a dict
events_dry_run_response_object_meter_with_values_inner_from_dict = EventsDryRunResponseObjectMeterWithValuesInner.from_dict(events_dry_run_response_object_meter_with_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


