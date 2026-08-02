# GetInvoiceResponseInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | The id of the customer that the invoice is associated with | 
**contract_id** | **str** | The id of the contract that the invoice is associated with | [optional] 
**name** | **str** | The name of the invoice, usually a description of the billing period | 
**billing_cycle** | [**FullDayPeriod**](FullDayPeriod.md) |  | 
**revenue_breakdown** | [**GetInvoiceResponseInvoiceRevenueBreakdown**](GetInvoiceResponseInvoiceRevenueBreakdown.md) |  | 
**billing_status** | [**InvoiceBillingStatus**](InvoiceBillingStatus.md) |  | 
**payment_info** | [**PaymentInfo**](PaymentInfo.md) |  | [optional] 
**due_date** | **datetime** | The due date of the invoice | 
**account_id** | **str** | The id of the account that the invoice is associated with | 
**line_items** | [**List[LineItem]**](LineItem.md) |  | 
**amount** | **float** | The total amount of the invoice | 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.get_invoice_response_invoice import GetInvoiceResponseInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of GetInvoiceResponseInvoice from a JSON string
get_invoice_response_invoice_instance = GetInvoiceResponseInvoice.from_json(json)
# print the JSON string representation of the object
print(GetInvoiceResponseInvoice.to_json())

# convert the object into a dict
get_invoice_response_invoice_dict = get_invoice_response_invoice_instance.to_dict()
# create an instance of GetInvoiceResponseInvoice from a dict
get_invoice_response_invoice_from_dict = GetInvoiceResponseInvoice.from_dict(get_invoice_response_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


