# GetCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**CreateCustomerResponseCustomer**](CreateCustomerResponseCustomer.md) |  | 

## Example

```python
from openapi.models.get_customer_response import GetCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerResponse from a JSON string
get_customer_response_instance = GetCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerResponse.to_json())

# convert the object into a dict
get_customer_response_dict = get_customer_response_instance.to_dict()
# create an instance of GetCustomerResponse from a dict
get_customer_response_from_dict = GetCustomerResponse.from_dict(get_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


