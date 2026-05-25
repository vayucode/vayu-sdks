# ListCustomFieldsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fields** | [**List[CreateCustomFieldResponseCustomField]**](CreateCustomFieldResponseCustomField.md) |  | 
**total** | **float** |  | 
**has_more** | **bool** |  | 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from openapi.models.list_custom_fields_response import ListCustomFieldsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomFieldsResponse from a JSON string
list_custom_fields_response_instance = ListCustomFieldsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomFieldsResponse.to_json())

# convert the object into a dict
list_custom_fields_response_dict = list_custom_fields_response_instance.to_dict()
# create an instance of ListCustomFieldsResponse from a dict
list_custom_fields_response_from_dict = ListCustomFieldsResponse.from_dict(list_custom_fields_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


