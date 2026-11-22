# GetMeterByIntegrationIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter** | [**GetMeterResponseMeter**](GetMeterResponseMeter.md) |  | [optional] 

## Example

```python
from openapi.models.get_meter_by_integration_id_response import GetMeterByIntegrationIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMeterByIntegrationIdResponse from a JSON string
get_meter_by_integration_id_response_instance = GetMeterByIntegrationIdResponse.from_json(json)
# print the JSON string representation of the object
print(GetMeterByIntegrationIdResponse.to_json())

# convert the object into a dict
get_meter_by_integration_id_response_dict = get_meter_by_integration_id_response_instance.to_dict()
# create an instance of GetMeterByIntegrationIdResponse from a dict
get_meter_by_integration_id_response_from_dict = GetMeterByIntegrationIdResponse.from_dict(get_meter_by_integration_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


