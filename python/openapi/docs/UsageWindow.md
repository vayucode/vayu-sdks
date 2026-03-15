# UsageWindow

The time window for which the usage was submitted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **datetime** | The start timestamp of the usage window in ISO 8601 format | 
**end** | **datetime** | The end timestamp of the usage window in ISO 8601 format | 

## Example

```python
from openapi.models.usage_window import UsageWindow

# TODO update the JSON string below
json = "{}"
# create an instance of UsageWindow from a JSON string
usage_window_instance = UsageWindow.from_json(json)
# print the JSON string representation of the object
print(UsageWindow.to_json())

# convert the object into a dict
usage_window_dict = usage_window_instance.to_dict()
# create an instance of UsageWindow from a dict
usage_window_from_dict = UsageWindow.from_dict(usage_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


