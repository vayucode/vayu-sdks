# ProductGroupProductsInnerPricingOneOf4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**price** | **float** |  | 
**chunk_size** | **float** |  | [optional] 
**usage_reset** | **int** | Usage reset is represented in months and must be one of: 1, 2, 3, 6, 12 | [optional] 
**base_amount** | **float** |  | [optional] 

## Example

```python
from openapi.models.product_group_products_inner_pricing_one_of4 import ProductGroupProductsInnerPricingOneOf4

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerPricingOneOf4 from a JSON string
product_group_products_inner_pricing_one_of4_instance = ProductGroupProductsInnerPricingOneOf4.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerPricingOneOf4.to_json())

# convert the object into a dict
product_group_products_inner_pricing_one_of4_dict = product_group_products_inner_pricing_one_of4_instance.to_dict()
# create an instance of ProductGroupProductsInnerPricingOneOf4 from a dict
product_group_products_inner_pricing_one_of4_from_dict = ProductGroupProductsInnerPricingOneOf4.from_dict(product_group_products_inner_pricing_one_of4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


