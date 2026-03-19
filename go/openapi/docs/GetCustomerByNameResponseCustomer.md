# GetCustomerByNameResponseCustomer

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

### NewGetCustomerByNameResponseCustomer

`func NewGetCustomerByNameResponseCustomer(name string, id string, createdAt time.Time, updatedAt time.Time, ) *GetCustomerByNameResponseCustomer`

NewGetCustomerByNameResponseCustomer instantiates a new GetCustomerByNameResponseCustomer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetCustomerByNameResponseCustomerWithDefaults

`func NewGetCustomerByNameResponseCustomerWithDefaults() *GetCustomerByNameResponseCustomer`

NewGetCustomerByNameResponseCustomerWithDefaults instantiates a new GetCustomerByNameResponseCustomer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *GetCustomerByNameResponseCustomer) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetCustomerByNameResponseCustomer) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetCustomerByNameResponseCustomer) SetName(v string)`

SetName sets Name field to given value.


### GetAliases

`func (o *GetCustomerByNameResponseCustomer) GetAliases() []string`

GetAliases returns the Aliases field if non-nil, zero value otherwise.

### GetAliasesOk

`func (o *GetCustomerByNameResponseCustomer) GetAliasesOk() (*[]string, bool)`

GetAliasesOk returns a tuple with the Aliases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliases

`func (o *GetCustomerByNameResponseCustomer) SetAliases(v []string)`

SetAliases sets Aliases field to given value.

### HasAliases

`func (o *GetCustomerByNameResponseCustomer) HasAliases() bool`

HasAliases returns a boolean if a field has been set.

### SetAliasesNil

`func (o *GetCustomerByNameResponseCustomer) SetAliasesNil(b bool)`

 SetAliasesNil sets the value for Aliases to be an explicit nil

### UnsetAliases
`func (o *GetCustomerByNameResponseCustomer) UnsetAliases()`

UnsetAliases ensures that no value is present for Aliases, not even an explicit nil
### GetContacts

`func (o *GetCustomerByNameResponseCustomer) GetContacts() []Contact`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *GetCustomerByNameResponseCustomer) GetContactsOk() (*[]Contact, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *GetCustomerByNameResponseCustomer) SetContacts(v []Contact)`

SetContacts sets Contacts field to given value.

### HasContacts

`func (o *GetCustomerByNameResponseCustomer) HasContacts() bool`

HasContacts returns a boolean if a field has been set.

### SetContactsNil

`func (o *GetCustomerByNameResponseCustomer) SetContactsNil(b bool)`

 SetContactsNil sets the value for Contacts to be an explicit nil

### UnsetContacts
`func (o *GetCustomerByNameResponseCustomer) UnsetContacts()`

UnsetContacts ensures that no value is present for Contacts, not even an explicit nil
### GetSource

`func (o *GetCustomerByNameResponseCustomer) GetSource() CustomerSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *GetCustomerByNameResponseCustomer) GetSourceOk() (*CustomerSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *GetCustomerByNameResponseCustomer) SetSource(v CustomerSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *GetCustomerByNameResponseCustomer) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *GetCustomerByNameResponseCustomer) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *GetCustomerByNameResponseCustomer) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetLegalName

`func (o *GetCustomerByNameResponseCustomer) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *GetCustomerByNameResponseCustomer) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *GetCustomerByNameResponseCustomer) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.

### HasLegalName

`func (o *GetCustomerByNameResponseCustomer) HasLegalName() bool`

HasLegalName returns a boolean if a field has been set.

### SetLegalNameNil

`func (o *GetCustomerByNameResponseCustomer) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *GetCustomerByNameResponseCustomer) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetTaxIds

`func (o *GetCustomerByNameResponseCustomer) GetTaxIds() []string`

GetTaxIds returns the TaxIds field if non-nil, zero value otherwise.

### GetTaxIdsOk

`func (o *GetCustomerByNameResponseCustomer) GetTaxIdsOk() (*[]string, bool)`

GetTaxIdsOk returns a tuple with the TaxIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxIds

`func (o *GetCustomerByNameResponseCustomer) SetTaxIds(v []string)`

SetTaxIds sets TaxIds field to given value.

### HasTaxIds

`func (o *GetCustomerByNameResponseCustomer) HasTaxIds() bool`

HasTaxIds returns a boolean if a field has been set.

### SetTaxIdsNil

`func (o *GetCustomerByNameResponseCustomer) SetTaxIdsNil(b bool)`

 SetTaxIdsNil sets the value for TaxIds to be an explicit nil

### UnsetTaxIds
`func (o *GetCustomerByNameResponseCustomer) UnsetTaxIds()`

UnsetTaxIds ensures that no value is present for TaxIds, not even an explicit nil
### GetTaxId

`func (o *GetCustomerByNameResponseCustomer) GetTaxId() string`

GetTaxId returns the TaxId field if non-nil, zero value otherwise.

### GetTaxIdOk

`func (o *GetCustomerByNameResponseCustomer) GetTaxIdOk() (*string, bool)`

GetTaxIdOk returns a tuple with the TaxId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxId

`func (o *GetCustomerByNameResponseCustomer) SetTaxId(v string)`

SetTaxId sets TaxId field to given value.

### HasTaxId

`func (o *GetCustomerByNameResponseCustomer) HasTaxId() bool`

HasTaxId returns a boolean if a field has been set.

### SetTaxIdNil

`func (o *GetCustomerByNameResponseCustomer) SetTaxIdNil(b bool)`

 SetTaxIdNil sets the value for TaxId to be an explicit nil

### UnsetTaxId
`func (o *GetCustomerByNameResponseCustomer) UnsetTaxId()`

UnsetTaxId ensures that no value is present for TaxId, not even an explicit nil
### GetCloudProviderSettings

`func (o *GetCustomerByNameResponseCustomer) GetCloudProviderSettings() CustomerCloudProviderSettings`

GetCloudProviderSettings returns the CloudProviderSettings field if non-nil, zero value otherwise.

### GetCloudProviderSettingsOk

`func (o *GetCustomerByNameResponseCustomer) GetCloudProviderSettingsOk() (*CustomerCloudProviderSettings, bool)`

GetCloudProviderSettingsOk returns a tuple with the CloudProviderSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudProviderSettings

`func (o *GetCustomerByNameResponseCustomer) SetCloudProviderSettings(v CustomerCloudProviderSettings)`

SetCloudProviderSettings sets CloudProviderSettings field to given value.

### HasCloudProviderSettings

`func (o *GetCustomerByNameResponseCustomer) HasCloudProviderSettings() bool`

HasCloudProviderSettings returns a boolean if a field has been set.

### SetCloudProviderSettingsNil

`func (o *GetCustomerByNameResponseCustomer) SetCloudProviderSettingsNil(b bool)`

 SetCloudProviderSettingsNil sets the value for CloudProviderSettings to be an explicit nil

### UnsetCloudProviderSettings
`func (o *GetCustomerByNameResponseCustomer) UnsetCloudProviderSettings()`

UnsetCloudProviderSettings ensures that no value is present for CloudProviderSettings, not even an explicit nil
### GetExternalId

`func (o *GetCustomerByNameResponseCustomer) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *GetCustomerByNameResponseCustomer) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *GetCustomerByNameResponseCustomer) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *GetCustomerByNameResponseCustomer) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetCustomerErpId

`func (o *GetCustomerByNameResponseCustomer) GetCustomerErpId() string`

GetCustomerErpId returns the CustomerErpId field if non-nil, zero value otherwise.

### GetCustomerErpIdOk

`func (o *GetCustomerByNameResponseCustomer) GetCustomerErpIdOk() (*string, bool)`

GetCustomerErpIdOk returns a tuple with the CustomerErpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerErpId

`func (o *GetCustomerByNameResponseCustomer) SetCustomerErpId(v string)`

SetCustomerErpId sets CustomerErpId field to given value.

### HasCustomerErpId

`func (o *GetCustomerByNameResponseCustomer) HasCustomerErpId() bool`

HasCustomerErpId returns a boolean if a field has been set.

### SetCustomerErpIdNil

`func (o *GetCustomerByNameResponseCustomer) SetCustomerErpIdNil(b bool)`

 SetCustomerErpIdNil sets the value for CustomerErpId to be an explicit nil

### UnsetCustomerErpId
`func (o *GetCustomerByNameResponseCustomer) UnsetCustomerErpId()`

UnsetCustomerErpId ensures that no value is present for CustomerErpId, not even an explicit nil
### GetAddress

`func (o *GetCustomerByNameResponseCustomer) GetAddress() Address`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *GetCustomerByNameResponseCustomer) GetAddressOk() (*Address, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *GetCustomerByNameResponseCustomer) SetAddress(v Address)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *GetCustomerByNameResponseCustomer) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### SetAddressNil

`func (o *GetCustomerByNameResponseCustomer) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *GetCustomerByNameResponseCustomer) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetSalesForceAccountId

`func (o *GetCustomerByNameResponseCustomer) GetSalesForceAccountId() string`

GetSalesForceAccountId returns the SalesForceAccountId field if non-nil, zero value otherwise.

### GetSalesForceAccountIdOk

`func (o *GetCustomerByNameResponseCustomer) GetSalesForceAccountIdOk() (*string, bool)`

GetSalesForceAccountIdOk returns a tuple with the SalesForceAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceAccountId

`func (o *GetCustomerByNameResponseCustomer) SetSalesForceAccountId(v string)`

SetSalesForceAccountId sets SalesForceAccountId field to given value.

### HasSalesForceAccountId

`func (o *GetCustomerByNameResponseCustomer) HasSalesForceAccountId() bool`

HasSalesForceAccountId returns a boolean if a field has been set.

### SetSalesForceAccountIdNil

`func (o *GetCustomerByNameResponseCustomer) SetSalesForceAccountIdNil(b bool)`

 SetSalesForceAccountIdNil sets the value for SalesForceAccountId to be an explicit nil

### UnsetSalesForceAccountId
`func (o *GetCustomerByNameResponseCustomer) UnsetSalesForceAccountId()`

UnsetSalesForceAccountId ensures that no value is present for SalesForceAccountId, not even an explicit nil
### GetDueDays

`func (o *GetCustomerByNameResponseCustomer) GetDueDays() string`

GetDueDays returns the DueDays field if non-nil, zero value otherwise.

### GetDueDaysOk

`func (o *GetCustomerByNameResponseCustomer) GetDueDaysOk() (*string, bool)`

GetDueDaysOk returns a tuple with the DueDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDays

`func (o *GetCustomerByNameResponseCustomer) SetDueDays(v string)`

SetDueDays sets DueDays field to given value.

### HasDueDays

`func (o *GetCustomerByNameResponseCustomer) HasDueDays() bool`

HasDueDays returns a boolean if a field has been set.

### SetDueDaysNil

`func (o *GetCustomerByNameResponseCustomer) SetDueDaysNil(b bool)`

 SetDueDaysNil sets the value for DueDays to be an explicit nil

### UnsetDueDays
`func (o *GetCustomerByNameResponseCustomer) UnsetDueDays()`

UnsetDueDays ensures that no value is present for DueDays, not even an explicit nil
### GetCurrency

`func (o *GetCustomerByNameResponseCustomer) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *GetCustomerByNameResponseCustomer) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *GetCustomerByNameResponseCustomer) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *GetCustomerByNameResponseCustomer) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### SetCurrencyNil

`func (o *GetCustomerByNameResponseCustomer) SetCurrencyNil(b bool)`

 SetCurrencyNil sets the value for Currency to be an explicit nil

### UnsetCurrency
`func (o *GetCustomerByNameResponseCustomer) UnsetCurrency()`

UnsetCurrency ensures that no value is present for Currency, not even an explicit nil
### GetCustomFields

`func (o *GetCustomerByNameResponseCustomer) GetCustomFields() []CustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *GetCustomerByNameResponseCustomer) GetCustomFieldsOk() (*[]CustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *GetCustomerByNameResponseCustomer) SetCustomFields(v []CustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *GetCustomerByNameResponseCustomer) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *GetCustomerByNameResponseCustomer) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *GetCustomerByNameResponseCustomer) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetSubsidiary

`func (o *GetCustomerByNameResponseCustomer) GetSubsidiary() string`

GetSubsidiary returns the Subsidiary field if non-nil, zero value otherwise.

### GetSubsidiaryOk

`func (o *GetCustomerByNameResponseCustomer) GetSubsidiaryOk() (*string, bool)`

GetSubsidiaryOk returns a tuple with the Subsidiary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsidiary

`func (o *GetCustomerByNameResponseCustomer) SetSubsidiary(v string)`

SetSubsidiary sets Subsidiary field to given value.

### HasSubsidiary

`func (o *GetCustomerByNameResponseCustomer) HasSubsidiary() bool`

HasSubsidiary returns a boolean if a field has been set.

### SetSubsidiaryNil

`func (o *GetCustomerByNameResponseCustomer) SetSubsidiaryNil(b bool)`

 SetSubsidiaryNil sets the value for Subsidiary to be an explicit nil

### UnsetSubsidiary
`func (o *GetCustomerByNameResponseCustomer) UnsetSubsidiary()`

UnsetSubsidiary ensures that no value is present for Subsidiary, not even an explicit nil
### GetId

`func (o *GetCustomerByNameResponseCustomer) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetCustomerByNameResponseCustomer) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetCustomerByNameResponseCustomer) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *GetCustomerByNameResponseCustomer) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetCustomerByNameResponseCustomer) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetCustomerByNameResponseCustomer) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *GetCustomerByNameResponseCustomer) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetCustomerByNameResponseCustomer) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetCustomerByNameResponseCustomer) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


