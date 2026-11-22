# GetMeterByNameResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter** | [**GetMeterByNameResponseMeter**](GetMeterByNameResponseMeter.md) |  | 

## Example

```python
from openapi.models.get_meter_by_name_response import GetMeterByNameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMeterByNameResponse from a JSON string
get_meter_by_name_response_instance = GetMeterByNameResponse.from_json(json)
# print the JSON string representation of the object
print(GetMeterByNameResponse.to_json())

# convert the object into a dict
get_meter_by_name_response_dict = get_meter_by_name_response_instance.to_dict()
# create an instance of GetMeterByNameResponse from a dict
get_meter_by_name_response_from_dict = GetMeterByNameResponse.from_dict(get_meter_by_name_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


