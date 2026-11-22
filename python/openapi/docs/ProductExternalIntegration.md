# ProductExternalIntegration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **str** | The V3 integration provider to link the product to. Currently only Paddle is supported. | 
**external_id** | **str** | The id of the matching product in the external integration (e.g. the Paddle product id). The product must already exist in the connected integration; it is fetched and linked when the contract is created so that invoices for this product are exported to that integration. | 

## Example

```python
from openapi.models.product_external_integration import ProductExternalIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of ProductExternalIntegration from a JSON string
product_external_integration_instance = ProductExternalIntegration.from_json(json)
# print the JSON string representation of the object
print(ProductExternalIntegration.to_json())

# convert the object into a dict
product_external_integration_dict = product_external_integration_instance.to_dict()
# create an instance of ProductExternalIntegration from a dict
product_external_integration_from_dict = ProductExternalIntegration.from_dict(product_external_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


