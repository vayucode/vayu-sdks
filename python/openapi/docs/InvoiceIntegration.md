# InvoiceIntegration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The external system the invoice was exported to | 
**id** | **str** | The id of the invoice in the external system | 
**name** | **str** | The document number of the invoice in the external system, when available | [optional] 

## Example

```python
from openapi.models.invoice_integration import InvoiceIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceIntegration from a JSON string
invoice_integration_instance = InvoiceIntegration.from_json(json)
# print the JSON string representation of the object
print(InvoiceIntegration.to_json())

# convert the object into a dict
invoice_integration_dict = invoice_integration_instance.to_dict()
# create an instance of InvoiceIntegration from a dict
invoice_integration_from_dict = InvoiceIntegration.from_dict(invoice_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


