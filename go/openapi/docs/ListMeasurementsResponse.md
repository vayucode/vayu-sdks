# ListMeasurementsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Measurements** | [**[]CreateMeasurementResponseMeasurement**](CreateMeasurementResponseMeasurement.md) |  | 
**Total** | **float32** |  | 
**HasMore** | **bool** |  | 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewListMeasurementsResponse

`func NewListMeasurementsResponse(measurements []CreateMeasurementResponseMeasurement, total float32, hasMore bool, ) *ListMeasurementsResponse`

NewListMeasurementsResponse instantiates a new ListMeasurementsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListMeasurementsResponseWithDefaults

`func NewListMeasurementsResponseWithDefaults() *ListMeasurementsResponse`

NewListMeasurementsResponseWithDefaults instantiates a new ListMeasurementsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMeasurements

`func (o *ListMeasurementsResponse) GetMeasurements() []CreateMeasurementResponseMeasurement`

GetMeasurements returns the Measurements field if non-nil, zero value otherwise.

### GetMeasurementsOk

`func (o *ListMeasurementsResponse) GetMeasurementsOk() (*[]CreateMeasurementResponseMeasurement, bool)`

GetMeasurementsOk returns a tuple with the Measurements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeasurements

`func (o *ListMeasurementsResponse) SetMeasurements(v []CreateMeasurementResponseMeasurement)`

SetMeasurements sets Measurements field to given value.


### GetTotal

`func (o *ListMeasurementsResponse) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ListMeasurementsResponse) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ListMeasurementsResponse) SetTotal(v float32)`

SetTotal sets Total field to given value.


### GetHasMore

`func (o *ListMeasurementsResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ListMeasurementsResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ListMeasurementsResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.


### GetNextCursor

`func (o *ListMeasurementsResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *ListMeasurementsResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *ListMeasurementsResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *ListMeasurementsResponse) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


