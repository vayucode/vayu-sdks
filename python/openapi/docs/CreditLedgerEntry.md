# CreditLedgerEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**type** | [**BillingCycleStatus**](BillingCycleStatus.md) |  | 
**amount** | **float** |  | 
**balance_after_entry** | **float** |  | 
**invoice_id** | **str** |  | [optional] 
**erp_id** | **str** |  | [optional] 
**contract_id** | **str** |  | [optional] 
**integration_entities** | [**List[IntegrationEntity]**](IntegrationEntity.md) |  | 

## Example

```python
from openapi.models.credit_ledger_entry import CreditLedgerEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CreditLedgerEntry from a JSON string
credit_ledger_entry_instance = CreditLedgerEntry.from_json(json)
# print the JSON string representation of the object
print(CreditLedgerEntry.to_json())

# convert the object into a dict
credit_ledger_entry_dict = credit_ledger_entry_instance.to_dict()
# create an instance of CreditLedgerEntry from a dict
credit_ledger_entry_from_dict = CreditLedgerEntry.from_dict(credit_ledger_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


