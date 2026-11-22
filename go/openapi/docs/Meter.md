# Meter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the meter | 
**EventName** | **string** | The name of the event that the meter is tracking. | 
**ProductCode** | Pointer to **string** | The product code of the meter | [optional] 
**AggregationMethod** | [**AggregationMethod**](AggregationMethod.md) |  | 
**Filter** | Pointer to [**Filter**](Filter.md) |  | [optional] 
**SalesForceProductId** | Pointer to **NullableString** | The ID of the meter in the Salesforce system | [optional] 

## Methods

### NewMeter

`func NewMeter(name string, eventName string, aggregationMethod AggregationMethod, ) *Meter`

NewMeter instantiates a new Meter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMeterWithDefaults

`func NewMeterWithDefaults() *Meter`

NewMeterWithDefaults instantiates a new Meter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Meter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Meter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Meter) SetName(v string)`

SetName sets Name field to given value.


### GetEventName

`func (o *Meter) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *Meter) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *Meter) SetEventName(v string)`

SetEventName sets EventName field to given value.


### GetProductCode

`func (o *Meter) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *Meter) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *Meter) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.

### HasProductCode

`func (o *Meter) HasProductCode() bool`

HasProductCode returns a boolean if a field has been set.

### GetAggregationMethod

`func (o *Meter) GetAggregationMethod() AggregationMethod`

GetAggregationMethod returns the AggregationMethod field if non-nil, zero value otherwise.

### GetAggregationMethodOk

`func (o *Meter) GetAggregationMethodOk() (*AggregationMethod, bool)`

GetAggregationMethodOk returns a tuple with the AggregationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationMethod

`func (o *Meter) SetAggregationMethod(v AggregationMethod)`

SetAggregationMethod sets AggregationMethod field to given value.


### GetFilter

`func (o *Meter) GetFilter() Filter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Meter) GetFilterOk() (*Filter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Meter) SetFilter(v Filter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Meter) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetSalesForceProductId

`func (o *Meter) GetSalesForceProductId() string`

GetSalesForceProductId returns the SalesForceProductId field if non-nil, zero value otherwise.

### GetSalesForceProductIdOk

`func (o *Meter) GetSalesForceProductIdOk() (*string, bool)`

GetSalesForceProductIdOk returns a tuple with the SalesForceProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceProductId

`func (o *Meter) SetSalesForceProductId(v string)`

SetSalesForceProductId sets SalesForceProductId field to given value.

### HasSalesForceProductId

`func (o *Meter) HasSalesForceProductId() bool`

HasSalesForceProductId returns a boolean if a field has been set.

### SetSalesForceProductIdNil

`func (o *Meter) SetSalesForceProductIdNil(b bool)`

 SetSalesForceProductIdNil sets the value for SalesForceProductId to be an explicit nil

### UnsetSalesForceProductId
`func (o *Meter) UnsetSalesForceProductId()`

UnsetSalesForceProductId ensures that no value is present for SalesForceProductId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


