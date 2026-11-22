# DeleteInvoiceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**DeleteInvoiceResponseInvoice**](DeleteInvoiceResponseInvoice.md) |  | 

## Example

```python
from openapi.models.delete_invoice_response import DeleteInvoiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteInvoiceResponse from a JSON string
delete_invoice_response_instance = DeleteInvoiceResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteInvoiceResponse.to_json())

# convert the object into a dict
delete_invoice_response_dict = delete_invoice_response_instance.to_dict()
# create an instance of DeleteInvoiceResponse from a dict
delete_invoice_response_from_dict = DeleteInvoiceResponse.from_dict(delete_invoice_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


