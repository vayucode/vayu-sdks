# Meter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the meter | 
**EventName** | **string** | The name of the event that the meter is tracking. | 
**AggregationMethod** | [**AggregationMethod**](AggregationMethod.md) |  | 
**Filter** | Pointer to [**Filter**](Filter.md) |  | [optional] 

## Methods

### NewMeter

`func NewMeter(name string, eventName string, aggregationMethod AggregationMethod, ) *Meter`

NewMeter instantiates a new Meter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMeterWithDefaults

`func NewMeterWithDefaults() *Meter`

NewMeterWithDefaults instantiates a new Meter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Meter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Meter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Meter) SetName(v string)`

SetName sets Name field to given value.


### GetEventName

`func (o *Meter) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *Meter) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *Meter) SetEventName(v string)`

SetEventName sets EventName field to given value.


### GetAggregationMethod

`func (o *Meter) GetAggregationMethod() AggregationMethod`

GetAggregationMethod returns the AggregationMethod field if non-nil, zero value otherwise.

### GetAggregationMethodOk

`func (o *Meter) GetAggregationMethodOk() (*AggregationMethod, bool)`

GetAggregationMethodOk returns a tuple with the AggregationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationMethod

`func (o *Meter) SetAggregationMethod(v AggregationMethod)`

SetAggregationMethod sets AggregationMethod field to given value.


### GetFilter

`func (o *Meter) GetFilter() Filter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Meter) GetFilterOk() (*Filter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Meter) SetFilter(v Filter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Meter) HasFilter() bool`

HasFilter returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


