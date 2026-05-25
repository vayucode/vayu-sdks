# V2SendEventsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValidEvents** | [**[]Event**](Event.md) | An array of events that were successfully processed and sent to the queue. | 
**InvalidEvents** | [**[]InvalidEvent**](InvalidEvent.md) | An array of events that failed validation and were not sent to the queue. Each object contains the event and the error message. | 

## Methods

### NewV2SendEventsResponse

`func NewV2SendEventsResponse(validEvents []Event, invalidEvents []InvalidEvent, ) *V2SendEventsResponse`

NewV2SendEventsResponse instantiates a new V2SendEventsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2SendEventsResponseWithDefaults

`func NewV2SendEventsResponseWithDefaults() *V2SendEventsResponse`

NewV2SendEventsResponseWithDefaults instantiates a new V2SendEventsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValidEvents

`func (o *V2SendEventsResponse) GetValidEvents() []Event`

GetValidEvents returns the ValidEvents field if non-nil, zero value otherwise.

### GetValidEventsOk

`func (o *V2SendEventsResponse) GetValidEventsOk() (*[]Event, bool)`

GetValidEventsOk returns a tuple with the ValidEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidEvents

`func (o *V2SendEventsResponse) SetValidEvents(v []Event)`

SetValidEvents sets ValidEvents field to given value.


### GetInvalidEvents

`func (o *V2SendEventsResponse) GetInvalidEvents() []InvalidEvent`

GetInvalidEvents returns the InvalidEvents field if non-nil, zero value otherwise.

### GetInvalidEventsOk

`func (o *V2SendEventsResponse) GetInvalidEventsOk() (*[]InvalidEvent, bool)`

GetInvalidEventsOk returns a tuple with the InvalidEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvalidEvents

`func (o *V2SendEventsResponse) SetInvalidEvents(v []InvalidEvent)`

SetInvalidEvents sets InvalidEvents field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


