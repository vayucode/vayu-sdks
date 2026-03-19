# GetContractByIntegrationIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | [**GetContractResponseContract**](GetContractResponseContract.md) |  | [optional] 

## Example

```python
from openapi.models.get_contract_by_integration_id_response import GetContractByIntegrationIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetContractByIntegrationIdResponse from a JSON string
get_contract_by_integration_id_response_instance = GetContractByIntegrationIdResponse.from_json(json)
# print the JSON string representation of the object
print(GetContractByIntegrationIdResponse.to_json())

# convert the object into a dict
get_contract_by_integration_id_response_dict = get_contract_by_integration_id_response_instance.to_dict()
# create an instance of GetContractByIntegrationIdResponse from a dict
get_contract_by_integration_id_response_from_dict = GetContractByIntegrationIdResponse.from_dict(get_contract_by_integration_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


