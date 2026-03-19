# CreateMeasurementRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | The customer for whom usage will be attributed | 
**meter_id** | **str** | The meter/product that is being measured | 
**usage_date** | [**CreateMeasurementRequestUsageDate**](CreateMeasurementRequestUsageDate.md) |  | 
**value** | **float** | The updated value of product units consumed by the customer, for the product for given day | 

## Example

```python
from openapi.models.create_measurement_request import CreateMeasurementRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMeasurementRequest from a JSON string
create_measurement_request_instance = CreateMeasurementRequest.from_json(json)
# print the JSON string representation of the object
print(CreateMeasurementRequest.to_json())

# convert the object into a dict
create_measurement_request_dict = create_measurement_request_instance.to_dict()
# create an instance of CreateMeasurementRequest from a dict
create_measurement_request_from_dict = CreateMeasurementRequest.from_dict(create_measurement_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


