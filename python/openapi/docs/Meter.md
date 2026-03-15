# Meter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the meter | 
**event_name** | **str** | The name of the event that the meter is tracking. | 
**aggregation_method** | [**AggregationMethod**](AggregationMethod.md) |  | 
**filter** | [**Filter**](Filter.md) |  | [optional] 

## Example

```python
from openapi.models.meter import Meter

# TODO update the JSON string below
json = "{}"
# create an instance of Meter from a JSON string
meter_instance = Meter.from_json(json)
# print the JSON string representation of the object
print(Meter.to_json())

# convert the object into a dict
meter_dict = meter_instance.to_dict()
# create an instance of Meter from a dict
meter_from_dict = Meter.from_dict(meter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


