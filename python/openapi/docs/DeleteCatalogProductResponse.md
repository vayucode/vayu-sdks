# DeleteCatalogProductResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_product** | [**DeleteCatalogProductResponseCatalogProduct**](DeleteCatalogProductResponseCatalogProduct.md) |  | 

## Example

```python
from openapi.models.delete_catalog_product_response import DeleteCatalogProductResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteCatalogProductResponse from a JSON string
delete_catalog_product_response_instance = DeleteCatalogProductResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteCatalogProductResponse.to_json())

# convert the object into a dict
delete_catalog_product_response_dict = delete_catalog_product_response_instance.to_dict()
# create an instance of DeleteCatalogProductResponse from a dict
delete_catalog_product_response_from_dict = DeleteCatalogProductResponse.from_dict(delete_catalog_product_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


