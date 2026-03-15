# GrantCreditsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_amount** | **float** | The amount of credits to be granted to the user. | 
**customer_id** | **str** | The ID of the customer to whom the credits will be granted. | 

## Example

```python
from openapi.models.grant_credits_request import GrantCreditsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GrantCreditsRequest from a JSON string
grant_credits_request_instance = GrantCreditsRequest.from_json(json)
# print the JSON string representation of the object
print(GrantCreditsRequest.to_json())

# convert the object into a dict
grant_credits_request_dict = grant_credits_request_instance.to_dict()
# create an instance of GrantCreditsRequest from a dict
grant_credits_request_from_dict = GrantCreditsRequest.from_dict(grant_credits_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


