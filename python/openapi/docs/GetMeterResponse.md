# GetMeterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter** | [**GetMeterResponseMeter**](GetMeterResponseMeter.md) |  | 

## Example

```python
from openapi.models.get_meter_response import GetMeterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMeterResponse from a JSON string
get_meter_response_instance = GetMeterResponse.from_json(json)
# print the JSON string representation of the object
print(GetMeterResponse.to_json())

# convert the object into a dict
get_meter_response_dict = get_meter_response_instance.to_dict()
# create an instance of GetMeterResponse from a dict
get_meter_response_from_dict = GetMeterResponse.from_dict(get_meter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


