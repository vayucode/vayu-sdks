# DeleteInvoiceResponseInvoice

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
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 
**DeletedAt** | **string** |  | 

## Methods

### NewDeleteInvoiceResponseInvoice

`func NewDeleteInvoiceResponseInvoice(customerId string, name string, revenueBreakdown GetInvoiceResponseInvoiceRevenueBreakdown, billingStatus InvoiceBillingStatus, dueDate NullableTime, reviewStatus InvoiceReviewStatus, issuedAt NullableTime, accountId string, billingCycle Period, lineItems []LineItem, payments []InvoicePayment, amount float32, isTrial bool, id string, createdAt time.Time, updatedAt time.Time, deletedAt string, ) *DeleteInvoiceResponseInvoice`

NewDeleteInvoiceResponseInvoice instantiates a new DeleteInvoiceResponseInvoice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteInvoiceResponseInvoiceWithDefaults

`func NewDeleteInvoiceResponseInvoiceWithDefaults() *DeleteInvoiceResponseInvoice`

NewDeleteInvoiceResponseInvoiceWithDefaults instantiates a new DeleteInvoiceResponseInvoice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerId

`func (o *DeleteInvoiceResponseInvoice) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *DeleteInvoiceResponseInvoice) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *DeleteInvoiceResponseInvoice) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetContractId

`func (o *DeleteInvoiceResponseInvoice) GetContractId() string`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *DeleteInvoiceResponseInvoice) GetContractIdOk() (*string, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *DeleteInvoiceResponseInvoice) SetContractId(v string)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *DeleteInvoiceResponseInvoice) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetName

`func (o *DeleteInvoiceResponseInvoice) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DeleteInvoiceResponseInvoice) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DeleteInvoiceResponseInvoice) SetName(v string)`

SetName sets Name field to given value.


### GetRevenueBreakdown

`func (o *DeleteInvoiceResponseInvoice) GetRevenueBreakdown() GetInvoiceResponseInvoiceRevenueBreakdown`

GetRevenueBreakdown returns the RevenueBreakdown field if non-nil, zero value otherwise.

### GetRevenueBreakdownOk

`func (o *DeleteInvoiceResponseInvoice) GetRevenueBreakdownOk() (*GetInvoiceResponseInvoiceRevenueBreakdown, bool)`

GetRevenueBreakdownOk returns a tuple with the RevenueBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBreakdown

`func (o *DeleteInvoiceResponseInvoice) SetRevenueBreakdown(v GetInvoiceResponseInvoiceRevenueBreakdown)`

SetRevenueBreakdown sets RevenueBreakdown field to given value.


### GetBillingStatus

`func (o *DeleteInvoiceResponseInvoice) GetBillingStatus() InvoiceBillingStatus`

GetBillingStatus returns the BillingStatus field if non-nil, zero value otherwise.

### GetBillingStatusOk

`func (o *DeleteInvoiceResponseInvoice) GetBillingStatusOk() (*InvoiceBillingStatus, bool)`

GetBillingStatusOk returns a tuple with the BillingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingStatus

`func (o *DeleteInvoiceResponseInvoice) SetBillingStatus(v InvoiceBillingStatus)`

SetBillingStatus sets BillingStatus field to given value.


### GetPaymentInfo

`func (o *DeleteInvoiceResponseInvoice) GetPaymentInfo() PaymentInfo`

GetPaymentInfo returns the PaymentInfo field if non-nil, zero value otherwise.

### GetPaymentInfoOk

`func (o *DeleteInvoiceResponseInvoice) GetPaymentInfoOk() (*PaymentInfo, bool)`

GetPaymentInfoOk returns a tuple with the PaymentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentInfo

`func (o *DeleteInvoiceResponseInvoice) SetPaymentInfo(v PaymentInfo)`

SetPaymentInfo sets PaymentInfo field to given value.

### HasPaymentInfo

`func (o *DeleteInvoiceResponseInvoice) HasPaymentInfo() bool`

HasPaymentInfo returns a boolean if a field has been set.

### GetDueDate

`func (o *DeleteInvoiceResponseInvoice) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *DeleteInvoiceResponseInvoice) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *DeleteInvoiceResponseInvoice) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.


### SetDueDateNil

`func (o *DeleteInvoiceResponseInvoice) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *DeleteInvoiceResponseInvoice) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
### GetInvoiceNumber

`func (o *DeleteInvoiceResponseInvoice) GetInvoiceNumber() string`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *DeleteInvoiceResponseInvoice) GetInvoiceNumberOk() (*string, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *DeleteInvoiceResponseInvoice) SetInvoiceNumber(v string)`

SetInvoiceNumber sets InvoiceNumber field to given value.

### HasInvoiceNumber

`func (o *DeleteInvoiceResponseInvoice) HasInvoiceNumber() bool`

HasInvoiceNumber returns a boolean if a field has been set.

### GetReviewStatus

`func (o *DeleteInvoiceResponseInvoice) GetReviewStatus() InvoiceReviewStatus`

GetReviewStatus returns the ReviewStatus field if non-nil, zero value otherwise.

### GetReviewStatusOk

`func (o *DeleteInvoiceResponseInvoice) GetReviewStatusOk() (*InvoiceReviewStatus, bool)`

GetReviewStatusOk returns a tuple with the ReviewStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewStatus

`func (o *DeleteInvoiceResponseInvoice) SetReviewStatus(v InvoiceReviewStatus)`

SetReviewStatus sets ReviewStatus field to given value.


### GetApprovedAt

`func (o *DeleteInvoiceResponseInvoice) GetApprovedAt() time.Time`

GetApprovedAt returns the ApprovedAt field if non-nil, zero value otherwise.

### GetApprovedAtOk

`func (o *DeleteInvoiceResponseInvoice) GetApprovedAtOk() (*time.Time, bool)`

GetApprovedAtOk returns a tuple with the ApprovedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedAt

`func (o *DeleteInvoiceResponseInvoice) SetApprovedAt(v time.Time)`

SetApprovedAt sets ApprovedAt field to given value.

### HasApprovedAt

`func (o *DeleteInvoiceResponseInvoice) HasApprovedAt() bool`

HasApprovedAt returns a boolean if a field has been set.

### GetIssuedAt

`func (o *DeleteInvoiceResponseInvoice) GetIssuedAt() time.Time`

GetIssuedAt returns the IssuedAt field if non-nil, zero value otherwise.

### GetIssuedAtOk

`func (o *DeleteInvoiceResponseInvoice) GetIssuedAtOk() (*time.Time, bool)`

GetIssuedAtOk returns a tuple with the IssuedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedAt

`func (o *DeleteInvoiceResponseInvoice) SetIssuedAt(v time.Time)`

SetIssuedAt sets IssuedAt field to given value.


### SetIssuedAtNil

`func (o *DeleteInvoiceResponseInvoice) SetIssuedAtNil(b bool)`

 SetIssuedAtNil sets the value for IssuedAt to be an explicit nil

### UnsetIssuedAt
`func (o *DeleteInvoiceResponseInvoice) UnsetIssuedAt()`

UnsetIssuedAt ensures that no value is present for IssuedAt, not even an explicit nil
### GetAccountId

`func (o *DeleteInvoiceResponseInvoice) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *DeleteInvoiceResponseInvoice) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *DeleteInvoiceResponseInvoice) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.


### GetBillingCycle

`func (o *DeleteInvoiceResponseInvoice) GetBillingCycle() Period`

GetBillingCycle returns the BillingCycle field if non-nil, zero value otherwise.

### GetBillingCycleOk

`func (o *DeleteInvoiceResponseInvoice) GetBillingCycleOk() (*Period, bool)`

GetBillingCycleOk returns a tuple with the BillingCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingCycle

`func (o *DeleteInvoiceResponseInvoice) SetBillingCycle(v Period)`

SetBillingCycle sets BillingCycle field to given value.


### GetLineItems

`func (o *DeleteInvoiceResponseInvoice) GetLineItems() []LineItem`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *DeleteInvoiceResponseInvoice) GetLineItemsOk() (*[]LineItem, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *DeleteInvoiceResponseInvoice) SetLineItems(v []LineItem)`

SetLineItems sets LineItems field to given value.


### GetPayments

`func (o *DeleteInvoiceResponseInvoice) GetPayments() []InvoicePayment`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *DeleteInvoiceResponseInvoice) GetPaymentsOk() (*[]InvoicePayment, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *DeleteInvoiceResponseInvoice) SetPayments(v []InvoicePayment)`

SetPayments sets Payments field to given value.


### GetAmount

`func (o *DeleteInvoiceResponseInvoice) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DeleteInvoiceResponseInvoice) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DeleteInvoiceResponseInvoice) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetPurchaseOrder

`func (o *DeleteInvoiceResponseInvoice) GetPurchaseOrder() string`

GetPurchaseOrder returns the PurchaseOrder field if non-nil, zero value otherwise.

### GetPurchaseOrderOk

`func (o *DeleteInvoiceResponseInvoice) GetPurchaseOrderOk() (*string, bool)`

GetPurchaseOrderOk returns a tuple with the PurchaseOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurchaseOrder

`func (o *DeleteInvoiceResponseInvoice) SetPurchaseOrder(v string)`

SetPurchaseOrder sets PurchaseOrder field to given value.

### HasPurchaseOrder

`func (o *DeleteInvoiceResponseInvoice) HasPurchaseOrder() bool`

HasPurchaseOrder returns a boolean if a field has been set.

### GetNotes

`func (o *DeleteInvoiceResponseInvoice) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *DeleteInvoiceResponseInvoice) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *DeleteInvoiceResponseInvoice) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *DeleteInvoiceResponseInvoice) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetContractName

`func (o *DeleteInvoiceResponseInvoice) GetContractName() string`

GetContractName returns the ContractName field if non-nil, zero value otherwise.

### GetContractNameOk

`func (o *DeleteInvoiceResponseInvoice) GetContractNameOk() (*string, bool)`

GetContractNameOk returns a tuple with the ContractName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractName

`func (o *DeleteInvoiceResponseInvoice) SetContractName(v string)`

SetContractName sets ContractName field to given value.

### HasContractName

`func (o *DeleteInvoiceResponseInvoice) HasContractName() bool`

HasContractName returns a boolean if a field has been set.

### GetCustomFieldValues

`func (o *DeleteInvoiceResponseInvoice) GetCustomFieldValues() []CustomFieldValue`

GetCustomFieldValues returns the CustomFieldValues field if non-nil, zero value otherwise.

### GetCustomFieldValuesOk

`func (o *DeleteInvoiceResponseInvoice) GetCustomFieldValuesOk() (*[]CustomFieldValue, bool)`

GetCustomFieldValuesOk returns a tuple with the CustomFieldValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFieldValues

`func (o *DeleteInvoiceResponseInvoice) SetCustomFieldValues(v []CustomFieldValue)`

SetCustomFieldValues sets CustomFieldValues field to given value.

### HasCustomFieldValues

`func (o *DeleteInvoiceResponseInvoice) HasCustomFieldValues() bool`

HasCustomFieldValues returns a boolean if a field has been set.

### GetExternalIntegration

`func (o *DeleteInvoiceResponseInvoice) GetExternalIntegration() []InvoiceIntegration`

GetExternalIntegration returns the ExternalIntegration field if non-nil, zero value otherwise.

### GetExternalIntegrationOk

`func (o *DeleteInvoiceResponseInvoice) GetExternalIntegrationOk() (*[]InvoiceIntegration, bool)`

GetExternalIntegrationOk returns a tuple with the ExternalIntegration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalIntegration

`func (o *DeleteInvoiceResponseInvoice) SetExternalIntegration(v []InvoiceIntegration)`

SetExternalIntegration sets ExternalIntegration field to given value.

### HasExternalIntegration

`func (o *DeleteInvoiceResponseInvoice) HasExternalIntegration() bool`

HasExternalIntegration returns a boolean if a field has been set.

### GetIsTrial

`func (o *DeleteInvoiceResponseInvoice) GetIsTrial() bool`

GetIsTrial returns the IsTrial field if non-nil, zero value otherwise.

### GetIsTrialOk

`func (o *DeleteInvoiceResponseInvoice) GetIsTrialOk() (*bool, bool)`

GetIsTrialOk returns a tuple with the IsTrial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsTrial

`func (o *DeleteInvoiceResponseInvoice) SetIsTrial(v bool)`

SetIsTrial sets IsTrial field to given value.


### GetId

`func (o *DeleteInvoiceResponseInvoice) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DeleteInvoiceResponseInvoice) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DeleteInvoiceResponseInvoice) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *DeleteInvoiceResponseInvoice) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DeleteInvoiceResponseInvoice) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DeleteInvoiceResponseInvoice) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DeleteInvoiceResponseInvoice) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DeleteInvoiceResponseInvoice) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DeleteInvoiceResponseInvoice) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDeletedAt

`func (o *DeleteInvoiceResponseInvoice) GetDeletedAt() string`

GetDeletedAt returns the DeletedAt field if non-nil, zero value otherwise.

### GetDeletedAtOk

`func (o *DeleteInvoiceResponseInvoice) GetDeletedAtOk() (*string, bool)`

GetDeletedAtOk returns a tuple with the DeletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAt

`func (o *DeleteInvoiceResponseInvoice) SetDeletedAt(v string)`

SetDeletedAt sets DeletedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


