# CreateCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**CreateCustomerResponseCustomer**](CreateCustomerResponseCustomer.md) |  | 

## Example

```python
from openapi.models.create_customer_response import CreateCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomerResponse from a JSON string
create_customer_response_instance = CreateCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCustomerResponse.to_json())

# convert the object into a dict
create_customer_response_dict = create_customer_response_instance.to_dict()
# create an instance of CreateCustomerResponse from a dict
create_customer_response_from_dict = CreateCustomerResponse.from_dict(create_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


