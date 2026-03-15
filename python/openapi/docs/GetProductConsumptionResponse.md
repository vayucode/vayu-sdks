# GetProductConsumptionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_consumption** | [**GetProductConsumptionResponseProductConsumption**](GetProductConsumptionResponseProductConsumption.md) |  | 

## Example

```python
from openapi.models.get_product_consumption_response import GetProductConsumptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetProductConsumptionResponse from a JSON string
get_product_consumption_response_instance = GetProductConsumptionResponse.from_json(json)
# print the JSON string representation of the object
print(GetProductConsumptionResponse.to_json())

# convert the object into a dict
get_product_consumption_response_dict = get_product_consumption_response_instance.to_dict()
# create an instance of GetProductConsumptionResponse from a dict
get_product_consumption_response_from_dict = GetProductConsumptionResponse.from_dict(get_product_consumption_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


