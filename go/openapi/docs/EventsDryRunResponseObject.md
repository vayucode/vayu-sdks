# EventsDryRunResponseObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**EventsDryRunResponseObjectEvent**](EventsDryRunResponseObjectEvent.md) |  | 
**MatchedCustomer** | Pointer to **NullableString** |  | [optional] 
**MeterWithValues** | [**[]EventsDryRunResponseObjectMeterWithValuesInner**](EventsDryRunResponseObjectMeterWithValuesInner.md) |  | 

## Methods

### NewEventsDryRunResponseObject

`func NewEventsDryRunResponseObject(event EventsDryRunResponseObjectEvent, meterWithValues []EventsDryRunResponseObjectMeterWithValuesInner, ) *EventsDryRunResponseObject`

NewEventsDryRunResponseObject instantiates a new EventsDryRunResponseObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventsDryRunResponseObjectWithDefaults

`func NewEventsDryRunResponseObjectWithDefaults() *EventsDryRunResponseObject`

NewEventsDryRunResponseObjectWithDefaults instantiates a new EventsDryRunResponseObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *EventsDryRunResponseObject) GetEvent() EventsDryRunResponseObjectEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *EventsDryRunResponseObject) GetEventOk() (*EventsDryRunResponseObjectEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *EventsDryRunResponseObject) SetEvent(v EventsDryRunResponseObjectEvent)`

SetEvent sets Event field to given value.


### GetMatchedCustomer

`func (o *EventsDryRunResponseObject) GetMatchedCustomer() string`

GetMatchedCustomer returns the MatchedCustomer field if non-nil, zero value otherwise.

### GetMatchedCustomerOk

`func (o *EventsDryRunResponseObject) GetMatchedCustomerOk() (*string, bool)`

GetMatchedCustomerOk returns a tuple with the MatchedCustomer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchedCustomer

`func (o *EventsDryRunResponseObject) SetMatchedCustomer(v string)`

SetMatchedCustomer sets MatchedCustomer field to given value.

### HasMatchedCustomer

`func (o *EventsDryRunResponseObject) HasMatchedCustomer() bool`

HasMatchedCustomer returns a boolean if a field has been set.

### SetMatchedCustomerNil

`func (o *EventsDryRunResponseObject) SetMatchedCustomerNil(b bool)`

 SetMatchedCustomerNil sets the value for MatchedCustomer to be an explicit nil

### UnsetMatchedCustomer
`func (o *EventsDryRunResponseObject) UnsetMatchedCustomer()`

UnsetMatchedCustomer ensures that no value is present for MatchedCustomer, not even an explicit nil
### GetMeterWithValues

`func (o *EventsDryRunResponseObject) GetMeterWithValues() []EventsDryRunResponseObjectMeterWithValuesInner`

GetMeterWithValues returns the MeterWithValues field if non-nil, zero value otherwise.

### GetMeterWithValuesOk

`func (o *EventsDryRunResponseObject) GetMeterWithValuesOk() (*[]EventsDryRunResponseObjectMeterWithValuesInner, bool)`

GetMeterWithValuesOk returns a tuple with the MeterWithValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterWithValues

`func (o *EventsDryRunResponseObject) SetMeterWithValues(v []EventsDryRunResponseObjectMeterWithValuesInner)`

SetMeterWithValues sets MeterWithValues field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


