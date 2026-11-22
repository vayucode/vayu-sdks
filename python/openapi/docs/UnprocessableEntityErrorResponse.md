# UnprocessableEntityErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**code** | **str** | Specific machine-readable error code | 
**message** | **str** | Human-readable error explanation | 
**required_scope** | **str** | Scope the token was missing, present on insufficient_scope errors | [optional] 

## Example

```python
from openapi.models.unprocessable_entity_error_response import UnprocessableEntityErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UnprocessableEntityErrorResponse from a JSON string
unprocessable_entity_error_response_instance = UnprocessableEntityErrorResponse.from_json(json)
# print the JSON string representation of the object
print(UnprocessableEntityErrorResponse.to_json())

# convert the object into a dict
unprocessable_entity_error_response_dict = unprocessable_entity_error_response_instance.to_dict()
# create an instance of UnprocessableEntityErrorResponse from a dict
unprocessable_entity_error_response_from_dict = UnprocessableEntityErrorResponse.from_dict(unprocessable_entity_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


