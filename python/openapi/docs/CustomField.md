# CustomField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_source** | **str** | The integration provider (e.g., \&quot;Salesforce\&quot;, \&quot;HubSpot\&quot;) | [optional] 
**integration_entity_type** | [**IntegrationEntityTypes**](IntegrationEntityTypes.md) |  | [optional] 
**field_path** | **str** | The path to the field in the integration (e.g., \&quot;root.path.field\&quot;) | [optional] 
**vayu_custom_field_name** | **str** | The name of the field in Vayu (e.g., \&quot;AE Name\&quot;) | 
**value_type** | [**CustomFieldValueTypes**](CustomFieldValueTypes.md) |  | 
**value** | **object** | The actual value of the custom field | [optional] 

## Example

```python
from openapi.models.custom_field import CustomField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomField from a JSON string
custom_field_instance = CustomField.from_json(json)
# print the JSON string representation of the object
print(CustomField.to_json())

# convert the object into a dict
custom_field_dict = custom_field_instance.to_dict()
# create an instance of CustomField from a dict
custom_field_from_dict = CustomField.from_dict(custom_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


