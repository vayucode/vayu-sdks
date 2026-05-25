# ProductGroupProductsInnerCommitmentScheduling

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingDay** | Pointer to **int32** | The day of the month for the commitment scheduling | [optional] [default to 1]
**Duration** | [**ProductGroupProductsInnerCommitmentSchedulingDuration**](ProductGroupProductsInnerCommitmentSchedulingDuration.md) |  | 

## Methods

### NewProductGroupProductsInnerCommitmentScheduling

`func NewProductGroupProductsInnerCommitmentScheduling(duration ProductGroupProductsInnerCommitmentSchedulingDuration, ) *ProductGroupProductsInnerCommitmentScheduling`

NewProductGroupProductsInnerCommitmentScheduling instantiates a new ProductGroupProductsInnerCommitmentScheduling object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupProductsInnerCommitmentSchedulingWithDefaults

`func NewProductGroupProductsInnerCommitmentSchedulingWithDefaults() *ProductGroupProductsInnerCommitmentScheduling`

NewProductGroupProductsInnerCommitmentSchedulingWithDefaults instantiates a new ProductGroupProductsInnerCommitmentScheduling object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingDay

`func (o *ProductGroupProductsInnerCommitmentScheduling) GetBillingDay() int32`

GetBillingDay returns the BillingDay field if non-nil, zero value otherwise.

### GetBillingDayOk

`func (o *ProductGroupProductsInnerCommitmentScheduling) GetBillingDayOk() (*int32, bool)`

GetBillingDayOk returns a tuple with the BillingDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingDay

`func (o *ProductGroupProductsInnerCommitmentScheduling) SetBillingDay(v int32)`

SetBillingDay sets BillingDay field to given value.

### HasBillingDay

`func (o *ProductGroupProductsInnerCommitmentScheduling) HasBillingDay() bool`

HasBillingDay returns a boolean if a field has been set.

### GetDuration

`func (o *ProductGroupProductsInnerCommitmentScheduling) GetDuration() ProductGroupProductsInnerCommitmentSchedulingDuration`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *ProductGroupProductsInnerCommitmentScheduling) GetDurationOk() (*ProductGroupProductsInnerCommitmentSchedulingDuration, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *ProductGroupProductsInnerCommitmentScheduling) SetDuration(v ProductGroupProductsInnerCommitmentSchedulingDuration)`

SetDuration sets Duration field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


