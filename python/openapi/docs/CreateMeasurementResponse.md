# CreateMeasurementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measurement** | [**CreateMeasurementResponseMeasurement**](CreateMeasurementResponseMeasurement.md) |  | 

## Example

```python
from openapi.models.create_measurement_response import CreateMeasurementResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMeasurementResponse from a JSON string
create_measurement_response_instance = CreateMeasurementResponse.from_json(json)
# print the JSON string representation of the object
print(CreateMeasurementResponse.to_json())

# convert the object into a dict
create_measurement_response_dict = create_measurement_response_instance.to_dict()
# create an instance of CreateMeasurementResponse from a dict
create_measurement_response_from_dict = CreateMeasurementResponse.from_dict(create_measurement_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


