# ValidationErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Code** | **string** | Specific machine-readable error code | 
**Message** | **string** | Human-readable error explanation | 
**Param** | Pointer to **string** | Single parameter that failed validation | [optional] 
**Params** | Pointer to [**[]ValidationErrorResponseParamsInner**](ValidationErrorResponseParamsInner.md) | Multiple parameters that failed validation | [optional] 

## Methods

### NewValidationErrorResponse

`func NewValidationErrorResponse(type_ string, code string, message string, ) *ValidationErrorResponse`

NewValidationErrorResponse instantiates a new ValidationErrorResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidationErrorResponseWithDefaults

`func NewValidationErrorResponseWithDefaults() *ValidationErrorResponse`

NewValidationErrorResponseWithDefaults instantiates a new ValidationErrorResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ValidationErrorResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ValidationErrorResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ValidationErrorResponse) SetType(v string)`

SetType sets Type field to given value.


### GetCode

`func (o *ValidationErrorResponse) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ValidationErrorResponse) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ValidationErrorResponse) SetCode(v string)`

SetCode sets Code field to given value.


### GetMessage

`func (o *ValidationErrorResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ValidationErrorResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ValidationErrorResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetParam

`func (o *ValidationErrorResponse) GetParam() string`

GetParam returns the Param field if non-nil, zero value otherwise.

### GetParamOk

`func (o *ValidationErrorResponse) GetParamOk() (*string, bool)`

GetParamOk returns a tuple with the Param field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParam

`func (o *ValidationErrorResponse) SetParam(v string)`

SetParam sets Param field to given value.

### HasParam

`func (o *ValidationErrorResponse) HasParam() bool`

HasParam returns a boolean if a field has been set.

### GetParams

`func (o *ValidationErrorResponse) GetParams() []ValidationErrorResponseParamsInner`

GetParams returns the Params field if non-nil, zero value otherwise.

### GetParamsOk

`func (o *ValidationErrorResponse) GetParamsOk() (*[]ValidationErrorResponseParamsInner, bool)`

GetParamsOk returns a tuple with the Params field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParams

`func (o *ValidationErrorResponse) SetParams(v []ValidationErrorResponseParamsInner)`

SetParams sets Params field to given value.

### HasParams

`func (o *ValidationErrorResponse) HasParams() bool`

HasParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


