# FailedDependencyErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**code** | **str** | Specific machine-readable error code | 
**message** | **str** | Human-readable error explanation | 
**required_scope** | **str** | Scope the token was missing, present on insufficient_scope errors | [optional] 

## Example

```python
from openapi.models.failed_dependency_error_response import FailedDependencyErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FailedDependencyErrorResponse from a JSON string
failed_dependency_error_response_instance = FailedDependencyErrorResponse.from_json(json)
# print the JSON string representation of the object
print(FailedDependencyErrorResponse.to_json())

# convert the object into a dict
failed_dependency_error_response_dict = failed_dependency_error_response_instance.to_dict()
# create an instance of FailedDependencyErrorResponse from a dict
failed_dependency_error_response_from_dict = FailedDependencyErrorResponse.from_dict(failed_dependency_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


