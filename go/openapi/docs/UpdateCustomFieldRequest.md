# UpdateCustomFieldRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VayuEntity** | Pointer to [**CustomFieldEntities**](CustomFieldEntities.md) |  | [optional] 
**VayuCustomFieldName** | Pointer to **string** | The name of the custom field in Vayu | [optional] 
**ValueType** | Pointer to [**CustomFieldValueTypes**](CustomFieldValueTypes.md) |  | [optional] 
**IntegrationSource** | Pointer to **string** | The integration provider (e.g., \&quot;Salesforce\&quot;, \&quot;HubSpot\&quot;) | [optional] 
**IntegrationEntityType** | Pointer to [**IntegrationEntityTypes**](IntegrationEntityTypes.md) |  | [optional] 
**FieldPath** | Pointer to **string** | The path to the field in the integration | [optional] 
**AllowedValues** | Pointer to **[]string** | Allowed values for Enum type fields | [optional] 
**DefaultValue** | Pointer to **string** | Default value for Enum type fields. Must be one of allowedValues. | [optional] 

## Methods

### NewUpdateCustomFieldRequest

`func NewUpdateCustomFieldRequest() *UpdateCustomFieldRequest`

NewUpdateCustomFieldRequest instantiates a new UpdateCustomFieldRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateCustomFieldRequestWithDefaults

`func NewUpdateCustomFieldRequestWithDefaults() *UpdateCustomFieldRequest`

NewUpdateCustomFieldRequestWithDefaults instantiates a new UpdateCustomFieldRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVayuEntity

`func (o *UpdateCustomFieldRequest) GetVayuEntity() CustomFieldEntities`

GetVayuEntity returns the VayuEntity field if non-nil, zero value otherwise.

### GetVayuEntityOk

`func (o *UpdateCustomFieldRequest) GetVayuEntityOk() (*CustomFieldEntities, bool)`

GetVayuEntityOk returns a tuple with the VayuEntity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuEntity

`func (o *UpdateCustomFieldRequest) SetVayuEntity(v CustomFieldEntities)`

SetVayuEntity sets VayuEntity field to given value.

### HasVayuEntity

`func (o *UpdateCustomFieldRequest) HasVayuEntity() bool`

HasVayuEntity returns a boolean if a field has been set.

### GetVayuCustomFieldName

`func (o *UpdateCustomFieldRequest) GetVayuCustomFieldName() string`

GetVayuCustomFieldName returns the VayuCustomFieldName field if non-nil, zero value otherwise.

### GetVayuCustomFieldNameOk

`func (o *UpdateCustomFieldRequest) GetVayuCustomFieldNameOk() (*string, bool)`

GetVayuCustomFieldNameOk returns a tuple with the VayuCustomFieldName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuCustomFieldName

`func (o *UpdateCustomFieldRequest) SetVayuCustomFieldName(v string)`

SetVayuCustomFieldName sets VayuCustomFieldName field to given value.

### HasVayuCustomFieldName

`func (o *UpdateCustomFieldRequest) HasVayuCustomFieldName() bool`

HasVayuCustomFieldName returns a boolean if a field has been set.

### GetValueType

`func (o *UpdateCustomFieldRequest) GetValueType() CustomFieldValueTypes`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *UpdateCustomFieldRequest) GetValueTypeOk() (*CustomFieldValueTypes, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *UpdateCustomFieldRequest) SetValueType(v CustomFieldValueTypes)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *UpdateCustomFieldRequest) HasValueType() bool`

HasValueType returns a boolean if a field has been set.

### GetIntegrationSource

`func (o *UpdateCustomFieldRequest) GetIntegrationSource() string`

GetIntegrationSource returns the IntegrationSource field if non-nil, zero value otherwise.

### GetIntegrationSourceOk

`func (o *UpdateCustomFieldRequest) GetIntegrationSourceOk() (*string, bool)`

GetIntegrationSourceOk returns a tuple with the IntegrationSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSource

`func (o *UpdateCustomFieldRequest) SetIntegrationSource(v string)`

SetIntegrationSource sets IntegrationSource field to given value.

### HasIntegrationSource

`func (o *UpdateCustomFieldRequest) HasIntegrationSource() bool`

HasIntegrationSource returns a boolean if a field has been set.

### GetIntegrationEntityType

`func (o *UpdateCustomFieldRequest) GetIntegrationEntityType() IntegrationEntityTypes`

GetIntegrationEntityType returns the IntegrationEntityType field if non-nil, zero value otherwise.

### GetIntegrationEntityTypeOk

`func (o *UpdateCustomFieldRequest) GetIntegrationEntityTypeOk() (*IntegrationEntityTypes, bool)`

GetIntegrationEntityTypeOk returns a tuple with the IntegrationEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationEntityType

`func (o *UpdateCustomFieldRequest) SetIntegrationEntityType(v IntegrationEntityTypes)`

SetIntegrationEntityType sets IntegrationEntityType field to given value.

### HasIntegrationEntityType

`func (o *UpdateCustomFieldRequest) HasIntegrationEntityType() bool`

HasIntegrationEntityType returns a boolean if a field has been set.

### GetFieldPath

`func (o *UpdateCustomFieldRequest) GetFieldPath() string`

GetFieldPath returns the FieldPath field if non-nil, zero value otherwise.

### GetFieldPathOk

`func (o *UpdateCustomFieldRequest) GetFieldPathOk() (*string, bool)`

GetFieldPathOk returns a tuple with the FieldPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldPath

`func (o *UpdateCustomFieldRequest) SetFieldPath(v string)`

SetFieldPath sets FieldPath field to given value.

### HasFieldPath

`func (o *UpdateCustomFieldRequest) HasFieldPath() bool`

HasFieldPath returns a boolean if a field has been set.

### GetAllowedValues

`func (o *UpdateCustomFieldRequest) GetAllowedValues() []string`

GetAllowedValues returns the AllowedValues field if non-nil, zero value otherwise.

### GetAllowedValuesOk

`func (o *UpdateCustomFieldRequest) GetAllowedValuesOk() (*[]string, bool)`

GetAllowedValuesOk returns a tuple with the AllowedValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedValues

`func (o *UpdateCustomFieldRequest) SetAllowedValues(v []string)`

SetAllowedValues sets AllowedValues field to given value.

### HasAllowedValues

`func (o *UpdateCustomFieldRequest) HasAllowedValues() bool`

HasAllowedValues returns a boolean if a field has been set.

### GetDefaultValue

`func (o *UpdateCustomFieldRequest) GetDefaultValue() string`

GetDefaultValue returns the DefaultValue field if non-nil, zero value otherwise.

### GetDefaultValueOk

`func (o *UpdateCustomFieldRequest) GetDefaultValueOk() (*string, bool)`

GetDefaultValueOk returns a tuple with the DefaultValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultValue

`func (o *UpdateCustomFieldRequest) SetDefaultValue(v string)`

SetDefaultValue sets DefaultValue field to given value.

### HasDefaultValue

`func (o *UpdateCustomFieldRequest) HasDefaultValue() bool`

HasDefaultValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


