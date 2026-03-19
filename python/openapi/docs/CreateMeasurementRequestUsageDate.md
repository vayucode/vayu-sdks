# CreateMeasurementRequestUsageDate

The day the usage took place

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**year** | **int** |  | 
**month** | **int** |  | 
**day** | **int** |  | 

## Example

```python
from openapi.models.create_measurement_request_usage_date import CreateMeasurementRequestUsageDate

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMeasurementRequestUsageDate from a JSON string
create_measurement_request_usage_date_instance = CreateMeasurementRequestUsageDate.from_json(json)
# print the JSON string representation of the object
print(CreateMeasurementRequestUsageDate.to_json())

# convert the object into a dict
create_measurement_request_usage_date_dict = create_measurement_request_usage_date_instance.to_dict()
# create an instance of CreateMeasurementRequestUsageDate from a dict
create_measurement_request_usage_date_from_dict = CreateMeasurementRequestUsageDate.from_dict(create_measurement_request_usage_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


