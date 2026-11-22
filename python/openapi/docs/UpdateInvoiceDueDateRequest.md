# UpdateInvoiceDueDateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**due_date** | **datetime** | The new due date, as an ISO 8601 date-time. A date without a time is read as midnight UTC. | 

## Example

```python
from openapi.models.update_invoice_due_date_request import UpdateInvoiceDueDateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInvoiceDueDateRequest from a JSON string
update_invoice_due_date_request_instance = UpdateInvoiceDueDateRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateInvoiceDueDateRequest.to_json())

# convert the object into a dict
update_invoice_due_date_request_dict = update_invoice_due_date_request_instance.to_dict()
# create an instance of UpdateInvoiceDueDateRequest from a dict
update_invoice_due_date_request_from_dict = UpdateInvoiceDueDateRequest.from_dict(update_invoice_due_date_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


