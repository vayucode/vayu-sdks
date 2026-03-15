# DeleteMeterResponseMeter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the meter | 
**event_name** | **str** | The name of the event that the meter is tracking. | 
**aggregation_method** | [**AggregationMethod**](AggregationMethod.md) |  | 
**filter** | [**Filter**](Filter.md) |  | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**deleted_at** | **str** |  | 

## Example

```python
from openapi.models.delete_meter_response_meter import DeleteMeterResponseMeter

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteMeterResponseMeter from a JSON string
delete_meter_response_meter_instance = DeleteMeterResponseMeter.from_json(json)
# print the JSON string representation of the object
print(DeleteMeterResponseMeter.to_json())

# convert the object into a dict
delete_meter_response_meter_dict = delete_meter_response_meter_instance.to_dict()
# create an instance of DeleteMeterResponseMeter from a dict
delete_meter_response_meter_from_dict = DeleteMeterResponseMeter.from_dict(delete_meter_response_meter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


