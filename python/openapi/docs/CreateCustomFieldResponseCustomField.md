# CreateCustomFieldResponseCustomField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vayu_entity** | [**CustomFieldEntities**](CustomFieldEntities.md) |  | 
**vayu_custom_field_name** | **str** | The name of the custom field in Vayu | 
**value_type** | [**CustomFieldValueTypes**](CustomFieldValueTypes.md) |  | 
**integration_source** | **str** | The integration provider (e.g., \&quot;Salesforce\&quot;, \&quot;HubSpot\&quot;) | [optional] 
**integration_entity_type** | [**IntegrationEntityTypes**](IntegrationEntityTypes.md) |  | [optional] 
**field_path** | **str** | The path to the field in the integration | [optional] 
**allowed_values** | **List[str]** | Allowed values for Enum type fields | [optional] 
**default_value** | **str** | Default value for Enum type fields. Must be one of allowedValues. | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.create_custom_field_response_custom_field import CreateCustomFieldResponseCustomField

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomFieldResponseCustomField from a JSON string
create_custom_field_response_custom_field_instance = CreateCustomFieldResponseCustomField.from_json(json)
# print the JSON string representation of the object
print(CreateCustomFieldResponseCustomField.to_json())

# convert the object into a dict
create_custom_field_response_custom_field_dict = create_custom_field_response_custom_field_instance.to_dict()
# create an instance of CreateCustomFieldResponseCustomField from a dict
create_custom_field_response_custom_field_from_dict = CreateCustomFieldResponseCustomField.from_dict(create_custom_field_response_custom_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


