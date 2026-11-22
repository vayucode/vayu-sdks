# CustomerExternalIntegration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The integration provider. Stripe links are saved on the customer; other providers are linked via the integration registry. | 
**id** | **str** | The ID of the customer in the external provider system | 
**name** | **str** | The name of the customer in the external provider system | 

## Example

```python
from openapi.models.customer_external_integration import CustomerExternalIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerExternalIntegration from a JSON string
customer_external_integration_instance = CustomerExternalIntegration.from_json(json)
# print the JSON string representation of the object
print(CustomerExternalIntegration.to_json())

# convert the object into a dict
customer_external_integration_dict = customer_external_integration_instance.to_dict()
# create an instance of CustomerExternalIntegration from a dict
customer_external_integration_from_dict = CustomerExternalIntegration.from_dict(customer_external_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


