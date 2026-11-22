# InvoicePayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the payment | 
**var_date** | **datetime** | The date of the payment | 
**amount** | **float** | The amount of the payment | 
**currency** | [**Currency**](Currency.md) |  | 
**payment_method** | **str** | The method the payment was made with | [optional] 
**status** | **str** | The status of the payment | [optional] 

## Example

```python
from openapi.models.invoice_payment import InvoicePayment

# TODO update the JSON string below
json = "{}"
# create an instance of InvoicePayment from a JSON string
invoice_payment_instance = InvoicePayment.from_json(json)
# print the JSON string representation of the object
print(InvoicePayment.to_json())

# convert the object into a dict
invoice_payment_dict = invoice_payment_instance.to_dict()
# create an instance of InvoicePayment from a dict
invoice_payment_from_dict = InvoicePayment.from_dict(invoice_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


