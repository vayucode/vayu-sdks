# ProductGroupProductsInnerPricing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Price** | **float32** |  | 
**Installments** | Pointer to [**[]ProductGroupProductsInnerPricingOneOf1InstallmentsInner**](ProductGroupProductsInnerPricingOneOf1InstallmentsInner.md) |  | [optional] 
**SubscriptionCadence** | [**NullableProductGroupProductsInnerPricingOneOf3SubscriptionCadence**](ProductGroupProductsInnerPricingOneOf3SubscriptionCadence.md) |  | 
**Tiers** | [**[]ProductGroupProductsInnerPricingOneOf3TiersInner**](ProductGroupProductsInnerPricingOneOf3TiersInner.md) |  | 
**AutoUpgrade** | Pointer to **NullableBool** |  | [optional] 
**Prorate** | Pointer to **NullableBool** |  | [optional] 
**IsRevShare** | Pointer to **NullableBool** |  | [optional] 
**BaseAmount** | Pointer to **NullableFloat32** |  | [optional] 
**UsageReset** | Pointer to **NullableInt32** | Usage reset is represented in months and must be one of: 1, 2, 3, 6, 12 | [optional] 
**ChunkSize** | Pointer to **NullableFloat32** |  | [optional] 

## Methods

### NewProductGroupProductsInnerPricing

`func NewProductGroupProductsInnerPricing(type_ string, price float32, subscriptionCadence NullableProductGroupProductsInnerPricingOneOf3SubscriptionCadence, tiers []ProductGroupProductsInnerPricingOneOf3TiersInner, ) *ProductGroupProductsInnerPricing`

NewProductGroupProductsInnerPricing instantiates a new ProductGroupProductsInnerPricing object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupProductsInnerPricingWithDefaults

`func NewProductGroupProductsInnerPricingWithDefaults() *ProductGroupProductsInnerPricing`

NewProductGroupProductsInnerPricingWithDefaults instantiates a new ProductGroupProductsInnerPricing object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ProductGroupProductsInnerPricing) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProductGroupProductsInnerPricing) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProductGroupProductsInnerPricing) SetType(v string)`

SetType sets Type field to given value.


### GetPrice

`func (o *ProductGroupProductsInnerPricing) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ProductGroupProductsInnerPricing) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ProductGroupProductsInnerPricing) SetPrice(v float32)`

SetPrice sets Price field to given value.


### GetInstallments

`func (o *ProductGroupProductsInnerPricing) GetInstallments() []ProductGroupProductsInnerPricingOneOf1InstallmentsInner`

GetInstallments returns the Installments field if non-nil, zero value otherwise.

### GetInstallmentsOk

`func (o *ProductGroupProductsInnerPricing) GetInstallmentsOk() (*[]ProductGroupProductsInnerPricingOneOf1InstallmentsInner, bool)`

GetInstallmentsOk returns a tuple with the Installments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallments

`func (o *ProductGroupProductsInnerPricing) SetInstallments(v []ProductGroupProductsInnerPricingOneOf1InstallmentsInner)`

SetInstallments sets Installments field to given value.

### HasInstallments

`func (o *ProductGroupProductsInnerPricing) HasInstallments() bool`

HasInstallments returns a boolean if a field has been set.

### SetInstallmentsNil

`func (o *ProductGroupProductsInnerPricing) SetInstallmentsNil(b bool)`

 SetInstallmentsNil sets the value for Installments to be an explicit nil

### UnsetInstallments
`func (o *ProductGroupProductsInnerPricing) UnsetInstallments()`

UnsetInstallments ensures that no value is present for Installments, not even an explicit nil
### GetSubscriptionCadence

`func (o *ProductGroupProductsInnerPricing) GetSubscriptionCadence() ProductGroupProductsInnerPricingOneOf3SubscriptionCadence`

GetSubscriptionCadence returns the SubscriptionCadence field if non-nil, zero value otherwise.

### GetSubscriptionCadenceOk

`func (o *ProductGroupProductsInnerPricing) GetSubscriptionCadenceOk() (*ProductGroupProductsInnerPricingOneOf3SubscriptionCadence, bool)`

GetSubscriptionCadenceOk returns a tuple with the SubscriptionCadence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionCadence

`func (o *ProductGroupProductsInnerPricing) SetSubscriptionCadence(v ProductGroupProductsInnerPricingOneOf3SubscriptionCadence)`

SetSubscriptionCadence sets SubscriptionCadence field to given value.


### SetSubscriptionCadenceNil

`func (o *ProductGroupProductsInnerPricing) SetSubscriptionCadenceNil(b bool)`

 SetSubscriptionCadenceNil sets the value for SubscriptionCadence to be an explicit nil

### UnsetSubscriptionCadence
`func (o *ProductGroupProductsInnerPricing) UnsetSubscriptionCadence()`

UnsetSubscriptionCadence ensures that no value is present for SubscriptionCadence, not even an explicit nil
### GetTiers

`func (o *ProductGroupProductsInnerPricing) GetTiers() []ProductGroupProductsInnerPricingOneOf3TiersInner`

GetTiers returns the Tiers field if non-nil, zero value otherwise.

### GetTiersOk

`func (o *ProductGroupProductsInnerPricing) GetTiersOk() (*[]ProductGroupProductsInnerPricingOneOf3TiersInner, bool)`

GetTiersOk returns a tuple with the Tiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiers

`func (o *ProductGroupProductsInnerPricing) SetTiers(v []ProductGroupProductsInnerPricingOneOf3TiersInner)`

SetTiers sets Tiers field to given value.


### GetAutoUpgrade

`func (o *ProductGroupProductsInnerPricing) GetAutoUpgrade() bool`

GetAutoUpgrade returns the AutoUpgrade field if non-nil, zero value otherwise.

### GetAutoUpgradeOk

`func (o *ProductGroupProductsInnerPricing) GetAutoUpgradeOk() (*bool, bool)`

GetAutoUpgradeOk returns a tuple with the AutoUpgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoUpgrade

`func (o *ProductGroupProductsInnerPricing) SetAutoUpgrade(v bool)`

SetAutoUpgrade sets AutoUpgrade field to given value.

### HasAutoUpgrade

`func (o *ProductGroupProductsInnerPricing) HasAutoUpgrade() bool`

HasAutoUpgrade returns a boolean if a field has been set.

### SetAutoUpgradeNil

`func (o *ProductGroupProductsInnerPricing) SetAutoUpgradeNil(b bool)`

 SetAutoUpgradeNil sets the value for AutoUpgrade to be an explicit nil

### UnsetAutoUpgrade
`func (o *ProductGroupProductsInnerPricing) UnsetAutoUpgrade()`

UnsetAutoUpgrade ensures that no value is present for AutoUpgrade, not even an explicit nil
### GetProrate

`func (o *ProductGroupProductsInnerPricing) GetProrate() bool`

GetProrate returns the Prorate field if non-nil, zero value otherwise.

### GetProrateOk

`func (o *ProductGroupProductsInnerPricing) GetProrateOk() (*bool, bool)`

GetProrateOk returns a tuple with the Prorate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProrate

`func (o *ProductGroupProductsInnerPricing) SetProrate(v bool)`

SetProrate sets Prorate field to given value.

### HasProrate

`func (o *ProductGroupProductsInnerPricing) HasProrate() bool`

HasProrate returns a boolean if a field has been set.

### SetProrateNil

`func (o *ProductGroupProductsInnerPricing) SetProrateNil(b bool)`

 SetProrateNil sets the value for Prorate to be an explicit nil

### UnsetProrate
`func (o *ProductGroupProductsInnerPricing) UnsetProrate()`

UnsetProrate ensures that no value is present for Prorate, not even an explicit nil
### GetIsRevShare

`func (o *ProductGroupProductsInnerPricing) GetIsRevShare() bool`

GetIsRevShare returns the IsRevShare field if non-nil, zero value otherwise.

### GetIsRevShareOk

`func (o *ProductGroupProductsInnerPricing) GetIsRevShareOk() (*bool, bool)`

GetIsRevShareOk returns a tuple with the IsRevShare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsRevShare

`func (o *ProductGroupProductsInnerPricing) SetIsRevShare(v bool)`

SetIsRevShare sets IsRevShare field to given value.

### HasIsRevShare

`func (o *ProductGroupProductsInnerPricing) HasIsRevShare() bool`

HasIsRevShare returns a boolean if a field has been set.

### SetIsRevShareNil

`func (o *ProductGroupProductsInnerPricing) SetIsRevShareNil(b bool)`

 SetIsRevShareNil sets the value for IsRevShare to be an explicit nil

### UnsetIsRevShare
`func (o *ProductGroupProductsInnerPricing) UnsetIsRevShare()`

UnsetIsRevShare ensures that no value is present for IsRevShare, not even an explicit nil
### GetBaseAmount

`func (o *ProductGroupProductsInnerPricing) GetBaseAmount() float32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *ProductGroupProductsInnerPricing) GetBaseAmountOk() (*float32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *ProductGroupProductsInnerPricing) SetBaseAmount(v float32)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *ProductGroupProductsInnerPricing) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### SetBaseAmountNil

`func (o *ProductGroupProductsInnerPricing) SetBaseAmountNil(b bool)`

 SetBaseAmountNil sets the value for BaseAmount to be an explicit nil

### UnsetBaseAmount
`func (o *ProductGroupProductsInnerPricing) UnsetBaseAmount()`

UnsetBaseAmount ensures that no value is present for BaseAmount, not even an explicit nil
### GetUsageReset

`func (o *ProductGroupProductsInnerPricing) GetUsageReset() int32`

GetUsageReset returns the UsageReset field if non-nil, zero value otherwise.

### GetUsageResetOk

`func (o *ProductGroupProductsInnerPricing) GetUsageResetOk() (*int32, bool)`

GetUsageResetOk returns a tuple with the UsageReset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageReset

`func (o *ProductGroupProductsInnerPricing) SetUsageReset(v int32)`

SetUsageReset sets UsageReset field to given value.

### HasUsageReset

`func (o *ProductGroupProductsInnerPricing) HasUsageReset() bool`

HasUsageReset returns a boolean if a field has been set.

### SetUsageResetNil

`func (o *ProductGroupProductsInnerPricing) SetUsageResetNil(b bool)`

 SetUsageResetNil sets the value for UsageReset to be an explicit nil

### UnsetUsageReset
`func (o *ProductGroupProductsInnerPricing) UnsetUsageReset()`

UnsetUsageReset ensures that no value is present for UsageReset, not even an explicit nil
### GetChunkSize

`func (o *ProductGroupProductsInnerPricing) GetChunkSize() float32`

GetChunkSize returns the ChunkSize field if non-nil, zero value otherwise.

### GetChunkSizeOk

`func (o *ProductGroupProductsInnerPricing) GetChunkSizeOk() (*float32, bool)`

GetChunkSizeOk returns a tuple with the ChunkSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkSize

`func (o *ProductGroupProductsInnerPricing) SetChunkSize(v float32)`

SetChunkSize sets ChunkSize field to given value.

### HasChunkSize

`func (o *ProductGroupProductsInnerPricing) HasChunkSize() bool`

HasChunkSize returns a boolean if a field has been set.

### SetChunkSizeNil

`func (o *ProductGroupProductsInnerPricing) SetChunkSizeNil(b bool)`

 SetChunkSizeNil sets the value for ChunkSize to be an explicit nil

### UnsetChunkSize
`func (o *ProductGroupProductsInnerPricing) UnsetChunkSize()`

UnsetChunkSize ensures that no value is present for ChunkSize, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


