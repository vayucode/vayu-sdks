# CreateMeasurementRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomerId** | **string** | The customer for whom usage will be attributed | 
**MeterId** | **string** | The meter/product that is being measured | 
**UsageDate** | [**CreateMeasurementRequestUsageDate**](CreateMeasurementRequestUsageDate.md) |  | 
**Value** | **float32** | The updated value of product units consumed by the customer, for the product for given day | 

## Methods

### NewCreateMeasurementRequest

`func NewCreateMeasurementRequest(customerId string, meterId string, usageDate CreateMeasurementRequestUsageDate, value float32, ) *CreateMeasurementRequest`

NewCreateMeasurementRequest instantiates a new CreateMeasurementRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateMeasurementRequestWithDefaults

`func NewCreateMeasurementRequestWithDefaults() *CreateMeasurementRequest`

NewCreateMeasurementRequestWithDefaults instantiates a new CreateMeasurementRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerId

`func (o *CreateMeasurementRequest) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *CreateMeasurementRequest) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *CreateMeasurementRequest) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetMeterId

`func (o *CreateMeasurementRequest) GetMeterId() string`

GetMeterId returns the MeterId field if non-nil, zero value otherwise.

### GetMeterIdOk

`func (o *CreateMeasurementRequest) GetMeterIdOk() (*string, bool)`

GetMeterIdOk returns a tuple with the MeterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterId

`func (o *CreateMeasurementRequest) SetMeterId(v string)`

SetMeterId sets MeterId field to given value.


### GetUsageDate

`func (o *CreateMeasurementRequest) GetUsageDate() CreateMeasurementRequestUsageDate`

GetUsageDate returns the UsageDate field if non-nil, zero value otherwise.

### GetUsageDateOk

`func (o *CreateMeasurementRequest) GetUsageDateOk() (*CreateMeasurementRequestUsageDate, bool)`

GetUsageDateOk returns a tuple with the UsageDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDate

`func (o *CreateMeasurementRequest) SetUsageDate(v CreateMeasurementRequestUsageDate)`

SetUsageDate sets UsageDate field to given value.


### GetValue

`func (o *CreateMeasurementRequest) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CreateMeasurementRequest) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CreateMeasurementRequest) SetValue(v float32)`

SetValue sets Value field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


