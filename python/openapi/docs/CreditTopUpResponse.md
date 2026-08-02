# CreditTopUpResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_id** | **str** | The ID of the one-off invoice created for the credit top-up. | 
**customer_id** | **str** | The ID of the customer the invoice was created for. | 

## Example

```python
from openapi.models.credit_top_up_response import CreditTopUpResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreditTopUpResponse from a JSON string
credit_top_up_response_instance = CreditTopUpResponse.from_json(json)
# print the JSON string representation of the object
print(CreditTopUpResponse.to_json())

# convert the object into a dict
credit_top_up_response_dict = credit_top_up_response_instance.to_dict()
# create an instance of CreditTopUpResponse from a dict
credit_top_up_response_from_dict = CreditTopUpResponse.from_dict(credit_top_up_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


