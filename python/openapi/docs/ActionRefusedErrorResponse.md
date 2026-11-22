# ActionRefusedErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**code** | **str** | Specific machine-readable error code | 
**message** | **str** | Human-readable error explanation | 
**required_scope** | **str** | Scope the token was missing, present on insufficient_scope errors | [optional] 

## Example

```python
from openapi.models.action_refused_error_response import ActionRefusedErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActionRefusedErrorResponse from a JSON string
action_refused_error_response_instance = ActionRefusedErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ActionRefusedErrorResponse.to_json())

# convert the object into a dict
action_refused_error_response_dict = action_refused_error_response_instance.to_dict()
# create an instance of ActionRefusedErrorResponse from a dict
action_refused_error_response_from_dict = ActionRefusedErrorResponse.from_dict(action_refused_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


