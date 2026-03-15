# CustomerCloudProviderSettings

Cloud provider settings for the customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_provider** | **str** |  | [optional] 
**cloud_provider_marketplace_id** | **str** |  | [optional] 
**customer_identifier** | **str** |  | [optional] 

## Example

```python
from openapi.models.customer_cloud_provider_settings import CustomerCloudProviderSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerCloudProviderSettings from a JSON string
customer_cloud_provider_settings_instance = CustomerCloudProviderSettings.from_json(json)
# print the JSON string representation of the object
print(CustomerCloudProviderSettings.to_json())

# convert the object into a dict
customer_cloud_provider_settings_dict = customer_cloud_provider_settings_instance.to_dict()
# create an instance of CustomerCloudProviderSettings from a dict
customer_cloud_provider_settings_from_dict = CustomerCloudProviderSettings.from_dict(customer_cloud_provider_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


