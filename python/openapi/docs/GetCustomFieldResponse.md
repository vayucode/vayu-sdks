# GetCustomFieldResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**CreateCustomFieldResponseCustomField**](CreateCustomFieldResponseCustomField.md) |  | 

## Example

```python
from openapi.models.get_custom_field_response import GetCustomFieldResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomFieldResponse from a JSON string
get_custom_field_response_instance = GetCustomFieldResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomFieldResponse.to_json())

# convert the object into a dict
get_custom_field_response_dict = get_custom_field_response_instance.to_dict()
# create an instance of GetCustomFieldResponse from a dict
get_custom_field_response_from_dict = GetCustomFieldResponse.from_dict(get_custom_field_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


