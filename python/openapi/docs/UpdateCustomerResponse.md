# UpdateCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**CreateCustomerResponseCustomer**](CreateCustomerResponseCustomer.md) |  | 

## Example

```python
from openapi.models.update_customer_response import UpdateCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomerResponse from a JSON string
update_customer_response_instance = UpdateCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomerResponse.to_json())

# convert the object into a dict
update_customer_response_dict = update_customer_response_instance.to_dict()
# create an instance of UpdateCustomerResponse from a dict
update_customer_response_from_dict = UpdateCustomerResponse.from_dict(update_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


