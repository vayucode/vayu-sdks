# DeleteContractResponseContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDate** | **time.Time** | The start date of the contract | 
**CustomerId** | **string** | The id of the customer that the contract is associated with | 
**Name** | **string** | The name of the contract | 
**SalesForceOpportunityId** | Pointer to **NullableString** | The id of the sales force opportunity that the contract is associated with | [optional] 
**EndDate** | Pointer to **NullableTime** | The end date of the contract | [optional] 
**SignatureDate** | Pointer to **NullableTime** | The signature date of the contract | [optional] 
**Products** | Pointer to [**[]ProductGroupProductsInner**](ProductGroupProductsInner.md) | The products that the contract is associated with | [optional] 
**ProductGroups** | Pointer to [**[]ProductGroup**](ProductGroup.md) | Product groups are list of products that can be grouped as a single line item with shared settings like ERP settings, commitment settings, etc. | [optional] 
**AccountManager** | Pointer to **NullableString** | The name of the account manager of the contract | [optional] 
**ShouldProRateInvoices** | Pointer to **bool** | Whether to pro rate the invoices for the contract. If not provided, it will default to false | [optional] 
**AutoRenewContract** | Pointer to **bool** | Whether the contract is set to auto renew. If not provided, it will be treated as true | [optional] 
**CustomFields** | Pointer to [**[]CustomField**](CustomField.md) | Custom fields from CRM systems (Salesforce, HubSpot, etc.) | [optional] 
**CustomFieldValues** | Pointer to [**[]CustomFieldValue**](CustomFieldValue.md) | The stored custom field values associated with the contract | [optional] 
**Status** | Pointer to [**ContractStatus**](ContractStatus.md) |  | [optional] 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 
**DeletedAt** | **string** |  | 

## Methods

### NewDeleteContractResponseContract

`func NewDeleteContractResponseContract(startDate time.Time, customerId string, name string, id string, createdAt time.Time, updatedAt time.Time, deletedAt string, ) *DeleteContractResponseContract`

NewDeleteContractResponseContract instantiates a new DeleteContractResponseContract object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteContractResponseContractWithDefaults

`func NewDeleteContractResponseContractWithDefaults() *DeleteContractResponseContract`

NewDeleteContractResponseContractWithDefaults instantiates a new DeleteContractResponseContract object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartDate

`func (o *DeleteContractResponseContract) GetStartDate() time.Time`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *DeleteContractResponseContract) GetStartDateOk() (*time.Time, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *DeleteContractResponseContract) SetStartDate(v time.Time)`

SetStartDate sets StartDate field to given value.


### GetCustomerId

`func (o *DeleteContractResponseContract) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *DeleteContractResponseContract) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *DeleteContractResponseContract) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetName

`func (o *DeleteContractResponseContract) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DeleteContractResponseContract) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DeleteContractResponseContract) SetName(v string)`

SetName sets Name field to given value.


### GetSalesForceOpportunityId

`func (o *DeleteContractResponseContract) GetSalesForceOpportunityId() string`

GetSalesForceOpportunityId returns the SalesForceOpportunityId field if non-nil, zero value otherwise.

### GetSalesForceOpportunityIdOk

`func (o *DeleteContractResponseContract) GetSalesForceOpportunityIdOk() (*string, bool)`

GetSalesForceOpportunityIdOk returns a tuple with the SalesForceOpportunityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceOpportunityId

`func (o *DeleteContractResponseContract) SetSalesForceOpportunityId(v string)`

SetSalesForceOpportunityId sets SalesForceOpportunityId field to given value.

### HasSalesForceOpportunityId

`func (o *DeleteContractResponseContract) HasSalesForceOpportunityId() bool`

HasSalesForceOpportunityId returns a boolean if a field has been set.

### SetSalesForceOpportunityIdNil

`func (o *DeleteContractResponseContract) SetSalesForceOpportunityIdNil(b bool)`

 SetSalesForceOpportunityIdNil sets the value for SalesForceOpportunityId to be an explicit nil

### UnsetSalesForceOpportunityId
`func (o *DeleteContractResponseContract) UnsetSalesForceOpportunityId()`

UnsetSalesForceOpportunityId ensures that no value is present for SalesForceOpportunityId, not even an explicit nil
### GetEndDate

`func (o *DeleteContractResponseContract) GetEndDate() time.Time`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *DeleteContractResponseContract) GetEndDateOk() (*time.Time, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *DeleteContractResponseContract) SetEndDate(v time.Time)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *DeleteContractResponseContract) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### SetEndDateNil

`func (o *DeleteContractResponseContract) SetEndDateNil(b bool)`

 SetEndDateNil sets the value for EndDate to be an explicit nil

### UnsetEndDate
`func (o *DeleteContractResponseContract) UnsetEndDate()`

UnsetEndDate ensures that no value is present for EndDate, not even an explicit nil
### GetSignatureDate

`func (o *DeleteContractResponseContract) GetSignatureDate() time.Time`

GetSignatureDate returns the SignatureDate field if non-nil, zero value otherwise.

### GetSignatureDateOk

`func (o *DeleteContractResponseContract) GetSignatureDateOk() (*time.Time, bool)`

GetSignatureDateOk returns a tuple with the SignatureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureDate

`func (o *DeleteContractResponseContract) SetSignatureDate(v time.Time)`

SetSignatureDate sets SignatureDate field to given value.

### HasSignatureDate

`func (o *DeleteContractResponseContract) HasSignatureDate() bool`

HasSignatureDate returns a boolean if a field has been set.

### SetSignatureDateNil

`func (o *DeleteContractResponseContract) SetSignatureDateNil(b bool)`

 SetSignatureDateNil sets the value for SignatureDate to be an explicit nil

### UnsetSignatureDate
`func (o *DeleteContractResponseContract) UnsetSignatureDate()`

UnsetSignatureDate ensures that no value is present for SignatureDate, not even an explicit nil
### GetProducts

`func (o *DeleteContractResponseContract) GetProducts() []ProductGroupProductsInner`

GetProducts returns the Products field if non-nil, zero value otherwise.

### GetProductsOk

`func (o *DeleteContractResponseContract) GetProductsOk() (*[]ProductGroupProductsInner, bool)`

GetProductsOk returns a tuple with the Products field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProducts

`func (o *DeleteContractResponseContract) SetProducts(v []ProductGroupProductsInner)`

SetProducts sets Products field to given value.

### HasProducts

`func (o *DeleteContractResponseContract) HasProducts() bool`

HasProducts returns a boolean if a field has been set.

### GetProductGroups

`func (o *DeleteContractResponseContract) GetProductGroups() []ProductGroup`

GetProductGroups returns the ProductGroups field if non-nil, zero value otherwise.

### GetProductGroupsOk

`func (o *DeleteContractResponseContract) GetProductGroupsOk() (*[]ProductGroup, bool)`

GetProductGroupsOk returns a tuple with the ProductGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductGroups

`func (o *DeleteContractResponseContract) SetProductGroups(v []ProductGroup)`

SetProductGroups sets ProductGroups field to given value.

### HasProductGroups

`func (o *DeleteContractResponseContract) HasProductGroups() bool`

HasProductGroups returns a boolean if a field has been set.

### GetAccountManager

`func (o *DeleteContractResponseContract) GetAccountManager() string`

GetAccountManager returns the AccountManager field if non-nil, zero value otherwise.

### GetAccountManagerOk

`func (o *DeleteContractResponseContract) GetAccountManagerOk() (*string, bool)`

GetAccountManagerOk returns a tuple with the AccountManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManager

`func (o *DeleteContractResponseContract) SetAccountManager(v string)`

SetAccountManager sets AccountManager field to given value.

### HasAccountManager

`func (o *DeleteContractResponseContract) HasAccountManager() bool`

HasAccountManager returns a boolean if a field has been set.

### SetAccountManagerNil

`func (o *DeleteContractResponseContract) SetAccountManagerNil(b bool)`

 SetAccountManagerNil sets the value for AccountManager to be an explicit nil

### UnsetAccountManager
`func (o *DeleteContractResponseContract) UnsetAccountManager()`

UnsetAccountManager ensures that no value is present for AccountManager, not even an explicit nil
### GetShouldProRateInvoices

`func (o *DeleteContractResponseContract) GetShouldProRateInvoices() bool`

GetShouldProRateInvoices returns the ShouldProRateInvoices field if non-nil, zero value otherwise.

### GetShouldProRateInvoicesOk

`func (o *DeleteContractResponseContract) GetShouldProRateInvoicesOk() (*bool, bool)`

GetShouldProRateInvoicesOk returns a tuple with the ShouldProRateInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShouldProRateInvoices

`func (o *DeleteContractResponseContract) SetShouldProRateInvoices(v bool)`

SetShouldProRateInvoices sets ShouldProRateInvoices field to given value.

### HasShouldProRateInvoices

`func (o *DeleteContractResponseContract) HasShouldProRateInvoices() bool`

HasShouldProRateInvoices returns a boolean if a field has been set.

### GetAutoRenewContract

`func (o *DeleteContractResponseContract) GetAutoRenewContract() bool`

GetAutoRenewContract returns the AutoRenewContract field if non-nil, zero value otherwise.

### GetAutoRenewContractOk

`func (o *DeleteContractResponseContract) GetAutoRenewContractOk() (*bool, bool)`

GetAutoRenewContractOk returns a tuple with the AutoRenewContract field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRenewContract

`func (o *DeleteContractResponseContract) SetAutoRenewContract(v bool)`

SetAutoRenewContract sets AutoRenewContract field to given value.

### HasAutoRenewContract

`func (o *DeleteContractResponseContract) HasAutoRenewContract() bool`

HasAutoRenewContract returns a boolean if a field has been set.

### GetCustomFields

`func (o *DeleteContractResponseContract) GetCustomFields() []CustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *DeleteContractResponseContract) GetCustomFieldsOk() (*[]CustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *DeleteContractResponseContract) SetCustomFields(v []CustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *DeleteContractResponseContract) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *DeleteContractResponseContract) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *DeleteContractResponseContract) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetCustomFieldValues

`func (o *DeleteContractResponseContract) GetCustomFieldValues() []CustomFieldValue`

GetCustomFieldValues returns the CustomFieldValues field if non-nil, zero value otherwise.

### GetCustomFieldValuesOk

`func (o *DeleteContractResponseContract) GetCustomFieldValuesOk() (*[]CustomFieldValue, bool)`

GetCustomFieldValuesOk returns a tuple with the CustomFieldValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFieldValues

`func (o *DeleteContractResponseContract) SetCustomFieldValues(v []CustomFieldValue)`

SetCustomFieldValues sets CustomFieldValues field to given value.

### HasCustomFieldValues

`func (o *DeleteContractResponseContract) HasCustomFieldValues() bool`

HasCustomFieldValues returns a boolean if a field has been set.

### SetCustomFieldValuesNil

`func (o *DeleteContractResponseContract) SetCustomFieldValuesNil(b bool)`

 SetCustomFieldValuesNil sets the value for CustomFieldValues to be an explicit nil

### UnsetCustomFieldValues
`func (o *DeleteContractResponseContract) UnsetCustomFieldValues()`

UnsetCustomFieldValues ensures that no value is present for CustomFieldValues, not even an explicit nil
### GetStatus

`func (o *DeleteContractResponseContract) GetStatus() ContractStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DeleteContractResponseContract) GetStatusOk() (*ContractStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DeleteContractResponseContract) SetStatus(v ContractStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DeleteContractResponseContract) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetId

`func (o *DeleteContractResponseContract) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DeleteContractResponseContract) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DeleteContractResponseContract) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *DeleteContractResponseContract) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DeleteContractResponseContract) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DeleteContractResponseContract) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DeleteContractResponseContract) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DeleteContractResponseContract) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DeleteContractResponseContract) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDeletedAt

`func (o *DeleteContractResponseContract) GetDeletedAt() string`

GetDeletedAt returns the DeletedAt field if non-nil, zero value otherwise.

### GetDeletedAtOk

`func (o *DeleteContractResponseContract) GetDeletedAtOk() (*string, bool)`

GetDeletedAtOk returns a tuple with the DeletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAt

`func (o *DeleteContractResponseContract) SetDeletedAt(v string)`

SetDeletedAt sets DeletedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


