# RecordInvoicePaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | When the payment was received, as an ISO 8601 date-time. Defaults to the time of the request. | [optional] 
**payment_method** | **str** | The method the payment was made with, for example \&quot;Wire transfer\&quot; | [optional] 
**transaction_id** | **str** | The reference of the payment in the system it was made through, for example a bank reference. It can be used once per invoice. | [optional] 
**note** | **str** | A free-text note stored with the payment | [optional] 
**payment_method_id** | **str** | The id of the payment method in your connected accounting system. Used when the payment is exported there. | [optional] 
**deposit_to** | [**RecordInvoicePaymentRequestDepositTo**](RecordInvoicePaymentRequestDepositTo.md) |  | [optional] 
**amount** | **float** | The amount received, in the currency of the invoice. It must be greater than 0 and may be lower than what is still owed. | 
**idempotency_key** | **str** | A unique value you generate for this payment, up to 255 characters. Send the same value when you retry a request so that the payment is recorded only once. | 

## Example

```python
from openapi.models.record_invoice_payment_request import RecordInvoicePaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RecordInvoicePaymentRequest from a JSON string
record_invoice_payment_request_instance = RecordInvoicePaymentRequest.from_json(json)
# print the JSON string representation of the object
print(RecordInvoicePaymentRequest.to_json())

# convert the object into a dict
record_invoice_payment_request_dict = record_invoice_payment_request_instance.to_dict()
# create an instance of RecordInvoicePaymentRequest from a dict
record_invoice_payment_request_from_dict = RecordInvoicePaymentRequest.from_dict(record_invoice_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


