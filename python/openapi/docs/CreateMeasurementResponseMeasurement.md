# CreateMeasurementResponseMeasurement


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

## Example

```python
from openapi.models.create_measurement_response_measurement import CreateMeasurementResponseMeasurement

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMeasurementResponseMeasurement from a JSON string
create_measurement_response_measurement_instance = CreateMeasurementResponseMeasurement.from_json(json)
# print the JSON string representation of the object
print(CreateMeasurementResponseMeasurement.to_json())

# convert the object into a dict
create_measurement_response_measurement_dict = create_measurement_response_measurement_instance.to_dict()
# create an instance of CreateMeasurementResponseMeasurement from a dict
create_measurement_response_measurement_from_dict = CreateMeasurementResponseMeasurement.from_dict(create_measurement_response_measurement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


