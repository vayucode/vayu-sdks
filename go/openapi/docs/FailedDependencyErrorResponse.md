# FailedDependencyErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Code** | **string** | Specific machine-readable error code | 
**Message** | **string** | Human-readable error explanation | 
**RequiredScope** | Pointer to **string** | Scope the token was missing, present on insufficient_scope errors | [optional] 

## Methods

### NewFailedDependencyErrorResponse

`func NewFailedDependencyErrorResponse(type_ string, code string, message string, ) *FailedDependencyErrorResponse`

NewFailedDependencyErrorResponse instantiates a new FailedDependencyErrorResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFailedDependencyErrorResponseWithDefaults

`func NewFailedDependencyErrorResponseWithDefaults() *FailedDependencyErrorResponse`

NewFailedDependencyErrorResponseWithDefaults instantiates a new FailedDependencyErrorResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *FailedDependencyErrorResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FailedDependencyErrorResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FailedDependencyErrorResponse) SetType(v string)`

SetType sets Type field to given value.


### GetCode

`func (o *FailedDependencyErrorResponse) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FailedDependencyErrorResponse) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FailedDependencyErrorResponse) SetCode(v string)`

SetCode sets Code field to given value.


### GetMessage

`func (o *FailedDependencyErrorResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *FailedDependencyErrorResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *FailedDependencyErrorResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetRequiredScope

`func (o *FailedDependencyErrorResponse) GetRequiredScope() string`

GetRequiredScope returns the RequiredScope field if non-nil, zero value otherwise.

### GetRequiredScopeOk

`func (o *FailedDependencyErrorResponse) GetRequiredScopeOk() (*string, bool)`

GetRequiredScopeOk returns a tuple with the RequiredScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredScope

`func (o *FailedDependencyErrorResponse) SetRequiredScope(v string)`

SetRequiredScope sets RequiredScope field to given value.

### HasRequiredScope

`func (o *FailedDependencyErrorResponse) HasRequiredScope() bool`

HasRequiredScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


