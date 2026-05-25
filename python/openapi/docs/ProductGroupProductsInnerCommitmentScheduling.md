# ProductGroupProductsInnerCommitmentScheduling

Scheduling for recurring commitment. Duration unit must be MONTH or YEAR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_day** | **int** | The day of the month for the commitment scheduling | [optional] [default to 1]
**duration** | [**ProductGroupProductsInnerCommitmentSchedulingDuration**](ProductGroupProductsInnerCommitmentSchedulingDuration.md) |  | 

## Example

```python
from openapi.models.product_group_products_inner_commitment_scheduling import ProductGroupProductsInnerCommitmentScheduling

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupProductsInnerCommitmentScheduling from a JSON string
product_group_products_inner_commitment_scheduling_instance = ProductGroupProductsInnerCommitmentScheduling.from_json(json)
# print the JSON string representation of the object
print(ProductGroupProductsInnerCommitmentScheduling.to_json())

# convert the object into a dict
product_group_products_inner_commitment_scheduling_dict = product_group_products_inner_commitment_scheduling_instance.to_dict()
# create an instance of ProductGroupProductsInnerCommitmentScheduling from a dict
product_group_products_inner_commitment_scheduling_from_dict = ProductGroupProductsInnerCommitmentScheduling.from_dict(product_group_products_inner_commitment_scheduling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


