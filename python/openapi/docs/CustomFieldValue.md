# CustomFieldValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field_definition_id** | **str** |  | 
**value** | **str** |  | [optional] 
**field_name** | **str** |  | [optional] 

## Example

```python
from openapi.models.custom_field_value import CustomFieldValue

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldValue from a JSON string
custom_field_value_instance = CustomFieldValue.from_json(json)
# print the JSON string representation of the object
print(CustomFieldValue.to_json())

# convert the object into a dict
custom_field_value_dict = custom_field_value_instance.to_dict()
# create an instance of CustomFieldValue from a dict
custom_field_value_from_dict = CustomFieldValue.from_dict(custom_field_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


