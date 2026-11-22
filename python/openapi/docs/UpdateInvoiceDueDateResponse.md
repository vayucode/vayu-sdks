# UpdateInvoiceDueDateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**UpdateInvoiceDueDateResponseInvoice**](UpdateInvoiceDueDateResponseInvoice.md) |  | 

## Example

```python
from openapi.models.update_invoice_due_date_response import UpdateInvoiceDueDateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInvoiceDueDateResponse from a JSON string
update_invoice_due_date_response_instance = UpdateInvoiceDueDateResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateInvoiceDueDateResponse.to_json())

# convert the object into a dict
update_invoice_due_date_response_dict = update_invoice_due_date_response_instance.to_dict()
# create an instance of UpdateInvoiceDueDateResponse from a dict
update_invoice_due_date_response_from_dict = UpdateInvoiceDueDateResponse.from_dict(update_invoice_due_date_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


