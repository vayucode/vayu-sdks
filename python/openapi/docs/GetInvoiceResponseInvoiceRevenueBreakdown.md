# GetInvoiceResponseInvoiceRevenueBreakdown

The breakdown of the revenue for the invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**subtotal** | **float** |  | 
**overage** | **float** |  | 
**discount** | **float** |  | 
**credits_used** | **float** |  | 
**tax** | **float** |  | 

## Example

```python
from openapi.models.get_invoice_response_invoice_revenue_breakdown import GetInvoiceResponseInvoiceRevenueBreakdown

# TODO update the JSON string below
json = "{}"
# create an instance of GetInvoiceResponseInvoiceRevenueBreakdown from a JSON string
get_invoice_response_invoice_revenue_breakdown_instance = GetInvoiceResponseInvoiceRevenueBreakdown.from_json(json)
# print the JSON string representation of the object
print(GetInvoiceResponseInvoiceRevenueBreakdown.to_json())

# convert the object into a dict
get_invoice_response_invoice_revenue_breakdown_dict = get_invoice_response_invoice_revenue_breakdown_instance.to_dict()
# create an instance of GetInvoiceResponseInvoiceRevenueBreakdown from a dict
get_invoice_response_invoice_revenue_breakdown_from_dict = GetInvoiceResponseInvoiceRevenueBreakdown.from_dict(get_invoice_response_invoice_revenue_breakdown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


