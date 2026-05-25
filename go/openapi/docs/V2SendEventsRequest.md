# V2SendEventsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Events** | [**[]Event**](Event.md) |  | 

## Methods

### NewV2SendEventsRequest

`func NewV2SendEventsRequest(events []Event, ) *V2SendEventsRequest`

NewV2SendEventsRequest instantiates a new V2SendEventsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2SendEventsRequestWithDefaults

`func NewV2SendEventsRequestWithDefaults() *V2SendEventsRequest`

NewV2SendEventsRequestWithDefaults instantiates a new V2SendEventsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvents

`func (o *V2SendEventsRequest) GetEvents() []Event`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *V2SendEventsRequest) GetEventsOk() (*[]Event, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *V2SendEventsRequest) SetEvents(v []Event)`

SetEvents sets Events field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


