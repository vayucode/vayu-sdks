# PaymentInfo

The payment information of the invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **str** |  | [optional] 
**var_date** | **datetime** |  | [optional] 
**payment_method** | **str** |  | [optional] 
**payment_method_id** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**status** | **str** |  | [optional] 
**note** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**deposit_to** | [**PaymentInfoDepositTo**](PaymentInfoDepositTo.md) |  | [optional] 

## Example

```python
from openapi.models.payment_info import PaymentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentInfo from a JSON string
payment_info_instance = PaymentInfo.from_json(json)
# print the JSON string representation of the object
print(PaymentInfo.to_json())

# convert the object into a dict
payment_info_dict = payment_info_instance.to_dict()
# create an instance of PaymentInfo from a dict
payment_info_from_dict = PaymentInfo.from_dict(payment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


