# CreateCatalogProductRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the catalog product | 
**description** | **str** | The description of the catalog product | [optional] 
**external_id** | **str** | The external ID of the catalog product | [optional] 

## Example

```python
from openapi.models.create_catalog_product_request import CreateCatalogProductRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCatalogProductRequest from a JSON string
create_catalog_product_request_instance = CreateCatalogProductRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCatalogProductRequest.to_json())

# convert the object into a dict
create_catalog_product_request_dict = create_catalog_product_request_instance.to_dict()
# create an instance of CreateCatalogProductRequest from a dict
create_catalog_product_request_from_dict = CreateCatalogProductRequest.from_dict(create_catalog_product_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


