# UpdateMeterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the meter | [optional] 
**EventName** | Pointer to **string** | The name of the event that the meter is tracking. | [optional] 
**ProductCode** | Pointer to **string** | The product code of the meter | [optional] 
**AggregationMethod** | Pointer to [**AggregationMethod**](AggregationMethod.md) |  | [optional] 
**Filter** | Pointer to [**Filter**](Filter.md) |  | [optional] 
**SalesForceProductId** | Pointer to **NullableString** | The ID of the meter in the Salesforce system | [optional] 

## Methods

### NewUpdateMeterRequest

`func NewUpdateMeterRequest() *UpdateMeterRequest`

NewUpdateMeterRequest instantiates a new UpdateMeterRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateMeterRequestWithDefaults

`func NewUpdateMeterRequestWithDefaults() *UpdateMeterRequest`

NewUpdateMeterRequestWithDefaults instantiates a new UpdateMeterRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UpdateMeterRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateMeterRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateMeterRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateMeterRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEventName

`func (o *UpdateMeterRequest) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *UpdateMeterRequest) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *UpdateMeterRequest) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *UpdateMeterRequest) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetProductCode

`func (o *UpdateMeterRequest) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *UpdateMeterRequest) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *UpdateMeterRequest) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.

### HasProductCode

`func (o *UpdateMeterRequest) HasProductCode() bool`

HasProductCode returns a boolean if a field has been set.

### GetAggregationMethod

`func (o *UpdateMeterRequest) GetAggregationMethod() AggregationMethod`

GetAggregationMethod returns the AggregationMethod field if non-nil, zero value otherwise.

### GetAggregationMethodOk

`func (o *UpdateMeterRequest) GetAggregationMethodOk() (*AggregationMethod, bool)`

GetAggregationMethodOk returns a tuple with the AggregationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationMethod

`func (o *UpdateMeterRequest) SetAggregationMethod(v AggregationMethod)`

SetAggregationMethod sets AggregationMethod field to given value.

### HasAggregationMethod

`func (o *UpdateMeterRequest) HasAggregationMethod() bool`

HasAggregationMethod returns a boolean if a field has been set.

### GetFilter

`func (o *UpdateMeterRequest) GetFilter() Filter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *UpdateMeterRequest) GetFilterOk() (*Filter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *UpdateMeterRequest) SetFilter(v Filter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *UpdateMeterRequest) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetSalesForceProductId

`func (o *UpdateMeterRequest) GetSalesForceProductId() string`

GetSalesForceProductId returns the SalesForceProductId field if non-nil, zero value otherwise.

### GetSalesForceProductIdOk

`func (o *UpdateMeterRequest) GetSalesForceProductIdOk() (*string, bool)`

GetSalesForceProductIdOk returns a tuple with the SalesForceProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceProductId

`func (o *UpdateMeterRequest) SetSalesForceProductId(v string)`

SetSalesForceProductId sets SalesForceProductId field to given value.

### HasSalesForceProductId

`func (o *UpdateMeterRequest) HasSalesForceProductId() bool`

HasSalesForceProductId returns a boolean if a field has been set.

### SetSalesForceProductIdNil

`func (o *UpdateMeterRequest) SetSalesForceProductIdNil(b bool)`

 SetSalesForceProductIdNil sets the value for SalesForceProductId to be an explicit nil

### UnsetSalesForceProductId
`func (o *UpdateMeterRequest) UnsetSalesForceProductId()`

UnsetSalesForceProductId ensures that no value is present for SalesForceProductId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


