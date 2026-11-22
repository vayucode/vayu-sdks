# RecordInvoicePaymentRequestDepositTo

The deposit account in your connected accounting system that the payment is deposited to: its id, its name and the integration it belongs to. Used when the payment is exported there.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | 
**integration** | **str** |  | [optional] 

## Example

```python
from openapi.models.record_invoice_payment_request_deposit_to import RecordInvoicePaymentRequestDepositTo

# TODO update the JSON string below
json = "{}"
# create an instance of RecordInvoicePaymentRequestDepositTo from a JSON string
record_invoice_payment_request_deposit_to_instance = RecordInvoicePaymentRequestDepositTo.from_json(json)
# print the JSON string representation of the object
print(RecordInvoicePaymentRequestDepositTo.to_json())

# convert the object into a dict
record_invoice_payment_request_deposit_to_dict = record_invoice_payment_request_deposit_to_instance.to_dict()
# create an instance of RecordInvoicePaymentRequestDepositTo from a dict
record_invoice_payment_request_deposit_to_from_dict = RecordInvoicePaymentRequestDepositTo.from_dict(record_invoice_payment_request_deposit_to_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


