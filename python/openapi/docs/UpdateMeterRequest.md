# UpdateMeterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the meter | [optional] 
**event_name** | **str** | The name of the event that the meter is tracking. | [optional] 
**aggregation_method** | [**AggregationMethod**](AggregationMethod.md) |  | [optional] 
**filter** | [**Filter**](Filter.md) |  | [optional] 

## Example

```python
from openapi.models.update_meter_request import UpdateMeterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMeterRequest from a JSON string
update_meter_request_instance = UpdateMeterRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMeterRequest.to_json())

# convert the object into a dict
update_meter_request_dict = update_meter_request_instance.to_dict()
# create an instance of UpdateMeterRequest from a dict
update_meter_request_from_dict = UpdateMeterRequest.from_dict(update_meter_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


