# AggregationMethod

The aggregation method defines how the events should be summed to represent a usage value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | [**AggregationOperator**](AggregationOperator.md) |  | 
**var_field** | **str** | The field inside the \&quot;data\&quot; property to apply the aggregation method to. | [optional] 
**instance_key** | **str** | The fields that is used to group different events together when measuring the usage. | [optional] 

## Example

```python
from openapi.models.aggregation_method import AggregationMethod

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationMethod from a JSON string
aggregation_method_instance = AggregationMethod.from_json(json)
# print the JSON string representation of the object
print(AggregationMethod.to_json())

# convert the object into a dict
aggregation_method_dict = aggregation_method_instance.to_dict()
# create an instance of AggregationMethod from a dict
aggregation_method_from_dict = AggregationMethod.from_dict(aggregation_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


