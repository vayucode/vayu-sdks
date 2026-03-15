# DeleteContractResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | [**DeleteContractResponseContract**](DeleteContractResponseContract.md) |  | 

## Example

```python
from openapi.models.delete_contract_response import DeleteContractResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteContractResponse from a JSON string
delete_contract_response_instance = DeleteContractResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteContractResponse.to_json())

# convert the object into a dict
delete_contract_response_dict = delete_contract_response_instance.to_dict()
# create an instance of DeleteContractResponse from a dict
delete_contract_response_from_dict = DeleteContractResponse.from_dict(delete_contract_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


