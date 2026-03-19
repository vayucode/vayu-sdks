# ProductCloudProviderSettings

Cloud provider settings for the product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_provider** | **str** |  | [optional] 
**cloud_provider_marketplace_id** | **str** |  | [optional] 
**dimension** | **str** |  | [optional] 

## Example

```python
from openapi.models.product_cloud_provider_settings import ProductCloudProviderSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCloudProviderSettings from a JSON string
product_cloud_provider_settings_instance = ProductCloudProviderSettings.from_json(json)
# print the JSON string representation of the object
print(ProductCloudProviderSettings.to_json())

# convert the object into a dict
product_cloud_provider_settings_dict = product_cloud_provider_settings_instance.to_dict()
# create an instance of ProductCloudProviderSettings from a dict
product_cloud_provider_settings_from_dict = ProductCloudProviderSettings.from_dict(product_cloud_provider_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


