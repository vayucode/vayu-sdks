# ExternalCreditProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of the credit product. Use it as a product creditGrant.creditProductId to fund its pool, or in a usage product&#39;s consumesCreditProductIds to debit it. | 
**name** | **str** | Human-readable name of the credit product. | 

## Example

```python
from openapi.models.external_credit_product import ExternalCreditProduct

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalCreditProduct from a JSON string
external_credit_product_instance = ExternalCreditProduct.from_json(json)
# print the JSON string representation of the object
print(ExternalCreditProduct.to_json())

# convert the object into a dict
external_credit_product_dict = external_credit_product_instance.to_dict()
# create an instance of ExternalCreditProduct from a dict
external_credit_product_from_dict = ExternalCreditProduct.from_dict(external_credit_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


