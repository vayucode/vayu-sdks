# ProductGroupProductsInnerPricingOneOf3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**tiers** | [**List[ProductGroupProductsInnerPricingOneOf3TiersInner]**](ProductGroupProductsInnerPricingOneOf3TiersInner.md) |  | 
**subscription_cadence** | [**ProductGroupProductsInnerPricingOneOf3SubscriptionCadence**](ProductGroupProductsInnerPricingOneOf3SubscriptionCadence.md) |  | [optional] 
**auto_upgrade** | **bool** |  | [optional] 
**prorate** | **bool** |  | [optional] 
**is_rev_share** | **bool** |  | [optional] 
**base_amount** | **float** |  | [optional] 
**usage_reset** | **int** | Usage reset is represented in months and must be one of: 1, 2, 3, 6, 12 | [optional] 

## Example

```python
from openapi.models.product_group_products_inner_pricing_one_of3 import ProductGroupProductsInnerPricingOneOf3

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerPricingOneOf3 from a JSON string
product_group_products_inner_pricing_one_of3_instance = ProductGroupProductsInnerPricingOneOf3.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerPricingOneOf3.to_json())

# convert the object into a dict
product_group_products_inner_pricing_one_of3_dict = product_group_products_inner_pricing_one_of3_instance.to_dict()
# create an instance of ProductGroupProductsInnerPricingOneOf3 from a dict
product_group_products_inner_pricing_one_of3_from_dict = ProductGroupProductsInnerPricingOneOf3.from_dict(product_group_products_inner_pricing_one_of3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


