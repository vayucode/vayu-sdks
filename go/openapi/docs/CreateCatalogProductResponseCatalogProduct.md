# CreateCatalogProductResponseCatalogProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the catalog product | 
**Description** | Pointer to **string** | The description of the catalog product | [optional] 
**ExternalId** | Pointer to **string** | The external ID of the catalog product | [optional] 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewCreateCatalogProductResponseCatalogProduct

`func NewCreateCatalogProductResponseCatalogProduct(name string, id string, createdAt time.Time, updatedAt time.Time, ) *CreateCatalogProductResponseCatalogProduct`

NewCreateCatalogProductResponseCatalogProduct instantiates a new CreateCatalogProductResponseCatalogProduct object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCatalogProductResponseCatalogProductWithDefaults

`func NewCreateCatalogProductResponseCatalogProductWithDefaults() *CreateCatalogProductResponseCatalogProduct`

NewCreateCatalogProductResponseCatalogProductWithDefaults instantiates a new CreateCatalogProductResponseCatalogProduct object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateCatalogProductResponseCatalogProduct) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateCatalogProductResponseCatalogProduct) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateCatalogProductResponseCatalogProduct) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CreateCatalogProductResponseCatalogProduct) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateCatalogProductResponseCatalogProduct) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateCatalogProductResponseCatalogProduct) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateCatalogProductResponseCatalogProduct) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExternalId

`func (o *CreateCatalogProductResponseCatalogProduct) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *CreateCatalogProductResponseCatalogProduct) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *CreateCatalogProductResponseCatalogProduct) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *CreateCatalogProductResponseCatalogProduct) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetId

`func (o *CreateCatalogProductResponseCatalogProduct) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreateCatalogProductResponseCatalogProduct) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreateCatalogProductResponseCatalogProduct) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *CreateCatalogProductResponseCatalogProduct) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CreateCatalogProductResponseCatalogProduct) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CreateCatalogProductResponseCatalogProduct) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CreateCatalogProductResponseCatalogProduct) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CreateCatalogProductResponseCatalogProduct) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CreateCatalogProductResponseCatalogProduct) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


