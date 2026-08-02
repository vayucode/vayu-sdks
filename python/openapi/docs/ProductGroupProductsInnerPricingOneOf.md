# ProductGroupProductsInnerPricingOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**price** | **float** |  | 
**discount** | [**ProductGroupProductsInnerPricingOneOfDiscount**](ProductGroupProductsInnerPricingOneOfDiscount.md) |  | [optional] 
**is_credit_purchase** | **bool** | Deprecated. Legacy prepaid-credit marker: sets a fixed Credit product type and prepayment, but does NOT fund a credit pool. For the credit pool system, use the contract-level creditGrants field instead. Defaults to false. | [optional] 
**issued_separately** | **bool** | When true, this product is billed on its own invoice instead of being combined with other products in the same contract. Defaults to false. | [optional] 

## Example

```python
from openapi.models.product_group_products_inner_pricing_one_of import ProductGroupProductsInnerPricingOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerPricingOneOf from a JSON string
product_group_products_inner_pricing_one_of_instance = ProductGroupProductsInnerPricingOneOf.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerPricingOneOf.to_json())

# convert the object into a dict
product_group_products_inner_pricing_one_of_dict = product_group_products_inner_pricing_one_of_instance.to_dict()
# create an instance of ProductGroupProductsInnerPricingOneOf from a dict
product_group_products_inner_pricing_one_of_from_dict = ProductGroupProductsInnerPricingOneOf.from_dict(product_group_products_inner_pricing_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


