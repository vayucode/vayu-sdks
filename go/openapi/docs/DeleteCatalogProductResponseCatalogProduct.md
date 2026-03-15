# DeleteCatalogProductResponseCatalogProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the catalog product | 
**Description** | Pointer to **string** | The description of the catalog product | [optional] 
**ExternalId** | Pointer to **string** | The external ID of the catalog product | [optional] 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 
**DeletedAt** | **string** |  | 

## Methods

### NewDeleteCatalogProductResponseCatalogProduct

`func NewDeleteCatalogProductResponseCatalogProduct(name string, id string, createdAt time.Time, updatedAt time.Time, deletedAt string, ) *DeleteCatalogProductResponseCatalogProduct`

NewDeleteCatalogProductResponseCatalogProduct instantiates a new DeleteCatalogProductResponseCatalogProduct object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteCatalogProductResponseCatalogProductWithDefaults

`func NewDeleteCatalogProductResponseCatalogProductWithDefaults() *DeleteCatalogProductResponseCatalogProduct`

NewDeleteCatalogProductResponseCatalogProductWithDefaults instantiates a new DeleteCatalogProductResponseCatalogProduct object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DeleteCatalogProductResponseCatalogProduct) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DeleteCatalogProductResponseCatalogProduct) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DeleteCatalogProductResponseCatalogProduct) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *DeleteCatalogProductResponseCatalogProduct) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DeleteCatalogProductResponseCatalogProduct) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DeleteCatalogProductResponseCatalogProduct) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DeleteCatalogProductResponseCatalogProduct) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExternalId

`func (o *DeleteCatalogProductResponseCatalogProduct) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *DeleteCatalogProductResponseCatalogProduct) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *DeleteCatalogProductResponseCatalogProduct) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *DeleteCatalogProductResponseCatalogProduct) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetId

`func (o *DeleteCatalogProductResponseCatalogProduct) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DeleteCatalogProductResponseCatalogProduct) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DeleteCatalogProductResponseCatalogProduct) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *DeleteCatalogProductResponseCatalogProduct) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DeleteCatalogProductResponseCatalogProduct) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DeleteCatalogProductResponseCatalogProduct) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DeleteCatalogProductResponseCatalogProduct) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DeleteCatalogProductResponseCatalogProduct) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DeleteCatalogProductResponseCatalogProduct) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDeletedAt

`func (o *DeleteCatalogProductResponseCatalogProduct) GetDeletedAt() string`

GetDeletedAt returns the DeletedAt field if non-nil, zero value otherwise.

### GetDeletedAtOk

`func (o *DeleteCatalogProductResponseCatalogProduct) GetDeletedAtOk() (*string, bool)`

GetDeletedAtOk returns a tuple with the DeletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAt

`func (o *DeleteCatalogProductResponseCatalogProduct) SetDeletedAt(v string)`

SetDeletedAt sets DeletedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


