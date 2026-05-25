# CreateCustomFieldRequest

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

## Methods

### NewCreateCustomFieldRequest

`func NewCreateCustomFieldRequest(vayuEntity CustomFieldEntities, vayuCustomFieldName string, valueType CustomFieldValueTypes, ) *CreateCustomFieldRequest`

NewCreateCustomFieldRequest instantiates a new CreateCustomFieldRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCustomFieldRequestWithDefaults

`func NewCreateCustomFieldRequestWithDefaults() *CreateCustomFieldRequest`

NewCreateCustomFieldRequestWithDefaults instantiates a new CreateCustomFieldRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVayuEntity

`func (o *CreateCustomFieldRequest) GetVayuEntity() CustomFieldEntities`

GetVayuEntity returns the VayuEntity field if non-nil, zero value otherwise.

### GetVayuEntityOk

`func (o *CreateCustomFieldRequest) GetVayuEntityOk() (*CustomFieldEntities, bool)`

GetVayuEntityOk returns a tuple with the VayuEntity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuEntity

`func (o *CreateCustomFieldRequest) SetVayuEntity(v CustomFieldEntities)`

SetVayuEntity sets VayuEntity field to given value.


### GetVayuCustomFieldName

`func (o *CreateCustomFieldRequest) GetVayuCustomFieldName() string`

GetVayuCustomFieldName returns the VayuCustomFieldName field if non-nil, zero value otherwise.

### GetVayuCustomFieldNameOk

`func (o *CreateCustomFieldRequest) GetVayuCustomFieldNameOk() (*string, bool)`

GetVayuCustomFieldNameOk returns a tuple with the VayuCustomFieldName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuCustomFieldName

`func (o *CreateCustomFieldRequest) SetVayuCustomFieldName(v string)`

SetVayuCustomFieldName sets VayuCustomFieldName field to given value.


### GetValueType

`func (o *CreateCustomFieldRequest) GetValueType() CustomFieldValueTypes`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *CreateCustomFieldRequest) GetValueTypeOk() (*CustomFieldValueTypes, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *CreateCustomFieldRequest) SetValueType(v CustomFieldValueTypes)`

SetValueType sets ValueType field to given value.


### GetIntegrationSource

`func (o *CreateCustomFieldRequest) GetIntegrationSource() string`

GetIntegrationSource returns the IntegrationSource field if non-nil, zero value otherwise.

### GetIntegrationSourceOk

`func (o *CreateCustomFieldRequest) GetIntegrationSourceOk() (*string, bool)`

GetIntegrationSourceOk returns a tuple with the IntegrationSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSource

`func (o *CreateCustomFieldRequest) SetIntegrationSource(v string)`

SetIntegrationSource sets IntegrationSource field to given value.

### HasIntegrationSource

`func (o *CreateCustomFieldRequest) HasIntegrationSource() bool`

HasIntegrationSource returns a boolean if a field has been set.

### GetIntegrationEntityType

`func (o *CreateCustomFieldRequest) GetIntegrationEntityType() IntegrationEntityTypes`

GetIntegrationEntityType returns the IntegrationEntityType field if non-nil, zero value otherwise.

### GetIntegrationEntityTypeOk

`func (o *CreateCustomFieldRequest) GetIntegrationEntityTypeOk() (*IntegrationEntityTypes, bool)`

GetIntegrationEntityTypeOk returns a tuple with the IntegrationEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationEntityType

`func (o *CreateCustomFieldRequest) SetIntegrationEntityType(v IntegrationEntityTypes)`

SetIntegrationEntityType sets IntegrationEntityType field to given value.

### HasIntegrationEntityType

`func (o *CreateCustomFieldRequest) HasIntegrationEntityType() bool`

HasIntegrationEntityType returns a boolean if a field has been set.

### GetFieldPath

`func (o *CreateCustomFieldRequest) GetFieldPath() string`

GetFieldPath returns the FieldPath field if non-nil, zero value otherwise.

### GetFieldPathOk

`func (o *CreateCustomFieldRequest) GetFieldPathOk() (*string, bool)`

GetFieldPathOk returns a tuple with the FieldPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldPath

`func (o *CreateCustomFieldRequest) SetFieldPath(v string)`

SetFieldPath sets FieldPath field to given value.

### HasFieldPath

`func (o *CreateCustomFieldRequest) HasFieldPath() bool`

HasFieldPath returns a boolean if a field has been set.

### GetAllowedValues

`func (o *CreateCustomFieldRequest) GetAllowedValues() []string`

GetAllowedValues returns the AllowedValues field if non-nil, zero value otherwise.

### GetAllowedValuesOk

`func (o *CreateCustomFieldRequest) GetAllowedValuesOk() (*[]string, bool)`

GetAllowedValuesOk returns a tuple with the AllowedValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedValues

`func (o *CreateCustomFieldRequest) SetAllowedValues(v []string)`

SetAllowedValues sets AllowedValues field to given value.

### HasAllowedValues

`func (o *CreateCustomFieldRequest) HasAllowedValues() bool`

HasAllowedValues returns a boolean if a field has been set.

### GetDefaultValue

`func (o *CreateCustomFieldRequest) GetDefaultValue() string`

GetDefaultValue returns the DefaultValue field if non-nil, zero value otherwise.

### GetDefaultValueOk

`func (o *CreateCustomFieldRequest) GetDefaultValueOk() (*string, bool)`

GetDefaultValueOk returns a tuple with the DefaultValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultValue

`func (o *CreateCustomFieldRequest) SetDefaultValue(v string)`

SetDefaultValue sets DefaultValue field to given value.

### HasDefaultValue

`func (o *CreateCustomFieldRequest) HasDefaultValue() bool`

HasDefaultValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


