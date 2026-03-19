# UsageWindow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | **time.Time** | The start timestamp of the usage window in ISO 8601 format | 
**End** | **time.Time** | The end timestamp of the usage window in ISO 8601 format | 

## Methods

### NewUsageWindow

`func NewUsageWindow(start time.Time, end time.Time, ) *UsageWindow`

NewUsageWindow instantiates a new UsageWindow object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsageWindowWithDefaults

`func NewUsageWindowWithDefaults() *UsageWindow`

NewUsageWindowWithDefaults instantiates a new UsageWindow object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *UsageWindow) GetStart() time.Time`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *UsageWindow) GetStartOk() (*time.Time, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *UsageWindow) SetStart(v time.Time)`

SetStart sets Start field to given value.


### GetEnd

`func (o *UsageWindow) GetEnd() time.Time`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *UsageWindow) GetEndOk() (*time.Time, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *UsageWindow) SetEnd(v time.Time)`

SetEnd sets End field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


