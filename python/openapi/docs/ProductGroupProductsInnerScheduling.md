# ProductGroupProductsInnerScheduling

The scheduling of the product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_day** | **int** | The day of the month that the product is billed | [optional] [default to 1]
**duration** | [**ProductGroupProductsInnerSchedulingDuration**](ProductGroupProductsInnerSchedulingDuration.md) |  | 

## Example

```python
from openapi.models.product_group_products_inner_scheduling import ProductGroupProductsInnerScheduling

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerScheduling from a JSON string
product_group_products_inner_scheduling_instance = ProductGroupProductsInnerScheduling.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerScheduling.to_json())

# convert the object into a dict
product_group_products_inner_scheduling_dict = product_group_products_inner_scheduling_instance.to_dict()
# create an instance of ProductGroupProductsInnerScheduling from a dict
product_group_products_inner_scheduling_from_dict = ProductGroupProductsInnerScheduling.from_dict(product_group_products_inner_scheduling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


