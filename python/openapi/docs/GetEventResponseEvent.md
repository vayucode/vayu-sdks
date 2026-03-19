# GetEventResponseEvent

The event matching the provided refId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The distinctive label assigned to an event, serving as a critical identifier for categorizing and pricing events within the system&#39;s backend infrastructure. | 
**timestamp** | **datetime** | The temporal marker denoting the exact moment of event occurrence. The timestamp is formatted as an ISO 8601 string and is expressed in Coordinated Universal Time (UTC). i.e. YYYY-MM-DDTHH:MM:SS.SSSZ | 
**customer_alias** | **str** | A pseudonymous or otherwise obfuscated identifier uniquely assigned to each customer. | 
**ref** | **str** | A universally unique identifier (UUID) or other form of high-entropy string serving as an immutable reference for each event entry. | 
**data** | **Dict[str, Optional[object]]** | A schema-less JSON object encapsulating miscellaneous attributes and metrics associated with the event. | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.get_event_response_event import GetEventResponseEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GetEventResponseEvent from a JSON string
get_event_response_event_instance = GetEventResponseEvent.from_json(json)
# print the JSON string representation of the object
print(GetEventResponseEvent.to_json())

# convert the object into a dict
get_event_response_event_dict = get_event_response_event_instance.to_dict()
# create an instance of GetEventResponseEvent from a dict
get_event_response_event_from_dict = GetEventResponseEvent.from_dict(get_event_response_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


