# DeleteCustomFieldResponseCustomField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VayuEntity** | [**CustomFieldEntities**](CustomFieldEntities.md) |  | 
**VayuCustomFieldName** | **string** | The name of the custom field in Vayu | 
**ValueType** | [**CustomFieldValueTypes**](CustomFieldValueTypes.md) |  | 
**IntegrationSource** | Pointer to **string** | The integration provider (e.g., \&quot;Salesforce\&quot;, \&quot;HubSpot\&quot;) | [optional] 
**IntegrationEntityType** | Pointer to [**IntegrationEntityTypes**](IntegrationEntityTypes.md) |  | [optional] 
**FieldPath** | Pointer to **string** | The path to the field in the integration | [optional] 
**AllowedValues** | Pointer to **[]string** | Allowed values for Enum type fields | [optional] 
**DefaultValue** | Pointer to **string** | Default value for Enum type fields. Must be one of allowedValues. | [optional] 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 
**DeletedAt** | **string** |  | 

## Methods

### NewDeleteCustomFieldResponseCustomField

`func NewDeleteCustomFieldResponseCustomField(vayuEntity CustomFieldEntities, vayuCustomFieldName string, valueType CustomFieldValueTypes, id string, createdAt time.Time, updatedAt time.Time, deletedAt string, ) *DeleteCustomFieldResponseCustomField`

NewDeleteCustomFieldResponseCustomField instantiates a new DeleteCustomFieldResponseCustomField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteCustomFieldResponseCustomFieldWithDefaults

`func NewDeleteCustomFieldResponseCustomFieldWithDefaults() *DeleteCustomFieldResponseCustomField`

NewDeleteCustomFieldResponseCustomFieldWithDefaults instantiates a new DeleteCustomFieldResponseCustomField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVayuEntity

`func (o *DeleteCustomFieldResponseCustomField) GetVayuEntity() CustomFieldEntities`

GetVayuEntity returns the VayuEntity field if non-nil, zero value otherwise.

### GetVayuEntityOk

`func (o *DeleteCustomFieldResponseCustomField) GetVayuEntityOk() (*CustomFieldEntities, bool)`

GetVayuEntityOk returns a tuple with the VayuEntity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuEntity

`func (o *DeleteCustomFieldResponseCustomField) SetVayuEntity(v CustomFieldEntities)`

SetVayuEntity sets VayuEntity field to given value.


### GetVayuCustomFieldName

`func (o *DeleteCustomFieldResponseCustomField) GetVayuCustomFieldName() string`

GetVayuCustomFieldName returns the VayuCustomFieldName field if non-nil, zero value otherwise.

### GetVayuCustomFieldNameOk

`func (o *DeleteCustomFieldResponseCustomField) GetVayuCustomFieldNameOk() (*string, bool)`

GetVayuCustomFieldNameOk returns a tuple with the VayuCustomFieldName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuCustomFieldName

`func (o *DeleteCustomFieldResponseCustomField) SetVayuCustomFieldName(v string)`

SetVayuCustomFieldName sets VayuCustomFieldName field to given value.


### GetValueType

`func (o *DeleteCustomFieldResponseCustomField) GetValueType() CustomFieldValueTypes`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *DeleteCustomFieldResponseCustomField) GetValueTypeOk() (*CustomFieldValueTypes, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *DeleteCustomFieldResponseCustomField) SetValueType(v CustomFieldValueTypes)`

SetValueType sets ValueType field to given value.


### GetIntegrationSource

`func (o *DeleteCustomFieldResponseCustomField) GetIntegrationSource() string`

GetIntegrationSource returns the IntegrationSource field if non-nil, zero value otherwise.

### GetIntegrationSourceOk

`func (o *DeleteCustomFieldResponseCustomField) GetIntegrationSourceOk() (*string, bool)`

GetIntegrationSourceOk returns a tuple with the IntegrationSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSource

`func (o *DeleteCustomFieldResponseCustomField) SetIntegrationSource(v string)`

SetIntegrationSource sets IntegrationSource field to given value.

### HasIntegrationSource

`func (o *DeleteCustomFieldResponseCustomField) HasIntegrationSource() bool`

HasIntegrationSource returns a boolean if a field has been set.

### GetIntegrationEntityType

`func (o *DeleteCustomFieldResponseCustomField) GetIntegrationEntityType() IntegrationEntityTypes`

GetIntegrationEntityType returns the IntegrationEntityType field if non-nil, zero value otherwise.

### GetIntegrationEntityTypeOk

`func (o *DeleteCustomFieldResponseCustomField) GetIntegrationEntityTypeOk() (*IntegrationEntityTypes, bool)`

GetIntegrationEntityTypeOk returns a tuple with the IntegrationEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationEntityType

`func (o *DeleteCustomFieldResponseCustomField) SetIntegrationEntityType(v IntegrationEntityTypes)`

SetIntegrationEntityType sets IntegrationEntityType field to given value.

### HasIntegrationEntityType

`func (o *DeleteCustomFieldResponseCustomField) HasIntegrationEntityType() bool`

HasIntegrationEntityType returns a boolean if a field has been set.

### GetFieldPath

`func (o *DeleteCustomFieldResponseCustomField) GetFieldPath() string`

GetFieldPath returns the FieldPath field if non-nil, zero value otherwise.

### GetFieldPathOk

`func (o *DeleteCustomFieldResponseCustomField) GetFieldPathOk() (*string, bool)`

GetFieldPathOk returns a tuple with the FieldPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldPath

`func (o *DeleteCustomFieldResponseCustomField) SetFieldPath(v string)`

SetFieldPath sets FieldPath field to given value.

### HasFieldPath

`func (o *DeleteCustomFieldResponseCustomField) HasFieldPath() bool`

HasFieldPath returns a boolean if a field has been set.

### GetAllowedValues

`func (o *DeleteCustomFieldResponseCustomField) GetAllowedValues() []string`

GetAllowedValues returns the AllowedValues field if non-nil, zero value otherwise.

### GetAllowedValuesOk

`func (o *DeleteCustomFieldResponseCustomField) GetAllowedValuesOk() (*[]string, bool)`

GetAllowedValuesOk returns a tuple with the AllowedValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedValues

`func (o *DeleteCustomFieldResponseCustomField) SetAllowedValues(v []string)`

SetAllowedValues sets AllowedValues field to given value.

### HasAllowedValues

`func (o *DeleteCustomFieldResponseCustomField) HasAllowedValues() bool`

HasAllowedValues returns a boolean if a field has been set.

### GetDefaultValue

`func (o *DeleteCustomFieldResponseCustomField) GetDefaultValue() string`

GetDefaultValue returns the DefaultValue field if non-nil, zero value otherwise.

### GetDefaultValueOk

`func (o *DeleteCustomFieldResponseCustomField) GetDefaultValueOk() (*string, bool)`

GetDefaultValueOk returns a tuple with the DefaultValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultValue

`func (o *DeleteCustomFieldResponseCustomField) SetDefaultValue(v string)`

SetDefaultValue sets DefaultValue field to given value.

### HasDefaultValue

`func (o *DeleteCustomFieldResponseCustomField) HasDefaultValue() bool`

HasDefaultValue returns a boolean if a field has been set.

### GetId

`func (o *DeleteCustomFieldResponseCustomField) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DeleteCustomFieldResponseCustomField) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DeleteCustomFieldResponseCustomField) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *DeleteCustomFieldResponseCustomField) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DeleteCustomFieldResponseCustomField) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DeleteCustomFieldResponseCustomField) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DeleteCustomFieldResponseCustomField) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DeleteCustomFieldResponseCustomField) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DeleteCustomFieldResponseCustomField) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDeletedAt

`func (o *DeleteCustomFieldResponseCustomField) GetDeletedAt() string`

GetDeletedAt returns the DeletedAt field if non-nil, zero value otherwise.

### GetDeletedAtOk

`func (o *DeleteCustomFieldResponseCustomField) GetDeletedAtOk() (*string, bool)`

GetDeletedAtOk returns a tuple with the DeletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAt

`func (o *DeleteCustomFieldResponseCustomField) SetDeletedAt(v string)`

SetDeletedAt sets DeletedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


