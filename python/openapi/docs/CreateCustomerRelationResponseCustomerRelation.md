# CreateCustomerRelationResponseCustomerRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vayu_parent_customer_id** | **str** | Identifier of the parent customer in Vayu. | 
**vayu_child_customer_id** | **str** | Identifier of the child customer in Vayu. | 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.create_customer_relation_response_customer_relation import CreateCustomerRelationResponseCustomerRelation

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomerRelationResponseCustomerRelation from a JSON string
create_customer_relation_response_customer_relation_instance = CreateCustomerRelationResponseCustomerRelation.from_json(json)
# print the JSON string representation of the object
print(CreateCustomerRelationResponseCustomerRelation.to_json())

# convert the object into a dict
create_customer_relation_response_customer_relation_dict = create_customer_relation_response_customer_relation_instance.to_dict()
# create an instance of CreateCustomerRelationResponseCustomerRelation from a dict
create_customer_relation_response_customer_relation_from_dict = CreateCustomerRelationResponseCustomerRelation.from_dict(create_customer_relation_response_customer_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


