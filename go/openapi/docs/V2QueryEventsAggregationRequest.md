# V2QueryEventsAggregationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomerId** | **string** |  | 
**CustomerIdPattern** | Pointer to **string** |  | [optional] 
**Period** | [**V2QueryEventsAggregationRequestPeriod**](V2QueryEventsAggregationRequestPeriod.md) |  | 
**Meters** | [**[]V2QueryEventsAggregationRequestMetersInner**](V2QueryEventsAggregationRequestMetersInner.md) |  | 
**GroupBy** | **string** |  | 
**FillDates** | Pointer to **bool** |  | [optional] 

## Methods

### NewV2QueryEventsAggregationRequest

`func NewV2QueryEventsAggregationRequest(customerId string, period V2QueryEventsAggregationRequestPeriod, meters []V2QueryEventsAggregationRequestMetersInner, groupBy string, ) *V2QueryEventsAggregationRequest`

NewV2QueryEventsAggregationRequest instantiates a new V2QueryEventsAggregationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2QueryEventsAggregationRequestWithDefaults

`func NewV2QueryEventsAggregationRequestWithDefaults() *V2QueryEventsAggregationRequest`

NewV2QueryEventsAggregationRequestWithDefaults instantiates a new V2QueryEventsAggregationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerId

`func (o *V2QueryEventsAggregationRequest) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *V2QueryEventsAggregationRequest) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *V2QueryEventsAggregationRequest) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetCustomerIdPattern

`func (o *V2QueryEventsAggregationRequest) GetCustomerIdPattern() string`

GetCustomerIdPattern returns the CustomerIdPattern field if non-nil, zero value otherwise.

### GetCustomerIdPatternOk

`func (o *V2QueryEventsAggregationRequest) GetCustomerIdPatternOk() (*string, bool)`

GetCustomerIdPatternOk returns a tuple with the CustomerIdPattern field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerIdPattern

`func (o *V2QueryEventsAggregationRequest) SetCustomerIdPattern(v string)`

SetCustomerIdPattern sets CustomerIdPattern field to given value.

### HasCustomerIdPattern

`func (o *V2QueryEventsAggregationRequest) HasCustomerIdPattern() bool`

HasCustomerIdPattern returns a boolean if a field has been set.

### GetPeriod

`func (o *V2QueryEventsAggregationRequest) GetPeriod() V2QueryEventsAggregationRequestPeriod`

GetPeriod returns the Period field if non-nil, zero value otherwise.

### GetPeriodOk

`func (o *V2QueryEventsAggregationRequest) GetPeriodOk() (*V2QueryEventsAggregationRequestPeriod, bool)`

GetPeriodOk returns a tuple with the Period field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriod

`func (o *V2QueryEventsAggregationRequest) SetPeriod(v V2QueryEventsAggregationRequestPeriod)`

SetPeriod sets Period field to given value.


### GetMeters

`func (o *V2QueryEventsAggregationRequest) GetMeters() []V2QueryEventsAggregationRequestMetersInner`

GetMeters returns the Meters field if non-nil, zero value otherwise.

### GetMetersOk

`func (o *V2QueryEventsAggregationRequest) GetMetersOk() (*[]V2QueryEventsAggregationRequestMetersInner, bool)`

GetMetersOk returns a tuple with the Meters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeters

`func (o *V2QueryEventsAggregationRequest) SetMeters(v []V2QueryEventsAggregationRequestMetersInner)`

SetMeters sets Meters field to given value.


### GetGroupBy

`func (o *V2QueryEventsAggregationRequest) GetGroupBy() string`

GetGroupBy returns the GroupBy field if non-nil, zero value otherwise.

### GetGroupByOk

`func (o *V2QueryEventsAggregationRequest) GetGroupByOk() (*string, bool)`

GetGroupByOk returns a tuple with the GroupBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupBy

`func (o *V2QueryEventsAggregationRequest) SetGroupBy(v string)`

SetGroupBy sets GroupBy field to given value.


### GetFillDates

`func (o *V2QueryEventsAggregationRequest) GetFillDates() bool`

GetFillDates returns the FillDates field if non-nil, zero value otherwise.

### GetFillDatesOk

`func (o *V2QueryEventsAggregationRequest) GetFillDatesOk() (*bool, bool)`

GetFillDatesOk returns a tuple with the FillDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFillDates

`func (o *V2QueryEventsAggregationRequest) SetFillDates(v bool)`

SetFillDates sets FillDates field to given value.

### HasFillDates

`func (o *V2QueryEventsAggregationRequest) HasFillDates() bool`

HasFillDates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


