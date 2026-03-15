# DeleteMeasurementResponseMeasurement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | The customer for whom usage will be attributed | 
**meter_id** | **str** | The meter/product that is being measured | 
**usage_date** | [**CreateMeasurementRequestUsageDate**](CreateMeasurementRequestUsageDate.md) |  | 
**value** | **float** | The updated value of product units consumed by the customer, for the product for given day | 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**deleted_at** | **str** |  | 

## Example

```python
from openapi.models.delete_measurement_response_measurement import DeleteMeasurementResponseMeasurement

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteMeasurementResponseMeasurement from a JSON string
delete_measurement_response_measurement_instance = DeleteMeasurementResponseMeasurement.from_json(json)
# print the JSON string representation of the object
print(DeleteMeasurementResponseMeasurement.to_json())

# convert the object into a dict
delete_measurement_response_measurement_dict = delete_measurement_response_measurement_instance.to_dict()
# create an instance of DeleteMeasurementResponseMeasurement from a dict
delete_measurement_response_measurement_from_dict = DeleteMeasurementResponseMeasurement.from_dict(delete_measurement_response_measurement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


