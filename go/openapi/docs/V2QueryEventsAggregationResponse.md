# V2QueryEventsAggregationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataPoints** | [**[]V2QueryEventsAggregationResponseDataPointsInner**](V2QueryEventsAggregationResponseDataPointsInner.md) |  | 
**Period** | [**V2QueryEventsAggregationRequestPeriod**](V2QueryEventsAggregationRequestPeriod.md) |  | 
**GroupBy** | **string** |  | 

## Methods

### NewV2QueryEventsAggregationResponse

`func NewV2QueryEventsAggregationResponse(dataPoints []V2QueryEventsAggregationResponseDataPointsInner, period V2QueryEventsAggregationRequestPeriod, groupBy string, ) *V2QueryEventsAggregationResponse`

NewV2QueryEventsAggregationResponse instantiates a new V2QueryEventsAggregationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2QueryEventsAggregationResponseWithDefaults

`func NewV2QueryEventsAggregationResponseWithDefaults() *V2QueryEventsAggregationResponse`

NewV2QueryEventsAggregationResponseWithDefaults instantiates a new V2QueryEventsAggregationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataPoints

`func (o *V2QueryEventsAggregationResponse) GetDataPoints() []V2QueryEventsAggregationResponseDataPointsInner`

GetDataPoints returns the DataPoints field if non-nil, zero value otherwise.

### GetDataPointsOk

`func (o *V2QueryEventsAggregationResponse) GetDataPointsOk() (*[]V2QueryEventsAggregationResponseDataPointsInner, bool)`

GetDataPointsOk returns a tuple with the DataPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataPoints

`func (o *V2QueryEventsAggregationResponse) SetDataPoints(v []V2QueryEventsAggregationResponseDataPointsInner)`

SetDataPoints sets DataPoints field to given value.


### GetPeriod

`func (o *V2QueryEventsAggregationResponse) GetPeriod() V2QueryEventsAggregationRequestPeriod`

GetPeriod returns the Period field if non-nil, zero value otherwise.

### GetPeriodOk

`func (o *V2QueryEventsAggregationResponse) GetPeriodOk() (*V2QueryEventsAggregationRequestPeriod, bool)`

GetPeriodOk returns a tuple with the Period field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriod

`func (o *V2QueryEventsAggregationResponse) SetPeriod(v V2QueryEventsAggregationRequestPeriod)`

SetPeriod sets Period field to given value.


### GetGroupBy

`func (o *V2QueryEventsAggregationResponse) GetGroupBy() string`

GetGroupBy returns the GroupBy field if non-nil, zero value otherwise.

### GetGroupByOk

`func (o *V2QueryEventsAggregationResponse) GetGroupByOk() (*string, bool)`

GetGroupByOk returns a tuple with the GroupBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupBy

`func (o *V2QueryEventsAggregationResponse) SetGroupBy(v string)`

SetGroupBy sets GroupBy field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


