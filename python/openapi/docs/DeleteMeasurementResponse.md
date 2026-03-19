# DeleteMeasurementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measurement** | [**DeleteMeasurementResponseMeasurement**](DeleteMeasurementResponseMeasurement.md) |  | 

## Example

```python
from openapi.models.delete_measurement_response import DeleteMeasurementResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteMeasurementResponse from a JSON string
delete_measurement_response_instance = DeleteMeasurementResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteMeasurementResponse.to_json())

# convert the object into a dict
delete_measurement_response_dict = delete_measurement_response_instance.to_dict()
# create an instance of DeleteMeasurementResponse from a dict
delete_measurement_response_from_dict = DeleteMeasurementResponse.from_dict(delete_measurement_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


