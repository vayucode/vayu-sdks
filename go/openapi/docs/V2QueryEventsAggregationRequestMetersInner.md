# V2QueryEventsAggregationRequestMetersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** |  | 
**EventName** | **string** |  | 
**Aggregation** | Pointer to [**V2QueryEventsAggregationRequestMetersInnerAggregation**](V2QueryEventsAggregationRequestMetersInnerAggregation.md) |  | [optional] 
**SqlSelect** | Pointer to **string** |  | [optional] 
**SqlFullQuery** | Pointer to [**V2QueryEventsAggregationRequestMetersInnerSqlFullQuery**](V2QueryEventsAggregationRequestMetersInnerSqlFullQuery.md) |  | [optional] 
**Filters** | Pointer to [**[]V2QueryEventsAggregationRequestMetersInnerFiltersInner**](V2QueryEventsAggregationRequestMetersInnerFiltersInner.md) |  | [optional] 

## Methods

### NewV2QueryEventsAggregationRequestMetersInner

`func NewV2QueryEventsAggregationRequestMetersInner(key string, eventName string, ) *V2QueryEventsAggregationRequestMetersInner`

NewV2QueryEventsAggregationRequestMetersInner instantiates a new V2QueryEventsAggregationRequestMetersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2QueryEventsAggregationRequestMetersInnerWithDefaults

`func NewV2QueryEventsAggregationRequestMetersInnerWithDefaults() *V2QueryEventsAggregationRequestMetersInner`

NewV2QueryEventsAggregationRequestMetersInnerWithDefaults instantiates a new V2QueryEventsAggregationRequestMetersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *V2QueryEventsAggregationRequestMetersInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *V2QueryEventsAggregationRequestMetersInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *V2QueryEventsAggregationRequestMetersInner) SetKey(v string)`

SetKey sets Key field to given value.


### GetEventName

`func (o *V2QueryEventsAggregationRequestMetersInner) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *V2QueryEventsAggregationRequestMetersInner) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *V2QueryEventsAggregationRequestMetersInner) SetEventName(v string)`

SetEventName sets EventName field to given value.


### GetAggregation

`func (o *V2QueryEventsAggregationRequestMetersInner) GetAggregation() V2QueryEventsAggregationRequestMetersInnerAggregation`

GetAggregation returns the Aggregation field if non-nil, zero value otherwise.

### GetAggregationOk

`func (o *V2QueryEventsAggregationRequestMetersInner) GetAggregationOk() (*V2QueryEventsAggregationRequestMetersInnerAggregation, bool)`

GetAggregationOk returns a tuple with the Aggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregation

`func (o *V2QueryEventsAggregationRequestMetersInner) SetAggregation(v V2QueryEventsAggregationRequestMetersInnerAggregation)`

SetAggregation sets Aggregation field to given value.

### HasAggregation

`func (o *V2QueryEventsAggregationRequestMetersInner) HasAggregation() bool`

HasAggregation returns a boolean if a field has been set.

### GetSqlSelect

`func (o *V2QueryEventsAggregationRequestMetersInner) GetSqlSelect() string`

GetSqlSelect returns the SqlSelect field if non-nil, zero value otherwise.

### GetSqlSelectOk

`func (o *V2QueryEventsAggregationRequestMetersInner) GetSqlSelectOk() (*string, bool)`

GetSqlSelectOk returns a tuple with the SqlSelect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSqlSelect

`func (o *V2QueryEventsAggregationRequestMetersInner) SetSqlSelect(v string)`

SetSqlSelect sets SqlSelect field to given value.

### HasSqlSelect

`func (o *V2QueryEventsAggregationRequestMetersInner) HasSqlSelect() bool`

HasSqlSelect returns a boolean if a field has been set.

### GetSqlFullQuery

`func (o *V2QueryEventsAggregationRequestMetersInner) GetSqlFullQuery() V2QueryEventsAggregationRequestMetersInnerSqlFullQuery`

GetSqlFullQuery returns the SqlFullQuery field if non-nil, zero value otherwise.

### GetSqlFullQueryOk

`func (o *V2QueryEventsAggregationRequestMetersInner) GetSqlFullQueryOk() (*V2QueryEventsAggregationRequestMetersInnerSqlFullQuery, bool)`

GetSqlFullQueryOk returns a tuple with the SqlFullQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSqlFullQuery

`func (o *V2QueryEventsAggregationRequestMetersInner) SetSqlFullQuery(v V2QueryEventsAggregationRequestMetersInnerSqlFullQuery)`

SetSqlFullQuery sets SqlFullQuery field to given value.

### HasSqlFullQuery

`func (o *V2QueryEventsAggregationRequestMetersInner) HasSqlFullQuery() bool`

HasSqlFullQuery returns a boolean if a field has been set.

### GetFilters

`func (o *V2QueryEventsAggregationRequestMetersInner) GetFilters() []V2QueryEventsAggregationRequestMetersInnerFiltersInner`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *V2QueryEventsAggregationRequestMetersInner) GetFiltersOk() (*[]V2QueryEventsAggregationRequestMetersInnerFiltersInner, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *V2QueryEventsAggregationRequestMetersInner) SetFilters(v []V2QueryEventsAggregationRequestMetersInnerFiltersInner)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *V2QueryEventsAggregationRequestMetersInner) HasFilters() bool`

HasFilters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


