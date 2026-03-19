# CustomFieldValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomFieldDefinitionId** | **string** |  | 
**Value** | Pointer to **string** |  | [optional] 
**FieldName** | Pointer to **string** |  | [optional] 

## Methods

### NewCustomFieldValue

`func NewCustomFieldValue(customFieldDefinitionId string, ) *CustomFieldValue`

NewCustomFieldValue instantiates a new CustomFieldValue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomFieldValueWithDefaults

`func NewCustomFieldValueWithDefaults() *CustomFieldValue`

NewCustomFieldValueWithDefaults instantiates a new CustomFieldValue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomFieldDefinitionId

`func (o *CustomFieldValue) GetCustomFieldDefinitionId() string`

GetCustomFieldDefinitionId returns the CustomFieldDefinitionId field if non-nil, zero value otherwise.

### GetCustomFieldDefinitionIdOk

`func (o *CustomFieldValue) GetCustomFieldDefinitionIdOk() (*string, bool)`

GetCustomFieldDefinitionIdOk returns a tuple with the CustomFieldDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFieldDefinitionId

`func (o *CustomFieldValue) SetCustomFieldDefinitionId(v string)`

SetCustomFieldDefinitionId sets CustomFieldDefinitionId field to given value.


### GetValue

`func (o *CustomFieldValue) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CustomFieldValue) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CustomFieldValue) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *CustomFieldValue) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetFieldName

`func (o *CustomFieldValue) GetFieldName() string`

GetFieldName returns the FieldName field if non-nil, zero value otherwise.

### GetFieldNameOk

`func (o *CustomFieldValue) GetFieldNameOk() (*string, bool)`

GetFieldNameOk returns a tuple with the FieldName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldName

`func (o *CustomFieldValue) SetFieldName(v string)`

SetFieldName sets FieldName field to given value.

### HasFieldName

`func (o *CustomFieldValue) HasFieldName() bool`

HasFieldName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


