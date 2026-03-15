# UpdateMeterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter** | [**GetMeterResponseMeter**](GetMeterResponseMeter.md) |  | 

## Example

```python
from openapi.models.update_meter_response import UpdateMeterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMeterResponse from a JSON string
update_meter_response_instance = UpdateMeterResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateMeterResponse.to_json())

# convert the object into a dict
update_meter_response_dict = update_meter_response_instance.to_dict()
# create an instance of UpdateMeterResponse from a dict
update_meter_response_from_dict = UpdateMeterResponse.from_dict(update_meter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


