# ListCreditLedgerEntriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[CreditLedgerEntry]**](CreditLedgerEntry.md) | The credit ledger entries for the customer. | 

## Example

```python
from openapi.models.list_credit_ledger_entries_response import ListCreditLedgerEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreditLedgerEntriesResponse from a JSON string
list_credit_ledger_entries_response_instance = ListCreditLedgerEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCreditLedgerEntriesResponse.to_json())

# convert the object into a dict
list_credit_ledger_entries_response_dict = list_credit_ledger_entries_response_instance.to_dict()
# create an instance of ListCreditLedgerEntriesResponse from a dict
list_credit_ledger_entries_response_from_dict = ListCreditLedgerEntriesResponse.from_dict(list_credit_ledger_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


