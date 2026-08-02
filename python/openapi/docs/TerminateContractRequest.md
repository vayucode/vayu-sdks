# TerminateContractRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**termination_date** | **datetime** | The date on which the contract should be terminated. If omitted, the contract is terminated immediately. | [optional] 

## Example

```python
from openapi.models.terminate_contract_request import TerminateContractRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TerminateContractRequest from a JSON string
terminate_contract_request_instance = TerminateContractRequest.from_json(json)
# print the JSON string representation of the object
print(TerminateContractRequest.to_json())

# convert the object into a dict
terminate_contract_request_dict = terminate_contract_request_instance.to_dict()
# create an instance of TerminateContractRequest from a dict
terminate_contract_request_from_dict = TerminateContractRequest.from_dict(terminate_contract_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


