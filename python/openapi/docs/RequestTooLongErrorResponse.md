# RequestTooLongErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**code** | **str** |  | 
**message** | **str** | Human-readable error explanation | 

## Example

```python
from openapi.models.request_too_long_error_response import RequestTooLongErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RequestTooLongErrorResponse from a JSON string
request_too_long_error_response_instance = RequestTooLongErrorResponse.from_json(json)
# print the JSON string representation of the object
print(RequestTooLongErrorResponse.to_json())

# convert the object into a dict
request_too_long_error_response_dict = request_too_long_error_response_instance.to_dict()
# create an instance of RequestTooLongErrorResponse from a dict
request_too_long_error_response_from_dict = RequestTooLongErrorResponse.from_dict(request_too_long_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


