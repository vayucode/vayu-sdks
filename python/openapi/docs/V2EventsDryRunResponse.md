# V2EventsDryRunResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[EventsDryRunResponseObject]**](EventsDryRunResponseObject.md) |  | 

## Example

```python
from openapi.models.v2_events_dry_run_response import V2EventsDryRunResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2EventsDryRunResponse from a JSON string
v2_events_dry_run_response_instance = V2EventsDryRunResponse.from_json(json)
# print the JSON string representation of the object
print(V2EventsDryRunResponse.to_json())

# convert the object into a dict
v2_events_dry_run_response_dict = v2_events_dry_run_response_instance.to_dict()
# create an instance of V2EventsDryRunResponse from a dict
v2_events_dry_run_response_from_dict = V2EventsDryRunResponse.from_dict(v2_events_dry_run_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


