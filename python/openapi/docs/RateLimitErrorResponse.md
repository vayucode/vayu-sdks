# RateLimitErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**code** | **str** |  | 
**message** | **str** | Human-readable error explanation | 

## Example

```python
from openapi.models.rate_limit_error_response import RateLimitErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimitErrorResponse from a JSON string
rate_limit_error_response_instance = RateLimitErrorResponse.from_json(json)
# print the JSON string representation of the object
print(RateLimitErrorResponse.to_json())

# convert the object into a dict
rate_limit_error_response_dict = rate_limit_error_response_instance.to_dict()
# create an instance of RateLimitErrorResponse from a dict
rate_limit_error_response_from_dict = RateLimitErrorResponse.from_dict(rate_limit_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


