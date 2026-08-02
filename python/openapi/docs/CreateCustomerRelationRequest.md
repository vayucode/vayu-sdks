# CreateCustomerRelationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vayu_parent_customer_id** | **str** | Identifier of the parent customer in Vayu. | 
**vayu_child_customer_id** | **str** | Identifier of the child customer in Vayu. | 

## Example

```python
from openapi.models.create_customer_relation_request import CreateCustomerRelationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomerRelationRequest from a JSON string
create_customer_relation_request_instance = CreateCustomerRelationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCustomerRelationRequest.to_json())

# convert the object into a dict
create_customer_relation_request_dict = create_customer_relation_request_instance.to_dict()
# create an instance of CreateCustomerRelationRequest from a dict
create_customer_relation_request_from_dict = CreateCustomerRelationRequest.from_dict(create_customer_relation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


