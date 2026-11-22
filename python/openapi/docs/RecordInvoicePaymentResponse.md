# RecordInvoicePaymentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**RecordInvoicePaymentResponseInvoice**](RecordInvoicePaymentResponseInvoice.md) |  | 

## Example

```python
from openapi.models.record_invoice_payment_response import RecordInvoicePaymentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RecordInvoicePaymentResponse from a JSON string
record_invoice_payment_response_instance = RecordInvoicePaymentResponse.from_json(json)
# print the JSON string representation of the object
print(RecordInvoicePaymentResponse.to_json())

# convert the object into a dict
record_invoice_payment_response_dict = record_invoice_payment_response_instance.to_dict()
# create an instance of RecordInvoicePaymentResponse from a dict
record_invoice_payment_response_from_dict = RecordInvoicePaymentResponse.from_dict(record_invoice_payment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


