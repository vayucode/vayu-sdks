# RefreshContractCreditsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_id** | **str** | The identifier of the contract whose credit grants were refreshed | 

## Example

```python
from openapi.models.refresh_contract_credits_response import RefreshContractCreditsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshContractCreditsResponse from a JSON string
refresh_contract_credits_response_instance = RefreshContractCreditsResponse.from_json(json)
# print the JSON string representation of the object
print(RefreshContractCreditsResponse.to_json())

# convert the object into a dict
refresh_contract_credits_response_dict = refresh_contract_credits_response_instance.to_dict()
# create an instance of RefreshContractCreditsResponse from a dict
refresh_contract_credits_response_from_dict = RefreshContractCreditsResponse.from_dict(refresh_contract_credits_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


