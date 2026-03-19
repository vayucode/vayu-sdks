# GetContractResponseContract

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

## Methods

### NewGetContractResponseContract

`func NewGetContractResponseContract(startDate time.Time, customerId string, name string, id string, createdAt time.Time, updatedAt time.Time, ) *GetContractResponseContract`

NewGetContractResponseContract instantiates a new GetContractResponseContract object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetContractResponseContractWithDefaults

`func NewGetContractResponseContractWithDefaults() *GetContractResponseContract`

NewGetContractResponseContractWithDefaults instantiates a new GetContractResponseContract object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartDate

`func (o *GetContractResponseContract) GetStartDate() time.Time`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GetContractResponseContract) GetStartDateOk() (*time.Time, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GetContractResponseContract) SetStartDate(v time.Time)`

SetStartDate sets StartDate field to given value.


### GetCustomerId

`func (o *GetContractResponseContract) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *GetContractResponseContract) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *GetContractResponseContract) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetName

`func (o *GetContractResponseContract) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetContractResponseContract) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetContractResponseContract) SetName(v string)`

SetName sets Name field to given value.


### GetSalesForceOpportunityId

`func (o *GetContractResponseContract) GetSalesForceOpportunityId() string`

GetSalesForceOpportunityId returns the SalesForceOpportunityId field if non-nil, zero value otherwise.

### GetSalesForceOpportunityIdOk

`func (o *GetContractResponseContract) GetSalesForceOpportunityIdOk() (*string, bool)`

GetSalesForceOpportunityIdOk returns a tuple with the SalesForceOpportunityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceOpportunityId

`func (o *GetContractResponseContract) SetSalesForceOpportunityId(v string)`

SetSalesForceOpportunityId sets SalesForceOpportunityId field to given value.

### HasSalesForceOpportunityId

`func (o *GetContractResponseContract) HasSalesForceOpportunityId() bool`

HasSalesForceOpportunityId returns a boolean if a field has been set.

### SetSalesForceOpportunityIdNil

`func (o *GetContractResponseContract) SetSalesForceOpportunityIdNil(b bool)`

 SetSalesForceOpportunityIdNil sets the value for SalesForceOpportunityId to be an explicit nil

### UnsetSalesForceOpportunityId
`func (o *GetContractResponseContract) UnsetSalesForceOpportunityId()`

UnsetSalesForceOpportunityId ensures that no value is present for SalesForceOpportunityId, not even an explicit nil
### GetEndDate

`func (o *GetContractResponseContract) GetEndDate() time.Time`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *GetContractResponseContract) GetEndDateOk() (*time.Time, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *GetContractResponseContract) SetEndDate(v time.Time)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *GetContractResponseContract) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### SetEndDateNil

`func (o *GetContractResponseContract) SetEndDateNil(b bool)`

 SetEndDateNil sets the value for EndDate to be an explicit nil

### UnsetEndDate
`func (o *GetContractResponseContract) UnsetEndDate()`

UnsetEndDate ensures that no value is present for EndDate, not even an explicit nil
### GetSignatureDate

`func (o *GetContractResponseContract) GetSignatureDate() time.Time`

GetSignatureDate returns the SignatureDate field if non-nil, zero value otherwise.

### GetSignatureDateOk

`func (o *GetContractResponseContract) GetSignatureDateOk() (*time.Time, bool)`

GetSignatureDateOk returns a tuple with the SignatureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureDate

`func (o *GetContractResponseContract) SetSignatureDate(v time.Time)`

SetSignatureDate sets SignatureDate field to given value.

### HasSignatureDate

`func (o *GetContractResponseContract) HasSignatureDate() bool`

HasSignatureDate returns a boolean if a field has been set.

### SetSignatureDateNil

`func (o *GetContractResponseContract) SetSignatureDateNil(b bool)`

 SetSignatureDateNil sets the value for SignatureDate to be an explicit nil

### UnsetSignatureDate
`func (o *GetContractResponseContract) UnsetSignatureDate()`

UnsetSignatureDate ensures that no value is present for SignatureDate, not even an explicit nil
### GetProducts

`func (o *GetContractResponseContract) GetProducts() []ProductGroupProductsInner`

GetProducts returns the Products field if non-nil, zero value otherwise.

### GetProductsOk

`func (o *GetContractResponseContract) GetProductsOk() (*[]ProductGroupProductsInner, bool)`

GetProductsOk returns a tuple with the Products field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProducts

`func (o *GetContractResponseContract) SetProducts(v []ProductGroupProductsInner)`

SetProducts sets Products field to given value.

### HasProducts

`func (o *GetContractResponseContract) HasProducts() bool`

HasProducts returns a boolean if a field has been set.

### GetProductGroups

`func (o *GetContractResponseContract) GetProductGroups() []ProductGroup`

GetProductGroups returns the ProductGroups field if non-nil, zero value otherwise.

### GetProductGroupsOk

`func (o *GetContractResponseContract) GetProductGroupsOk() (*[]ProductGroup, bool)`

GetProductGroupsOk returns a tuple with the ProductGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductGroups

`func (o *GetContractResponseContract) SetProductGroups(v []ProductGroup)`

SetProductGroups sets ProductGroups field to given value.

### HasProductGroups

`func (o *GetContractResponseContract) HasProductGroups() bool`

HasProductGroups returns a boolean if a field has been set.

### GetAccountManager

`func (o *GetContractResponseContract) GetAccountManager() string`

GetAccountManager returns the AccountManager field if non-nil, zero value otherwise.

### GetAccountManagerOk

`func (o *GetContractResponseContract) GetAccountManagerOk() (*string, bool)`

GetAccountManagerOk returns a tuple with the AccountManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManager

`func (o *GetContractResponseContract) SetAccountManager(v string)`

SetAccountManager sets AccountManager field to given value.

### HasAccountManager

`func (o *GetContractResponseContract) HasAccountManager() bool`

HasAccountManager returns a boolean if a field has been set.

### SetAccountManagerNil

`func (o *GetContractResponseContract) SetAccountManagerNil(b bool)`

 SetAccountManagerNil sets the value for AccountManager to be an explicit nil

### UnsetAccountManager
`func (o *GetContractResponseContract) UnsetAccountManager()`

UnsetAccountManager ensures that no value is present for AccountManager, not even an explicit nil
### GetShouldProRateInvoices

`func (o *GetContractResponseContract) GetShouldProRateInvoices() bool`

GetShouldProRateInvoices returns the ShouldProRateInvoices field if non-nil, zero value otherwise.

### GetShouldProRateInvoicesOk

`func (o *GetContractResponseContract) GetShouldProRateInvoicesOk() (*bool, bool)`

GetShouldProRateInvoicesOk returns a tuple with the ShouldProRateInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShouldProRateInvoices

`func (o *GetContractResponseContract) SetShouldProRateInvoices(v bool)`

SetShouldProRateInvoices sets ShouldProRateInvoices field to given value.

### HasShouldProRateInvoices

`func (o *GetContractResponseContract) HasShouldProRateInvoices() bool`

HasShouldProRateInvoices returns a boolean if a field has been set.

### GetAutoRenewContract

`func (o *GetContractResponseContract) GetAutoRenewContract() bool`

GetAutoRenewContract returns the AutoRenewContract field if non-nil, zero value otherwise.

### GetAutoRenewContractOk

`func (o *GetContractResponseContract) GetAutoRenewContractOk() (*bool, bool)`

GetAutoRenewContractOk returns a tuple with the AutoRenewContract field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRenewContract

`func (o *GetContractResponseContract) SetAutoRenewContract(v bool)`

SetAutoRenewContract sets AutoRenewContract field to given value.

### HasAutoRenewContract

`func (o *GetContractResponseContract) HasAutoRenewContract() bool`

HasAutoRenewContract returns a boolean if a field has been set.

### GetCustomFields

`func (o *GetContractResponseContract) GetCustomFields() []CustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *GetContractResponseContract) GetCustomFieldsOk() (*[]CustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *GetContractResponseContract) SetCustomFields(v []CustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *GetContractResponseContract) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *GetContractResponseContract) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *GetContractResponseContract) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetCustomFieldValues

`func (o *GetContractResponseContract) GetCustomFieldValues() []CustomFieldValue`

GetCustomFieldValues returns the CustomFieldValues field if non-nil, zero value otherwise.

### GetCustomFieldValuesOk

`func (o *GetContractResponseContract) GetCustomFieldValuesOk() (*[]CustomFieldValue, bool)`

GetCustomFieldValuesOk returns a tuple with the CustomFieldValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFieldValues

`func (o *GetContractResponseContract) SetCustomFieldValues(v []CustomFieldValue)`

SetCustomFieldValues sets CustomFieldValues field to given value.

### HasCustomFieldValues

`func (o *GetContractResponseContract) HasCustomFieldValues() bool`

HasCustomFieldValues returns a boolean if a field has been set.

### SetCustomFieldValuesNil

`func (o *GetContractResponseContract) SetCustomFieldValuesNil(b bool)`

 SetCustomFieldValuesNil sets the value for CustomFieldValues to be an explicit nil

### UnsetCustomFieldValues
`func (o *GetContractResponseContract) UnsetCustomFieldValues()`

UnsetCustomFieldValues ensures that no value is present for CustomFieldValues, not even an explicit nil
### GetStatus

`func (o *GetContractResponseContract) GetStatus() ContractStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetContractResponseContract) GetStatusOk() (*ContractStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetContractResponseContract) SetStatus(v ContractStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetContractResponseContract) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetId

`func (o *GetContractResponseContract) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetContractResponseContract) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetContractResponseContract) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *GetContractResponseContract) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetContractResponseContract) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetContractResponseContract) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *GetContractResponseContract) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetContractResponseContract) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetContractResponseContract) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


