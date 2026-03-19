# UpdateCatalogProductResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_product** | [**CreateCatalogProductResponseCatalogProduct**](CreateCatalogProductResponseCatalogProduct.md) |  | 

## Example

```python
from openapi.models.update_catalog_product_response import UpdateCatalogProductResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCatalogProductResponse from a JSON string
update_catalog_product_response_instance = UpdateCatalogProductResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCatalogProductResponse.to_json())

# convert the object into a dict
update_catalog_product_response_dict = update_catalog_product_response_instance.to_dict()
# create an instance of UpdateCatalogProductResponse from a dict
update_catalog_product_response_from_dict = UpdateCatalogProductResponse.from_dict(update_catalog_product_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


