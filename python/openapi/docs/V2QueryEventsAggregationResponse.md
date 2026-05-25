# V2QueryEventsAggregationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_points** | [**List[V2QueryEventsAggregationResponseDataPointsInner]**](V2QueryEventsAggregationResponseDataPointsInner.md) |  | 
**period** | [**V2QueryEventsAggregationRequestPeriod**](V2QueryEventsAggregationRequestPeriod.md) |  | 
**group_by** | **str** |  | 

## Example

```python
from openapi.models.v2_query_events_aggregation_response import V2QueryEventsAggregationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2QueryEventsAggregationResponse from a JSON string
v2_query_events_aggregation_response_instance = V2QueryEventsAggregationResponse.from_json(json)
# print the JSON string representation of the object
print(V2QueryEventsAggregationResponse.to_json())

# convert the object into a dict
v2_query_events_aggregation_response_dict = v2_query_events_aggregation_response_instance.to_dict()
# create an instance of V2QueryEventsAggregationResponse from a dict
v2_query_events_aggregation_response_from_dict = V2QueryEventsAggregationResponse.from_dict(v2_query_events_aggregation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


