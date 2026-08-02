# DeleteCatalogProductResponseCatalogProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the catalog product | 
**description** | **str** | The description of the catalog product | [optional] 
**external_id** | **str** | The external ID of the catalog product | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**deleted_at** | **str** |  | 

## Example

```python
from openapi.models.delete_catalog_product_response_catalog_product import DeleteCatalogProductResponseCatalogProduct

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteCatalogProductResponseCatalogProduct from a JSON string
delete_catalog_product_response_catalog_product_instance = DeleteCatalogProductResponseCatalogProduct.from_json(json)
# print the JSON string representation of the object
print(DeleteCatalogProductResponseCatalogProduct.to_json())

# convert the object into a dict
delete_catalog_product_response_catalog_product_dict = delete_catalog_product_response_catalog_product_instance.to_dict()
# create an instance of DeleteCatalogProductResponseCatalogProduct from a dict
delete_catalog_product_response_catalog_product_from_dict = DeleteCatalogProductResponseCatalogProduct.from_dict(delete_catalog_product_response_catalog_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


