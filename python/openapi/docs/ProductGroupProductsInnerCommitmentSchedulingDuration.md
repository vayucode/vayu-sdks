# ProductGroupProductsInnerCommitmentSchedulingDuration

The duration of the commitment scheduling cycle. Unit must be MONTH or YEAR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** |  | [default to 'MONTH']
**value** | **int** |  | 

## Example

```python
from openapi.models.product_group_products_inner_commitment_scheduling_duration import ProductGroupProductsInnerCommitmentSchedulingDuration

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerCommitmentSchedulingDuration from a JSON string
product_group_products_inner_commitment_scheduling_duration_instance = ProductGroupProductsInnerCommitmentSchedulingDuration.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerCommitmentSchedulingDuration.to_json())

# convert the object into a dict
product_group_products_inner_commitment_scheduling_duration_dict = product_group_products_inner_commitment_scheduling_duration_instance.to_dict()
# create an instance of ProductGroupProductsInnerCommitmentSchedulingDuration from a dict
product_group_products_inner_commitment_scheduling_duration_from_dict = ProductGroupProductsInnerCommitmentSchedulingDuration.from_dict(product_group_products_inner_commitment_scheduling_duration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


