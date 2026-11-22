# ReissueInvoiceResponseInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | The id of the customer that the invoice is associated with | 
**contract_id** | **str** | The id of the contract that the invoice is associated with | [optional] 
**name** | **str** | The name of the invoice, usually a description of the billing period | 
**revenue_breakdown** | [**GetInvoiceResponseInvoiceRevenueBreakdown**](GetInvoiceResponseInvoiceRevenueBreakdown.md) |  | 
**billing_status** | [**InvoiceBillingStatus**](InvoiceBillingStatus.md) |  | 
**payment_info** | [**PaymentInfo**](PaymentInfo.md) |  | [optional] 
**due_date** | **datetime** | The due date of the invoice | 
**invoice_number** | **str** | The number of the invoice | [optional] 
**review_status** | [**InvoiceReviewStatus**](InvoiceReviewStatus.md) |  | 
**approved_at** | **datetime** | The date the invoice was approved | [optional] 
**issued_at** | **datetime** | The date the invoice was issued | 
**account_id** | **str** | The id of the account that the invoice is associated with | 
**billing_cycle** | [**Period**](Period.md) |  | 
**line_items** | [**List[LineItem]**](LineItem.md) |  | 
**payments** | [**List[InvoicePayment]**](InvoicePayment.md) | The payments recorded for the invoice, including failed and pending ones; use status to filter | 
**amount** | **float** | The total amount of the invoice | 
**purchase_order** | **str** | The purchase order of the invoice | [optional] 
**notes** | **str** | The notes (memo) of the invoice | [optional] 
**contract_name** | **str** | The name of the plan the contract of the invoice is based on | [optional] 
**custom_field_values** | [**List[CustomFieldValue]**](CustomFieldValue.md) | The custom field values of the invoice&#39;s customer and contract. Customer field names are prefixed with customer_ and contract field names with contract_. | [optional] 
**external_integration** | [**List[InvoiceIntegration]**](InvoiceIntegration.md) | External systems the invoice was exported to. Each entry carries the provider, the id of the invoice in that system and, when available, its document number there. An empty list means the invoice was not exported; the field is omitted when the lookup is temporarily unavailable. | [optional] 
**is_trial** | **bool** | Whether the invoice belongs to a trial contract | 

## Example

```python
from openapi.models.reissue_invoice_response_invoice import ReissueInvoiceResponseInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of ReissueInvoiceResponseInvoice from a JSON string
reissue_invoice_response_invoice_instance = ReissueInvoiceResponseInvoice.from_json(json)
# print the JSON string representation of the object
print(ReissueInvoiceResponseInvoice.to_json())

# convert the object into a dict
reissue_invoice_response_invoice_dict = reissue_invoice_response_invoice_instance.to_dict()
# create an instance of ReissueInvoiceResponseInvoice from a dict
reissue_invoice_response_invoice_from_dict = ReissueInvoiceResponseInvoice.from_dict(reissue_invoice_response_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


