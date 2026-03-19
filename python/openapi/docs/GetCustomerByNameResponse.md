# GetCustomerByNameResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**GetCustomerByNameResponseCustomer**](GetCustomerByNameResponseCustomer.md) |  | 

## Example

```python
from openapi.models.get_customer_by_name_response import GetCustomerByNameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerByNameResponse from a JSON string
get_customer_by_name_response_instance = GetCustomerByNameResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerByNameResponse.to_json())

# convert the object into a dict
get_customer_by_name_response_dict = get_customer_by_name_response_instance.to_dict()
# create an instance of GetCustomerByNameResponse from a dict
get_customer_by_name_response_from_dict = GetCustomerByNameResponse.from_dict(get_customer_by_name_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


