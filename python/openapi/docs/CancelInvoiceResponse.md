# CancelInvoiceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**Invoice**](Invoice.md) |  | 

## Example

```python
from openapi.models.cancel_invoice_response import CancelInvoiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CancelInvoiceResponse from a JSON string
cancel_invoice_response_instance = CancelInvoiceResponse.from_json(json)
# print the JSON string representation of the object
print(CancelInvoiceResponse.to_json())

# convert the object into a dict
cancel_invoice_response_dict = cancel_invoice_response_instance.to_dict()
# create an instance of CancelInvoiceResponse from a dict
cancel_invoice_response_from_dict = CancelInvoiceResponse.from_dict(cancel_invoice_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


