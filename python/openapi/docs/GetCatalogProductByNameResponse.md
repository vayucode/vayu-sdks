# GetCatalogProductByNameResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_product** | [**GetCatalogProductByNameResponseCatalogProduct**](GetCatalogProductByNameResponseCatalogProduct.md) |  | 

## Example

```python
from openapi.models.get_catalog_product_by_name_response import GetCatalogProductByNameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCatalogProductByNameResponse from a JSON string
get_catalog_product_by_name_response_instance = GetCatalogProductByNameResponse.from_json(json)
# print the JSON string representation of the object
print(GetCatalogProductByNameResponse.to_json())

# convert the object into a dict
get_catalog_product_by_name_response_dict = get_catalog_product_by_name_response_instance.to_dict()
# create an instance of GetCatalogProductByNameResponse from a dict
get_catalog_product_by_name_response_from_dict = GetCatalogProductByNameResponse.from_dict(get_catalog_product_by_name_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


