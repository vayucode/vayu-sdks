# GetCustomerRelationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_relation** | [**CreateCustomerRelationResponseCustomerRelation**](CreateCustomerRelationResponseCustomerRelation.md) |  | 

## Example

```python
from openapi.models.get_customer_relation_response import GetCustomerRelationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerRelationResponse from a JSON string
get_customer_relation_response_instance = GetCustomerRelationResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerRelationResponse.to_json())

# convert the object into a dict
get_customer_relation_response_dict = get_customer_relation_response_instance.to_dict()
# create an instance of GetCustomerRelationResponse from a dict
get_customer_relation_response_from_dict = GetCustomerRelationResponse.from_dict(get_customer_relation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


