# Event


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The distinctive label assigned to an event, serving as a critical identifier for categorizing and pricing events within the system&#39;s backend infrastructure. | 
**timestamp** | **datetime** | The temporal marker denoting the exact moment of event occurrence. The timestamp is formatted as an ISO 8601 string and is expressed in Coordinated Universal Time (UTC). i.e. YYYY-MM-DDTHH:MM:SS.SSSZ | 
**customer_alias** | **str** | A pseudonymous or otherwise obfuscated identifier uniquely assigned to each customer. | 
**ref** | **str** | A universally unique identifier (UUID) or other form of high-entropy string serving as an immutable reference for each event entry. | 
**data** | **Dict[str, Optional[object]]** | A schema-less JSON object encapsulating miscellaneous attributes and metrics associated with the event. | [optional] 

## Example

```python
from openapi.models.event import Event

# TODO update the JSON string below
json = "{}"
# create an instance of Event from a JSON string
event_instance = Event.from_json(json)
# print the JSON string representation of the object
print(Event.to_json())

# convert the object into a dict
event_dict = event_instance.to_dict()
# create an instance of Event from a dict
event_from_dict = Event.from_dict(event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


