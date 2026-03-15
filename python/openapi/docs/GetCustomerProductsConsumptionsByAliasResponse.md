# GetCustomerProductsConsumptionsByAliasResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products_consumptions** | [**List[ProductConsumption]**](ProductConsumption.md) |  | 

## Example

```python
from openapi.models.get_customer_products_consumptions_by_alias_response import GetCustomerProductsConsumptionsByAliasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerProductsConsumptionsByAliasResponse from a JSON string
get_customer_products_consumptions_by_alias_response_instance = GetCustomerProductsConsumptionsByAliasResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerProductsConsumptionsByAliasResponse.to_json())

# convert the object into a dict
get_customer_products_consumptions_by_alias_response_dict = get_customer_products_consumptions_by_alias_response_instance.to_dict()
# create an instance of GetCustomerProductsConsumptionsByAliasResponse from a dict
get_customer_products_consumptions_by_alias_response_from_dict = GetCustomerProductsConsumptionsByAliasResponse.from_dict(get_customer_products_consumptions_by_alias_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


