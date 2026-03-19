# ListMeasurementsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measurements** | [**List[CreateMeasurementResponseMeasurement]**](CreateMeasurementResponseMeasurement.md) |  | 
**total** | **float** |  | 
**has_more** | **bool** |  | 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from openapi.models.list_measurements_response import ListMeasurementsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMeasurementsResponse from a JSON string
list_measurements_response_instance = ListMeasurementsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMeasurementsResponse.to_json())

# convert the object into a dict
list_measurements_response_dict = list_measurements_response_instance.to_dict()
# create an instance of ListMeasurementsResponse from a dict
list_measurements_response_from_dict = ListMeasurementsResponse.from_dict(list_measurements_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


