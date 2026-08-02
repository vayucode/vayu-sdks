# RefreshContractCreditsRequestGrantsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grant_product_id** | **str** | The credit product (credit type) id identifying the grant to refresh. Every grant product on the contract for this credit product is set to non-prorated in the new phase. | 
**new_price** | **float** | The grant&#39;s new price in the refreshed phase. If omitted, the current price is kept. If this credit product matches more than one grant product on the contract, a price cannot be applied unambiguously and the request is rejected. | [optional] 

## Example

```python
from openapi.models.refresh_contract_credits_request_grants_inner import RefreshContractCreditsRequestGrantsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshContractCreditsRequestGrantsInner from a JSON string
refresh_contract_credits_request_grants_inner_instance = RefreshContractCreditsRequestGrantsInner.from_json(json)
# print the JSON string representation of the object
print(RefreshContractCreditsRequestGrantsInner.to_json())

# convert the object into a dict
refresh_contract_credits_request_grants_inner_dict = refresh_contract_credits_request_grants_inner_instance.to_dict()
# create an instance of RefreshContractCreditsRequestGrantsInner from a dict
refresh_contract_credits_request_grants_inner_from_dict = RefreshContractCreditsRequestGrantsInner.from_dict(refresh_contract_credits_request_grants_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


