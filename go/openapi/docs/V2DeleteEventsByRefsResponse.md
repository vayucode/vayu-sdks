# V2DeleteEventsByRefsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Events** | [**[]DeleteEventsByRefsResponseEventsInner**](DeleteEventsByRefsResponseEventsInner.md) | The events that were deleted | 

## Methods

### NewV2DeleteEventsByRefsResponse

`func NewV2DeleteEventsByRefsResponse(events []DeleteEventsByRefsResponseEventsInner, ) *V2DeleteEventsByRefsResponse`

NewV2DeleteEventsByRefsResponse instantiates a new V2DeleteEventsByRefsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2DeleteEventsByRefsResponseWithDefaults

`func NewV2DeleteEventsByRefsResponseWithDefaults() *V2DeleteEventsByRefsResponse`

NewV2DeleteEventsByRefsResponseWithDefaults instantiates a new V2DeleteEventsByRefsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvents

`func (o *V2DeleteEventsByRefsResponse) GetEvents() []DeleteEventsByRefsResponseEventsInner`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *V2DeleteEventsByRefsResponse) GetEventsOk() (*[]DeleteEventsByRefsResponseEventsInner, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *V2DeleteEventsByRefsResponse) SetEvents(v []DeleteEventsByRefsResponseEventsInner)`

SetEvents sets Events field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


