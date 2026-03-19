# PaymentInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionId** | Pointer to **string** |  | [optional] 
**Date** | Pointer to **time.Time** |  | [optional] 
**PaymentMethod** | Pointer to **string** |  | [optional] 
**PaymentMethodId** | Pointer to **string** |  | [optional] 
**Amount** | Pointer to **float32** |  | [optional] 
**Currency** | Pointer to [**NullableCurrency**](Currency.md) |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Note** | Pointer to **string** |  | [optional] 
**CustomerId** | Pointer to **string** |  | [optional] 
**DepositTo** | Pointer to [**PaymentInfoDepositTo**](PaymentInfoDepositTo.md) |  | [optional] 

## Methods

### NewPaymentInfo

`func NewPaymentInfo() *PaymentInfo`

NewPaymentInfo instantiates a new PaymentInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentInfoWithDefaults

`func NewPaymentInfoWithDefaults() *PaymentInfo`

NewPaymentInfoWithDefaults instantiates a new PaymentInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionId

`func (o *PaymentInfo) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *PaymentInfo) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *PaymentInfo) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *PaymentInfo) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetDate

`func (o *PaymentInfo) GetDate() time.Time`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *PaymentInfo) GetDateOk() (*time.Time, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *PaymentInfo) SetDate(v time.Time)`

SetDate sets Date field to given value.

### HasDate

`func (o *PaymentInfo) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *PaymentInfo) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *PaymentInfo) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *PaymentInfo) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *PaymentInfo) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPaymentMethodId

`func (o *PaymentInfo) GetPaymentMethodId() string`

GetPaymentMethodId returns the PaymentMethodId field if non-nil, zero value otherwise.

### GetPaymentMethodIdOk

`func (o *PaymentInfo) GetPaymentMethodIdOk() (*string, bool)`

GetPaymentMethodIdOk returns a tuple with the PaymentMethodId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethodId

`func (o *PaymentInfo) SetPaymentMethodId(v string)`

SetPaymentMethodId sets PaymentMethodId field to given value.

### HasPaymentMethodId

`func (o *PaymentInfo) HasPaymentMethodId() bool`

HasPaymentMethodId returns a boolean if a field has been set.

### GetAmount

`func (o *PaymentInfo) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentInfo) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentInfo) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PaymentInfo) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *PaymentInfo) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PaymentInfo) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PaymentInfo) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PaymentInfo) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### SetCurrencyNil

`func (o *PaymentInfo) SetCurrencyNil(b bool)`

 SetCurrencyNil sets the value for Currency to be an explicit nil

### UnsetCurrency
`func (o *PaymentInfo) UnsetCurrency()`

UnsetCurrency ensures that no value is present for Currency, not even an explicit nil
### GetStatus

`func (o *PaymentInfo) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentInfo) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentInfo) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PaymentInfo) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetNote

`func (o *PaymentInfo) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *PaymentInfo) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *PaymentInfo) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *PaymentInfo) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetCustomerId

`func (o *PaymentInfo) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *PaymentInfo) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *PaymentInfo) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.

### HasCustomerId

`func (o *PaymentInfo) HasCustomerId() bool`

HasCustomerId returns a boolean if a field has been set.

### GetDepositTo

`func (o *PaymentInfo) GetDepositTo() PaymentInfoDepositTo`

GetDepositTo returns the DepositTo field if non-nil, zero value otherwise.

### GetDepositToOk

`func (o *PaymentInfo) GetDepositToOk() (*PaymentInfoDepositTo, bool)`

GetDepositToOk returns a tuple with the DepositTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositTo

`func (o *PaymentInfo) SetDepositTo(v PaymentInfoDepositTo)`

SetDepositTo sets DepositTo field to given value.

### HasDepositTo

`func (o *PaymentInfo) HasDepositTo() bool`

HasDepositTo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


