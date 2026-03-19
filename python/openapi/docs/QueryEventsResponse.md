# QueryEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[QueryEventsResponseEventsInner]**](QueryEventsResponseEventsInner.md) | An array of events matching the query criteria | 

## Example

```python
from openapi.models.query_events_response import QueryEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryEventsResponse from a JSON string
query_events_response_instance = QueryEventsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryEventsResponse.to_json())

# convert the object into a dict
query_events_response_dict = query_events_response_instance.to_dict()
# create an instance of QueryEventsResponse from a dict
query_events_response_from_dict = QueryEventsResponse.from_dict(query_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


