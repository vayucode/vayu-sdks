# V2QueryEventsAggregationRequestMetersInnerAggregation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | [**AggregationOperator**](AggregationOperator.md) |  | 
**var_field** | **str** |  | [optional] 
**field_arithmetic** | [**V2QueryEventsAggregationRequestMetersInnerAggregationFieldArithmetic**](V2QueryEventsAggregationRequestMetersInnerAggregationFieldArithmetic.md) |  | [optional] 

## Example

```python
from openapi.models.v2_query_events_aggregation_request_meters_inner_aggregation import V2QueryEventsAggregationRequestMetersInnerAggregation

# TODO update the JSON string below
json = "{}"
# create an instance of V2QueryEventsAggregationRequestMetersInnerAggregation from a JSON string
v2_query_events_aggregation_request_meters_inner_aggregation_instance = V2QueryEventsAggregationRequestMetersInnerAggregation.from_json(json)
# print the JSON string representation of the object
print(V2QueryEventsAggregationRequestMetersInnerAggregation.to_json())

# convert the object into a dict
v2_query_events_aggregation_request_meters_inner_aggregation_dict = v2_query_events_aggregation_request_meters_inner_aggregation_instance.to_dict()
# create an instance of V2QueryEventsAggregationRequestMetersInnerAggregation from a dict
v2_query_events_aggregation_request_meters_inner_aggregation_from_dict = V2QueryEventsAggregationRequestMetersInnerAggregation.from_dict(v2_query_events_aggregation_request_meters_inner_aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


