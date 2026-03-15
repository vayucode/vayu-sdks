# CreateCustomerResponseCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the customer | 
**Aliases** | Pointer to **[]string** | The aliases of the customer used to match events to the customer. | [optional] [default to []]
**Contacts** | Pointer to [**[]Contact**](Contact.md) | The contacts of the customer. Contact marked as primary is the target for invoice sharing. | [optional] 
**Source** | Pointer to [**NullableCustomerSource**](CustomerSource.md) |  | [optional] 
**LegalName** | Pointer to **NullableString** | The legal name of the customer | [optional] 
**TaxIds** | Pointer to **[]string** | The tax IDs of the customer | [optional] [default to []]
**TaxId** | Pointer to **NullableString** | The tax ID of the customer (deprecated, use taxIds instead) | [optional] 
**CloudProviderSettings** | Pointer to [**NullableCustomerCloudProviderSettings**](CustomerCloudProviderSettings.md) |  | [optional] 
**ExternalId** | Pointer to **string** | The external ID of the customer | [optional] 
**CustomerErpId** | Pointer to **NullableString** | The ID of the customer in the ERP system | [optional] 
**Address** | Pointer to [**NullableAddress**](Address.md) |  | [optional] 
**SalesForceAccountId** | Pointer to **NullableString** | The ID of the customer in the Salesforce system | [optional] 
**DueDays** | Pointer to **NullableString** | The due days of the customer | [optional] 
**Currency** | Pointer to [**NullableCurrency**](Currency.md) |  | [optional] 
**CustomFields** | Pointer to [**[]CustomField**](CustomField.md) | Custom fields from CRM systems (Salesforce, HubSpot, etc.) | [optional] 
**Subsidiary** | Pointer to **NullableString** | The name of the subsidiary of the customer | [optional] 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewCreateCustomerResponseCustomer

`func NewCreateCustomerResponseCustomer(name string, id string, createdAt time.Time, updatedAt time.Time, ) *CreateCustomerResponseCustomer`

NewCreateCustomerResponseCustomer instantiates a new CreateCustomerResponseCustomer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCustomerResponseCustomerWithDefaults

`func NewCreateCustomerResponseCustomerWithDefaults() *CreateCustomerResponseCustomer`

NewCreateCustomerResponseCustomerWithDefaults instantiates a new CreateCustomerResponseCustomer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateCustomerResponseCustomer) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateCustomerResponseCustomer) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateCustomerResponseCustomer) SetName(v string)`

SetName sets Name field to given value.


### GetAliases

`func (o *CreateCustomerResponseCustomer) GetAliases() []string`

GetAliases returns the Aliases field if non-nil, zero value otherwise.

### GetAliasesOk

`func (o *CreateCustomerResponseCustomer) GetAliasesOk() (*[]string, bool)`

GetAliasesOk returns a tuple with the Aliases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliases

`func (o *CreateCustomerResponseCustomer) SetAliases(v []string)`

SetAliases sets Aliases field to given value.

### HasAliases

`func (o *CreateCustomerResponseCustomer) HasAliases() bool`

HasAliases returns a boolean if a field has been set.

### SetAliasesNil

`func (o *CreateCustomerResponseCustomer) SetAliasesNil(b bool)`

 SetAliasesNil sets the value for Aliases to be an explicit nil

### UnsetAliases
`func (o *CreateCustomerResponseCustomer) UnsetAliases()`

UnsetAliases ensures that no value is present for Aliases, not even an explicit nil
### GetContacts

`func (o *CreateCustomerResponseCustomer) GetContacts() []Contact`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *CreateCustomerResponseCustomer) GetContactsOk() (*[]Contact, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *CreateCustomerResponseCustomer) SetContacts(v []Contact)`

SetContacts sets Contacts field to given value.

### HasContacts

`func (o *CreateCustomerResponseCustomer) HasContacts() bool`

HasContacts returns a boolean if a field has been set.

### SetContactsNil

`func (o *CreateCustomerResponseCustomer) SetContactsNil(b bool)`

 SetContactsNil sets the value for Contacts to be an explicit nil

### UnsetContacts
`func (o *CreateCustomerResponseCustomer) UnsetContacts()`

UnsetContacts ensures that no value is present for Contacts, not even an explicit nil
### GetSource

`func (o *CreateCustomerResponseCustomer) GetSource() CustomerSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *CreateCustomerResponseCustomer) GetSourceOk() (*CustomerSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *CreateCustomerResponseCustomer) SetSource(v CustomerSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *CreateCustomerResponseCustomer) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *CreateCustomerResponseCustomer) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *CreateCustomerResponseCustomer) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetLegalName

`func (o *CreateCustomerResponseCustomer) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *CreateCustomerResponseCustomer) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *CreateCustomerResponseCustomer) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.

### HasLegalName

`func (o *CreateCustomerResponseCustomer) HasLegalName() bool`

HasLegalName returns a boolean if a field has been set.

### SetLegalNameNil

`func (o *CreateCustomerResponseCustomer) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *CreateCustomerResponseCustomer) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetTaxIds

`func (o *CreateCustomerResponseCustomer) GetTaxIds() []string`

GetTaxIds returns the TaxIds field if non-nil, zero value otherwise.

### GetTaxIdsOk

`func (o *CreateCustomerResponseCustomer) GetTaxIdsOk() (*[]string, bool)`

GetTaxIdsOk returns a tuple with the TaxIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxIds

`func (o *CreateCustomerResponseCustomer) SetTaxIds(v []string)`

SetTaxIds sets TaxIds field to given value.

### HasTaxIds

`func (o *CreateCustomerResponseCustomer) HasTaxIds() bool`

HasTaxIds returns a boolean if a field has been set.

### SetTaxIdsNil

`func (o *CreateCustomerResponseCustomer) SetTaxIdsNil(b bool)`

 SetTaxIdsNil sets the value for TaxIds to be an explicit nil

### UnsetTaxIds
`func (o *CreateCustomerResponseCustomer) UnsetTaxIds()`

UnsetTaxIds ensures that no value is present for TaxIds, not even an explicit nil
### GetTaxId

`func (o *CreateCustomerResponseCustomer) GetTaxId() string`

GetTaxId returns the TaxId field if non-nil, zero value otherwise.

### GetTaxIdOk

`func (o *CreateCustomerResponseCustomer) GetTaxIdOk() (*string, bool)`

GetTaxIdOk returns a tuple with the TaxId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxId

`func (o *CreateCustomerResponseCustomer) SetTaxId(v string)`

SetTaxId sets TaxId field to given value.

### HasTaxId

`func (o *CreateCustomerResponseCustomer) HasTaxId() bool`

HasTaxId returns a boolean if a field has been set.

### SetTaxIdNil

`func (o *CreateCustomerResponseCustomer) SetTaxIdNil(b bool)`

 SetTaxIdNil sets the value for TaxId to be an explicit nil

### UnsetTaxId
`func (o *CreateCustomerResponseCustomer) UnsetTaxId()`

UnsetTaxId ensures that no value is present for TaxId, not even an explicit nil
### GetCloudProviderSettings

`func (o *CreateCustomerResponseCustomer) GetCloudProviderSettings() CustomerCloudProviderSettings`

GetCloudProviderSettings returns the CloudProviderSettings field if non-nil, zero value otherwise.

### GetCloudProviderSettingsOk

`func (o *CreateCustomerResponseCustomer) GetCloudProviderSettingsOk() (*CustomerCloudProviderSettings, bool)`

GetCloudProviderSettingsOk returns a tuple with the CloudProviderSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudProviderSettings

`func (o *CreateCustomerResponseCustomer) SetCloudProviderSettings(v CustomerCloudProviderSettings)`

SetCloudProviderSettings sets CloudProviderSettings field to given value.

### HasCloudProviderSettings

`func (o *CreateCustomerResponseCustomer) HasCloudProviderSettings() bool`

HasCloudProviderSettings returns a boolean if a field has been set.

### SetCloudProviderSettingsNil

`func (o *CreateCustomerResponseCustomer) SetCloudProviderSettingsNil(b bool)`

 SetCloudProviderSettingsNil sets the value for CloudProviderSettings to be an explicit nil

### UnsetCloudProviderSettings
`func (o *CreateCustomerResponseCustomer) UnsetCloudProviderSettings()`

UnsetCloudProviderSettings ensures that no value is present for CloudProviderSettings, not even an explicit nil
### GetExternalId

`func (o *CreateCustomerResponseCustomer) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *CreateCustomerResponseCustomer) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *CreateCustomerResponseCustomer) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *CreateCustomerResponseCustomer) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetCustomerErpId

`func (o *CreateCustomerResponseCustomer) GetCustomerErpId() string`

GetCustomerErpId returns the CustomerErpId field if non-nil, zero value otherwise.

### GetCustomerErpIdOk

`func (o *CreateCustomerResponseCustomer) GetCustomerErpIdOk() (*string, bool)`

GetCustomerErpIdOk returns a tuple with the CustomerErpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerErpId

`func (o *CreateCustomerResponseCustomer) SetCustomerErpId(v string)`

SetCustomerErpId sets CustomerErpId field to given value.

### HasCustomerErpId

`func (o *CreateCustomerResponseCustomer) HasCustomerErpId() bool`

HasCustomerErpId returns a boolean if a field has been set.

### SetCustomerErpIdNil

`func (o *CreateCustomerResponseCustomer) SetCustomerErpIdNil(b bool)`

 SetCustomerErpIdNil sets the value for CustomerErpId to be an explicit nil

### UnsetCustomerErpId
`func (o *CreateCustomerResponseCustomer) UnsetCustomerErpId()`

UnsetCustomerErpId ensures that no value is present for CustomerErpId, not even an explicit nil
### GetAddress

`func (o *CreateCustomerResponseCustomer) GetAddress() Address`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CreateCustomerResponseCustomer) GetAddressOk() (*Address, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CreateCustomerResponseCustomer) SetAddress(v Address)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *CreateCustomerResponseCustomer) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### SetAddressNil

`func (o *CreateCustomerResponseCustomer) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *CreateCustomerResponseCustomer) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetSalesForceAccountId

`func (o *CreateCustomerResponseCustomer) GetSalesForceAccountId() string`

GetSalesForceAccountId returns the SalesForceAccountId field if non-nil, zero value otherwise.

### GetSalesForceAccountIdOk

`func (o *CreateCustomerResponseCustomer) GetSalesForceAccountIdOk() (*string, bool)`

GetSalesForceAccountIdOk returns a tuple with the SalesForceAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceAccountId

`func (o *CreateCustomerResponseCustomer) SetSalesForceAccountId(v string)`

SetSalesForceAccountId sets SalesForceAccountId field to given value.

### HasSalesForceAccountId

`func (o *CreateCustomerResponseCustomer) HasSalesForceAccountId() bool`

HasSalesForceAccountId returns a boolean if a field has been set.

### SetSalesForceAccountIdNil

`func (o *CreateCustomerResponseCustomer) SetSalesForceAccountIdNil(b bool)`

 SetSalesForceAccountIdNil sets the value for SalesForceAccountId to be an explicit nil

### UnsetSalesForceAccountId
`func (o *CreateCustomerResponseCustomer) UnsetSalesForceAccountId()`

UnsetSalesForceAccountId ensures that no value is present for SalesForceAccountId, not even an explicit nil
### GetDueDays

`func (o *CreateCustomerResponseCustomer) GetDueDays() string`

GetDueDays returns the DueDays field if non-nil, zero value otherwise.

### GetDueDaysOk

`func (o *CreateCustomerResponseCustomer) GetDueDaysOk() (*string, bool)`

GetDueDaysOk returns a tuple with the DueDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDays

`func (o *CreateCustomerResponseCustomer) SetDueDays(v string)`

SetDueDays sets DueDays field to given value.

### HasDueDays

`func (o *CreateCustomerResponseCustomer) HasDueDays() bool`

HasDueDays returns a boolean if a field has been set.

### SetDueDaysNil

`func (o *CreateCustomerResponseCustomer) SetDueDaysNil(b bool)`

 SetDueDaysNil sets the value for DueDays to be an explicit nil

### UnsetDueDays
`func (o *CreateCustomerResponseCustomer) UnsetDueDays()`

UnsetDueDays ensures that no value is present for DueDays, not even an explicit nil
### GetCurrency

`func (o *CreateCustomerResponseCustomer) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CreateCustomerResponseCustomer) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CreateCustomerResponseCustomer) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *CreateCustomerResponseCustomer) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### SetCurrencyNil

`func (o *CreateCustomerResponseCustomer) SetCurrencyNil(b bool)`

 SetCurrencyNil sets the value for Currency to be an explicit nil

### UnsetCurrency
`func (o *CreateCustomerResponseCustomer) UnsetCurrency()`

UnsetCurrency ensures that no value is present for Currency, not even an explicit nil
### GetCustomFields

`func (o *CreateCustomerResponseCustomer) GetCustomFields() []CustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *CreateCustomerResponseCustomer) GetCustomFieldsOk() (*[]CustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *CreateCustomerResponseCustomer) SetCustomFields(v []CustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *CreateCustomerResponseCustomer) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *CreateCustomerResponseCustomer) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *CreateCustomerResponseCustomer) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetSubsidiary

`func (o *CreateCustomerResponseCustomer) GetSubsidiary() string`

GetSubsidiary returns the Subsidiary field if non-nil, zero value otherwise.

### GetSubsidiaryOk

`func (o *CreateCustomerResponseCustomer) GetSubsidiaryOk() (*string, bool)`

GetSubsidiaryOk returns a tuple with the Subsidiary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsidiary

`func (o *CreateCustomerResponseCustomer) SetSubsidiary(v string)`

SetSubsidiary sets Subsidiary field to given value.

### HasSubsidiary

`func (o *CreateCustomerResponseCustomer) HasSubsidiary() bool`

HasSubsidiary returns a boolean if a field has been set.

### SetSubsidiaryNil

`func (o *CreateCustomerResponseCustomer) SetSubsidiaryNil(b bool)`

 SetSubsidiaryNil sets the value for Subsidiary to be an explicit nil

### UnsetSubsidiary
`func (o *CreateCustomerResponseCustomer) UnsetSubsidiary()`

UnsetSubsidiary ensures that no value is present for Subsidiary, not even an explicit nil
### GetId

`func (o *CreateCustomerResponseCustomer) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreateCustomerResponseCustomer) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreateCustomerResponseCustomer) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *CreateCustomerResponseCustomer) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CreateCustomerResponseCustomer) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CreateCustomerResponseCustomer) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CreateCustomerResponseCustomer) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CreateCustomerResponseCustomer) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CreateCustomerResponseCustomer) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


