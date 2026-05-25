# V2QueryEventsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Events** | [**[]QueryEventsResponseEventsInner**](QueryEventsResponseEventsInner.md) |  | 
**Total** | **float32** |  | 
**HasMore** | **bool** |  | 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewV2QueryEventsResponse

`func NewV2QueryEventsResponse(events []QueryEventsResponseEventsInner, total float32, hasMore bool, ) *V2QueryEventsResponse`

NewV2QueryEventsResponse instantiates a new V2QueryEventsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2QueryEventsResponseWithDefaults

`func NewV2QueryEventsResponseWithDefaults() *V2QueryEventsResponse`

NewV2QueryEventsResponseWithDefaults instantiates a new V2QueryEventsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvents

`func (o *V2QueryEventsResponse) GetEvents() []QueryEventsResponseEventsInner`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *V2QueryEventsResponse) GetEventsOk() (*[]QueryEventsResponseEventsInner, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *V2QueryEventsResponse) SetEvents(v []QueryEventsResponseEventsInner)`

SetEvents sets Events field to given value.


### GetTotal

`func (o *V2QueryEventsResponse) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *V2QueryEventsResponse) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *V2QueryEventsResponse) SetTotal(v float32)`

SetTotal sets Total field to given value.


### GetHasMore

`func (o *V2QueryEventsResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *V2QueryEventsResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *V2QueryEventsResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.


### GetNextCursor

`func (o *V2QueryEventsResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *V2QueryEventsResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *V2QueryEventsResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *V2QueryEventsResponse) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


