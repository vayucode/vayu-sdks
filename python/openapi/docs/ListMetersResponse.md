# ListMetersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meters** | [**List[GetMeterResponseMeter]**](GetMeterResponseMeter.md) |  | 
**total** | **float** |  | 
**has_more** | **bool** |  | 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from openapi.models.list_meters_response import ListMetersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMetersResponse from a JSON string
list_meters_response_instance = ListMetersResponse.from_json(json)
# print the JSON string representation of the object
print(ListMetersResponse.to_json())

# convert the object into a dict
list_meters_response_dict = list_meters_response_instance.to_dict()
# create an instance of ListMetersResponse from a dict
list_meters_response_from_dict = ListMetersResponse.from_dict(list_meters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


