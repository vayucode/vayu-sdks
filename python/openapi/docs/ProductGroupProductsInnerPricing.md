# ProductGroupProductsInnerPricing

The pricing of the product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**price** | **float** |  | 
**discount** | [**ProductGroupProductsInnerPricingOneOfDiscount**](ProductGroupProductsInnerPricingOneOfDiscount.md) |  | [optional] 
**is_credit_purchase** | **bool** | Whether this one-time fee is a credit purchase. When true, the product is treated as a prepaid credit that the customer can use later. Defaults to false. | [optional] 
**installments** | **int** | The number of installments to spread the deduction over | [optional] 
**subscription_cadence** | [**ProductGroupProductsInnerPricingOneOf3SubscriptionCadence**](ProductGroupProductsInnerPricingOneOf3SubscriptionCadence.md) |  | 
**tiers** | [**List[ProductGroupProductsInnerPricingOneOf3TiersInner]**](ProductGroupProductsInnerPricingOneOf3TiersInner.md) |  | 
**auto_upgrade** | **bool** |  | [optional] 
**prorate** | **bool** |  | [optional] 
**is_rev_share** | **bool** |  | [optional] 
**base_amount** | **float** |  | [optional] 
**usage_reset** | **int** | Usage reset is represented in months and must be one of: 1, 2, 3, 6, 12 | [optional] 
**chunk_size** | **float** |  | [optional] 
**amount_to_deduct** | **float** | The fixed amount to deduct | 
**percentage_to_deduct** | **float** | The percentage to deduct | 

## Example

```python
from openapi.models.product_group_products_inner_pricing import ProductGroupProductsInnerPricing

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerPricing from a JSON string
product_group_products_inner_pricing_instance = ProductGroupProductsInnerPricing.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerPricing.to_json())

# convert the object into a dict
product_group_products_inner_pricing_dict = product_group_products_inner_pricing_instance.to_dict()
# create an instance of ProductGroupProductsInnerPricing from a dict
product_group_products_inner_pricing_from_dict = ProductGroupProductsInnerPricing.from_dict(product_group_products_inner_pricing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


