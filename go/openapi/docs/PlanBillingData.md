# PlanBillingData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingInterval** | [**BillingInterval**](BillingInterval.md) |  | 
**Duration** | [**PlanDuration**](PlanDuration.md) |  | 
**PaymentTerm** | [**PaymentTerm**](PaymentTerm.md) |  | 
**AutoRenewal** | **bool** |  | [default to false]
**ProRated** | Pointer to **NullableBool** |  | [optional] 
**BillingDate** | Pointer to [**NullableBillingDate**](BillingDate.md) |  | [optional] 
**RenewalDuration** | Pointer to **NullableFloat32** | months each automatic renewal runs for; the term before it when not stated | [optional] 
**RenewsUpToNTimes** | Pointer to **NullableFloat32** | how many times the contract renews automatically; no limit when not stated | [optional] 

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
### GetBillingDate

`func (o *PlanBillingData) GetBillingDate() BillingDate`

GetBillingDate returns the BillingDate field if non-nil, zero value otherwise.

### GetBillingDateOk

`func (o *PlanBillingData) GetBillingDateOk() (*BillingDate, bool)`

GetBillingDateOk returns a tuple with the BillingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingDate

`func (o *PlanBillingData) SetBillingDate(v BillingDate)`

SetBillingDate sets BillingDate field to given value.

### HasBillingDate

`func (o *PlanBillingData) HasBillingDate() bool`

HasBillingDate returns a boolean if a field has been set.

### SetBillingDateNil

`func (o *PlanBillingData) SetBillingDateNil(b bool)`

 SetBillingDateNil sets the value for BillingDate to be an explicit nil

### UnsetBillingDate
`func (o *PlanBillingData) UnsetBillingDate()`

UnsetBillingDate ensures that no value is present for BillingDate, not even an explicit nil
### GetRenewalDuration

`func (o *PlanBillingData) GetRenewalDuration() float32`

GetRenewalDuration returns the RenewalDuration field if non-nil, zero value otherwise.

### GetRenewalDurationOk

`func (o *PlanBillingData) GetRenewalDurationOk() (*float32, bool)`

GetRenewalDurationOk returns a tuple with the RenewalDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRenewalDuration

`func (o *PlanBillingData) SetRenewalDuration(v float32)`

SetRenewalDuration sets RenewalDuration field to given value.

### HasRenewalDuration

`func (o *PlanBillingData) HasRenewalDuration() bool`

HasRenewalDuration returns a boolean if a field has been set.

### SetRenewalDurationNil

`func (o *PlanBillingData) SetRenewalDurationNil(b bool)`

 SetRenewalDurationNil sets the value for RenewalDuration to be an explicit nil

### UnsetRenewalDuration
`func (o *PlanBillingData) UnsetRenewalDuration()`

UnsetRenewalDuration ensures that no value is present for RenewalDuration, not even an explicit nil
### GetRenewsUpToNTimes

`func (o *PlanBillingData) GetRenewsUpToNTimes() float32`

GetRenewsUpToNTimes returns the RenewsUpToNTimes field if non-nil, zero value otherwise.

### GetRenewsUpToNTimesOk

`func (o *PlanBillingData) GetRenewsUpToNTimesOk() (*float32, bool)`

GetRenewsUpToNTimesOk returns a tuple with the RenewsUpToNTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRenewsUpToNTimes

`func (o *PlanBillingData) SetRenewsUpToNTimes(v float32)`

SetRenewsUpToNTimes sets RenewsUpToNTimes field to given value.

### HasRenewsUpToNTimes

`func (o *PlanBillingData) HasRenewsUpToNTimes() bool`

HasRenewsUpToNTimes returns a boolean if a field has been set.

### SetRenewsUpToNTimesNil

`func (o *PlanBillingData) SetRenewsUpToNTimesNil(b bool)`

 SetRenewsUpToNTimesNil sets the value for RenewsUpToNTimes to be an explicit nil

### UnsetRenewsUpToNTimes
`func (o *PlanBillingData) UnsetRenewsUpToNTimes()`

UnsetRenewsUpToNTimes ensures that no value is present for RenewsUpToNTimes, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


