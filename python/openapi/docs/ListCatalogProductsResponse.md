# ListCatalogProductsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_products** | [**List[CreateCatalogProductResponseCatalogProduct]**](CreateCatalogProductResponseCatalogProduct.md) |  | 
**total** | **float** |  | 
**has_more** | **bool** |  | 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from openapi.models.list_catalog_products_response import ListCatalogProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCatalogProductsResponse from a JSON string
list_catalog_products_response_instance = ListCatalogProductsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCatalogProductsResponse.to_json())

# convert the object into a dict
list_catalog_products_response_dict = list_catalog_products_response_instance.to_dict()
# create an instance of ListCatalogProductsResponse from a dict
list_catalog_products_response_from_dict = ListCatalogProductsResponse.from_dict(list_catalog_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


