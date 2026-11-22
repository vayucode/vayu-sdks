# CreateCustomerRequestCloudProviderSettings

Cloud provider settings for the customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_provider** | **str** |  | [optional] 
**cloud_provider_marketplace_id** | **str** |  | [optional] 
**customer_identifier** | **str** |  | [optional] 

## Example

```python
from openapi.models.create_customer_request_cloud_provider_settings import CreateCustomerRequestCloudProviderSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomerRequestCloudProviderSettings from a JSON string
create_customer_request_cloud_provider_settings_instance = CreateCustomerRequestCloudProviderSettings.from_json(json)
# print the JSON string representation of the object
print(CreateCustomerRequestCloudProviderSettings.to_json())

# convert the object into a dict
create_customer_request_cloud_provider_settings_dict = create_customer_request_cloud_provider_settings_instance.to_dict()
# create an instance of CreateCustomerRequestCloudProviderSettings from a dict
create_customer_request_cloud_provider_settings_from_dict = CreateCustomerRequestCloudProviderSettings.from_dict(create_customer_request_cloud_provider_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


