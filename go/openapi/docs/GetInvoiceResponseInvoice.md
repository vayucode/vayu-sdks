# GetInvoiceResponseInvoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomerId** | **string** | The id of the customer that the invoice is associated with | 
**ContractId** | Pointer to **string** | The id of the contract that the invoice is associated with | [optional] 
**Name** | **string** | The name of the invoice, usually a description of the billing period | 
**BillingCycle** | [**FullDayPeriod**](FullDayPeriod.md) |  | 
**RevenueBreakdown** | [**GetInvoiceResponseInvoiceRevenueBreakdown**](GetInvoiceResponseInvoiceRevenueBreakdown.md) |  | 
**BillingStatus** | [**InvoiceBillingStatus**](InvoiceBillingStatus.md) |  | 
**PaymentInfo** | Pointer to [**PaymentInfo**](PaymentInfo.md) |  | [optional] 
**DueDate** | **NullableTime** | The due date of the invoice | 
**AccountId** | **string** | The id of the account that the invoice is associated with | 
**LineItems** | [**[]LineItem**](LineItem.md) |  | 
**Amount** | **float32** | The total amount of the invoice | 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewGetInvoiceResponseInvoice

`func NewGetInvoiceResponseInvoice(customerId string, name string, billingCycle FullDayPeriod, revenueBreakdown GetInvoiceResponseInvoiceRevenueBreakdown, billingStatus InvoiceBillingStatus, dueDate NullableTime, accountId string, lineItems []LineItem, amount float32, id string, createdAt time.Time, updatedAt time.Time, ) *GetInvoiceResponseInvoice`

NewGetInvoiceResponseInvoice instantiates a new GetInvoiceResponseInvoice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetInvoiceResponseInvoiceWithDefaults

`func NewGetInvoiceResponseInvoiceWithDefaults() *GetInvoiceResponseInvoice`

NewGetInvoiceResponseInvoiceWithDefaults instantiates a new GetInvoiceResponseInvoice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerId

`func (o *GetInvoiceResponseInvoice) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *GetInvoiceResponseInvoice) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *GetInvoiceResponseInvoice) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetContractId

`func (o *GetInvoiceResponseInvoice) GetContractId() string`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *GetInvoiceResponseInvoice) GetContractIdOk() (*string, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *GetInvoiceResponseInvoice) SetContractId(v string)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *GetInvoiceResponseInvoice) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetName

`func (o *GetInvoiceResponseInvoice) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetInvoiceResponseInvoice) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetInvoiceResponseInvoice) SetName(v string)`

SetName sets Name field to given value.


### GetBillingCycle

`func (o *GetInvoiceResponseInvoice) GetBillingCycle() FullDayPeriod`

GetBillingCycle returns the BillingCycle field if non-nil, zero value otherwise.

### GetBillingCycleOk

`func (o *GetInvoiceResponseInvoice) GetBillingCycleOk() (*FullDayPeriod, bool)`

GetBillingCycleOk returns a tuple with the BillingCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingCycle

`func (o *GetInvoiceResponseInvoice) SetBillingCycle(v FullDayPeriod)`

SetBillingCycle sets BillingCycle field to given value.


### GetRevenueBreakdown

`func (o *GetInvoiceResponseInvoice) GetRevenueBreakdown() GetInvoiceResponseInvoiceRevenueBreakdown`

GetRevenueBreakdown returns the RevenueBreakdown field if non-nil, zero value otherwise.

### GetRevenueBreakdownOk

`func (o *GetInvoiceResponseInvoice) GetRevenueBreakdownOk() (*GetInvoiceResponseInvoiceRevenueBreakdown, bool)`

GetRevenueBreakdownOk returns a tuple with the RevenueBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBreakdown

`func (o *GetInvoiceResponseInvoice) SetRevenueBreakdown(v GetInvoiceResponseInvoiceRevenueBreakdown)`

SetRevenueBreakdown sets RevenueBreakdown field to given value.


### GetBillingStatus

`func (o *GetInvoiceResponseInvoice) GetBillingStatus() InvoiceBillingStatus`

GetBillingStatus returns the BillingStatus field if non-nil, zero value otherwise.

### GetBillingStatusOk

`func (o *GetInvoiceResponseInvoice) GetBillingStatusOk() (*InvoiceBillingStatus, bool)`

GetBillingStatusOk returns a tuple with the BillingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingStatus

`func (o *GetInvoiceResponseInvoice) SetBillingStatus(v InvoiceBillingStatus)`

SetBillingStatus sets BillingStatus field to given value.


### GetPaymentInfo

`func (o *GetInvoiceResponseInvoice) GetPaymentInfo() PaymentInfo`

GetPaymentInfo returns the PaymentInfo field if non-nil, zero value otherwise.

### GetPaymentInfoOk

`func (o *GetInvoiceResponseInvoice) GetPaymentInfoOk() (*PaymentInfo, bool)`

GetPaymentInfoOk returns a tuple with the PaymentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentInfo

`func (o *GetInvoiceResponseInvoice) SetPaymentInfo(v PaymentInfo)`

SetPaymentInfo sets PaymentInfo field to given value.

### HasPaymentInfo

`func (o *GetInvoiceResponseInvoice) HasPaymentInfo() bool`

HasPaymentInfo returns a boolean if a field has been set.

### GetDueDate

`func (o *GetInvoiceResponseInvoice) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *GetInvoiceResponseInvoice) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *GetInvoiceResponseInvoice) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.


### SetDueDateNil

`func (o *GetInvoiceResponseInvoice) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *GetInvoiceResponseInvoice) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
### GetAccountId

`func (o *GetInvoiceResponseInvoice) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *GetInvoiceResponseInvoice) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *GetInvoiceResponseInvoice) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.


### GetLineItems

`func (o *GetInvoiceResponseInvoice) GetLineItems() []LineItem`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *GetInvoiceResponseInvoice) GetLineItemsOk() (*[]LineItem, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *GetInvoiceResponseInvoice) SetLineItems(v []LineItem)`

SetLineItems sets LineItems field to given value.


### GetAmount

`func (o *GetInvoiceResponseInvoice) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *GetInvoiceResponseInvoice) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *GetInvoiceResponseInvoice) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetId

`func (o *GetInvoiceResponseInvoice) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetInvoiceResponseInvoice) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetInvoiceResponseInvoice) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *GetInvoiceResponseInvoice) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetInvoiceResponseInvoice) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetInvoiceResponseInvoice) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *GetInvoiceResponseInvoice) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetInvoiceResponseInvoice) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetInvoiceResponseInvoice) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


