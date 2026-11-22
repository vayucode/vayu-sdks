# TerminateContractResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_id** | **str** | The identifier of the terminated contract | 

## Example

```python
from openapi.models.terminate_contract_response import TerminateContractResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerminateContractResponse from a JSON string
terminate_contract_response_instance = TerminateContractResponse.from_json(json)
# print the JSON string representation of the object
print(TerminateContractResponse.to_json())

# convert the object into a dict
terminate_contract_response_dict = terminate_contract_response_instance.to_dict()
# create an instance of TerminateContractResponse from a dict
terminate_contract_response_from_dict = TerminateContractResponse.from_dict(terminate_contract_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


