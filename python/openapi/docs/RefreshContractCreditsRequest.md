# RefreshContractCreditsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grants** | [**List[RefreshContractCreditsRequestGrantsInner]**](RefreshContractCreditsRequestGrantsInner.md) | The credit grants to refresh. Each refreshed grant is set to non-prorated (and optionally re-priced), while every other credit grant on the contract is set to prorated. If omitted, all credit grants on the contract are refreshed (set to non-prorated) and none are prorated. | [optional] 

## Example

```python
from openapi.models.refresh_contract_credits_request import RefreshContractCreditsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshContractCreditsRequest from a JSON string
refresh_contract_credits_request_instance = RefreshContractCreditsRequest.from_json(json)
# print the JSON string representation of the object
print(RefreshContractCreditsRequest.to_json())

# convert the object into a dict
refresh_contract_credits_request_dict = refresh_contract_credits_request_instance.to_dict()
# create an instance of RefreshContractCreditsRequest from a dict
refresh_contract_credits_request_from_dict = RefreshContractCreditsRequest.from_dict(refresh_contract_credits_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


