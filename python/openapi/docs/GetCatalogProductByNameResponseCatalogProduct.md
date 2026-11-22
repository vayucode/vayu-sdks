# GetCatalogProductByNameResponseCatalogProduct

The catalog product matching the provided name

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the catalog product | 
**description** | **str** | The description of the catalog product | [optional] 
**product_code** | **str** | The product code of the catalog product | [optional] 
**disable_description** | **bool** | Whether to disable the default description on generated line items | [optional] 
**external_id** | **str** | The external ID of the catalog product | [optional] 
**sales_force_product_id** | **str** | The ID of the catalog product in the Salesforce system | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.get_catalog_product_by_name_response_catalog_product import GetCatalogProductByNameResponseCatalogProduct

# TODO update the JSON string below
json = "{}"
# create an instance of GetCatalogProductByNameResponseCatalogProduct from a JSON string
get_catalog_product_by_name_response_catalog_product_instance = GetCatalogProductByNameResponseCatalogProduct.from_json(json)
# print the JSON string representation of the object
print(GetCatalogProductByNameResponseCatalogProduct.to_json())

# convert the object into a dict
get_catalog_product_by_name_response_catalog_product_dict = get_catalog_product_by_name_response_catalog_product_instance.to_dict()
# create an instance of GetCatalogProductByNameResponseCatalogProduct from a dict
get_catalog_product_by_name_response_catalog_product_from_dict = GetCatalogProductByNameResponseCatalogProduct.from_dict(get_catalog_product_by_name_response_catalog_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


