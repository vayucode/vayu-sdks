# UpdateCustomFieldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vayu_entity** | [**CustomFieldEntities**](CustomFieldEntities.md) |  | [optional] 
**vayu_custom_field_name** | **str** | The name of the custom field in Vayu | [optional] 
**value_type** | [**CustomFieldValueTypes**](CustomFieldValueTypes.md) |  | [optional] 
**integration_source** | **str** | The integration provider (e.g., \&quot;Salesforce\&quot;, \&quot;HubSpot\&quot;) | [optional] 
**integration_entity_type** | [**IntegrationEntityTypes**](IntegrationEntityTypes.md) |  | [optional] 
**field_path** | **str** | The path to the field in the integration | [optional] 
**allowed_values** | **List[str]** | Allowed values for Enum type fields | [optional] 
**default_value** | **str** | Default value for Enum type fields. Must be one of allowedValues. | [optional] 

## Example

```python
from openapi.models.update_custom_field_request import UpdateCustomFieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomFieldRequest from a JSON string
update_custom_field_request_instance = UpdateCustomFieldRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomFieldRequest.to_json())

# convert the object into a dict
update_custom_field_request_dict = update_custom_field_request_instance.to_dict()
# create an instance of UpdateCustomFieldRequest from a dict
update_custom_field_request_from_dict = UpdateCustomFieldRequest.from_dict(update_custom_field_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


