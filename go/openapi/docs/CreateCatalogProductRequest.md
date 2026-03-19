# CreateCatalogProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the catalog product | 
**Description** | Pointer to **string** | The description of the catalog product | [optional] 
**ExternalId** | Pointer to **string** | The external ID of the catalog product | [optional] 

## Methods

### NewCreateCatalogProductRequest

`func NewCreateCatalogProductRequest(name string, ) *CreateCatalogProductRequest`

NewCreateCatalogProductRequest instantiates a new CreateCatalogProductRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCatalogProductRequestWithDefaults

`func NewCreateCatalogProductRequestWithDefaults() *CreateCatalogProductRequest`

NewCreateCatalogProductRequestWithDefaults instantiates a new CreateCatalogProductRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateCatalogProductRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateCatalogProductRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateCatalogProductRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CreateCatalogProductRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateCatalogProductRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateCatalogProductRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateCatalogProductRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExternalId

`func (o *CreateCatalogProductRequest) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *CreateCatalogProductRequest) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *CreateCatalogProductRequest) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *CreateCatalogProductRequest) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


