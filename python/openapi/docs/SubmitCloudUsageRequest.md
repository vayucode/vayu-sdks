# SubmitCloudUsageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[CloudUsageResult]**](CloudUsageResult.md) | Array of usage submission results from the cloud provider | 
**product_code** | **str** | The product code identifying the cloud marketplace product | 

## Example

```python
from openapi.models.submit_cloud_usage_request import SubmitCloudUsageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitCloudUsageRequest from a JSON string
submit_cloud_usage_request_instance = SubmitCloudUsageRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitCloudUsageRequest.to_json())

# convert the object into a dict
submit_cloud_usage_request_dict = submit_cloud_usage_request_instance.to_dict()
# create an instance of SubmitCloudUsageRequest from a dict
submit_cloud_usage_request_from_dict = SubmitCloudUsageRequest.from_dict(submit_cloud_usage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


