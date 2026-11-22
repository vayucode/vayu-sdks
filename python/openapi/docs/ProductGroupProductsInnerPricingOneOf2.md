# ProductGroupProductsInnerPricingOneOf2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**price** | **float** |  | 
**subscription_cadence** | [**ProductGroupProductsInnerPricingOneOf2SubscriptionCadence**](ProductGroupProductsInnerPricingOneOf2SubscriptionCadence.md) |  | 
**discount** | [**ProductGroupProductsInnerPricingOneOfDiscount**](ProductGroupProductsInnerPricingOneOfDiscount.md) |  | [optional] 
**issued_separately** | **bool** | When true, this product is billed on its own invoice instead of being combined with other products in the same contract. Defaults to false. | [optional] 
**seats** | **int** | The number of seats for this subscription product. | [optional] 

## Example

```python
from openapi.models.product_group_products_inner_pricing_one_of2 import ProductGroupProductsInnerPricingOneOf2

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerPricingOneOf2 from a JSON string
product_group_products_inner_pricing_one_of2_instance = ProductGroupProductsInnerPricingOneOf2.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerPricingOneOf2.to_json())

# convert the object into a dict
product_group_products_inner_pricing_one_of2_dict = product_group_products_inner_pricing_one_of2_instance.to_dict()
# create an instance of ProductGroupProductsInnerPricingOneOf2 from a dict
product_group_products_inner_pricing_one_of2_from_dict = ProductGroupProductsInnerPricingOneOf2.from_dict(product_group_products_inner_pricing_one_of2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


