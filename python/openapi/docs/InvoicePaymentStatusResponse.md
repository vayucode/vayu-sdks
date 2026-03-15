# InvoicePaymentStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_id** | **str** |  | 
**billing_status** | [**InvoiceBillingStatus**](InvoiceBillingStatus.md) |  | 
**amount_due** | **float** |  | 
**amount_paid** | **float** |  | 
**total** | **float** |  | 
**due_date** | **datetime** |  | [optional] 
**paid_at** | **datetime** |  | [optional] 
**invoice_pdf_url** | **str** |  | [optional] 

## Example

```python
from openapi.models.invoice_payment_status_response import InvoicePaymentStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InvoicePaymentStatusResponse from a JSON string
invoice_payment_status_response_instance = InvoicePaymentStatusResponse.from_json(json)
# print the JSON string representation of the object
print(InvoicePaymentStatusResponse.to_json())

# convert the object into a dict
invoice_payment_status_response_dict = invoice_payment_status_response_instance.to_dict()
# create an instance of InvoicePaymentStatusResponse from a dict
invoice_payment_status_response_from_dict = InvoicePaymentStatusResponse.from_dict(invoice_payment_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


