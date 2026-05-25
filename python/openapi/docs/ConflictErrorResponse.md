# ConflictErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**code** | **str** |  | 
**message** | **str** | Human-readable error explanation | 

## Example

```python
from openapi.models.conflict_error_response import ConflictErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConflictErrorResponse from a JSON string
conflict_error_response_instance = ConflictErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ConflictErrorResponse.to_json())

# convert the object into a dict
conflict_error_response_dict = conflict_error_response_instance.to_dict()
# create an instance of ConflictErrorResponse from a dict
conflict_error_response_from_dict = ConflictErrorResponse.from_dict(conflict_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


