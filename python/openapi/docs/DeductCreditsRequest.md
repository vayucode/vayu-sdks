# DeductCreditsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_amount** | **float** | The amount of credits to be deducted from the user. | 
**customer_id** | **str** | The ID of the customer to whom the credits will be deducted from. | 

## Example

```python
from openapi.models.deduct_credits_request import DeductCreditsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeductCreditsRequest from a JSON string
deduct_credits_request_instance = DeductCreditsRequest.from_json(json)
# print the JSON string representation of the object
print(DeductCreditsRequest.to_json())

# convert the object into a dict
deduct_credits_request_dict = deduct_credits_request_instance.to_dict()
# create an instance of DeductCreditsRequest from a dict
deduct_credits_request_from_dict = DeductCreditsRequest.from_dict(deduct_credits_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


