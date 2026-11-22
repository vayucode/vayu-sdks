# GetCatalogProductByNameResponseCatalogProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the catalog product | 
**Description** | Pointer to **string** | The description of the catalog product | [optional] 
**ProductCode** | Pointer to **string** | The product code of the catalog product | [optional] 
**DisableDescription** | Pointer to **bool** | Whether to disable the default description on generated line items | [optional] 
**ExternalId** | Pointer to **string** | The external ID of the catalog product | [optional] 
**SalesForceProductId** | Pointer to **NullableString** | The ID of the catalog product in the Salesforce system | [optional] 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewGetCatalogProductByNameResponseCatalogProduct

`func NewGetCatalogProductByNameResponseCatalogProduct(name string, id string, createdAt time.Time, updatedAt time.Time, ) *GetCatalogProductByNameResponseCatalogProduct`

NewGetCatalogProductByNameResponseCatalogProduct instantiates a new GetCatalogProductByNameResponseCatalogProduct object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetCatalogProductByNameResponseCatalogProductWithDefaults

`func NewGetCatalogProductByNameResponseCatalogProductWithDefaults() *GetCatalogProductByNameResponseCatalogProduct`

NewGetCatalogProductByNameResponseCatalogProductWithDefaults instantiates a new GetCatalogProductByNameResponseCatalogProduct object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GetCatalogProductByNameResponseCatalogProduct) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetProductCode

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.

### HasProductCode

`func (o *GetCatalogProductByNameResponseCatalogProduct) HasProductCode() bool`

HasProductCode returns a boolean if a field has been set.

### GetDisableDescription

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetDisableDescription() bool`

GetDisableDescription returns the DisableDescription field if non-nil, zero value otherwise.

### GetDisableDescriptionOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetDisableDescriptionOk() (*bool, bool)`

GetDisableDescriptionOk returns a tuple with the DisableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableDescription

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetDisableDescription(v bool)`

SetDisableDescription sets DisableDescription field to given value.

### HasDisableDescription

`func (o *GetCatalogProductByNameResponseCatalogProduct) HasDisableDescription() bool`

HasDisableDescription returns a boolean if a field has been set.

### GetExternalId

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *GetCatalogProductByNameResponseCatalogProduct) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetSalesForceProductId

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetSalesForceProductId() string`

GetSalesForceProductId returns the SalesForceProductId field if non-nil, zero value otherwise.

### GetSalesForceProductIdOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetSalesForceProductIdOk() (*string, bool)`

GetSalesForceProductIdOk returns a tuple with the SalesForceProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceProductId

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetSalesForceProductId(v string)`

SetSalesForceProductId sets SalesForceProductId field to given value.

### HasSalesForceProductId

`func (o *GetCatalogProductByNameResponseCatalogProduct) HasSalesForceProductId() bool`

HasSalesForceProductId returns a boolean if a field has been set.

### SetSalesForceProductIdNil

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetSalesForceProductIdNil(b bool)`

 SetSalesForceProductIdNil sets the value for SalesForceProductId to be an explicit nil

### UnsetSalesForceProductId
`func (o *GetCatalogProductByNameResponseCatalogProduct) UnsetSalesForceProductId()`

UnsetSalesForceProductId ensures that no value is present for SalesForceProductId, not even an explicit nil
### GetId

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetCatalogProductByNameResponseCatalogProduct) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetCatalogProductByNameResponseCatalogProduct) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


