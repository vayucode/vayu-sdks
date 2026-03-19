# ProductGroupProductsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | **string** | The display name of the product | 
**Description** | Pointer to **NullableString** | The description of the product | [optional] 
**Scheduling** | [**ProductGroupProductsInnerScheduling**](ProductGroupProductsInnerScheduling.md) |  | 
**Pricing** | [**ProductGroupProductsInnerPricing**](ProductGroupProductsInnerPricing.md) |  | 
**CatalogProductId** | Pointer to **NullableString** | The id of the a product from the catalog to connect the contract product to | [optional] 
**ProductErpId** | Pointer to **NullableString** | The id of the product in NetSuite ERP | [optional] 
**NsClass** | Pointer to **NullableString** | The class of the product in NetSuite ERP | [optional] 
**NsClassId** | Pointer to **NullableString** | The id of the class of the product in NetSuite ERP | [optional] 
**Commitment** | Pointer to [**NullableProductGroupProductsInnerCommitment**](ProductGroupProductsInnerCommitment.md) |  | [optional] 
**PaymentTerm** | Pointer to [**NullablePaymentTerm**](PaymentTerm.md) |  | [optional] 
**IsCalendarAligned** | Pointer to **bool** | Whether the invoicing period should be calendar aligned. If not provided, it will default to false. ONE_TIME and COMMERCIAL_TERMS pricing models cannot be calendar aligned. This field is ignored if the product is part of a ProductGroup. | [optional] 
**CloudProviderSettings** | Pointer to [**NullableProductCloudProviderSettings**](ProductCloudProviderSettings.md) |  | [optional] 

## Methods

### NewProductGroupProductsInner

`func NewProductGroupProductsInner(displayName string, scheduling ProductGroupProductsInnerScheduling, pricing ProductGroupProductsInnerPricing, ) *ProductGroupProductsInner`

NewProductGroupProductsInner instantiates a new ProductGroupProductsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupProductsInnerWithDefaults

`func NewProductGroupProductsInnerWithDefaults() *ProductGroupProductsInner`

NewProductGroupProductsInnerWithDefaults instantiates a new ProductGroupProductsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisplayName

`func (o *ProductGroupProductsInner) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ProductGroupProductsInner) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ProductGroupProductsInner) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *ProductGroupProductsInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProductGroupProductsInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProductGroupProductsInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ProductGroupProductsInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ProductGroupProductsInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ProductGroupProductsInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetScheduling

`func (o *ProductGroupProductsInner) GetScheduling() ProductGroupProductsInnerScheduling`

GetScheduling returns the Scheduling field if non-nil, zero value otherwise.

### GetSchedulingOk

`func (o *ProductGroupProductsInner) GetSchedulingOk() (*ProductGroupProductsInnerScheduling, bool)`

GetSchedulingOk returns a tuple with the Scheduling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduling

`func (o *ProductGroupProductsInner) SetScheduling(v ProductGroupProductsInnerScheduling)`

SetScheduling sets Scheduling field to given value.


### GetPricing

`func (o *ProductGroupProductsInner) GetPricing() ProductGroupProductsInnerPricing`

GetPricing returns the Pricing field if non-nil, zero value otherwise.

### GetPricingOk

`func (o *ProductGroupProductsInner) GetPricingOk() (*ProductGroupProductsInnerPricing, bool)`

GetPricingOk returns a tuple with the Pricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPricing

`func (o *ProductGroupProductsInner) SetPricing(v ProductGroupProductsInnerPricing)`

SetPricing sets Pricing field to given value.


### GetCatalogProductId

`func (o *ProductGroupProductsInner) GetCatalogProductId() string`

GetCatalogProductId returns the CatalogProductId field if non-nil, zero value otherwise.

### GetCatalogProductIdOk

`func (o *ProductGroupProductsInner) GetCatalogProductIdOk() (*string, bool)`

GetCatalogProductIdOk returns a tuple with the CatalogProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogProductId

`func (o *ProductGroupProductsInner) SetCatalogProductId(v string)`

SetCatalogProductId sets CatalogProductId field to given value.

### HasCatalogProductId

`func (o *ProductGroupProductsInner) HasCatalogProductId() bool`

HasCatalogProductId returns a boolean if a field has been set.

### SetCatalogProductIdNil

`func (o *ProductGroupProductsInner) SetCatalogProductIdNil(b bool)`

 SetCatalogProductIdNil sets the value for CatalogProductId to be an explicit nil

### UnsetCatalogProductId
`func (o *ProductGroupProductsInner) UnsetCatalogProductId()`

UnsetCatalogProductId ensures that no value is present for CatalogProductId, not even an explicit nil
### GetProductErpId

`func (o *ProductGroupProductsInner) GetProductErpId() string`

GetProductErpId returns the ProductErpId field if non-nil, zero value otherwise.

### GetProductErpIdOk

`func (o *ProductGroupProductsInner) GetProductErpIdOk() (*string, bool)`

GetProductErpIdOk returns a tuple with the ProductErpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductErpId

`func (o *ProductGroupProductsInner) SetProductErpId(v string)`

SetProductErpId sets ProductErpId field to given value.

### HasProductErpId

`func (o *ProductGroupProductsInner) HasProductErpId() bool`

HasProductErpId returns a boolean if a field has been set.

### SetProductErpIdNil

`func (o *ProductGroupProductsInner) SetProductErpIdNil(b bool)`

 SetProductErpIdNil sets the value for ProductErpId to be an explicit nil

### UnsetProductErpId
`func (o *ProductGroupProductsInner) UnsetProductErpId()`

UnsetProductErpId ensures that no value is present for ProductErpId, not even an explicit nil
### GetNsClass

`func (o *ProductGroupProductsInner) GetNsClass() string`

GetNsClass returns the NsClass field if non-nil, zero value otherwise.

### GetNsClassOk

`func (o *ProductGroupProductsInner) GetNsClassOk() (*string, bool)`

GetNsClassOk returns a tuple with the NsClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNsClass

`func (o *ProductGroupProductsInner) SetNsClass(v string)`

SetNsClass sets NsClass field to given value.

### HasNsClass

`func (o *ProductGroupProductsInner) HasNsClass() bool`

HasNsClass returns a boolean if a field has been set.

### SetNsClassNil

`func (o *ProductGroupProductsInner) SetNsClassNil(b bool)`

 SetNsClassNil sets the value for NsClass to be an explicit nil

### UnsetNsClass
`func (o *ProductGroupProductsInner) UnsetNsClass()`

UnsetNsClass ensures that no value is present for NsClass, not even an explicit nil
### GetNsClassId

`func (o *ProductGroupProductsInner) GetNsClassId() string`

GetNsClassId returns the NsClassId field if non-nil, zero value otherwise.

### GetNsClassIdOk

`func (o *ProductGroupProductsInner) GetNsClassIdOk() (*string, bool)`

GetNsClassIdOk returns a tuple with the NsClassId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNsClassId

`func (o *ProductGroupProductsInner) SetNsClassId(v string)`

SetNsClassId sets NsClassId field to given value.

### HasNsClassId

`func (o *ProductGroupProductsInner) HasNsClassId() bool`

HasNsClassId returns a boolean if a field has been set.

### SetNsClassIdNil

`func (o *ProductGroupProductsInner) SetNsClassIdNil(b bool)`

 SetNsClassIdNil sets the value for NsClassId to be an explicit nil

### UnsetNsClassId
`func (o *ProductGroupProductsInner) UnsetNsClassId()`

UnsetNsClassId ensures that no value is present for NsClassId, not even an explicit nil
### GetCommitment

`func (o *ProductGroupProductsInner) GetCommitment() ProductGroupProductsInnerCommitment`

GetCommitment returns the Commitment field if non-nil, zero value otherwise.

### GetCommitmentOk

`func (o *ProductGroupProductsInner) GetCommitmentOk() (*ProductGroupProductsInnerCommitment, bool)`

GetCommitmentOk returns a tuple with the Commitment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommitment

`func (o *ProductGroupProductsInner) SetCommitment(v ProductGroupProductsInnerCommitment)`

SetCommitment sets Commitment field to given value.

### HasCommitment

`func (o *ProductGroupProductsInner) HasCommitment() bool`

HasCommitment returns a boolean if a field has been set.

### SetCommitmentNil

`func (o *ProductGroupProductsInner) SetCommitmentNil(b bool)`

 SetCommitmentNil sets the value for Commitment to be an explicit nil

### UnsetCommitment
`func (o *ProductGroupProductsInner) UnsetCommitment()`

UnsetCommitment ensures that no value is present for Commitment, not even an explicit nil
### GetPaymentTerm

`func (o *ProductGroupProductsInner) GetPaymentTerm() PaymentTerm`

GetPaymentTerm returns the PaymentTerm field if non-nil, zero value otherwise.

### GetPaymentTermOk

`func (o *ProductGroupProductsInner) GetPaymentTermOk() (*PaymentTerm, bool)`

GetPaymentTermOk returns a tuple with the PaymentTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTerm

`func (o *ProductGroupProductsInner) SetPaymentTerm(v PaymentTerm)`

SetPaymentTerm sets PaymentTerm field to given value.

### HasPaymentTerm

`func (o *ProductGroupProductsInner) HasPaymentTerm() bool`

HasPaymentTerm returns a boolean if a field has been set.

### SetPaymentTermNil

`func (o *ProductGroupProductsInner) SetPaymentTermNil(b bool)`

 SetPaymentTermNil sets the value for PaymentTerm to be an explicit nil

### UnsetPaymentTerm
`func (o *ProductGroupProductsInner) UnsetPaymentTerm()`

UnsetPaymentTerm ensures that no value is present for PaymentTerm, not even an explicit nil
### GetIsCalendarAligned

`func (o *ProductGroupProductsInner) GetIsCalendarAligned() bool`

GetIsCalendarAligned returns the IsCalendarAligned field if non-nil, zero value otherwise.

### GetIsCalendarAlignedOk

`func (o *ProductGroupProductsInner) GetIsCalendarAlignedOk() (*bool, bool)`

GetIsCalendarAlignedOk returns a tuple with the IsCalendarAligned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCalendarAligned

`func (o *ProductGroupProductsInner) SetIsCalendarAligned(v bool)`

SetIsCalendarAligned sets IsCalendarAligned field to given value.

### HasIsCalendarAligned

`func (o *ProductGroupProductsInner) HasIsCalendarAligned() bool`

HasIsCalendarAligned returns a boolean if a field has been set.

### GetCloudProviderSettings

`func (o *ProductGroupProductsInner) GetCloudProviderSettings() ProductCloudProviderSettings`

GetCloudProviderSettings returns the CloudProviderSettings field if non-nil, zero value otherwise.

### GetCloudProviderSettingsOk

`func (o *ProductGroupProductsInner) GetCloudProviderSettingsOk() (*ProductCloudProviderSettings, bool)`

GetCloudProviderSettingsOk returns a tuple with the CloudProviderSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudProviderSettings

`func (o *ProductGroupProductsInner) SetCloudProviderSettings(v ProductCloudProviderSettings)`

SetCloudProviderSettings sets CloudProviderSettings field to given value.

### HasCloudProviderSettings

`func (o *ProductGroupProductsInner) HasCloudProviderSettings() bool`

HasCloudProviderSettings returns a boolean if a field has been set.

### SetCloudProviderSettingsNil

`func (o *ProductGroupProductsInner) SetCloudProviderSettingsNil(b bool)`

 SetCloudProviderSettingsNil sets the value for CloudProviderSettings to be an explicit nil

### UnsetCloudProviderSettings
`func (o *ProductGroupProductsInner) UnsetCloudProviderSettings()`

UnsetCloudProviderSettings ensures that no value is present for CloudProviderSettings, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


