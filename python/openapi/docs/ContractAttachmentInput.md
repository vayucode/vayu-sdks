# ContractAttachmentInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | The name of the file, including its extension | 
**content** | **str** | The base64-encoded content of the PDF file | 

## Example

```python
from openapi.models.contract_attachment_input import ContractAttachmentInput

# TODO update the JSON string below
json = "{}"
# create an instance of ContractAttachmentInput from a JSON string
contract_attachment_input_instance = ContractAttachmentInput.from_json(json)
# print the JSON string representation of the object
print(ContractAttachmentInput.to_json())

# convert the object into a dict
contract_attachment_input_dict = contract_attachment_input_instance.to_dict()
# create an instance of ContractAttachmentInput from a dict
contract_attachment_input_from_dict = ContractAttachmentInput.from_dict(contract_attachment_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


