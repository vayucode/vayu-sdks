# ProductGroupProductsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the product | 
**description** | **str** | The description of the product | [optional] 
**disable_description** | **bool** | Whether to disable the default description on generated line items | [optional] 
**scheduling** | [**ProductGroupProductsInnerScheduling**](ProductGroupProductsInnerScheduling.md) |  | 
**pricing** | [**ProductGroupProductsInnerPricing**](ProductGroupProductsInnerPricing.md) |  | 
**catalog_product_id** | **str** | The id of the a product from the catalog to connect the contract product to | [optional] 
**product_erp_id** | **str** | The id of the product in NetSuite ERP | [optional] 
**ns_class** | **str** | The class of the product in NetSuite ERP | [optional] 
**ns_class_id** | **str** | The id of the class of the product in NetSuite ERP | [optional] 
**external_integrations** | [**List[ProductExternalIntegration]**](ProductExternalIntegration.md) | Links the product to matching products in V3 integrations (e.g. Paddle). For each entry, the product is linked to that external integration after the contract is created, so invoices for this product are exported to it. At most one entry per provider. Currently only Paddle is supported. | [optional] 
**commitment** | [**ProductGroupProductsInnerCommitment**](ProductGroupProductsInnerCommitment.md) |  | [optional] 
**payment_term** | [**PaymentTerm**](PaymentTerm.md) |  | [optional] 
**is_calendar_aligned** | **bool** | Whether the invoicing period should be calendar aligned. If not provided, it will default to false. ONE_TIME and COMMERCIAL_TERMS pricing models cannot be calendar aligned. This field is ignored if the product is part of a ProductGroup. | [optional] 
**cloud_provider_settings** | [**ProductCloudProviderSettings**](ProductCloudProviderSettings.md) |  | [optional] 
**consumes_credit_product_ids** | **List[str]** | IDs of credit products whose pools are drawn down when this usage product is invoiced. Each ID matches the creditProductId of a credit grant on the same contract that funds the pool. Pools are drawn in the order listed. If omitted, no credits are applied and the product is billed at full price. Not supported inside productGroups. | [optional] 

## Example

```python
from openapi.models.product_group_products_inner import ProductGroupProductsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInner from a JSON string
product_group_products_inner_instance = ProductGroupProductsInner.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInner.to_json())

# convert the object into a dict
product_group_products_inner_dict = product_group_products_inner_instance.to_dict()
# create an instance of ProductGroupProductsInner from a dict
product_group_products_inner_from_dict = ProductGroupProductsInner.from_dict(product_group_products_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


