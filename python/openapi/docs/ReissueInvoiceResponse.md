# ReissueInvoiceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**ReissueInvoiceResponseInvoice**](ReissueInvoiceResponseInvoice.md) |  | 
**replacement_invoice_id** | **str** | The id of the replacement invoice. For a manually created invoice it is returned by the call that reissues it, and only by that call. For an invoice generated from a contract it is null while the replacement is still being generated. A later call returns it once the replacement exists and can be matched to this invoice; if it cannot be matched, the call returns null and asks again for the replacement to be generated. | 

## Example

```python
from openapi.models.reissue_invoice_response import ReissueInvoiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReissueInvoiceResponse from a JSON string
reissue_invoice_response_instance = ReissueInvoiceResponse.from_json(json)
# print the JSON string representation of the object
print(ReissueInvoiceResponse.to_json())

# convert the object into a dict
reissue_invoice_response_dict = reissue_invoice_response_instance.to_dict()
# create an instance of ReissueInvoiceResponse from a dict
reissue_invoice_response_from_dict = ReissueInvoiceResponse.from_dict(reissue_invoice_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


