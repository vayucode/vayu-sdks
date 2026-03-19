# GetMeterResponseMeter


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

## Example

```python
from openapi.models.get_meter_response_meter import GetMeterResponseMeter

# TODO update the JSON string below
json = "{}"
# create an instance of GetMeterResponseMeter from a JSON string
get_meter_response_meter_instance = GetMeterResponseMeter.from_json(json)
# print the JSON string representation of the object
print(GetMeterResponseMeter.to_json())

# convert the object into a dict
get_meter_response_meter_dict = get_meter_response_meter_instance.to_dict()
# create an instance of GetMeterResponseMeter from a dict
get_meter_response_meter_from_dict = GetMeterResponseMeter.from_dict(get_meter_response_meter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


