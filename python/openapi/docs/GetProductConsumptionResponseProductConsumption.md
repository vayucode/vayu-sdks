# GetProductConsumptionResponseProductConsumption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | The id of the product. | 
**product_name** | **str** | The name of the product. | 
**provisioned_amount** | **float** | The amount of units provisioned to the customer. | 
**consumed_amount** | **float** | The amount of units consumed by the customer. | 
**usage_percentage** | **float** | The percentage of the provisioned amount that has been consumed. | 
**has_access** | **bool** | Whether the customer has access to the product. | 
**remaining_amount** | **float** | The amount of units remaining to consume. | [optional] 
**exceeded_amount** | **float** | The amount of units exceeded. | [optional] 

## Example

```python
from openapi.models.get_product_consumption_response_product_consumption import GetProductConsumptionResponseProductConsumption

# TODO update the JSON string below
json = "{}"
# create an instance of GetProductConsumptionResponseProductConsumption from a JSON string
get_product_consumption_response_product_consumption_instance = GetProductConsumptionResponseProductConsumption.from_json(json)
# print the JSON string representation of the object
print(GetProductConsumptionResponseProductConsumption.to_json())

# convert the object into a dict
get_product_consumption_response_product_consumption_dict = get_product_consumption_response_product_consumption_instance.to_dict()
# create an instance of GetProductConsumptionResponseProductConsumption from a dict
get_product_consumption_response_product_consumption_from_dict = GetProductConsumptionResponseProductConsumption.from_dict(get_product_consumption_response_product_consumption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


