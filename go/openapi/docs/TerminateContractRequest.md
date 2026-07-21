# TerminateContractRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TerminationDate** | Pointer to **time.Time** | The date on which the contract should be terminated. If omitted, the contract is terminated immediately. | [optional] 

## Methods

### NewTerminateContractRequest

`func NewTerminateContractRequest() *TerminateContractRequest`

NewTerminateContractRequest instantiates a new TerminateContractRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminateContractRequestWithDefaults

`func NewTerminateContractRequestWithDefaults() *TerminateContractRequest`

NewTerminateContractRequestWithDefaults instantiates a new TerminateContractRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTerminationDate

`func (o *TerminateContractRequest) GetTerminationDate() time.Time`

GetTerminationDate returns the TerminationDate field if non-nil, zero value otherwise.

### GetTerminationDateOk

`func (o *TerminateContractRequest) GetTerminationDateOk() (*time.Time, bool)`

GetTerminationDateOk returns a tuple with the TerminationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminationDate

`func (o *TerminateContractRequest) SetTerminationDate(v time.Time)`

SetTerminationDate sets TerminationDate field to given value.

### HasTerminationDate

`func (o *TerminateContractRequest) HasTerminationDate() bool`

HasTerminationDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


