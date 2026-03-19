# ProductGroupProductsInnerScheduling

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingDay** | Pointer to **int32** | The day of the month that the product is billed | [optional] [default to 1]
**Duration** | [**ProductGroupProductsInnerSchedulingDuration**](ProductGroupProductsInnerSchedulingDuration.md) |  | 

## Methods

### NewProductGroupProductsInnerScheduling

`func NewProductGroupProductsInnerScheduling(duration ProductGroupProductsInnerSchedulingDuration, ) *ProductGroupProductsInnerScheduling`

NewProductGroupProductsInnerScheduling instantiates a new ProductGroupProductsInnerScheduling object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupProductsInnerSchedulingWithDefaults

`func NewProductGroupProductsInnerSchedulingWithDefaults() *ProductGroupProductsInnerScheduling`

NewProductGroupProductsInnerSchedulingWithDefaults instantiates a new ProductGroupProductsInnerScheduling object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingDay

`func (o *ProductGroupProductsInnerScheduling) GetBillingDay() int32`

GetBillingDay returns the BillingDay field if non-nil, zero value otherwise.

### GetBillingDayOk

`func (o *ProductGroupProductsInnerScheduling) GetBillingDayOk() (*int32, bool)`

GetBillingDayOk returns a tuple with the BillingDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingDay

`func (o *ProductGroupProductsInnerScheduling) SetBillingDay(v int32)`

SetBillingDay sets BillingDay field to given value.

### HasBillingDay

`func (o *ProductGroupProductsInnerScheduling) HasBillingDay() bool`

HasBillingDay returns a boolean if a field has been set.

### GetDuration

`func (o *ProductGroupProductsInnerScheduling) GetDuration() ProductGroupProductsInnerSchedulingDuration`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *ProductGroupProductsInnerScheduling) GetDurationOk() (*ProductGroupProductsInnerSchedulingDuration, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *ProductGroupProductsInnerScheduling) SetDuration(v ProductGroupProductsInnerSchedulingDuration)`

SetDuration sets Duration field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


