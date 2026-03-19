# CreateMeasurementResponseMeasurement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomerId** | **string** | The customer for whom usage will be attributed | 
**MeterId** | **string** | The meter/product that is being measured | 
**UsageDate** | [**CreateMeasurementRequestUsageDate**](CreateMeasurementRequestUsageDate.md) |  | 
**Value** | **float32** | The updated value of product units consumed by the customer, for the product for given day | 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewCreateMeasurementResponseMeasurement

`func NewCreateMeasurementResponseMeasurement(customerId string, meterId string, usageDate CreateMeasurementRequestUsageDate, value float32, id string, createdAt time.Time, updatedAt time.Time, ) *CreateMeasurementResponseMeasurement`

NewCreateMeasurementResponseMeasurement instantiates a new CreateMeasurementResponseMeasurement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateMeasurementResponseMeasurementWithDefaults

`func NewCreateMeasurementResponseMeasurementWithDefaults() *CreateMeasurementResponseMeasurement`

NewCreateMeasurementResponseMeasurementWithDefaults instantiates a new CreateMeasurementResponseMeasurement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerId

`func (o *CreateMeasurementResponseMeasurement) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *CreateMeasurementResponseMeasurement) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *CreateMeasurementResponseMeasurement) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetMeterId

`func (o *CreateMeasurementResponseMeasurement) GetMeterId() string`

GetMeterId returns the MeterId field if non-nil, zero value otherwise.

### GetMeterIdOk

`func (o *CreateMeasurementResponseMeasurement) GetMeterIdOk() (*string, bool)`

GetMeterIdOk returns a tuple with the MeterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterId

`func (o *CreateMeasurementResponseMeasurement) SetMeterId(v string)`

SetMeterId sets MeterId field to given value.


### GetUsageDate

`func (o *CreateMeasurementResponseMeasurement) GetUsageDate() CreateMeasurementRequestUsageDate`

GetUsageDate returns the UsageDate field if non-nil, zero value otherwise.

### GetUsageDateOk

`func (o *CreateMeasurementResponseMeasurement) GetUsageDateOk() (*CreateMeasurementRequestUsageDate, bool)`

GetUsageDateOk returns a tuple with the UsageDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDate

`func (o *CreateMeasurementResponseMeasurement) SetUsageDate(v CreateMeasurementRequestUsageDate)`

SetUsageDate sets UsageDate field to given value.


### GetValue

`func (o *CreateMeasurementResponseMeasurement) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CreateMeasurementResponseMeasurement) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CreateMeasurementResponseMeasurement) SetValue(v float32)`

SetValue sets Value field to given value.


### GetId

`func (o *CreateMeasurementResponseMeasurement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreateMeasurementResponseMeasurement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreateMeasurementResponseMeasurement) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *CreateMeasurementResponseMeasurement) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CreateMeasurementResponseMeasurement) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CreateMeasurementResponseMeasurement) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CreateMeasurementResponseMeasurement) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CreateMeasurementResponseMeasurement) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CreateMeasurementResponseMeasurement) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


