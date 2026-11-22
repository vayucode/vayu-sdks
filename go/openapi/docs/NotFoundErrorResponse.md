# NotFoundErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Code** | **string** |  | 
**Message** | **string** | Human-readable error explanation | 
**RequiredScope** | Pointer to **string** | Scope the token was missing, present on insufficient_scope errors | [optional] 

## Methods

### NewNotFoundErrorResponse

`func NewNotFoundErrorResponse(type_ string, code string, message string, ) *NotFoundErrorResponse`

NewNotFoundErrorResponse instantiates a new NotFoundErrorResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNotFoundErrorResponseWithDefaults

`func NewNotFoundErrorResponseWithDefaults() *NotFoundErrorResponse`

NewNotFoundErrorResponseWithDefaults instantiates a new NotFoundErrorResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *NotFoundErrorResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *NotFoundErrorResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *NotFoundErrorResponse) SetType(v string)`

SetType sets Type field to given value.


### GetCode

`func (o *NotFoundErrorResponse) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *NotFoundErrorResponse) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *NotFoundErrorResponse) SetCode(v string)`

SetCode sets Code field to given value.


### GetMessage

`func (o *NotFoundErrorResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *NotFoundErrorResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *NotFoundErrorResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetRequiredScope

`func (o *NotFoundErrorResponse) GetRequiredScope() string`

GetRequiredScope returns the RequiredScope field if non-nil, zero value otherwise.

### GetRequiredScopeOk

`func (o *NotFoundErrorResponse) GetRequiredScopeOk() (*string, bool)`

GetRequiredScopeOk returns a tuple with the RequiredScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredScope

`func (o *NotFoundErrorResponse) SetRequiredScope(v string)`

SetRequiredScope sets RequiredScope field to given value.

### HasRequiredScope

`func (o *NotFoundErrorResponse) HasRequiredScope() bool`

HasRequiredScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


