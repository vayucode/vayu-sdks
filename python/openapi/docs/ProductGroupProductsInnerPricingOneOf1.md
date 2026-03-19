# ProductGroupProductsInnerPricingOneOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**price** | **float** |  | 
**installments** | [**List[ProductGroupProductsInnerPricingOneOf1InstallmentsInner]**](ProductGroupProductsInnerPricingOneOf1InstallmentsInner.md) |  | [optional] 

## Example

```python
from openapi.models.product_group_products_inner_pricing_one_of1 import ProductGroupProductsInnerPricingOneOf1

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerPricingOneOf1 from a JSON string
product_group_products_inner_pricing_one_of1_instance = ProductGroupProductsInnerPricingOneOf1.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerPricingOneOf1.to_json())

# convert the object into a dict
product_group_products_inner_pricing_one_of1_dict = product_group_products_inner_pricing_one_of1_instance.to_dict()
# create an instance of ProductGroupProductsInnerPricingOneOf1 from a dict
product_group_products_inner_pricing_one_of1_from_dict = ProductGroupProductsInnerPricingOneOf1.from_dict(product_group_products_inner_pricing_one_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


