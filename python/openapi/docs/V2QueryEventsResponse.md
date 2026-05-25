# V2QueryEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[QueryEventsResponseEventsInner]**](QueryEventsResponseEventsInner.md) |  | 
**total** | **float** |  | 
**has_more** | **bool** |  | 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from openapi.models.v2_query_events_response import V2QueryEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2QueryEventsResponse from a JSON string
v2_query_events_response_instance = V2QueryEventsResponse.from_json(json)
# print the JSON string representation of the object
print(V2QueryEventsResponse.to_json())

# convert the object into a dict
v2_query_events_response_dict = v2_query_events_response_instance.to_dict()
# create an instance of V2QueryEventsResponse from a dict
v2_query_events_response_from_dict = V2QueryEventsResponse.from_dict(v2_query_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


