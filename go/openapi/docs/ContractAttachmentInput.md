# ContractAttachmentInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileName** | **string** | The name of the file, including its extension | 
**Content** | **string** | The base64-encoded content of the PDF file | 

## Methods

### NewContractAttachmentInput

`func NewContractAttachmentInput(fileName string, content string, ) *ContractAttachmentInput`

NewContractAttachmentInput instantiates a new ContractAttachmentInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContractAttachmentInputWithDefaults

`func NewContractAttachmentInputWithDefaults() *ContractAttachmentInput`

NewContractAttachmentInputWithDefaults instantiates a new ContractAttachmentInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileName

`func (o *ContractAttachmentInput) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *ContractAttachmentInput) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *ContractAttachmentInput) SetFileName(v string)`

SetFileName sets FileName field to given value.


### GetContent

`func (o *ContractAttachmentInput) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ContractAttachmentInput) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ContractAttachmentInput) SetContent(v string)`

SetContent sets Content field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


