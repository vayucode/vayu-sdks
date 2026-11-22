# UpdateInvoiceDueDateResponseInvoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomerId** | **string** | The id of the customer that the invoice is associated with | 
**ContractId** | Pointer to **string** | The id of the contract that the invoice is associated with | [optional] 
**Name** | **string** | The name of the invoice, usually a description of the billing period | 
**RevenueBreakdown** | [**GetInvoiceResponseInvoiceRevenueBreakdown**](GetInvoiceResponseInvoiceRevenueBreakdown.md) |  | 
**BillingStatus** | [**InvoiceBillingStatus**](InvoiceBillingStatus.md) |  | 
**PaymentInfo** | Pointer to [**PaymentInfo**](PaymentInfo.md) |  | [optional] 
**DueDate** | **NullableTime** | The due date of the invoice | 
**InvoiceNumber** | Pointer to **string** | The number of the invoice | [optional] 
**ReviewStatus** | [**InvoiceReviewStatus**](InvoiceReviewStatus.md) |  | 
**ApprovedAt** | Pointer to **time.Time** | The date the invoice was approved | [optional] 
**IssuedAt** | **NullableTime** | The date the invoice was issued | 
**AccountId** | **string** | The id of the account that the invoice is associated with | 
**BillingCycle** | [**Period**](Period.md) |  | 
**LineItems** | [**[]LineItem**](LineItem.md) |  | 
**Payments** | [**[]InvoicePayment**](InvoicePayment.md) | The payments recorded for the invoice, including failed and pending ones; use status to filter | 
**Amount** | **float32** | The total amount of the invoice | 
**PurchaseOrder** | Pointer to **string** | The purchase order of the invoice | [optional] 
**Notes** | Pointer to **string** | The notes (memo) of the invoice | [optional] 
**ContractName** | Pointer to **string** | The name of the plan the contract of the invoice is based on | [optional] 
**CustomFieldValues** | Pointer to [**[]CustomFieldValue**](CustomFieldValue.md) | The custom field values of the invoice&#39;s customer and contract. Customer field names are prefixed with customer_ and contract field names with contract_. | [optional] 
**ExternalIntegration** | Pointer to [**[]InvoiceIntegration**](InvoiceIntegration.md) | External systems the invoice was exported to. Each entry carries the provider, the id of the invoice in that system and, when available, its document number there. An empty list means the invoice was not exported; the field is omitted when the lookup is temporarily unavailable. | [optional] 
**IsTrial** | **bool** | Whether the invoice belongs to a trial contract | 

## Methods

### NewUpdateInvoiceDueDateResponseInvoice

`func NewUpdateInvoiceDueDateResponseInvoice(customerId string, name string, revenueBreakdown GetInvoiceResponseInvoiceRevenueBreakdown, billingStatus InvoiceBillingStatus, dueDate NullableTime, reviewStatus InvoiceReviewStatus, issuedAt NullableTime, accountId string, billingCycle Period, lineItems []LineItem, payments []InvoicePayment, amount float32, isTrial bool, ) *UpdateInvoiceDueDateResponseInvoice`

NewUpdateInvoiceDueDateResponseInvoice instantiates a new UpdateInvoiceDueDateResponseInvoice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateInvoiceDueDateResponseInvoiceWithDefaults

`func NewUpdateInvoiceDueDateResponseInvoiceWithDefaults() *UpdateInvoiceDueDateResponseInvoice`

NewUpdateInvoiceDueDateResponseInvoiceWithDefaults instantiates a new UpdateInvoiceDueDateResponseInvoice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerId

`func (o *UpdateInvoiceDueDateResponseInvoice) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *UpdateInvoiceDueDateResponseInvoice) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetContractId

`func (o *UpdateInvoiceDueDateResponseInvoice) GetContractId() string`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetContractIdOk() (*string, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *UpdateInvoiceDueDateResponseInvoice) SetContractId(v string)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *UpdateInvoiceDueDateResponseInvoice) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetName

`func (o *UpdateInvoiceDueDateResponseInvoice) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateInvoiceDueDateResponseInvoice) SetName(v string)`

SetName sets Name field to given value.


### GetRevenueBreakdown

`func (o *UpdateInvoiceDueDateResponseInvoice) GetRevenueBreakdown() GetInvoiceResponseInvoiceRevenueBreakdown`

GetRevenueBreakdown returns the RevenueBreakdown field if non-nil, zero value otherwise.

### GetRevenueBreakdownOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetRevenueBreakdownOk() (*GetInvoiceResponseInvoiceRevenueBreakdown, bool)`

GetRevenueBreakdownOk returns a tuple with the RevenueBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBreakdown

`func (o *UpdateInvoiceDueDateResponseInvoice) SetRevenueBreakdown(v GetInvoiceResponseInvoiceRevenueBreakdown)`

SetRevenueBreakdown sets RevenueBreakdown field to given value.


### GetBillingStatus

`func (o *UpdateInvoiceDueDateResponseInvoice) GetBillingStatus() InvoiceBillingStatus`

GetBillingStatus returns the BillingStatus field if non-nil, zero value otherwise.

### GetBillingStatusOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetBillingStatusOk() (*InvoiceBillingStatus, bool)`

GetBillingStatusOk returns a tuple with the BillingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingStatus

`func (o *UpdateInvoiceDueDateResponseInvoice) SetBillingStatus(v InvoiceBillingStatus)`

SetBillingStatus sets BillingStatus field to given value.


### GetPaymentInfo

`func (o *UpdateInvoiceDueDateResponseInvoice) GetPaymentInfo() PaymentInfo`

GetPaymentInfo returns the PaymentInfo field if non-nil, zero value otherwise.

### GetPaymentInfoOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetPaymentInfoOk() (*PaymentInfo, bool)`

GetPaymentInfoOk returns a tuple with the PaymentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentInfo

`func (o *UpdateInvoiceDueDateResponseInvoice) SetPaymentInfo(v PaymentInfo)`

SetPaymentInfo sets PaymentInfo field to given value.

### HasPaymentInfo

`func (o *UpdateInvoiceDueDateResponseInvoice) HasPaymentInfo() bool`

HasPaymentInfo returns a boolean if a field has been set.

### GetDueDate

`func (o *UpdateInvoiceDueDateResponseInvoice) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *UpdateInvoiceDueDateResponseInvoice) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.


### SetDueDateNil

`func (o *UpdateInvoiceDueDateResponseInvoice) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *UpdateInvoiceDueDateResponseInvoice) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
### GetInvoiceNumber

`func (o *UpdateInvoiceDueDateResponseInvoice) GetInvoiceNumber() string`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetInvoiceNumberOk() (*string, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *UpdateInvoiceDueDateResponseInvoice) SetInvoiceNumber(v string)`

SetInvoiceNumber sets InvoiceNumber field to given value.

### HasInvoiceNumber

`func (o *UpdateInvoiceDueDateResponseInvoice) HasInvoiceNumber() bool`

HasInvoiceNumber returns a boolean if a field has been set.

### GetReviewStatus

`func (o *UpdateInvoiceDueDateResponseInvoice) GetReviewStatus() InvoiceReviewStatus`

GetReviewStatus returns the ReviewStatus field if non-nil, zero value otherwise.

### GetReviewStatusOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetReviewStatusOk() (*InvoiceReviewStatus, bool)`

GetReviewStatusOk returns a tuple with the ReviewStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewStatus

`func (o *UpdateInvoiceDueDateResponseInvoice) SetReviewStatus(v InvoiceReviewStatus)`

SetReviewStatus sets ReviewStatus field to given value.


### GetApprovedAt

`func (o *UpdateInvoiceDueDateResponseInvoice) GetApprovedAt() time.Time`

GetApprovedAt returns the ApprovedAt field if non-nil, zero value otherwise.

### GetApprovedAtOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetApprovedAtOk() (*time.Time, bool)`

GetApprovedAtOk returns a tuple with the ApprovedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedAt

`func (o *UpdateInvoiceDueDateResponseInvoice) SetApprovedAt(v time.Time)`

SetApprovedAt sets ApprovedAt field to given value.

### HasApprovedAt

`func (o *UpdateInvoiceDueDateResponseInvoice) HasApprovedAt() bool`

HasApprovedAt returns a boolean if a field has been set.

### GetIssuedAt

`func (o *UpdateInvoiceDueDateResponseInvoice) GetIssuedAt() time.Time`

GetIssuedAt returns the IssuedAt field if non-nil, zero value otherwise.

### GetIssuedAtOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetIssuedAtOk() (*time.Time, bool)`

GetIssuedAtOk returns a tuple with the IssuedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedAt

`func (o *UpdateInvoiceDueDateResponseInvoice) SetIssuedAt(v time.Time)`

SetIssuedAt sets IssuedAt field to given value.


### SetIssuedAtNil

`func (o *UpdateInvoiceDueDateResponseInvoice) SetIssuedAtNil(b bool)`

 SetIssuedAtNil sets the value for IssuedAt to be an explicit nil

### UnsetIssuedAt
`func (o *UpdateInvoiceDueDateResponseInvoice) UnsetIssuedAt()`

UnsetIssuedAt ensures that no value is present for IssuedAt, not even an explicit nil
### GetAccountId

`func (o *UpdateInvoiceDueDateResponseInvoice) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *UpdateInvoiceDueDateResponseInvoice) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.


### GetBillingCycle

`func (o *UpdateInvoiceDueDateResponseInvoice) GetBillingCycle() Period`

GetBillingCycle returns the BillingCycle field if non-nil, zero value otherwise.

### GetBillingCycleOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetBillingCycleOk() (*Period, bool)`

GetBillingCycleOk returns a tuple with the BillingCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingCycle

`func (o *UpdateInvoiceDueDateResponseInvoice) SetBillingCycle(v Period)`

SetBillingCycle sets BillingCycle field to given value.


### GetLineItems

`func (o *UpdateInvoiceDueDateResponseInvoice) GetLineItems() []LineItem`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetLineItemsOk() (*[]LineItem, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *UpdateInvoiceDueDateResponseInvoice) SetLineItems(v []LineItem)`

SetLineItems sets LineItems field to given value.


### GetPayments

`func (o *UpdateInvoiceDueDateResponseInvoice) GetPayments() []InvoicePayment`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetPaymentsOk() (*[]InvoicePayment, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *UpdateInvoiceDueDateResponseInvoice) SetPayments(v []InvoicePayment)`

SetPayments sets Payments field to given value.


### GetAmount

`func (o *UpdateInvoiceDueDateResponseInvoice) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *UpdateInvoiceDueDateResponseInvoice) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetPurchaseOrder

`func (o *UpdateInvoiceDueDateResponseInvoice) GetPurchaseOrder() string`

GetPurchaseOrder returns the PurchaseOrder field if non-nil, zero value otherwise.

### GetPurchaseOrderOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetPurchaseOrderOk() (*string, bool)`

GetPurchaseOrderOk returns a tuple with the PurchaseOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurchaseOrder

`func (o *UpdateInvoiceDueDateResponseInvoice) SetPurchaseOrder(v string)`

SetPurchaseOrder sets PurchaseOrder field to given value.

### HasPurchaseOrder

`func (o *UpdateInvoiceDueDateResponseInvoice) HasPurchaseOrder() bool`

HasPurchaseOrder returns a boolean if a field has been set.

### GetNotes

`func (o *UpdateInvoiceDueDateResponseInvoice) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *UpdateInvoiceDueDateResponseInvoice) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *UpdateInvoiceDueDateResponseInvoice) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetContractName

`func (o *UpdateInvoiceDueDateResponseInvoice) GetContractName() string`

GetContractName returns the ContractName field if non-nil, zero value otherwise.

### GetContractNameOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetContractNameOk() (*string, bool)`

GetContractNameOk returns a tuple with the ContractName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractName

`func (o *UpdateInvoiceDueDateResponseInvoice) SetContractName(v string)`

SetContractName sets ContractName field to given value.

### HasContractName

`func (o *UpdateInvoiceDueDateResponseInvoice) HasContractName() bool`

HasContractName returns a boolean if a field has been set.

### GetCustomFieldValues

`func (o *UpdateInvoiceDueDateResponseInvoice) GetCustomFieldValues() []CustomFieldValue`

GetCustomFieldValues returns the CustomFieldValues field if non-nil, zero value otherwise.

### GetCustomFieldValuesOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetCustomFieldValuesOk() (*[]CustomFieldValue, bool)`

GetCustomFieldValuesOk returns a tuple with the CustomFieldValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFieldValues

`func (o *UpdateInvoiceDueDateResponseInvoice) SetCustomFieldValues(v []CustomFieldValue)`

SetCustomFieldValues sets CustomFieldValues field to given value.

### HasCustomFieldValues

`func (o *UpdateInvoiceDueDateResponseInvoice) HasCustomFieldValues() bool`

HasCustomFieldValues returns a boolean if a field has been set.

### GetExternalIntegration

`func (o *UpdateInvoiceDueDateResponseInvoice) GetExternalIntegration() []InvoiceIntegration`

GetExternalIntegration returns the ExternalIntegration field if non-nil, zero value otherwise.

### GetExternalIntegrationOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetExternalIntegrationOk() (*[]InvoiceIntegration, bool)`

GetExternalIntegrationOk returns a tuple with the ExternalIntegration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalIntegration

`func (o *UpdateInvoiceDueDateResponseInvoice) SetExternalIntegration(v []InvoiceIntegration)`

SetExternalIntegration sets ExternalIntegration field to given value.

### HasExternalIntegration

`func (o *UpdateInvoiceDueDateResponseInvoice) HasExternalIntegration() bool`

HasExternalIntegration returns a boolean if a field has been set.

### GetIsTrial

`func (o *UpdateInvoiceDueDateResponseInvoice) GetIsTrial() bool`

GetIsTrial returns the IsTrial field if non-nil, zero value otherwise.

### GetIsTrialOk

`func (o *UpdateInvoiceDueDateResponseInvoice) GetIsTrialOk() (*bool, bool)`

GetIsTrialOk returns a tuple with the IsTrial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsTrial

`func (o *UpdateInvoiceDueDateResponseInvoice) SetIsTrial(v bool)`

SetIsTrial sets IsTrial field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


