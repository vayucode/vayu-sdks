# GetMeasurementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measurement** | [**CreateMeasurementResponseMeasurement**](CreateMeasurementResponseMeasurement.md) |  | 

## Example

```python
from openapi.models.get_measurement_response import GetMeasurementResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMeasurementResponse from a JSON string
get_measurement_response_instance = GetMeasurementResponse.from_json(json)
# print the JSON string representation of the object
print(GetMeasurementResponse.to_json())

# convert the object into a dict
get_measurement_response_dict = get_measurement_response_instance.to_dict()
# create an instance of GetMeasurementResponse from a dict
get_measurement_response_from_dict = GetMeasurementResponse.from_dict(get_measurement_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


