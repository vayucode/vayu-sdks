# V2QueryEventsAggregationRequestMetersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | 
**event_name** | **str** |  | 
**aggregation** | [**V2QueryEventsAggregationRequestMetersInnerAggregation**](V2QueryEventsAggregationRequestMetersInnerAggregation.md) |  | [optional] 
**sql_select** | **str** |  | [optional] 
**sql_full_query** | [**V2QueryEventsAggregationRequestMetersInnerSqlFullQuery**](V2QueryEventsAggregationRequestMetersInnerSqlFullQuery.md) |  | [optional] 
**filters** | [**List[V2QueryEventsAggregationRequestMetersInnerFiltersInner]**](V2QueryEventsAggregationRequestMetersInnerFiltersInner.md) |  | [optional] 

## Example

```python
from openapi.models.v2_query_events_aggregation_request_meters_inner import V2QueryEventsAggregationRequestMetersInner

# TODO update the JSON string below
json = "{}"
# create an instance of V2QueryEventsAggregationRequestMetersInner from a JSON string
v2_query_events_aggregation_request_meters_inner_instance = V2QueryEventsAggregationRequestMetersInner.from_json(json)
# print the JSON string representation of the object
print(V2QueryEventsAggregationRequestMetersInner.to_json())

# convert the object into a dict
v2_query_events_aggregation_request_meters_inner_dict = v2_query_events_aggregation_request_meters_inner_instance.to_dict()
# create an instance of V2QueryEventsAggregationRequestMetersInner from a dict
v2_query_events_aggregation_request_meters_inner_from_dict = V2QueryEventsAggregationRequestMetersInner.from_dict(v2_query_events_aggregation_request_meters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


