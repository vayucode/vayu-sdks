# ProductGroupProductsInnerPricingOneOf5


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**amount_to_deduct** | **float** | The fixed amount to deduct | 
**installments** | **int** | The number of installments to spread the deduction over | [optional] 

## Example

```python
from openapi.models.product_group_products_inner_pricing_one_of5 import ProductGroupProductsInnerPricingOneOf5

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerPricingOneOf5 from a JSON string
product_group_products_inner_pricing_one_of5_instance = ProductGroupProductsInnerPricingOneOf5.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerPricingOneOf5.to_json())

# convert the object into a dict
product_group_products_inner_pricing_one_of5_dict = product_group_products_inner_pricing_one_of5_instance.to_dict()
# create an instance of ProductGroupProductsInnerPricingOneOf5 from a dict
product_group_products_inner_pricing_one_of5_from_dict = ProductGroupProductsInnerPricingOneOf5.from_dict(product_group_products_inner_pricing_one_of5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


