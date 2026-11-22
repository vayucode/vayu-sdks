# GetMeterByNameResponseMeter

The meter matching the provided name

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the meter | 
**event_name** | **str** | The name of the event that the meter is tracking. | 
**product_code** | **str** | The product code of the meter | [optional] 
**aggregation_method** | [**AggregationMethod**](AggregationMethod.md) |  | 
**filter** | [**Filter**](Filter.md) |  | [optional] 
**sales_force_product_id** | **str** | The ID of the meter in the Salesforce system | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.get_meter_by_name_response_meter import GetMeterByNameResponseMeter

# TODO update the JSON string below
json = "{}"
# create an instance of GetMeterByNameResponseMeter from a JSON string
get_meter_by_name_response_meter_instance = GetMeterByNameResponseMeter.from_json(json)
# print the JSON string representation of the object
print(GetMeterByNameResponseMeter.to_json())

# convert the object into a dict
get_meter_by_name_response_meter_dict = get_meter_by_name_response_meter_instance.to_dict()
# create an instance of GetMeterByNameResponseMeter from a dict
get_meter_by_name_response_meter_from_dict = GetMeterByNameResponseMeter.from_dict(get_meter_by_name_response_meter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


