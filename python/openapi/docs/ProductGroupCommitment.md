# ProductGroupCommitment

The commitment of the product group. units are aggregated for all products in the group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**units** | **float** | Units to commit the customer for | 
**price** | **float** | Price to charge the customer for the committed units | [optional] 
**type** | **str** | The type of commitment. UNITS means the commitment amount is in units, PRICE means it is a monetary value. Defaults to UNITS. | [optional] [default to 'UNITS']
**scheduling** | [**ProductGroupProductsInnerCommitmentScheduling**](ProductGroupProductsInnerCommitmentScheduling.md) |  | [optional] 
**overage_strategy** | [**ExternalOverageStrategy**](ExternalOverageStrategy.md) |  | [optional] [default to ExternalOverageStrategy.IGNORE]

## Example

```python
from openapi.models.product_group_commitment import ProductGroupCommitment

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupCommitment from a JSON string
product_group_commitment_instance = ProductGroupCommitment.from_json(json)
# print the JSON string representation of the object
print(ProductGroupCommitment.to_json())

# convert the object into a dict
product_group_commitment_dict = product_group_commitment_instance.to_dict()
# create an instance of ProductGroupCommitment from a dict
product_group_commitment_from_dict = ProductGroupCommitment.from_dict(product_group_commitment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


