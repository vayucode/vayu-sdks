# CreditTopUpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | The ID of the customer to be billed for the credit top-up. | 
**credit_grant** | [**CreditTopUpRequestCreditGrant**](CreditTopUpRequestCreditGrant.md) |  | 

## Example

```python
from openapi.models.credit_top_up_request import CreditTopUpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreditTopUpRequest from a JSON string
credit_top_up_request_instance = CreditTopUpRequest.from_json(json)
# print the JSON string representation of the object
print(CreditTopUpRequest.to_json())

# convert the object into a dict
credit_top_up_request_dict = credit_top_up_request_instance.to_dict()
# create an instance of CreditTopUpRequest from a dict
credit_top_up_request_from_dict = CreditTopUpRequest.from_dict(credit_top_up_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


