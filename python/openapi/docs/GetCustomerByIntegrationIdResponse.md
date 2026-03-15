# GetCustomerByIntegrationIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**CreateCustomerResponseCustomer**](CreateCustomerResponseCustomer.md) |  | [optional] 

## Example

```python
from openapi.models.get_customer_by_integration_id_response import GetCustomerByIntegrationIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerByIntegrationIdResponse from a JSON string
get_customer_by_integration_id_response_instance = GetCustomerByIntegrationIdResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerByIntegrationIdResponse.to_json())

# convert the object into a dict
get_customer_by_integration_id_response_dict = get_customer_by_integration_id_response_instance.to_dict()
# create an instance of GetCustomerByIntegrationIdResponse from a dict
get_customer_by_integration_id_response_from_dict = GetCustomerByIntegrationIdResponse.from_dict(get_customer_by_integration_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


