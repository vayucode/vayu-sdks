# PartnerSubmissionDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**received_at** | **str** | The timestamp when the submission was received by the partner | 
**status** | **str** | The status of the partner submission | 
**error** | **object** | Error details if the submission failed, null otherwise | [optional] 

## Example

```python
from openapi.models.partner_submission_detail import PartnerSubmissionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerSubmissionDetail from a JSON string
partner_submission_detail_instance = PartnerSubmissionDetail.from_json(json)
# print the JSON string representation of the object
print(PartnerSubmissionDetail.to_json())

# convert the object into a dict
partner_submission_detail_dict = partner_submission_detail_instance.to_dict()
# create an instance of PartnerSubmissionDetail from a dict
partner_submission_detail_from_dict = PartnerSubmissionDetail.from_dict(partner_submission_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


