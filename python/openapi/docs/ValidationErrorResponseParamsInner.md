# ValidationErrorResponseParamsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**param** | **str** | The parameter that failed validation | 
**message** | **str** | Why validation failed for this parameter | 

## Example

```python
from openapi.models.validation_error_response_params_inner import ValidationErrorResponseParamsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationErrorResponseParamsInner from a JSON string
validation_error_response_params_inner_instance = ValidationErrorResponseParamsInner.from_json(json)
# print the JSON string representation of the object
print(ValidationErrorResponseParamsInner.to_json())

# convert the object into a dict
validation_error_response_params_inner_dict = validation_error_response_params_inner_instance.to_dict()
# create an instance of ValidationErrorResponseParamsInner from a dict
validation_error_response_params_inner_from_dict = ValidationErrorResponseParamsInner.from_dict(validation_error_response_params_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


