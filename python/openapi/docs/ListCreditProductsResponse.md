# ListCreditProductsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_products** | [**List[ExternalCreditProduct]**](ExternalCreditProduct.md) | The credit products defined in your account. | 

## Example

```python
from openapi.models.list_credit_products_response import ListCreditProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreditProductsResponse from a JSON string
list_credit_products_response_instance = ListCreditProductsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCreditProductsResponse.to_json())

# convert the object into a dict
list_credit_products_response_dict = list_credit_products_response_instance.to_dict()
# create an instance of ListCreditProductsResponse from a dict
list_credit_products_response_from_dict = ListCreditProductsResponse.from_dict(list_credit_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


