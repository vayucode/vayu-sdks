# RecordInvoicePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **time.Time** | When the payment was received, as an ISO 8601 date-time. Defaults to the time of the request. | [optional] 
**PaymentMethod** | Pointer to **string** | The method the payment was made with, for example \&quot;Wire transfer\&quot; | [optional] 
**TransactionId** | Pointer to **string** | The reference of the payment in the system it was made through, for example a bank reference. It can be used once per invoice. | [optional] 
**Note** | Pointer to **string** | A free-text note stored with the payment | [optional] 
**PaymentMethodId** | Pointer to **string** | The id of the payment method in your connected accounting system. Used when the payment is exported there. | [optional] 
**DepositTo** | Pointer to [**RecordInvoicePaymentRequestDepositTo**](RecordInvoicePaymentRequestDepositTo.md) |  | [optional] 
**Amount** | **float32** | The amount received, in the currency of the invoice. It must be greater than 0 and may be lower than what is still owed. | 
**IdempotencyKey** | **string** | A unique value you generate for this payment, up to 255 characters. Send the same value when you retry a request so that the payment is recorded only once. | 

## Methods

### NewRecordInvoicePaymentRequest

`func NewRecordInvoicePaymentRequest(amount float32, idempotencyKey string, ) *RecordInvoicePaymentRequest`

NewRecordInvoicePaymentRequest instantiates a new RecordInvoicePaymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecordInvoicePaymentRequestWithDefaults

`func NewRecordInvoicePaymentRequestWithDefaults() *RecordInvoicePaymentRequest`

NewRecordInvoicePaymentRequestWithDefaults instantiates a new RecordInvoicePaymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *RecordInvoicePaymentRequest) GetDate() time.Time`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *RecordInvoicePaymentRequest) GetDateOk() (*time.Time, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *RecordInvoicePaymentRequest) SetDate(v time.Time)`

SetDate sets Date field to given value.

### HasDate

`func (o *RecordInvoicePaymentRequest) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *RecordInvoicePaymentRequest) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *RecordInvoicePaymentRequest) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *RecordInvoicePaymentRequest) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *RecordInvoicePaymentRequest) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetTransactionId

`func (o *RecordInvoicePaymentRequest) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *RecordInvoicePaymentRequest) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *RecordInvoicePaymentRequest) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *RecordInvoicePaymentRequest) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetNote

`func (o *RecordInvoicePaymentRequest) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *RecordInvoicePaymentRequest) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *RecordInvoicePaymentRequest) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *RecordInvoicePaymentRequest) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetPaymentMethodId

`func (o *RecordInvoicePaymentRequest) GetPaymentMethodId() string`

GetPaymentMethodId returns the PaymentMethodId field if non-nil, zero value otherwise.

### GetPaymentMethodIdOk

`func (o *RecordInvoicePaymentRequest) GetPaymentMethodIdOk() (*string, bool)`

GetPaymentMethodIdOk returns a tuple with the PaymentMethodId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethodId

`func (o *RecordInvoicePaymentRequest) SetPaymentMethodId(v string)`

SetPaymentMethodId sets PaymentMethodId field to given value.

### HasPaymentMethodId

`func (o *RecordInvoicePaymentRequest) HasPaymentMethodId() bool`

HasPaymentMethodId returns a boolean if a field has been set.

### GetDepositTo

`func (o *RecordInvoicePaymentRequest) GetDepositTo() RecordInvoicePaymentRequestDepositTo`

GetDepositTo returns the DepositTo field if non-nil, zero value otherwise.

### GetDepositToOk

`func (o *RecordInvoicePaymentRequest) GetDepositToOk() (*RecordInvoicePaymentRequestDepositTo, bool)`

GetDepositToOk returns a tuple with the DepositTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositTo

`func (o *RecordInvoicePaymentRequest) SetDepositTo(v RecordInvoicePaymentRequestDepositTo)`

SetDepositTo sets DepositTo field to given value.

### HasDepositTo

`func (o *RecordInvoicePaymentRequest) HasDepositTo() bool`

HasDepositTo returns a boolean if a field has been set.

### GetAmount

`func (o *RecordInvoicePaymentRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RecordInvoicePaymentRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RecordInvoicePaymentRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetIdempotencyKey

`func (o *RecordInvoicePaymentRequest) GetIdempotencyKey() string`

GetIdempotencyKey returns the IdempotencyKey field if non-nil, zero value otherwise.

### GetIdempotencyKeyOk

`func (o *RecordInvoicePaymentRequest) GetIdempotencyKeyOk() (*string, bool)`

GetIdempotencyKeyOk returns a tuple with the IdempotencyKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdempotencyKey

`func (o *RecordInvoicePaymentRequest) SetIdempotencyKey(v string)`

SetIdempotencyKey sets IdempotencyKey field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


