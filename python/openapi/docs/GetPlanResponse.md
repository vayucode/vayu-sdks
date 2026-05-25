# GetPlanResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | [**GetPlanResponsePlan**](GetPlanResponsePlan.md) |  | 

## Example

```python
from openapi.models.get_plan_response import GetPlanResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPlanResponse from a JSON string
get_plan_response_instance = GetPlanResponse.from_json(json)
# print the JSON string representation of the object
print(GetPlanResponse.to_json())

# convert the object into a dict
get_plan_response_dict = get_plan_response_instance.to_dict()
# create an instance of GetPlanResponse from a dict
get_plan_response_from_dict = GetPlanResponse.from_dict(get_plan_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


