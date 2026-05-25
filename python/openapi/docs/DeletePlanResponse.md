# DeletePlanResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | [**DeletePlanResponsePlan**](DeletePlanResponsePlan.md) |  | 

## Example

```python
from openapi.models.delete_plan_response import DeletePlanResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeletePlanResponse from a JSON string
delete_plan_response_instance = DeletePlanResponse.from_json(json)
# print the JSON string representation of the object
print(DeletePlanResponse.to_json())

# convert the object into a dict
delete_plan_response_dict = delete_plan_response_instance.to_dict()
# create an instance of DeletePlanResponse from a dict
delete_plan_response_from_dict = DeletePlanResponse.from_dict(delete_plan_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


