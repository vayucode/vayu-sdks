# PlanBillingData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_interval** | [**BillingInterval**](BillingInterval.md) |  | 
**duration** | [**PlanDuration**](PlanDuration.md) |  | 
**payment_term** | [**PaymentTerm**](PaymentTerm.md) |  | 
**auto_renewal** | **bool** |  | [default to False]
**pro_rated** | **bool** |  | [optional] 
**billing_date** | [**BillingDate**](BillingDate.md) |  | [optional] 
**renewal_duration** | **float** | months each automatic renewal runs for; the term before it when not stated | [optional] 
**renews_up_to_n_times** | **float** | how many times the contract renews automatically; no limit when not stated | [optional] 

## Example

```python
from openapi.models.plan_billing_data import PlanBillingData

# TODO update the JSON string below
json = "{}"
# create an instance of PlanBillingData from a JSON string
plan_billing_data_instance = PlanBillingData.from_json(json)
# print the JSON string representation of the object
print(PlanBillingData.to_json())

# convert the object into a dict
plan_billing_data_dict = plan_billing_data_instance.to_dict()
# create an instance of PlanBillingData from a dict
plan_billing_data_from_dict = PlanBillingData.from_dict(plan_billing_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


