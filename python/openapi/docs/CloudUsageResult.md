# CloudUsageResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the cloud usage submission result | 
**error_code** | **str** | Error code if the submission was rejected | [optional] 
**usage_window** | [**UsageWindow**](UsageWindow.md) |  | 
**error_message** | **str** | Detailed error message if the submission was rejected | [optional] 
**correlation_id** | **str** | Unique identifier for tracing the submission through the system | 
**idempotency_key** | **str** | Key used to ensure the submission is processed exactly once | 
**meter_dimension** | **str** | The dimension of the meter being reported (e.g., API_CALLS, STORAGE_GB) | 
**accepted_quantity** | **float** | The quantity that was accepted by the cloud provider | 
**partner_submission** | [**Dict[str, PartnerSubmissionDetail]**](PartnerSubmissionDetail.md) | Details of submissions to partner systems, keyed by request ID | 
**quantity_submitted** | **float** | The total quantity that was submitted | 
**timestamp_submitted** | **datetime** | The timestamp when the usage was submitted | 
**aws_customer_identifier** | **str** | The AWS customer identifier associated with this usage | 

## Example

```python
from openapi.models.cloud_usage_result import CloudUsageResult

# TODO update the JSON string below
json = "{}"
# create an instance of CloudUsageResult from a JSON string
cloud_usage_result_instance = CloudUsageResult.from_json(json)
# print the JSON string representation of the object
print(CloudUsageResult.to_json())

# convert the object into a dict
cloud_usage_result_dict = cloud_usage_result_instance.to_dict()
# create an instance of CloudUsageResult from a dict
cloud_usage_result_from_dict = CloudUsageResult.from_dict(cloud_usage_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


