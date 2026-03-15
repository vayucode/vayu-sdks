# CreateCatalogProductResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_product** | [**CreateCatalogProductResponseCatalogProduct**](CreateCatalogProductResponseCatalogProduct.md) |  | 

## Example

```python
from openapi.models.create_catalog_product_response import CreateCatalogProductResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCatalogProductResponse from a JSON string
create_catalog_product_response_instance = CreateCatalogProductResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCatalogProductResponse.to_json())

# convert the object into a dict
create_catalog_product_response_dict = create_catalog_product_response_instance.to_dict()
# create an instance of CreateCatalogProductResponse from a dict
create_catalog_product_response_from_dict = CreateCatalogProductResponse.from_dict(create_catalog_product_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


