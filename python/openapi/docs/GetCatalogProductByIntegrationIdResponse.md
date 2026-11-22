# GetCatalogProductByIntegrationIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_product** | [**CreateCatalogProductResponseCatalogProduct**](CreateCatalogProductResponseCatalogProduct.md) |  | [optional] 

## Example

```python
from openapi.models.get_catalog_product_by_integration_id_response import GetCatalogProductByIntegrationIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCatalogProductByIntegrationIdResponse from a JSON string
get_catalog_product_by_integration_id_response_instance = GetCatalogProductByIntegrationIdResponse.from_json(json)
# print the JSON string representation of the object
print(GetCatalogProductByIntegrationIdResponse.to_json())

# convert the object into a dict
get_catalog_product_by_integration_id_response_dict = get_catalog_product_by_integration_id_response_instance.to_dict()
# create an instance of GetCatalogProductByIntegrationIdResponse from a dict
get_catalog_product_by_integration_id_response_from_dict = GetCatalogProductByIntegrationIdResponse.from_dict(get_catalog_product_by_integration_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


