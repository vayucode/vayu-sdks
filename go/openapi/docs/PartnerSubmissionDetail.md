# PartnerSubmissionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReceivedAt** | **string** | The timestamp when the submission was received by the partner | 
**Status** | **string** | The status of the partner submission | 
**Error** | Pointer to **interface{}** | Error details if the submission failed, null otherwise | [optional] 

## Methods

### NewPartnerSubmissionDetail

`func NewPartnerSubmissionDetail(receivedAt string, status string, ) *PartnerSubmissionDetail`

NewPartnerSubmissionDetail instantiates a new PartnerSubmissionDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPartnerSubmissionDetailWithDefaults

`func NewPartnerSubmissionDetailWithDefaults() *PartnerSubmissionDetail`

NewPartnerSubmissionDetailWithDefaults instantiates a new PartnerSubmissionDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReceivedAt

`func (o *PartnerSubmissionDetail) GetReceivedAt() string`

GetReceivedAt returns the ReceivedAt field if non-nil, zero value otherwise.

### GetReceivedAtOk

`func (o *PartnerSubmissionDetail) GetReceivedAtOk() (*string, bool)`

GetReceivedAtOk returns a tuple with the ReceivedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceivedAt

`func (o *PartnerSubmissionDetail) SetReceivedAt(v string)`

SetReceivedAt sets ReceivedAt field to given value.


### GetStatus

`func (o *PartnerSubmissionDetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PartnerSubmissionDetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PartnerSubmissionDetail) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetError

`func (o *PartnerSubmissionDetail) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *PartnerSubmissionDetail) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *PartnerSubmissionDetail) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *PartnerSubmissionDetail) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *PartnerSubmissionDetail) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *PartnerSubmissionDetail) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


