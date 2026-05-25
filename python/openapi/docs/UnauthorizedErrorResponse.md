# UnauthorizedErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**code** | **str** |  | 
**message** | **str** | Human-readable error explanation | 

## Example

```python
from openapi.models.unauthorized_error_response import UnauthorizedErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UnauthorizedErrorResponse from a JSON string
unauthorized_error_response_instance = UnauthorizedErrorResponse.from_json(json)
# print the JSON string representation of the object
print(UnauthorizedErrorResponse.to_json())

# convert the object into a dict
unauthorized_error_response_dict = unauthorized_error_response_instance.to_dict()
# create an instance of UnauthorizedErrorResponse from a dict
unauthorized_error_response_from_dict = UnauthorizedErrorResponse.from_dict(unauthorized_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


