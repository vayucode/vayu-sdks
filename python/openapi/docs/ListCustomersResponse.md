# ListCustomersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customers** | [**List[CreateCustomerResponseCustomer]**](CreateCustomerResponseCustomer.md) |  | 
**total** | **float** |  | 
**has_more** | **bool** |  | 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from openapi.models.list_customers_response import ListCustomersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomersResponse from a JSON string
list_customers_response_instance = ListCustomersResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomersResponse.to_json())

# convert the object into a dict
list_customers_response_dict = list_customers_response_instance.to_dict()
# create an instance of ListCustomersResponse from a dict
list_customers_response_from_dict = ListCustomersResponse.from_dict(list_customers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


