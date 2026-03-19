# ProductGroupProductsInnerCommitment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Units** | **float32** | Units to commit the customer for | 
**Price** | Pointer to **NullableFloat32** | Price to charge the customer for the committed units | [optional] 
**Scheduling** | Pointer to [**NullableProductGroupProductsInnerCommitmentScheduling**](ProductGroupProductsInnerCommitmentScheduling.md) |  | [optional] 
**OverageStrategy** | Pointer to [**NullableExternalOverageStrategy**](ExternalOverageStrategy.md) |  | [optional] [default to EXTERNALOVERAGESTRATEGY_IGNORE]

## Methods

### NewProductGroupProductsInnerCommitment

`func NewProductGroupProductsInnerCommitment(units float32, ) *ProductGroupProductsInnerCommitment`

NewProductGroupProductsInnerCommitment instantiates a new ProductGroupProductsInnerCommitment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupProductsInnerCommitmentWithDefaults

`func NewProductGroupProductsInnerCommitmentWithDefaults() *ProductGroupProductsInnerCommitment`

NewProductGroupProductsInnerCommitmentWithDefaults instantiates a new ProductGroupProductsInnerCommitment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUnits

`func (o *ProductGroupProductsInnerCommitment) GetUnits() float32`

GetUnits returns the Units field if non-nil, zero value otherwise.

### GetUnitsOk

`func (o *ProductGroupProductsInnerCommitment) GetUnitsOk() (*float32, bool)`

GetUnitsOk returns a tuple with the Units field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnits

`func (o *ProductGroupProductsInnerCommitment) SetUnits(v float32)`

SetUnits sets Units field to given value.


### GetPrice

`func (o *ProductGroupProductsInnerCommitment) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ProductGroupProductsInnerCommitment) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ProductGroupProductsInnerCommitment) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ProductGroupProductsInnerCommitment) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### SetPriceNil

`func (o *ProductGroupProductsInnerCommitment) SetPriceNil(b bool)`

 SetPriceNil sets the value for Price to be an explicit nil

### UnsetPrice
`func (o *ProductGroupProductsInnerCommitment) UnsetPrice()`

UnsetPrice ensures that no value is present for Price, not even an explicit nil
### GetScheduling

`func (o *ProductGroupProductsInnerCommitment) GetScheduling() ProductGroupProductsInnerCommitmentScheduling`

GetScheduling returns the Scheduling field if non-nil, zero value otherwise.

### GetSchedulingOk

`func (o *ProductGroupProductsInnerCommitment) GetSchedulingOk() (*ProductGroupProductsInnerCommitmentScheduling, bool)`

GetSchedulingOk returns a tuple with the Scheduling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduling

`func (o *ProductGroupProductsInnerCommitment) SetScheduling(v ProductGroupProductsInnerCommitmentScheduling)`

SetScheduling sets Scheduling field to given value.

### HasScheduling

`func (o *ProductGroupProductsInnerCommitment) HasScheduling() bool`

HasScheduling returns a boolean if a field has been set.

### SetSchedulingNil

`func (o *ProductGroupProductsInnerCommitment) SetSchedulingNil(b bool)`

 SetSchedulingNil sets the value for Scheduling to be an explicit nil

### UnsetScheduling
`func (o *ProductGroupProductsInnerCommitment) UnsetScheduling()`

UnsetScheduling ensures that no value is present for Scheduling, not even an explicit nil
### GetOverageStrategy

`func (o *ProductGroupProductsInnerCommitment) GetOverageStrategy() ExternalOverageStrategy`

GetOverageStrategy returns the OverageStrategy field if non-nil, zero value otherwise.

### GetOverageStrategyOk

`func (o *ProductGroupProductsInnerCommitment) GetOverageStrategyOk() (*ExternalOverageStrategy, bool)`

GetOverageStrategyOk returns a tuple with the OverageStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverageStrategy

`func (o *ProductGroupProductsInnerCommitment) SetOverageStrategy(v ExternalOverageStrategy)`

SetOverageStrategy sets OverageStrategy field to given value.

### HasOverageStrategy

`func (o *ProductGroupProductsInnerCommitment) HasOverageStrategy() bool`

HasOverageStrategy returns a boolean if a field has been set.

### SetOverageStrategyNil

`func (o *ProductGroupProductsInnerCommitment) SetOverageStrategyNil(b bool)`

 SetOverageStrategyNil sets the value for OverageStrategy to be an explicit nil

### UnsetOverageStrategy
`func (o *ProductGroupProductsInnerCommitment) UnsetOverageStrategy()`

UnsetOverageStrategy ensures that no value is present for OverageStrategy, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


