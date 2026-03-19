# FullDayPeriod

The billing cycle of the invoice, consists of a start and end date

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **datetime** |  | 
**end_time** | **datetime** |  | 

## Example

```python
from openapi.models.full_day_period import FullDayPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of FullDayPeriod from a JSON string
full_day_period_instance = FullDayPeriod.from_json(json)
# print the JSON string representation of the object
print(FullDayPeriod.to_json())

# convert the object into a dict
full_day_period_dict = full_day_period_instance.to_dict()
# create an instance of FullDayPeriod from a dict
full_day_period_from_dict = FullDayPeriod.from_dict(full_day_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


