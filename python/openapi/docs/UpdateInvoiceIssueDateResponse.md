# UpdateInvoiceIssueDateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**UpdateInvoiceIssueDateResponseInvoice**](UpdateInvoiceIssueDateResponseInvoice.md) |  | 

## Example

```python
from openapi.models.update_invoice_issue_date_response import UpdateInvoiceIssueDateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInvoiceIssueDateResponse from a JSON string
update_invoice_issue_date_response_instance = UpdateInvoiceIssueDateResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateInvoiceIssueDateResponse.to_json())

# convert the object into a dict
update_invoice_issue_date_response_dict = update_invoice_issue_date_response_instance.to_dict()
# create an instance of UpdateInvoiceIssueDateResponse from a dict
update_invoice_issue_date_response_from_dict = UpdateInvoiceIssueDateResponse.from_dict(update_invoice_issue_date_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


