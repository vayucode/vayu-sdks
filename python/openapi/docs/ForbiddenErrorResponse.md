# ForbiddenErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**code** | **str** | Specific machine-readable error code | 
**message** | **str** | Human-readable error explanation | 
**required_scope** | **str** | Scope the token was missing, present on insufficient_scope errors | [optional] 

## Example

```python
from openapi.models.forbidden_error_response import ForbiddenErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ForbiddenErrorResponse from a JSON string
forbidden_error_response_instance = ForbiddenErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ForbiddenErrorResponse.to_json())

# convert the object into a dict
forbidden_error_response_dict = forbidden_error_response_instance.to_dict()
# create an instance of ForbiddenErrorResponse from a dict
forbidden_error_response_from_dict = ForbiddenErrorResponse.from_dict(forbidden_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


