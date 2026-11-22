# AcknowledgedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The distinctive label assigned to an event, serving as a critical identifier for categorizing and pricing events within the system&#39;s backend infrastructure. | 
**timestamp** | **datetime** | The temporal marker denoting the exact moment of event occurrence. The timestamp is formatted as an ISO 8601 string and is expressed in Coordinated Universal Time (UTC). i.e. YYYY-MM-DDTHH:MM:SS.SSSZ | 
**customer_alias** | **str** | A pseudonymous or otherwise obfuscated identifier uniquely assigned to each customer. | 
**ref** | **str** | A universally unique identifier (UUID) or other form of high-entropy string serving as an immutable reference for each event entry. | 
**data** | **Dict[str, Optional[object]]** | A schema-less JSON object encapsulating miscellaneous attributes and metrics associated with the event. | [optional] 
**ack_id** | **str** | Per-event acknowledgment ID confirming Vayu received this event. Use it to demonstrate the event was sent to Vayu. | 

## Example

```python
from openapi.models.acknowledged_event import AcknowledgedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AcknowledgedEvent from a JSON string
acknowledged_event_instance = AcknowledgedEvent.from_json(json)
# print the JSON string representation of the object
print(AcknowledgedEvent.to_json())

# convert the object into a dict
acknowledged_event_dict = acknowledged_event_instance.to_dict()
# create an instance of AcknowledgedEvent from a dict
acknowledged_event_from_dict = AcknowledgedEvent.from_dict(acknowledged_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


