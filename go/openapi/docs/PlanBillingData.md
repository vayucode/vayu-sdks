# PlanBillingData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingInterval** | [**BillingInterval**](BillingInterval.md) |  | 
**Duration** | [**PlanDuration**](PlanDuration.md) |  | 
**PaymentTerm** | [**PaymentTerm**](PaymentTerm.md) |  | 
**AutoRenewal** | **bool** |  | [default to false]
**ProRated** | Pointer to **NullableBool** |  | [optional] 

## Methods

### NewPlanBillingData

`func NewPlanBillingData(billingInterval BillingInterval, duration PlanDuration, paymentTerm PaymentTerm, autoRenewal bool, ) *PlanBillingData`

NewPlanBillingData instantiates a new PlanBillingData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanBillingDataWithDefaults

`func NewPlanBillingDataWithDefaults() *PlanBillingData`

NewPlanBillingDataWithDefaults instantiates a new PlanBillingData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingInterval

`func (o *PlanBillingData) GetBillingInterval() BillingInterval`

GetBillingInterval returns the BillingInterval field if non-nil, zero value otherwise.

### GetBillingIntervalOk

`func (o *PlanBillingData) GetBillingIntervalOk() (*BillingInterval, bool)`

GetBillingIntervalOk returns a tuple with the BillingInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInterval

`func (o *PlanBillingData) SetBillingInterval(v BillingInterval)`

SetBillingInterval sets BillingInterval field to given value.


### GetDuration

`func (o *PlanBillingData) GetDuration() PlanDuration`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *PlanBillingData) GetDurationOk() (*PlanDuration, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *PlanBillingData) SetDuration(v PlanDuration)`

SetDuration sets Duration field to given value.


### GetPaymentTerm

`func (o *PlanBillingData) GetPaymentTerm() PaymentTerm`

GetPaymentTerm returns the PaymentTerm field if non-nil, zero value otherwise.

### GetPaymentTermOk

`func (o *PlanBillingData) GetPaymentTermOk() (*PaymentTerm, bool)`

GetPaymentTermOk returns a tuple with the PaymentTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTerm

`func (o *PlanBillingData) SetPaymentTerm(v PaymentTerm)`

SetPaymentTerm sets PaymentTerm field to given value.


### GetAutoRenewal

`func (o *PlanBillingData) GetAutoRenewal() bool`

GetAutoRenewal returns the AutoRenewal field if non-nil, zero value otherwise.

### GetAutoRenewalOk

`func (o *PlanBillingData) GetAutoRenewalOk() (*bool, bool)`

GetAutoRenewalOk returns a tuple with the AutoRenewal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRenewal

`func (o *PlanBillingData) SetAutoRenewal(v bool)`

SetAutoRenewal sets AutoRenewal field to given value.


### GetProRated

`func (o *PlanBillingData) GetProRated() bool`

GetProRated returns the ProRated field if non-nil, zero value otherwise.

### GetProRatedOk

`func (o *PlanBillingData) GetProRatedOk() (*bool, bool)`

GetProRatedOk returns a tuple with the ProRated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProRated

`func (o *PlanBillingData) SetProRated(v bool)`

SetProRated sets ProRated field to given value.

### HasProRated

`func (o *PlanBillingData) HasProRated() bool`

HasProRated returns a boolean if a field has been set.

### SetProRatedNil

`func (o *PlanBillingData) SetProRatedNil(b bool)`

 SetProRatedNil sets the value for ProRated to be an explicit nil

### UnsetProRated
`func (o *PlanBillingData) UnsetProRated()`

UnsetProRated ensures that no value is present for ProRated, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


