# CustomField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IntegrationSource** | Pointer to **string** | The integration provider (e.g., \&quot;Salesforce\&quot;, \&quot;HubSpot\&quot;) | [optional] 
**IntegrationEntityType** | Pointer to [**IntegrationEntityTypes**](IntegrationEntityTypes.md) |  | [optional] 
**FieldPath** | Pointer to **string** | The path to the field in the integration (e.g., \&quot;root.path.field\&quot;) | [optional] 
**VayuCustomFieldName** | **string** | The name of the field in Vayu (e.g., \&quot;AE Name\&quot;) | 
**ValueType** | [**CustomFieldValueTypes**](CustomFieldValueTypes.md) |  | 
**Value** | Pointer to **interface{}** | The actual value of the custom field | [optional] 

## Methods

### NewCustomField

`func NewCustomField(vayuCustomFieldName string, valueType CustomFieldValueTypes, ) *CustomField`

NewCustomField instantiates a new CustomField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomFieldWithDefaults

`func NewCustomFieldWithDefaults() *CustomField`

NewCustomFieldWithDefaults instantiates a new CustomField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegrationSource

`func (o *CustomField) GetIntegrationSource() string`

GetIntegrationSource returns the IntegrationSource field if non-nil, zero value otherwise.

### GetIntegrationSourceOk

`func (o *CustomField) GetIntegrationSourceOk() (*string, bool)`

GetIntegrationSourceOk returns a tuple with the IntegrationSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSource

`func (o *CustomField) SetIntegrationSource(v string)`

SetIntegrationSource sets IntegrationSource field to given value.

### HasIntegrationSource

`func (o *CustomField) HasIntegrationSource() bool`

HasIntegrationSource returns a boolean if a field has been set.

### GetIntegrationEntityType

`func (o *CustomField) GetIntegrationEntityType() IntegrationEntityTypes`

GetIntegrationEntityType returns the IntegrationEntityType field if non-nil, zero value otherwise.

### GetIntegrationEntityTypeOk

`func (o *CustomField) GetIntegrationEntityTypeOk() (*IntegrationEntityTypes, bool)`

GetIntegrationEntityTypeOk returns a tuple with the IntegrationEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationEntityType

`func (o *CustomField) SetIntegrationEntityType(v IntegrationEntityTypes)`

SetIntegrationEntityType sets IntegrationEntityType field to given value.

### HasIntegrationEntityType

`func (o *CustomField) HasIntegrationEntityType() bool`

HasIntegrationEntityType returns a boolean if a field has been set.

### GetFieldPath

`func (o *CustomField) GetFieldPath() string`

GetFieldPath returns the FieldPath field if non-nil, zero value otherwise.

### GetFieldPathOk

`func (o *CustomField) GetFieldPathOk() (*string, bool)`

GetFieldPathOk returns a tuple with the FieldPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldPath

`func (o *CustomField) SetFieldPath(v string)`

SetFieldPath sets FieldPath field to given value.

### HasFieldPath

`func (o *CustomField) HasFieldPath() bool`

HasFieldPath returns a boolean if a field has been set.

### GetVayuCustomFieldName

`func (o *CustomField) GetVayuCustomFieldName() string`

GetVayuCustomFieldName returns the VayuCustomFieldName field if non-nil, zero value otherwise.

### GetVayuCustomFieldNameOk

`func (o *CustomField) GetVayuCustomFieldNameOk() (*string, bool)`

GetVayuCustomFieldNameOk returns a tuple with the VayuCustomFieldName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuCustomFieldName

`func (o *CustomField) SetVayuCustomFieldName(v string)`

SetVayuCustomFieldName sets VayuCustomFieldName field to given value.


### GetValueType

`func (o *CustomField) GetValueType() CustomFieldValueTypes`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *CustomField) GetValueTypeOk() (*CustomFieldValueTypes, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *CustomField) SetValueType(v CustomFieldValueTypes)`

SetValueType sets ValueType field to given value.


### GetValue

`func (o *CustomField) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CustomField) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CustomField) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *CustomField) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *CustomField) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *CustomField) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


