# CreateCatalogProductResponseCatalogProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the catalog product | 
**description** | **str** | The description of the catalog product | [optional] 
**external_id** | **str** | The external ID of the catalog product | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.create_catalog_product_response_catalog_product import CreateCatalogProductResponseCatalogProduct

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCatalogProductResponseCatalogProduct from a JSON string
create_catalog_product_response_catalog_product_instance = CreateCatalogProductResponseCatalogProduct.from_json(json)
# print the JSON string representation of the object
print(CreateCatalogProductResponseCatalogProduct.to_json())

# convert the object into a dict
create_catalog_product_response_catalog_product_dict = create_catalog_product_response_catalog_product_instance.to_dict()
# create an instance of CreateCatalogProductResponseCatalogProduct from a dict
create_catalog_product_response_catalog_product_from_dict = CreateCatalogProductResponseCatalogProduct.from_dict(create_catalog_product_response_catalog_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


