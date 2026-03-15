# ProductGroupProductsInnerPricingOneOf3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Tiers** | [**[]ProductGroupProductsInnerPricingOneOf3TiersInner**](ProductGroupProductsInnerPricingOneOf3TiersInner.md) |  | 
**SubscriptionCadence** | Pointer to [**NullableProductGroupProductsInnerPricingOneOf3SubscriptionCadence**](ProductGroupProductsInnerPricingOneOf3SubscriptionCadence.md) |  | [optional] 
**AutoUpgrade** | Pointer to **NullableBool** |  | [optional] 
**Prorate** | Pointer to **NullableBool** |  | [optional] 
**IsRevShare** | Pointer to **NullableBool** |  | [optional] 
**BaseAmount** | Pointer to **NullableFloat32** |  | [optional] 
**UsageReset** | Pointer to **NullableInt32** | Usage reset is represented in months and must be one of: 1, 2, 3, 6, 12 | [optional] 

## Methods

### NewProductGroupProductsInnerPricingOneOf3

`func NewProductGroupProductsInnerPricingOneOf3(type_ string, tiers []ProductGroupProductsInnerPricingOneOf3TiersInner, ) *ProductGroupProductsInnerPricingOneOf3`

NewProductGroupProductsInnerPricingOneOf3 instantiates a new ProductGroupProductsInnerPricingOneOf3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupProductsInnerPricingOneOf3WithDefaults

`func NewProductGroupProductsInnerPricingOneOf3WithDefaults() *ProductGroupProductsInnerPricingOneOf3`

NewProductGroupProductsInnerPricingOneOf3WithDefaults instantiates a new ProductGroupProductsInnerPricingOneOf3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ProductGroupProductsInnerPricingOneOf3) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProductGroupProductsInnerPricingOneOf3) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProductGroupProductsInnerPricingOneOf3) SetType(v string)`

SetType sets Type field to given value.


### GetTiers

`func (o *ProductGroupProductsInnerPricingOneOf3) GetTiers() []ProductGroupProductsInnerPricingOneOf3TiersInner`

GetTiers returns the Tiers field if non-nil, zero value otherwise.

### GetTiersOk

`func (o *ProductGroupProductsInnerPricingOneOf3) GetTiersOk() (*[]ProductGroupProductsInnerPricingOneOf3TiersInner, bool)`

GetTiersOk returns a tuple with the Tiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiers

`func (o *ProductGroupProductsInnerPricingOneOf3) SetTiers(v []ProductGroupProductsInnerPricingOneOf3TiersInner)`

SetTiers sets Tiers field to given value.


### GetSubscriptionCadence

`func (o *ProductGroupProductsInnerPricingOneOf3) GetSubscriptionCadence() ProductGroupProductsInnerPricingOneOf3SubscriptionCadence`

GetSubscriptionCadence returns the SubscriptionCadence field if non-nil, zero value otherwise.

### GetSubscriptionCadenceOk

`func (o *ProductGroupProductsInnerPricingOneOf3) GetSubscriptionCadenceOk() (*ProductGroupProductsInnerPricingOneOf3SubscriptionCadence, bool)`

GetSubscriptionCadenceOk returns a tuple with the SubscriptionCadence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionCadence

`func (o *ProductGroupProductsInnerPricingOneOf3) SetSubscriptionCadence(v ProductGroupProductsInnerPricingOneOf3SubscriptionCadence)`

SetSubscriptionCadence sets SubscriptionCadence field to given value.

### HasSubscriptionCadence

`func (o *ProductGroupProductsInnerPricingOneOf3) HasSubscriptionCadence() bool`

HasSubscriptionCadence returns a boolean if a field has been set.

### SetSubscriptionCadenceNil

`func (o *ProductGroupProductsInnerPricingOneOf3) SetSubscriptionCadenceNil(b bool)`

 SetSubscriptionCadenceNil sets the value for SubscriptionCadence to be an explicit nil

### UnsetSubscriptionCadence
`func (o *ProductGroupProductsInnerPricingOneOf3) UnsetSubscriptionCadence()`

UnsetSubscriptionCadence ensures that no value is present for SubscriptionCadence, not even an explicit nil
### GetAutoUpgrade

`func (o *ProductGroupProductsInnerPricingOneOf3) GetAutoUpgrade() bool`

GetAutoUpgrade returns the AutoUpgrade field if non-nil, zero value otherwise.

### GetAutoUpgradeOk

`func (o *ProductGroupProductsInnerPricingOneOf3) GetAutoUpgradeOk() (*bool, bool)`

GetAutoUpgradeOk returns a tuple with the AutoUpgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoUpgrade

`func (o *ProductGroupProductsInnerPricingOneOf3) SetAutoUpgrade(v bool)`

SetAutoUpgrade sets AutoUpgrade field to given value.

### HasAutoUpgrade

`func (o *ProductGroupProductsInnerPricingOneOf3) HasAutoUpgrade() bool`

HasAutoUpgrade returns a boolean if a field has been set.

### SetAutoUpgradeNil

`func (o *ProductGroupProductsInnerPricingOneOf3) SetAutoUpgradeNil(b bool)`

 SetAutoUpgradeNil sets the value for AutoUpgrade to be an explicit nil

### UnsetAutoUpgrade
`func (o *ProductGroupProductsInnerPricingOneOf3) UnsetAutoUpgrade()`

UnsetAutoUpgrade ensures that no value is present for AutoUpgrade, not even an explicit nil
### GetProrate

`func (o *ProductGroupProductsInnerPricingOneOf3) GetProrate() bool`

GetProrate returns the Prorate field if non-nil, zero value otherwise.

### GetProrateOk

`func (o *ProductGroupProductsInnerPricingOneOf3) GetProrateOk() (*bool, bool)`

GetProrateOk returns a tuple with the Prorate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProrate

`func (o *ProductGroupProductsInnerPricingOneOf3) SetProrate(v bool)`

SetProrate sets Prorate field to given value.

### HasProrate

`func (o *ProductGroupProductsInnerPricingOneOf3) HasProrate() bool`

HasProrate returns a boolean if a field has been set.

### SetProrateNil

`func (o *ProductGroupProductsInnerPricingOneOf3) SetProrateNil(b bool)`

 SetProrateNil sets the value for Prorate to be an explicit nil

### UnsetProrate
`func (o *ProductGroupProductsInnerPricingOneOf3) UnsetProrate()`

UnsetProrate ensures that no value is present for Prorate, not even an explicit nil
### GetIsRevShare

`func (o *ProductGroupProductsInnerPricingOneOf3) GetIsRevShare() bool`

GetIsRevShare returns the IsRevShare field if non-nil, zero value otherwise.

### GetIsRevShareOk

`func (o *ProductGroupProductsInnerPricingOneOf3) GetIsRevShareOk() (*bool, bool)`

GetIsRevShareOk returns a tuple with the IsRevShare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsRevShare

`func (o *ProductGroupProductsInnerPricingOneOf3) SetIsRevShare(v bool)`

SetIsRevShare sets IsRevShare field to given value.

### HasIsRevShare

`func (o *ProductGroupProductsInnerPricingOneOf3) HasIsRevShare() bool`

HasIsRevShare returns a boolean if a field has been set.

### SetIsRevShareNil

`func (o *ProductGroupProductsInnerPricingOneOf3) SetIsRevShareNil(b bool)`

 SetIsRevShareNil sets the value for IsRevShare to be an explicit nil

### UnsetIsRevShare
`func (o *ProductGroupProductsInnerPricingOneOf3) UnsetIsRevShare()`

UnsetIsRevShare ensures that no value is present for IsRevShare, not even an explicit nil
### GetBaseAmount

`func (o *ProductGroupProductsInnerPricingOneOf3) GetBaseAmount() float32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *ProductGroupProductsInnerPricingOneOf3) GetBaseAmountOk() (*float32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *ProductGroupProductsInnerPricingOneOf3) SetBaseAmount(v float32)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *ProductGroupProductsInnerPricingOneOf3) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### SetBaseAmountNil

`func (o *ProductGroupProductsInnerPricingOneOf3) SetBaseAmountNil(b bool)`

 SetBaseAmountNil sets the value for BaseAmount to be an explicit nil

### UnsetBaseAmount
`func (o *ProductGroupProductsInnerPricingOneOf3) UnsetBaseAmount()`

UnsetBaseAmount ensures that no value is present for BaseAmount, not even an explicit nil
### GetUsageReset

`func (o *ProductGroupProductsInnerPricingOneOf3) GetUsageReset() int32`

GetUsageReset returns the UsageReset field if non-nil, zero value otherwise.

### GetUsageResetOk

`func (o *ProductGroupProductsInnerPricingOneOf3) GetUsageResetOk() (*int32, bool)`

GetUsageResetOk returns a tuple with the UsageReset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageReset

`func (o *ProductGroupProductsInnerPricingOneOf3) SetUsageReset(v int32)`

SetUsageReset sets UsageReset field to given value.

### HasUsageReset

`func (o *ProductGroupProductsInnerPricingOneOf3) HasUsageReset() bool`

HasUsageReset returns a boolean if a field has been set.

### SetUsageResetNil

`func (o *ProductGroupProductsInnerPricingOneOf3) SetUsageResetNil(b bool)`

 SetUsageResetNil sets the value for UsageReset to be an explicit nil

### UnsetUsageReset
`func (o *ProductGroupProductsInnerPricingOneOf3) UnsetUsageReset()`

UnsetUsageReset ensures that no value is present for UsageReset, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


