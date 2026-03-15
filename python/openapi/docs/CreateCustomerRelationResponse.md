# CreateCustomerRelationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_relation** | [**CreateCustomerRelationResponseCustomerRelation**](CreateCustomerRelationResponseCustomerRelation.md) |  | 

## Example

```python
from openapi.models.create_customer_relation_response import CreateCustomerRelationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomerRelationResponse from a JSON string
create_customer_relation_response_instance = CreateCustomerRelationResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCustomerRelationResponse.to_json())

# convert the object into a dict
create_customer_relation_response_dict = create_customer_relation_response_instance.to_dict()
# create an instance of CreateCustomerRelationResponse from a dict
create_customer_relation_response_from_dict = CreateCustomerRelationResponse.from_dict(create_customer_relation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


