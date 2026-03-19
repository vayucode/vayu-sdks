# DeleteMeterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter** | [**DeleteMeterResponseMeter**](DeleteMeterResponseMeter.md) |  | 

## Example

```python
from openapi.models.delete_meter_response import DeleteMeterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteMeterResponse from a JSON string
delete_meter_response_instance = DeleteMeterResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteMeterResponse.to_json())

# convert the object into a dict
delete_meter_response_dict = delete_meter_response_instance.to_dict()
# create an instance of DeleteMeterResponse from a dict
delete_meter_response_from_dict = DeleteMeterResponse.from_dict(delete_meter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


