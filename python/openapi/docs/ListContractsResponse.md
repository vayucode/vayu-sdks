# ListContractsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contracts** | [**List[GetContractResponseContract]**](GetContractResponseContract.md) |  | 
**total** | **float** |  | 
**has_more** | **bool** |  | 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from openapi.models.list_contracts_response import ListContractsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContractsResponse from a JSON string
list_contracts_response_instance = ListContractsResponse.from_json(json)
# print the JSON string representation of the object
print(ListContractsResponse.to_json())

# convert the object into a dict
list_contracts_response_dict = list_contracts_response_instance.to_dict()
# create an instance of ListContractsResponse from a dict
list_contracts_response_from_dict = ListContractsResponse.from_dict(list_contracts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


