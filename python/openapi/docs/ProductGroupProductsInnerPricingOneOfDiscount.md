# ProductGroupProductsInnerPricingOneOfDiscount

An optional discount to apply to this product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the discount. Will appear on the invoice. | 
**type** | **str** | The type of discount — FIXED for a fixed amount, PERCENTAGE for a percentage-based discount. | 
**amount** | **float** | The discount amount. Interpreted as a currency amount for FIXED or a percentage for PERCENTAGE. | 
**recurring** | **int** | The number of billing periods the discount applies for. If not provided, the discount recurs indefinitely. | [optional] 

## Example

```python
from openapi.models.product_group_products_inner_pricing_one_of_discount import ProductGroupProductsInnerPricingOneOfDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerPricingOneOfDiscount from a JSON string
product_group_products_inner_pricing_one_of_discount_instance = ProductGroupProductsInnerPricingOneOfDiscount.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerPricingOneOfDiscount.to_json())

# convert the object into a dict
product_group_products_inner_pricing_one_of_discount_dict = product_group_products_inner_pricing_one_of_discount_instance.to_dict()
# create an instance of ProductGroupProductsInnerPricingOneOfDiscount from a dict
product_group_products_inner_pricing_one_of_discount_from_dict = ProductGroupProductsInnerPricingOneOfDiscount.from_dict(product_group_products_inner_pricing_one_of_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


