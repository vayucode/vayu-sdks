# UpdateCatalogProductRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the catalog product | [optional] 
**description** | **str** | The description of the catalog product | [optional] 
**external_id** | **str** | The external ID of the catalog product | [optional] 

## Example

```python
from openapi.models.update_catalog_product_request import UpdateCatalogProductRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCatalogProductRequest from a JSON string
update_catalog_product_request_instance = UpdateCatalogProductRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCatalogProductRequest.to_json())

# convert the object into a dict
update_catalog_product_request_dict = update_catalog_product_request_instance.to_dict()
# create an instance of UpdateCatalogProductRequest from a dict
update_catalog_product_request_from_dict = UpdateCatalogProductRequest.from_dict(update_catalog_product_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


