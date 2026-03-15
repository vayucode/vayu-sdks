# ProductGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the product | 
**description** | **str** | The description of the product | [optional] 
**product_erp_id** | **str** | The id of the product in NetSuite ERP | [optional] 
**ns_class** | **str** | The class of the product in NetSuite ERP | [optional] 
**ns_class_id** | **str** | The id of the class of the product in NetSuite ERP | [optional] 
**products** | [**List[ProductGroupProductsInner]**](ProductGroupProductsInner.md) | The products that the product group is associated with | 
**base_amount** | **float** | The base amount for the customer to pay even if the amount based on usage is lower | [optional] 
**commitment** | [**ProductGroupCommitment**](ProductGroupCommitment.md) |  | [optional] 
**is_calendar_aligned** | **bool** | Whether the invoicing period should be calendar aligned. If not provided, it will default to false. ONE_TIME and COMMERCIAL_TERMS pricing models cannot be calendar aligned. | [optional] 

## Example

```python
from openapi.models.product_group import ProductGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroup from a JSON string
product_group_instance = ProductGroup.from_json(json)
# print the JSON string representation of the object
print(ProductGroup.to_json())

# convert the object into a dict
product_group_dict = product_group_instance.to_dict()
# create an instance of ProductGroup from a dict
product_group_from_dict = ProductGroup.from_dict(product_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


