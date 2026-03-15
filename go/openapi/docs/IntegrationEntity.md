# IntegrationEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UpdatedAt** | **time.Time** |  | 
**IntegrationProvider** | [**IntegrationProviders**](IntegrationProviders.md) |  | 
**IntegrationExternalId** | **string** |  | 
**SyncStatus** | [**SyncStatus**](SyncStatus.md) |  | 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**RawSyncedData** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewIntegrationEntity

`func NewIntegrationEntity(updatedAt time.Time, integrationProvider IntegrationProviders, integrationExternalId string, syncStatus SyncStatus, ) *IntegrationEntity`

NewIntegrationEntity instantiates a new IntegrationEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntegrationEntityWithDefaults

`func NewIntegrationEntityWithDefaults() *IntegrationEntity`

NewIntegrationEntityWithDefaults instantiates a new IntegrationEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUpdatedAt

`func (o *IntegrationEntity) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *IntegrationEntity) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *IntegrationEntity) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetIntegrationProvider

`func (o *IntegrationEntity) GetIntegrationProvider() IntegrationProviders`

GetIntegrationProvider returns the IntegrationProvider field if non-nil, zero value otherwise.

### GetIntegrationProviderOk

`func (o *IntegrationEntity) GetIntegrationProviderOk() (*IntegrationProviders, bool)`

GetIntegrationProviderOk returns a tuple with the IntegrationProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationProvider

`func (o *IntegrationEntity) SetIntegrationProvider(v IntegrationProviders)`

SetIntegrationProvider sets IntegrationProvider field to given value.


### GetIntegrationExternalId

`func (o *IntegrationEntity) GetIntegrationExternalId() string`

GetIntegrationExternalId returns the IntegrationExternalId field if non-nil, zero value otherwise.

### GetIntegrationExternalIdOk

`func (o *IntegrationEntity) GetIntegrationExternalIdOk() (*string, bool)`

GetIntegrationExternalIdOk returns a tuple with the IntegrationExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationExternalId

`func (o *IntegrationEntity) SetIntegrationExternalId(v string)`

SetIntegrationExternalId sets IntegrationExternalId field to given value.


### GetSyncStatus

`func (o *IntegrationEntity) GetSyncStatus() SyncStatus`

GetSyncStatus returns the SyncStatus field if non-nil, zero value otherwise.

### GetSyncStatusOk

`func (o *IntegrationEntity) GetSyncStatusOk() (*SyncStatus, bool)`

GetSyncStatusOk returns a tuple with the SyncStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncStatus

`func (o *IntegrationEntity) SetSyncStatus(v SyncStatus)`

SetSyncStatus sets SyncStatus field to given value.


### GetMetadata

`func (o *IntegrationEntity) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *IntegrationEntity) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *IntegrationEntity) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *IntegrationEntity) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *IntegrationEntity) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *IntegrationEntity) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetRawSyncedData

`func (o *IntegrationEntity) GetRawSyncedData() map[string]interface{}`

GetRawSyncedData returns the RawSyncedData field if non-nil, zero value otherwise.

### GetRawSyncedDataOk

`func (o *IntegrationEntity) GetRawSyncedDataOk() (*map[string]interface{}, bool)`

GetRawSyncedDataOk returns a tuple with the RawSyncedData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRawSyncedData

`func (o *IntegrationEntity) SetRawSyncedData(v map[string]interface{})`

SetRawSyncedData sets RawSyncedData field to given value.

### HasRawSyncedData

`func (o *IntegrationEntity) HasRawSyncedData() bool`

HasRawSyncedData returns a boolean if a field has been set.

### SetRawSyncedDataNil

`func (o *IntegrationEntity) SetRawSyncedDataNil(b bool)`

 SetRawSyncedDataNil sets the value for RawSyncedData to be an explicit nil

### UnsetRawSyncedData
`func (o *IntegrationEntity) UnsetRawSyncedData()`

UnsetRawSyncedData ensures that no value is present for RawSyncedData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


