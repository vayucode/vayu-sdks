# V2QueryEventsAggregationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** |  | 
**customer_id_pattern** | **str** |  | [optional] 
**period** | [**V2QueryEventsAggregationRequestPeriod**](V2QueryEventsAggregationRequestPeriod.md) |  | 
**meters** | [**List[V2QueryEventsAggregationRequestMetersInner]**](V2QueryEventsAggregationRequestMetersInner.md) |  | 
**group_by** | **str** |  | 
**fill_dates** | **bool** |  | [optional] 

## Example

```python
from openapi.models.v2_query_events_aggregation_request import V2QueryEventsAggregationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2QueryEventsAggregationRequest from a JSON string
v2_query_events_aggregation_request_instance = V2QueryEventsAggregationRequest.from_json(json)
# print the JSON string representation of the object
print(V2QueryEventsAggregationRequest.to_json())

# convert the object into a dict
v2_query_events_aggregation_request_dict = v2_query_events_aggregation_request_instance.to_dict()
# create an instance of V2QueryEventsAggregationRequest from a dict
v2_query_events_aggregation_request_from_dict = V2QueryEventsAggregationRequest.from_dict(v2_query_events_aggregation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


