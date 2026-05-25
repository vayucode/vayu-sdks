# UpdateCustomFieldResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**CreateCustomFieldResponseCustomField**](CreateCustomFieldResponseCustomField.md) |  | 

## Example

```python
from openapi.models.update_custom_field_response import UpdateCustomFieldResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomFieldResponse from a JSON string
update_custom_field_response_instance = UpdateCustomFieldResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomFieldResponse.to_json())

# convert the object into a dict
update_custom_field_response_dict = update_custom_field_response_instance.to_dict()
# create an instance of UpdateCustomFieldResponse from a dict
update_custom_field_response_from_dict = UpdateCustomFieldResponse.from_dict(update_custom_field_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


