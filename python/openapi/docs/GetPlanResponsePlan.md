# GetPlanResponsePlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the plan | 
**status** | [**PlanStatus**](PlanStatus.md) |  | 
**billing_data** | [**PlanBillingData**](PlanBillingData.md) |  | 
**external_id** | **str** | A caller-owned external id for the plan. Once set, the plan can be fetched or deleted by passing this value in place of the Vayu id on the /plans/{planId} endpoints. | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.get_plan_response_plan import GetPlanResponsePlan

# TODO update the JSON string below
json = "{}"
# create an instance of GetPlanResponsePlan from a JSON string
get_plan_response_plan_instance = GetPlanResponsePlan.from_json(json)
# print the JSON string representation of the object
print(GetPlanResponsePlan.to_json())

# convert the object into a dict
get_plan_response_plan_dict = get_plan_response_plan_instance.to_dict()
# create an instance of GetPlanResponsePlan from a dict
get_plan_response_plan_from_dict = GetPlanResponsePlan.from_dict(get_plan_response_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


