# GetMeterByNameResponseMeter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the meter | 
**EventName** | **string** | The name of the event that the meter is tracking. | 
**ProductCode** | Pointer to **string** | The product code of the meter | [optional] 
**AggregationMethod** | [**AggregationMethod**](AggregationMethod.md) |  | 
**Filter** | Pointer to [**Filter**](Filter.md) |  | [optional] 
**SalesForceProductId** | Pointer to **NullableString** | The ID of the meter in the Salesforce system | [optional] 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewGetMeterByNameResponseMeter

`func NewGetMeterByNameResponseMeter(name string, eventName string, aggregationMethod AggregationMethod, id string, createdAt time.Time, updatedAt time.Time, ) *GetMeterByNameResponseMeter`

NewGetMeterByNameResponseMeter instantiates a new GetMeterByNameResponseMeter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetMeterByNameResponseMeterWithDefaults

`func NewGetMeterByNameResponseMeterWithDefaults() *GetMeterByNameResponseMeter`

NewGetMeterByNameResponseMeterWithDefaults instantiates a new GetMeterByNameResponseMeter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *GetMeterByNameResponseMeter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetMeterByNameResponseMeter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetMeterByNameResponseMeter) SetName(v string)`

SetName sets Name field to given value.


### GetEventName

`func (o *GetMeterByNameResponseMeter) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *GetMeterByNameResponseMeter) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *GetMeterByNameResponseMeter) SetEventName(v string)`

SetEventName sets EventName field to given value.


### GetProductCode

`func (o *GetMeterByNameResponseMeter) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *GetMeterByNameResponseMeter) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *GetMeterByNameResponseMeter) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.

### HasProductCode

`func (o *GetMeterByNameResponseMeter) HasProductCode() bool`

HasProductCode returns a boolean if a field has been set.

### GetAggregationMethod

`func (o *GetMeterByNameResponseMeter) GetAggregationMethod() AggregationMethod`

GetAggregationMethod returns the AggregationMethod field if non-nil, zero value otherwise.

### GetAggregationMethodOk

`func (o *GetMeterByNameResponseMeter) GetAggregationMethodOk() (*AggregationMethod, bool)`

GetAggregationMethodOk returns a tuple with the AggregationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationMethod

`func (o *GetMeterByNameResponseMeter) SetAggregationMethod(v AggregationMethod)`

SetAggregationMethod sets AggregationMethod field to given value.


### GetFilter

`func (o *GetMeterByNameResponseMeter) GetFilter() Filter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *GetMeterByNameResponseMeter) GetFilterOk() (*Filter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *GetMeterByNameResponseMeter) SetFilter(v Filter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *GetMeterByNameResponseMeter) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetSalesForceProductId

`func (o *GetMeterByNameResponseMeter) GetSalesForceProductId() string`

GetSalesForceProductId returns the SalesForceProductId field if non-nil, zero value otherwise.

### GetSalesForceProductIdOk

`func (o *GetMeterByNameResponseMeter) GetSalesForceProductIdOk() (*string, bool)`

GetSalesForceProductIdOk returns a tuple with the SalesForceProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceProductId

`func (o *GetMeterByNameResponseMeter) SetSalesForceProductId(v string)`

SetSalesForceProductId sets SalesForceProductId field to given value.

### HasSalesForceProductId

`func (o *GetMeterByNameResponseMeter) HasSalesForceProductId() bool`

HasSalesForceProductId returns a boolean if a field has been set.

### SetSalesForceProductIdNil

`func (o *GetMeterByNameResponseMeter) SetSalesForceProductIdNil(b bool)`

 SetSalesForceProductIdNil sets the value for SalesForceProductId to be an explicit nil

### UnsetSalesForceProductId
`func (o *GetMeterByNameResponseMeter) UnsetSalesForceProductId()`

UnsetSalesForceProductId ensures that no value is present for SalesForceProductId, not even an explicit nil
### GetId

`func (o *GetMeterByNameResponseMeter) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetMeterByNameResponseMeter) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetMeterByNameResponseMeter) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *GetMeterByNameResponseMeter) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetMeterByNameResponseMeter) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetMeterByNameResponseMeter) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *GetMeterByNameResponseMeter) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetMeterByNameResponseMeter) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetMeterByNameResponseMeter) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


