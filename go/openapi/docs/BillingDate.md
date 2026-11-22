# BillingDate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Anchor** | [**BillingDateAnchor**](BillingDateAnchor.md) |  | 
**DayOfMonth** | **int32** |  | 

## Methods

### NewBillingDate

`func NewBillingDate(anchor BillingDateAnchor, dayOfMonth int32, ) *BillingDate`

NewBillingDate instantiates a new BillingDate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingDateWithDefaults

`func NewBillingDateWithDefaults() *BillingDate`

NewBillingDateWithDefaults instantiates a new BillingDate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAnchor

`func (o *BillingDate) GetAnchor() BillingDateAnchor`

GetAnchor returns the Anchor field if non-nil, zero value otherwise.

### GetAnchorOk

`func (o *BillingDate) GetAnchorOk() (*BillingDateAnchor, bool)`

GetAnchorOk returns a tuple with the Anchor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnchor

`func (o *BillingDate) SetAnchor(v BillingDateAnchor)`

SetAnchor sets Anchor field to given value.


### GetDayOfMonth

`func (o *BillingDate) GetDayOfMonth() int32`

GetDayOfMonth returns the DayOfMonth field if non-nil, zero value otherwise.

### GetDayOfMonthOk

`func (o *BillingDate) GetDayOfMonthOk() (*int32, bool)`

GetDayOfMonthOk returns a tuple with the DayOfMonth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayOfMonth

`func (o *BillingDate) SetDayOfMonth(v int32)`

SetDayOfMonth sets DayOfMonth field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


