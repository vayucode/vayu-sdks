# ForbiddenErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Code** | **string** | Specific machine-readable error code | 
**Message** | **string** | Human-readable error explanation | 
**RequiredScope** | Pointer to **string** | Scope the token was missing, present on insufficient_scope errors | [optional] 

## Methods

### NewForbiddenErrorResponse

`func NewForbiddenErrorResponse(type_ string, code string, message string, ) *ForbiddenErrorResponse`

NewForbiddenErrorResponse instantiates a new ForbiddenErrorResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForbiddenErrorResponseWithDefaults

`func NewForbiddenErrorResponseWithDefaults() *ForbiddenErrorResponse`

NewForbiddenErrorResponseWithDefaults instantiates a new ForbiddenErrorResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ForbiddenErrorResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ForbiddenErrorResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ForbiddenErrorResponse) SetType(v string)`

SetType sets Type field to given value.


### GetCode

`func (o *ForbiddenErrorResponse) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ForbiddenErrorResponse) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ForbiddenErrorResponse) SetCode(v string)`

SetCode sets Code field to given value.


### GetMessage

`func (o *ForbiddenErrorResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ForbiddenErrorResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ForbiddenErrorResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetRequiredScope

`func (o *ForbiddenErrorResponse) GetRequiredScope() string`

GetRequiredScope returns the RequiredScope field if non-nil, zero value otherwise.

### GetRequiredScopeOk

`func (o *ForbiddenErrorResponse) GetRequiredScopeOk() (*string, bool)`

GetRequiredScopeOk returns a tuple with the RequiredScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredScope

`func (o *ForbiddenErrorResponse) SetRequiredScope(v string)`

SetRequiredScope sets RequiredScope field to given value.

### HasRequiredScope

`func (o *ForbiddenErrorResponse) HasRequiredScope() bool`

HasRequiredScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


