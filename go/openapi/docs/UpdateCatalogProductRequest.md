# UpdateCatalogProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the catalog product | [optional] 
**Description** | Pointer to **string** | The description of the catalog product | [optional] 
**ProductCode** | Pointer to **string** | The product code of the catalog product | [optional] 
**DisableDescription** | Pointer to **bool** | Whether to disable the default description on generated line items | [optional] 
**ExternalId** | Pointer to **string** | The external ID of the catalog product | [optional] 
**SalesForceProductId** | Pointer to **NullableString** | The ID of the catalog product in the Salesforce system | [optional] 

## Methods

### NewUpdateCatalogProductRequest

`func NewUpdateCatalogProductRequest() *UpdateCatalogProductRequest`

NewUpdateCatalogProductRequest instantiates a new UpdateCatalogProductRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateCatalogProductRequestWithDefaults

`func NewUpdateCatalogProductRequestWithDefaults() *UpdateCatalogProductRequest`

NewUpdateCatalogProductRequestWithDefaults instantiates a new UpdateCatalogProductRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UpdateCatalogProductRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateCatalogProductRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateCatalogProductRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateCatalogProductRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *UpdateCatalogProductRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateCatalogProductRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateCatalogProductRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateCatalogProductRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetProductCode

`func (o *UpdateCatalogProductRequest) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *UpdateCatalogProductRequest) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *UpdateCatalogProductRequest) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.

### HasProductCode

`func (o *UpdateCatalogProductRequest) HasProductCode() bool`

HasProductCode returns a boolean if a field has been set.

### GetDisableDescription

`func (o *UpdateCatalogProductRequest) GetDisableDescription() bool`

GetDisableDescription returns the DisableDescription field if non-nil, zero value otherwise.

### GetDisableDescriptionOk

`func (o *UpdateCatalogProductRequest) GetDisableDescriptionOk() (*bool, bool)`

GetDisableDescriptionOk returns a tuple with the DisableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableDescription

`func (o *UpdateCatalogProductRequest) SetDisableDescription(v bool)`

SetDisableDescription sets DisableDescription field to given value.

### HasDisableDescription

`func (o *UpdateCatalogProductRequest) HasDisableDescription() bool`

HasDisableDescription returns a boolean if a field has been set.

### GetExternalId

`func (o *UpdateCatalogProductRequest) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *UpdateCatalogProductRequest) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *UpdateCatalogProductRequest) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *UpdateCatalogProductRequest) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetSalesForceProductId

`func (o *UpdateCatalogProductRequest) GetSalesForceProductId() string`

GetSalesForceProductId returns the SalesForceProductId field if non-nil, zero value otherwise.

### GetSalesForceProductIdOk

`func (o *UpdateCatalogProductRequest) GetSalesForceProductIdOk() (*string, bool)`

GetSalesForceProductIdOk returns a tuple with the SalesForceProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceProductId

`func (o *UpdateCatalogProductRequest) SetSalesForceProductId(v string)`

SetSalesForceProductId sets SalesForceProductId field to given value.

### HasSalesForceProductId

`func (o *UpdateCatalogProductRequest) HasSalesForceProductId() bool`

HasSalesForceProductId returns a boolean if a field has been set.

### SetSalesForceProductIdNil

`func (o *UpdateCatalogProductRequest) SetSalesForceProductIdNil(b bool)`

 SetSalesForceProductIdNil sets the value for SalesForceProductId to be an explicit nil

### UnsetSalesForceProductId
`func (o *UpdateCatalogProductRequest) UnsetSalesForceProductId()`

UnsetSalesForceProductId ensures that no value is present for SalesForceProductId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


