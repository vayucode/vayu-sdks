# DeletePlanResponsePlan


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
**deleted_at** | **str** |  | 

## Example

```python
from openapi.models.delete_plan_response_plan import DeletePlanResponsePlan

# TODO update the JSON string below
json = "{}"
# create an instance of DeletePlanResponsePlan from a JSON string
delete_plan_response_plan_instance = DeletePlanResponsePlan.from_json(json)
# print the JSON string representation of the object
print(DeletePlanResponsePlan.to_json())

# convert the object into a dict
delete_plan_response_plan_dict = delete_plan_response_plan_instance.to_dict()
# create an instance of DeletePlanResponsePlan from a dict
delete_plan_response_plan_from_dict = DeletePlanResponsePlan.from_dict(delete_plan_response_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


