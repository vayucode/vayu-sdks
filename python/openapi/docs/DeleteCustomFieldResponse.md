# DeleteCustomFieldResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**DeleteCustomFieldResponseCustomField**](DeleteCustomFieldResponseCustomField.md) |  | 

## Example

```python
from openapi.models.delete_custom_field_response import DeleteCustomFieldResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteCustomFieldResponse from a JSON string
delete_custom_field_response_instance = DeleteCustomFieldResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteCustomFieldResponse.to_json())

# convert the object into a dict
delete_custom_field_response_dict = delete_custom_field_response_instance.to_dict()
# create an instance of DeleteCustomFieldResponse from a dict
delete_custom_field_response_from_dict = DeleteCustomFieldResponse.from_dict(delete_custom_field_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


