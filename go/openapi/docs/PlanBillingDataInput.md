# PlanBillingDataInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingInterval** | [**BillingInterval**](BillingInterval.md) |  | 
**Duration** | [**PlanDuration**](PlanDuration.md) |  | 
**PaymentTerm** | [**PaymentTerm**](PaymentTerm.md) |  | 
**AutoRenewal** | **bool** |  | [default to false]
**ProRated** | Pointer to **NullableBool** |  | [optional] 
**BillingDate** | Pointer to [**NullableBillingDate**](BillingDate.md) |  | [optional] 
**RenewalDuration** | Pointer to **NullableInt32** | months each automatic renewal runs for; the term before it when not stated | [optional] 
**RenewsUpToNTimes** | Pointer to **NullableInt32** | how many times the contract renews automatically; no limit when not stated | [optional] 

## Methods

### NewPlanBillingDataInput

`func NewPlanBillingDataInput(billingInterval BillingInterval, duration PlanDuration, paymentTerm PaymentTerm, autoRenewal bool, ) *PlanBillingDataInput`

NewPlanBillingDataInput instantiates a new PlanBillingDataInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanBillingDataInputWithDefaults

`func NewPlanBillingDataInputWithDefaults() *PlanBillingDataInput`

NewPlanBillingDataInputWithDefaults instantiates a new PlanBillingDataInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingInterval

`func (o *PlanBillingDataInput) GetBillingInterval() BillingInterval`

GetBillingInterval returns the BillingInterval field if non-nil, zero value otherwise.

### GetBillingIntervalOk

`func (o *PlanBillingDataInput) GetBillingIntervalOk() (*BillingInterval, bool)`

GetBillingIntervalOk returns a tuple with the BillingInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInterval

`func (o *PlanBillingDataInput) SetBillingInterval(v BillingInterval)`

SetBillingInterval sets BillingInterval field to given value.


### GetDuration

`func (o *PlanBillingDataInput) GetDuration() PlanDuration`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *PlanBillingDataInput) GetDurationOk() (*PlanDuration, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *PlanBillingDataInput) SetDuration(v PlanDuration)`

SetDuration sets Duration field to given value.


### GetPaymentTerm

`func (o *PlanBillingDataInput) GetPaymentTerm() PaymentTerm`

GetPaymentTerm returns the PaymentTerm field if non-nil, zero value otherwise.

### GetPaymentTermOk

`func (o *PlanBillingDataInput) GetPaymentTermOk() (*PaymentTerm, bool)`

GetPaymentTermOk returns a tuple with the PaymentTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTerm

`func (o *PlanBillingDataInput) SetPaymentTerm(v PaymentTerm)`

SetPaymentTerm sets PaymentTerm field to given value.


### GetAutoRenewal

`func (o *PlanBillingDataInput) GetAutoRenewal() bool`

GetAutoRenewal returns the AutoRenewal field if non-nil, zero value otherwise.

### GetAutoRenewalOk

`func (o *PlanBillingDataInput) GetAutoRenewalOk() (*bool, bool)`

GetAutoRenewalOk returns a tuple with the AutoRenewal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRenewal

`func (o *PlanBillingDataInput) SetAutoRenewal(v bool)`

SetAutoRenewal sets AutoRenewal field to given value.


### GetProRated

`func (o *PlanBillingDataInput) GetProRated() bool`

GetProRated returns the ProRated field if non-nil, zero value otherwise.

### GetProRatedOk

`func (o *PlanBillingDataInput) GetProRatedOk() (*bool, bool)`

GetProRatedOk returns a tuple with the ProRated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProRated

`func (o *PlanBillingDataInput) SetProRated(v bool)`

SetProRated sets ProRated field to given value.

### HasProRated

`func (o *PlanBillingDataInput) HasProRated() bool`

HasProRated returns a boolean if a field has been set.

### SetProRatedNil

`func (o *PlanBillingDataInput) SetProRatedNil(b bool)`

 SetProRatedNil sets the value for ProRated to be an explicit nil

### UnsetProRated
`func (o *PlanBillingDataInput) UnsetProRated()`

UnsetProRated ensures that no value is present for ProRated, not even an explicit nil
### GetBillingDate

`func (o *PlanBillingDataInput) GetBillingDate() BillingDate`

GetBillingDate returns the BillingDate field if non-nil, zero value otherwise.

### GetBillingDateOk

`func (o *PlanBillingDataInput) GetBillingDateOk() (*BillingDate, bool)`

GetBillingDateOk returns a tuple with the BillingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingDate

`func (o *PlanBillingDataInput) SetBillingDate(v BillingDate)`

SetBillingDate sets BillingDate field to given value.

### HasBillingDate

`func (o *PlanBillingDataInput) HasBillingDate() bool`

HasBillingDate returns a boolean if a field has been set.

### SetBillingDateNil

`func (o *PlanBillingDataInput) SetBillingDateNil(b bool)`

 SetBillingDateNil sets the value for BillingDate to be an explicit nil

### UnsetBillingDate
`func (o *PlanBillingDataInput) UnsetBillingDate()`

UnsetBillingDate ensures that no value is present for BillingDate, not even an explicit nil
### GetRenewalDuration

`func (o *PlanBillingDataInput) GetRenewalDuration() int32`

GetRenewalDuration returns the RenewalDuration field if non-nil, zero value otherwise.

### GetRenewalDurationOk

`func (o *PlanBillingDataInput) GetRenewalDurationOk() (*int32, bool)`

GetRenewalDurationOk returns a tuple with the RenewalDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRenewalDuration

`func (o *PlanBillingDataInput) SetRenewalDuration(v int32)`

SetRenewalDuration sets RenewalDuration field to given value.

### HasRenewalDuration

`func (o *PlanBillingDataInput) HasRenewalDuration() bool`

HasRenewalDuration returns a boolean if a field has been set.

### SetRenewalDurationNil

`func (o *PlanBillingDataInput) SetRenewalDurationNil(b bool)`

 SetRenewalDurationNil sets the value for RenewalDuration to be an explicit nil

### UnsetRenewalDuration
`func (o *PlanBillingDataInput) UnsetRenewalDuration()`

UnsetRenewalDuration ensures that no value is present for RenewalDuration, not even an explicit nil
### GetRenewsUpToNTimes

`func (o *PlanBillingDataInput) GetRenewsUpToNTimes() int32`

GetRenewsUpToNTimes returns the RenewsUpToNTimes field if non-nil, zero value otherwise.

### GetRenewsUpToNTimesOk

`func (o *PlanBillingDataInput) GetRenewsUpToNTimesOk() (*int32, bool)`

GetRenewsUpToNTimesOk returns a tuple with the RenewsUpToNTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRenewsUpToNTimes

`func (o *PlanBillingDataInput) SetRenewsUpToNTimes(v int32)`

SetRenewsUpToNTimes sets RenewsUpToNTimes field to given value.

### HasRenewsUpToNTimes

`func (o *PlanBillingDataInput) HasRenewsUpToNTimes() bool`

HasRenewsUpToNTimes returns a boolean if a field has been set.

### SetRenewsUpToNTimesNil

`func (o *PlanBillingDataInput) SetRenewsUpToNTimesNil(b bool)`

 SetRenewsUpToNTimesNil sets the value for RenewsUpToNTimes to be an explicit nil

### UnsetRenewsUpToNTimes
`func (o *PlanBillingDataInput) UnsetRenewsUpToNTimes()`

UnsetRenewsUpToNTimes ensures that no value is present for RenewsUpToNTimes, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


