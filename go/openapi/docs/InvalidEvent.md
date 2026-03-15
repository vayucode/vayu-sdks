# InvalidEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**Event**](Event.md) |  | 
**Error** | **string** | The error message indicating the reason the event failed validation. | 

## Methods

### NewInvalidEvent

`func NewInvalidEvent(event Event, error_ string, ) *InvalidEvent`

NewInvalidEvent instantiates a new InvalidEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvalidEventWithDefaults

`func NewInvalidEventWithDefaults() *InvalidEvent`

NewInvalidEventWithDefaults instantiates a new InvalidEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *InvalidEvent) GetEvent() Event`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *InvalidEvent) GetEventOk() (*Event, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *InvalidEvent) SetEvent(v Event)`

SetEvent sets Event field to given value.


### GetError

`func (o *InvalidEvent) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *InvalidEvent) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *InvalidEvent) SetError(v string)`

SetError sets Error field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


