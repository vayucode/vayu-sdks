# ListPlansResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plans** | [**List[GetPlanResponsePlan]**](GetPlanResponsePlan.md) |  | 
**total** | **float** |  | 
**has_more** | **bool** |  | 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from openapi.models.list_plans_response import ListPlansResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPlansResponse from a JSON string
list_plans_response_instance = ListPlansResponse.from_json(json)
# print the JSON string representation of the object
print(ListPlansResponse.to_json())

# convert the object into a dict
list_plans_response_dict = list_plans_response_instance.to_dict()
# create an instance of ListPlansResponse from a dict
list_plans_response_from_dict = ListPlansResponse.from_dict(list_plans_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


