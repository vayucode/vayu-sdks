# InvoicePaymentStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoiceId** | **string** |  | 
**BillingStatus** | [**InvoiceBillingStatus**](InvoiceBillingStatus.md) |  | 
**AmountDue** | **float32** |  | 
**AmountPaid** | **float32** |  | 
**Total** | **float32** |  | 
**DueDate** | Pointer to **time.Time** |  | [optional] 
**PaidAt** | Pointer to **time.Time** |  | [optional] 
**InvoicePdfUrl** | Pointer to **string** |  | [optional] 

## Methods

### NewInvoicePaymentStatusResponse

`func NewInvoicePaymentStatusResponse(invoiceId string, billingStatus InvoiceBillingStatus, amountDue float32, amountPaid float32, total float32, ) *InvoicePaymentStatusResponse`

NewInvoicePaymentStatusResponse instantiates a new InvoicePaymentStatusResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoicePaymentStatusResponseWithDefaults

`func NewInvoicePaymentStatusResponseWithDefaults() *InvoicePaymentStatusResponse`

NewInvoicePaymentStatusResponseWithDefaults instantiates a new InvoicePaymentStatusResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoiceId

`func (o *InvoicePaymentStatusResponse) GetInvoiceId() string`

GetInvoiceId returns the InvoiceId field if non-nil, zero value otherwise.

### GetInvoiceIdOk

`func (o *InvoicePaymentStatusResponse) GetInvoiceIdOk() (*string, bool)`

GetInvoiceIdOk returns a tuple with the InvoiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceId

`func (o *InvoicePaymentStatusResponse) SetInvoiceId(v string)`

SetInvoiceId sets InvoiceId field to given value.


### GetBillingStatus

`func (o *InvoicePaymentStatusResponse) GetBillingStatus() InvoiceBillingStatus`

GetBillingStatus returns the BillingStatus field if non-nil, zero value otherwise.

### GetBillingStatusOk

`func (o *InvoicePaymentStatusResponse) GetBillingStatusOk() (*InvoiceBillingStatus, bool)`

GetBillingStatusOk returns a tuple with the BillingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingStatus

`func (o *InvoicePaymentStatusResponse) SetBillingStatus(v InvoiceBillingStatus)`

SetBillingStatus sets BillingStatus field to given value.


### GetAmountDue

`func (o *InvoicePaymentStatusResponse) GetAmountDue() float32`

GetAmountDue returns the AmountDue field if non-nil, zero value otherwise.

### GetAmountDueOk

`func (o *InvoicePaymentStatusResponse) GetAmountDueOk() (*float32, bool)`

GetAmountDueOk returns a tuple with the AmountDue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountDue

`func (o *InvoicePaymentStatusResponse) SetAmountDue(v float32)`

SetAmountDue sets AmountDue field to given value.


### GetAmountPaid

`func (o *InvoicePaymentStatusResponse) GetAmountPaid() float32`

GetAmountPaid returns the AmountPaid field if non-nil, zero value otherwise.

### GetAmountPaidOk

`func (o *InvoicePaymentStatusResponse) GetAmountPaidOk() (*float32, bool)`

GetAmountPaidOk returns a tuple with the AmountPaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPaid

`func (o *InvoicePaymentStatusResponse) SetAmountPaid(v float32)`

SetAmountPaid sets AmountPaid field to given value.


### GetTotal

`func (o *InvoicePaymentStatusResponse) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *InvoicePaymentStatusResponse) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *InvoicePaymentStatusResponse) SetTotal(v float32)`

SetTotal sets Total field to given value.


### GetDueDate

`func (o *InvoicePaymentStatusResponse) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *InvoicePaymentStatusResponse) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *InvoicePaymentStatusResponse) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *InvoicePaymentStatusResponse) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### GetPaidAt

`func (o *InvoicePaymentStatusResponse) GetPaidAt() time.Time`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *InvoicePaymentStatusResponse) GetPaidAtOk() (*time.Time, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *InvoicePaymentStatusResponse) SetPaidAt(v time.Time)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *InvoicePaymentStatusResponse) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### GetInvoicePdfUrl

`func (o *InvoicePaymentStatusResponse) GetInvoicePdfUrl() string`

GetInvoicePdfUrl returns the InvoicePdfUrl field if non-nil, zero value otherwise.

### GetInvoicePdfUrlOk

`func (o *InvoicePaymentStatusResponse) GetInvoicePdfUrlOk() (*string, bool)`

GetInvoicePdfUrlOk returns a tuple with the InvoicePdfUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoicePdfUrl

`func (o *InvoicePaymentStatusResponse) SetInvoicePdfUrl(v string)`

SetInvoicePdfUrl sets InvoicePdfUrl field to given value.

### HasInvoicePdfUrl

`func (o *InvoicePaymentStatusResponse) HasInvoicePdfUrl() bool`

HasInvoicePdfUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


