# UpdateCustomerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the customer | [optional] 
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

## Methods

### NewUpdateCustomerRequest

`func NewUpdateCustomerRequest() *UpdateCustomerRequest`

NewUpdateCustomerRequest instantiates a new UpdateCustomerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateCustomerRequestWithDefaults

`func NewUpdateCustomerRequestWithDefaults() *UpdateCustomerRequest`

NewUpdateCustomerRequestWithDefaults instantiates a new UpdateCustomerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UpdateCustomerRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateCustomerRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateCustomerRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateCustomerRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAliases

`func (o *UpdateCustomerRequest) GetAliases() []string`

GetAliases returns the Aliases field if non-nil, zero value otherwise.

### GetAliasesOk

`func (o *UpdateCustomerRequest) GetAliasesOk() (*[]string, bool)`

GetAliasesOk returns a tuple with the Aliases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliases

`func (o *UpdateCustomerRequest) SetAliases(v []string)`

SetAliases sets Aliases field to given value.

### HasAliases

`func (o *UpdateCustomerRequest) HasAliases() bool`

HasAliases returns a boolean if a field has been set.

### SetAliasesNil

`func (o *UpdateCustomerRequest) SetAliasesNil(b bool)`

 SetAliasesNil sets the value for Aliases to be an explicit nil

### UnsetAliases
`func (o *UpdateCustomerRequest) UnsetAliases()`

UnsetAliases ensures that no value is present for Aliases, not even an explicit nil
### GetContacts

`func (o *UpdateCustomerRequest) GetContacts() []Contact`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *UpdateCustomerRequest) GetContactsOk() (*[]Contact, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *UpdateCustomerRequest) SetContacts(v []Contact)`

SetContacts sets Contacts field to given value.

### HasContacts

`func (o *UpdateCustomerRequest) HasContacts() bool`

HasContacts returns a boolean if a field has been set.

### SetContactsNil

`func (o *UpdateCustomerRequest) SetContactsNil(b bool)`

 SetContactsNil sets the value for Contacts to be an explicit nil

### UnsetContacts
`func (o *UpdateCustomerRequest) UnsetContacts()`

UnsetContacts ensures that no value is present for Contacts, not even an explicit nil
### GetSource

`func (o *UpdateCustomerRequest) GetSource() CustomerSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *UpdateCustomerRequest) GetSourceOk() (*CustomerSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *UpdateCustomerRequest) SetSource(v CustomerSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *UpdateCustomerRequest) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *UpdateCustomerRequest) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *UpdateCustomerRequest) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetLegalName

`func (o *UpdateCustomerRequest) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *UpdateCustomerRequest) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *UpdateCustomerRequest) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.

### HasLegalName

`func (o *UpdateCustomerRequest) HasLegalName() bool`

HasLegalName returns a boolean if a field has been set.

### SetLegalNameNil

`func (o *UpdateCustomerRequest) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *UpdateCustomerRequest) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetTaxIds

`func (o *UpdateCustomerRequest) GetTaxIds() []string`

GetTaxIds returns the TaxIds field if non-nil, zero value otherwise.

### GetTaxIdsOk

`func (o *UpdateCustomerRequest) GetTaxIdsOk() (*[]string, bool)`

GetTaxIdsOk returns a tuple with the TaxIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxIds

`func (o *UpdateCustomerRequest) SetTaxIds(v []string)`

SetTaxIds sets TaxIds field to given value.

### HasTaxIds

`func (o *UpdateCustomerRequest) HasTaxIds() bool`

HasTaxIds returns a boolean if a field has been set.

### SetTaxIdsNil

`func (o *UpdateCustomerRequest) SetTaxIdsNil(b bool)`

 SetTaxIdsNil sets the value for TaxIds to be an explicit nil

### UnsetTaxIds
`func (o *UpdateCustomerRequest) UnsetTaxIds()`

UnsetTaxIds ensures that no value is present for TaxIds, not even an explicit nil
### GetTaxId

`func (o *UpdateCustomerRequest) GetTaxId() string`

GetTaxId returns the TaxId field if non-nil, zero value otherwise.

### GetTaxIdOk

`func (o *UpdateCustomerRequest) GetTaxIdOk() (*string, bool)`

GetTaxIdOk returns a tuple with the TaxId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxId

`func (o *UpdateCustomerRequest) SetTaxId(v string)`

SetTaxId sets TaxId field to given value.

### HasTaxId

`func (o *UpdateCustomerRequest) HasTaxId() bool`

HasTaxId returns a boolean if a field has been set.

### SetTaxIdNil

`func (o *UpdateCustomerRequest) SetTaxIdNil(b bool)`

 SetTaxIdNil sets the value for TaxId to be an explicit nil

### UnsetTaxId
`func (o *UpdateCustomerRequest) UnsetTaxId()`

UnsetTaxId ensures that no value is present for TaxId, not even an explicit nil
### GetCloudProviderSettings

`func (o *UpdateCustomerRequest) GetCloudProviderSettings() CustomerCloudProviderSettings`

GetCloudProviderSettings returns the CloudProviderSettings field if non-nil, zero value otherwise.

### GetCloudProviderSettingsOk

`func (o *UpdateCustomerRequest) GetCloudProviderSettingsOk() (*CustomerCloudProviderSettings, bool)`

GetCloudProviderSettingsOk returns a tuple with the CloudProviderSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudProviderSettings

`func (o *UpdateCustomerRequest) SetCloudProviderSettings(v CustomerCloudProviderSettings)`

SetCloudProviderSettings sets CloudProviderSettings field to given value.

### HasCloudProviderSettings

`func (o *UpdateCustomerRequest) HasCloudProviderSettings() bool`

HasCloudProviderSettings returns a boolean if a field has been set.

### SetCloudProviderSettingsNil

`func (o *UpdateCustomerRequest) SetCloudProviderSettingsNil(b bool)`

 SetCloudProviderSettingsNil sets the value for CloudProviderSettings to be an explicit nil

### UnsetCloudProviderSettings
`func (o *UpdateCustomerRequest) UnsetCloudProviderSettings()`

UnsetCloudProviderSettings ensures that no value is present for CloudProviderSettings, not even an explicit nil
### GetExternalId

`func (o *UpdateCustomerRequest) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *UpdateCustomerRequest) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *UpdateCustomerRequest) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *UpdateCustomerRequest) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetCustomerErpId

`func (o *UpdateCustomerRequest) GetCustomerErpId() string`

GetCustomerErpId returns the CustomerErpId field if non-nil, zero value otherwise.

### GetCustomerErpIdOk

`func (o *UpdateCustomerRequest) GetCustomerErpIdOk() (*string, bool)`

GetCustomerErpIdOk returns a tuple with the CustomerErpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerErpId

`func (o *UpdateCustomerRequest) SetCustomerErpId(v string)`

SetCustomerErpId sets CustomerErpId field to given value.

### HasCustomerErpId

`func (o *UpdateCustomerRequest) HasCustomerErpId() bool`

HasCustomerErpId returns a boolean if a field has been set.

### SetCustomerErpIdNil

`func (o *UpdateCustomerRequest) SetCustomerErpIdNil(b bool)`

 SetCustomerErpIdNil sets the value for CustomerErpId to be an explicit nil

### UnsetCustomerErpId
`func (o *UpdateCustomerRequest) UnsetCustomerErpId()`

UnsetCustomerErpId ensures that no value is present for CustomerErpId, not even an explicit nil
### GetAddress

`func (o *UpdateCustomerRequest) GetAddress() Address`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *UpdateCustomerRequest) GetAddressOk() (*Address, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *UpdateCustomerRequest) SetAddress(v Address)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *UpdateCustomerRequest) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### SetAddressNil

`func (o *UpdateCustomerRequest) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *UpdateCustomerRequest) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetSalesForceAccountId

`func (o *UpdateCustomerRequest) GetSalesForceAccountId() string`

GetSalesForceAccountId returns the SalesForceAccountId field if non-nil, zero value otherwise.

### GetSalesForceAccountIdOk

`func (o *UpdateCustomerRequest) GetSalesForceAccountIdOk() (*string, bool)`

GetSalesForceAccountIdOk returns a tuple with the SalesForceAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceAccountId

`func (o *UpdateCustomerRequest) SetSalesForceAccountId(v string)`

SetSalesForceAccountId sets SalesForceAccountId field to given value.

### HasSalesForceAccountId

`func (o *UpdateCustomerRequest) HasSalesForceAccountId() bool`

HasSalesForceAccountId returns a boolean if a field has been set.

### SetSalesForceAccountIdNil

`func (o *UpdateCustomerRequest) SetSalesForceAccountIdNil(b bool)`

 SetSalesForceAccountIdNil sets the value for SalesForceAccountId to be an explicit nil

### UnsetSalesForceAccountId
`func (o *UpdateCustomerRequest) UnsetSalesForceAccountId()`

UnsetSalesForceAccountId ensures that no value is present for SalesForceAccountId, not even an explicit nil
### GetDueDays

`func (o *UpdateCustomerRequest) GetDueDays() string`

GetDueDays returns the DueDays field if non-nil, zero value otherwise.

### GetDueDaysOk

`func (o *UpdateCustomerRequest) GetDueDaysOk() (*string, bool)`

GetDueDaysOk returns a tuple with the DueDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDays

`func (o *UpdateCustomerRequest) SetDueDays(v string)`

SetDueDays sets DueDays field to given value.

### HasDueDays

`func (o *UpdateCustomerRequest) HasDueDays() bool`

HasDueDays returns a boolean if a field has been set.

### SetDueDaysNil

`func (o *UpdateCustomerRequest) SetDueDaysNil(b bool)`

 SetDueDaysNil sets the value for DueDays to be an explicit nil

### UnsetDueDays
`func (o *UpdateCustomerRequest) UnsetDueDays()`

UnsetDueDays ensures that no value is present for DueDays, not even an explicit nil
### GetCurrency

`func (o *UpdateCustomerRequest) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *UpdateCustomerRequest) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *UpdateCustomerRequest) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *UpdateCustomerRequest) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### SetCurrencyNil

`func (o *UpdateCustomerRequest) SetCurrencyNil(b bool)`

 SetCurrencyNil sets the value for Currency to be an explicit nil

### UnsetCurrency
`func (o *UpdateCustomerRequest) UnsetCurrency()`

UnsetCurrency ensures that no value is present for Currency, not even an explicit nil
### GetCustomFields

`func (o *UpdateCustomerRequest) GetCustomFields() []CustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *UpdateCustomerRequest) GetCustomFieldsOk() (*[]CustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *UpdateCustomerRequest) SetCustomFields(v []CustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *UpdateCustomerRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *UpdateCustomerRequest) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *UpdateCustomerRequest) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetSubsidiary

`func (o *UpdateCustomerRequest) GetSubsidiary() string`

GetSubsidiary returns the Subsidiary field if non-nil, zero value otherwise.

### GetSubsidiaryOk

`func (o *UpdateCustomerRequest) GetSubsidiaryOk() (*string, bool)`

GetSubsidiaryOk returns a tuple with the Subsidiary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsidiary

`func (o *UpdateCustomerRequest) SetSubsidiary(v string)`

SetSubsidiary sets Subsidiary field to given value.

### HasSubsidiary

`func (o *UpdateCustomerRequest) HasSubsidiary() bool`

HasSubsidiary returns a boolean if a field has been set.

### SetSubsidiaryNil

`func (o *UpdateCustomerRequest) SetSubsidiaryNil(b bool)`

 SetSubsidiaryNil sets the value for Subsidiary to be an explicit nil

### UnsetSubsidiary
`func (o *UpdateCustomerRequest) UnsetSubsidiary()`

UnsetSubsidiary ensures that no value is present for Subsidiary, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


