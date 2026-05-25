# V2QueryEventsAggregationRequestMetersInnerFiltersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** |  | 
**operator** | **str** |  | 
**value** | [**V2QueryEventsAggregationRequestMetersInnerFiltersInnerValue**](V2QueryEventsAggregationRequestMetersInnerFiltersInnerValue.md) |  | 

## Example

```python
from openapi.models.v2_query_events_aggregation_request_meters_inner_filters_inner import V2QueryEventsAggregationRequestMetersInnerFiltersInner

# TODO update the JSON string below
json = "{}"
# create an instance of V2QueryEventsAggregationRequestMetersInnerFiltersInner from a JSON string
v2_query_events_aggregation_request_meters_inner_filters_inner_instance = V2QueryEventsAggregationRequestMetersInnerFiltersInner.from_json(json)
# print the JSON string representation of the object
print(V2QueryEventsAggregationRequestMetersInnerFiltersInner.to_json())

# convert the object into a dict
v2_query_events_aggregation_request_meters_inner_filters_inner_dict = v2_query_events_aggregation_request_meters_inner_filters_inner_instance.to_dict()
# create an instance of V2QueryEventsAggregationRequestMetersInnerFiltersInner from a dict
v2_query_events_aggregation_request_meters_inner_filters_inner_from_dict = V2QueryEventsAggregationRequestMetersInnerFiltersInner.from_dict(v2_query_events_aggregation_request_meters_inner_filters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


