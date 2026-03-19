# DeleteMeasurementResponseMeasurement

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
**DeletedAt** | **string** |  | 

## Methods

### NewDeleteMeasurementResponseMeasurement

`func NewDeleteMeasurementResponseMeasurement(customerId string, meterId string, usageDate CreateMeasurementRequestUsageDate, value float32, id string, createdAt time.Time, updatedAt time.Time, deletedAt string, ) *DeleteMeasurementResponseMeasurement`

NewDeleteMeasurementResponseMeasurement instantiates a new DeleteMeasurementResponseMeasurement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteMeasurementResponseMeasurementWithDefaults

`func NewDeleteMeasurementResponseMeasurementWithDefaults() *DeleteMeasurementResponseMeasurement`

NewDeleteMeasurementResponseMeasurementWithDefaults instantiates a new DeleteMeasurementResponseMeasurement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerId

`func (o *DeleteMeasurementResponseMeasurement) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *DeleteMeasurementResponseMeasurement) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *DeleteMeasurementResponseMeasurement) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetMeterId

`func (o *DeleteMeasurementResponseMeasurement) GetMeterId() string`

GetMeterId returns the MeterId field if non-nil, zero value otherwise.

### GetMeterIdOk

`func (o *DeleteMeasurementResponseMeasurement) GetMeterIdOk() (*string, bool)`

GetMeterIdOk returns a tuple with the MeterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterId

`func (o *DeleteMeasurementResponseMeasurement) SetMeterId(v string)`

SetMeterId sets MeterId field to given value.


### GetUsageDate

`func (o *DeleteMeasurementResponseMeasurement) GetUsageDate() CreateMeasurementRequestUsageDate`

GetUsageDate returns the UsageDate field if non-nil, zero value otherwise.

### GetUsageDateOk

`func (o *DeleteMeasurementResponseMeasurement) GetUsageDateOk() (*CreateMeasurementRequestUsageDate, bool)`

GetUsageDateOk returns a tuple with the UsageDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDate

`func (o *DeleteMeasurementResponseMeasurement) SetUsageDate(v CreateMeasurementRequestUsageDate)`

SetUsageDate sets UsageDate field to given value.


### GetValue

`func (o *DeleteMeasurementResponseMeasurement) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *DeleteMeasurementResponseMeasurement) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *DeleteMeasurementResponseMeasurement) SetValue(v float32)`

SetValue sets Value field to given value.


### GetId

`func (o *DeleteMeasurementResponseMeasurement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DeleteMeasurementResponseMeasurement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DeleteMeasurementResponseMeasurement) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *DeleteMeasurementResponseMeasurement) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DeleteMeasurementResponseMeasurement) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DeleteMeasurementResponseMeasurement) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DeleteMeasurementResponseMeasurement) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DeleteMeasurementResponseMeasurement) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DeleteMeasurementResponseMeasurement) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDeletedAt

`func (o *DeleteMeasurementResponseMeasurement) GetDeletedAt() string`

GetDeletedAt returns the DeletedAt field if non-nil, zero value otherwise.

### GetDeletedAtOk

`func (o *DeleteMeasurementResponseMeasurement) GetDeletedAtOk() (*string, bool)`

GetDeletedAtOk returns a tuple with the DeletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAt

`func (o *DeleteMeasurementResponseMeasurement) SetDeletedAt(v string)`

SetDeletedAt sets DeletedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


