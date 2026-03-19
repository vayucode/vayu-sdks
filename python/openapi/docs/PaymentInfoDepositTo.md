# PaymentInfoDepositTo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from openapi.models.payment_info_deposit_to import PaymentInfoDepositTo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentInfoDepositTo from a JSON string
payment_info_deposit_to_instance = PaymentInfoDepositTo.from_json(json)
# print the JSON string representation of the object
print(PaymentInfoDepositTo.to_json())

# convert the object into a dict
payment_info_deposit_to_dict = payment_info_deposit_to_instance.to_dict()
# create an instance of PaymentInfoDepositTo from a dict
payment_info_deposit_to_from_dict = PaymentInfoDepositTo.from_dict(payment_info_deposit_to_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


