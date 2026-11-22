# InvoicePayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The id of the payment | 
**Date** | **time.Time** | The date of the payment | 
**Amount** | **float32** | The amount of the payment | 
**Currency** | [**Currency**](Currency.md) |  | 
**PaymentMethod** | Pointer to **string** | The method the payment was made with | [optional] 
**Status** | Pointer to **string** | The status of the payment | [optional] 

## Methods

### NewInvoicePayment

`func NewInvoicePayment(id string, date time.Time, amount float32, currency Currency, ) *InvoicePayment`

NewInvoicePayment instantiates a new InvoicePayment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoicePaymentWithDefaults

`func NewInvoicePaymentWithDefaults() *InvoicePayment`

NewInvoicePaymentWithDefaults instantiates a new InvoicePayment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InvoicePayment) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InvoicePayment) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InvoicePayment) SetId(v string)`

SetId sets Id field to given value.


### GetDate

`func (o *InvoicePayment) GetDate() time.Time`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *InvoicePayment) GetDateOk() (*time.Time, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *InvoicePayment) SetDate(v time.Time)`

SetDate sets Date field to given value.


### GetAmount

`func (o *InvoicePayment) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InvoicePayment) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InvoicePayment) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *InvoicePayment) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *InvoicePayment) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *InvoicePayment) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.


### GetPaymentMethod

`func (o *InvoicePayment) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *InvoicePayment) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *InvoicePayment) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *InvoicePayment) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetStatus

`func (o *InvoicePayment) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InvoicePayment) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InvoicePayment) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *InvoicePayment) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


