# GetCatalogProductResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_product** | [**CreateCatalogProductResponseCatalogProduct**](CreateCatalogProductResponseCatalogProduct.md) |  | 

## Example

```python
from openapi.models.get_catalog_product_response import GetCatalogProductResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCatalogProductResponse from a JSON string
get_catalog_product_response_instance = GetCatalogProductResponse.from_json(json)
# print the JSON string representation of the object
print(GetCatalogProductResponse.to_json())

# convert the object into a dict
get_catalog_product_response_dict = get_catalog_product_response_instance.to_dict()
# create an instance of GetCatalogProductResponse from a dict
get_catalog_product_response_from_dict = GetCatalogProductResponse.from_dict(get_catalog_product_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


