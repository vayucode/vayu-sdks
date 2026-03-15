# IntegrationEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated_at** | **datetime** |  | 
**integration_provider** | [**IntegrationProviders**](IntegrationProviders.md) |  | 
**integration_external_id** | **str** |  | 
**sync_status** | [**SyncStatus**](SyncStatus.md) |  | 
**metadata** | **Dict[str, Optional[object]]** |  | [optional] 
**raw_synced_data** | **Dict[str, Optional[object]]** |  | [optional] 

## Example

```python
from openapi.models.integration_entity import IntegrationEntity

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationEntity from a JSON string
integration_entity_instance = IntegrationEntity.from_json(json)
# print the JSON string representation of the object
print(IntegrationEntity.to_json())

# convert the object into a dict
integration_entity_dict = integration_entity_instance.to_dict()
# create an instance of IntegrationEntity from a dict
integration_entity_from_dict = IntegrationEntity.from_dict(integration_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


