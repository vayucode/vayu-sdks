# ProductGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | **string** | The display name of the product | 
**Description** | Pointer to **NullableString** | The description of the product | [optional] 
**ProductErpId** | Pointer to **NullableString** | The id of the product in NetSuite ERP | [optional] 
**NsClass** | Pointer to **NullableString** | The class of the product in NetSuite ERP | [optional] 
**NsClassId** | Pointer to **NullableString** | The id of the class of the product in NetSuite ERP | [optional] 
**Products** | [**[]ProductGroupProductsInner**](ProductGroupProductsInner.md) | The products that the product group is associated with | 
**BaseAmount** | Pointer to **NullableFloat32** | The base amount for the customer to pay even if the amount based on usage is lower | [optional] 
**Commitment** | Pointer to [**NullableProductGroupCommitment**](ProductGroupCommitment.md) |  | [optional] 
**IsCalendarAligned** | Pointer to **bool** | Whether the invoicing period should be calendar aligned. If not provided, it will default to false. ONE_TIME and COMMERCIAL_TERMS pricing models cannot be calendar aligned. | [optional] 

## Methods

### NewProductGroup

`func NewProductGroup(displayName string, products []ProductGroupProductsInner, ) *ProductGroup`

NewProductGroup instantiates a new ProductGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupWithDefaults

`func NewProductGroupWithDefaults() *ProductGroup`

NewProductGroupWithDefaults instantiates a new ProductGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisplayName

`func (o *ProductGroup) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ProductGroup) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ProductGroup) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *ProductGroup) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProductGroup) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProductGroup) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ProductGroup) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ProductGroup) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ProductGroup) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetProductErpId

`func (o *ProductGroup) GetProductErpId() string`

GetProductErpId returns the ProductErpId field if non-nil, zero value otherwise.

### GetProductErpIdOk

`func (o *ProductGroup) GetProductErpIdOk() (*string, bool)`

GetProductErpIdOk returns a tuple with the ProductErpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductErpId

`func (o *ProductGroup) SetProductErpId(v string)`

SetProductErpId sets ProductErpId field to given value.

### HasProductErpId

`func (o *ProductGroup) HasProductErpId() bool`

HasProductErpId returns a boolean if a field has been set.

### SetProductErpIdNil

`func (o *ProductGroup) SetProductErpIdNil(b bool)`

 SetProductErpIdNil sets the value for ProductErpId to be an explicit nil

### UnsetProductErpId
`func (o *ProductGroup) UnsetProductErpId()`

UnsetProductErpId ensures that no value is present for ProductErpId, not even an explicit nil
### GetNsClass

`func (o *ProductGroup) GetNsClass() string`

GetNsClass returns the NsClass field if non-nil, zero value otherwise.

### GetNsClassOk

`func (o *ProductGroup) GetNsClassOk() (*string, bool)`

GetNsClassOk returns a tuple with the NsClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNsClass

`func (o *ProductGroup) SetNsClass(v string)`

SetNsClass sets NsClass field to given value.

### HasNsClass

`func (o *ProductGroup) HasNsClass() bool`

HasNsClass returns a boolean if a field has been set.

### SetNsClassNil

`func (o *ProductGroup) SetNsClassNil(b bool)`

 SetNsClassNil sets the value for NsClass to be an explicit nil

### UnsetNsClass
`func (o *ProductGroup) UnsetNsClass()`

UnsetNsClass ensures that no value is present for NsClass, not even an explicit nil
### GetNsClassId

`func (o *ProductGroup) GetNsClassId() string`

GetNsClassId returns the NsClassId field if non-nil, zero value otherwise.

### GetNsClassIdOk

`func (o *ProductGroup) GetNsClassIdOk() (*string, bool)`

GetNsClassIdOk returns a tuple with the NsClassId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNsClassId

`func (o *ProductGroup) SetNsClassId(v string)`

SetNsClassId sets NsClassId field to given value.

### HasNsClassId

`func (o *ProductGroup) HasNsClassId() bool`

HasNsClassId returns a boolean if a field has been set.

### SetNsClassIdNil

`func (o *ProductGroup) SetNsClassIdNil(b bool)`

 SetNsClassIdNil sets the value for NsClassId to be an explicit nil

### UnsetNsClassId
`func (o *ProductGroup) UnsetNsClassId()`

UnsetNsClassId ensures that no value is present for NsClassId, not even an explicit nil
### GetProducts

`func (o *ProductGroup) GetProducts() []ProductGroupProductsInner`

GetProducts returns the Products field if non-nil, zero value otherwise.

### GetProductsOk

`func (o *ProductGroup) GetProductsOk() (*[]ProductGroupProductsInner, bool)`

GetProductsOk returns a tuple with the Products field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProducts

`func (o *ProductGroup) SetProducts(v []ProductGroupProductsInner)`

SetProducts sets Products field to given value.


### GetBaseAmount

`func (o *ProductGroup) GetBaseAmount() float32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *ProductGroup) GetBaseAmountOk() (*float32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *ProductGroup) SetBaseAmount(v float32)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *ProductGroup) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### SetBaseAmountNil

`func (o *ProductGroup) SetBaseAmountNil(b bool)`

 SetBaseAmountNil sets the value for BaseAmount to be an explicit nil

### UnsetBaseAmount
`func (o *ProductGroup) UnsetBaseAmount()`

UnsetBaseAmount ensures that no value is present for BaseAmount, not even an explicit nil
### GetCommitment

`func (o *ProductGroup) GetCommitment() ProductGroupCommitment`

GetCommitment returns the Commitment field if non-nil, zero value otherwise.

### GetCommitmentOk

`func (o *ProductGroup) GetCommitmentOk() (*ProductGroupCommitment, bool)`

GetCommitmentOk returns a tuple with the Commitment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommitment

`func (o *ProductGroup) SetCommitment(v ProductGroupCommitment)`

SetCommitment sets Commitment field to given value.

### HasCommitment

`func (o *ProductGroup) HasCommitment() bool`

HasCommitment returns a boolean if a field has been set.

### SetCommitmentNil

`func (o *ProductGroup) SetCommitmentNil(b bool)`

 SetCommitmentNil sets the value for Commitment to be an explicit nil

### UnsetCommitment
`func (o *ProductGroup) UnsetCommitment()`

UnsetCommitment ensures that no value is present for Commitment, not even an explicit nil
### GetIsCalendarAligned

`func (o *ProductGroup) GetIsCalendarAligned() bool`

GetIsCalendarAligned returns the IsCalendarAligned field if non-nil, zero value otherwise.

### GetIsCalendarAlignedOk

`func (o *ProductGroup) GetIsCalendarAlignedOk() (*bool, bool)`

GetIsCalendarAlignedOk returns a tuple with the IsCalendarAligned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCalendarAligned

`func (o *ProductGroup) SetIsCalendarAligned(v bool)`

SetIsCalendarAligned sets IsCalendarAligned field to given value.

### HasIsCalendarAligned

`func (o *ProductGroup) HasIsCalendarAligned() bool`

HasIsCalendarAligned returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


