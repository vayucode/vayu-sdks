# ValidationErrorResponseParamsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Param** | **string** | The parameter that failed validation | 
**Message** | **string** | Why validation failed for this parameter | 

## Methods

### NewValidationErrorResponseParamsInner

`func NewValidationErrorResponseParamsInner(param string, message string, ) *ValidationErrorResponseParamsInner`

NewValidationErrorResponseParamsInner instantiates a new ValidationErrorResponseParamsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidationErrorResponseParamsInnerWithDefaults

`func NewValidationErrorResponseParamsInnerWithDefaults() *ValidationErrorResponseParamsInner`

NewValidationErrorResponseParamsInnerWithDefaults instantiates a new ValidationErrorResponseParamsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetParam

`func (o *ValidationErrorResponseParamsInner) GetParam() string`

GetParam returns the Param field if non-nil, zero value otherwise.

### GetParamOk

`func (o *ValidationErrorResponseParamsInner) GetParamOk() (*string, bool)`

GetParamOk returns a tuple with the Param field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParam

`func (o *ValidationErrorResponseParamsInner) SetParam(v string)`

SetParam sets Param field to given value.


### GetMessage

`func (o *ValidationErrorResponseParamsInner) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ValidationErrorResponseParamsInner) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ValidationErrorResponseParamsInner) SetMessage(v string)`

SetMessage sets Message field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


