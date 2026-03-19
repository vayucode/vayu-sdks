# CreateCustomerRequest

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

## Methods

### NewCreateCustomerRequest

`func NewCreateCustomerRequest(name string, ) *CreateCustomerRequest`

NewCreateCustomerRequest instantiates a new CreateCustomerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCustomerRequestWithDefaults

`func NewCreateCustomerRequestWithDefaults() *CreateCustomerRequest`

NewCreateCustomerRequestWithDefaults instantiates a new CreateCustomerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateCustomerRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateCustomerRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateCustomerRequest) SetName(v string)`

SetName sets Name field to given value.


### GetAliases

`func (o *CreateCustomerRequest) GetAliases() []string`

GetAliases returns the Aliases field if non-nil, zero value otherwise.

### GetAliasesOk

`func (o *CreateCustomerRequest) GetAliasesOk() (*[]string, bool)`

GetAliasesOk returns a tuple with the Aliases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliases

`func (o *CreateCustomerRequest) SetAliases(v []string)`

SetAliases sets Aliases field to given value.

### HasAliases

`func (o *CreateCustomerRequest) HasAliases() bool`

HasAliases returns a boolean if a field has been set.

### SetAliasesNil

`func (o *CreateCustomerRequest) SetAliasesNil(b bool)`

 SetAliasesNil sets the value for Aliases to be an explicit nil

### UnsetAliases
`func (o *CreateCustomerRequest) UnsetAliases()`

UnsetAliases ensures that no value is present for Aliases, not even an explicit nil
### GetContacts

`func (o *CreateCustomerRequest) GetContacts() []Contact`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *CreateCustomerRequest) GetContactsOk() (*[]Contact, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *CreateCustomerRequest) SetContacts(v []Contact)`

SetContacts sets Contacts field to given value.

### HasContacts

`func (o *CreateCustomerRequest) HasContacts() bool`

HasContacts returns a boolean if a field has been set.

### SetContactsNil

`func (o *CreateCustomerRequest) SetContactsNil(b bool)`

 SetContactsNil sets the value for Contacts to be an explicit nil

### UnsetContacts
`func (o *CreateCustomerRequest) UnsetContacts()`

UnsetContacts ensures that no value is present for Contacts, not even an explicit nil
### GetSource

`func (o *CreateCustomerRequest) GetSource() CustomerSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *CreateCustomerRequest) GetSourceOk() (*CustomerSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *CreateCustomerRequest) SetSource(v CustomerSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *CreateCustomerRequest) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *CreateCustomerRequest) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *CreateCustomerRequest) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetLegalName

`func (o *CreateCustomerRequest) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *CreateCustomerRequest) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *CreateCustomerRequest) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.

### HasLegalName

`func (o *CreateCustomerRequest) HasLegalName() bool`

HasLegalName returns a boolean if a field has been set.

### SetLegalNameNil

`func (o *CreateCustomerRequest) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *CreateCustomerRequest) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetTaxIds

`func (o *CreateCustomerRequest) GetTaxIds() []string`

GetTaxIds returns the TaxIds field if non-nil, zero value otherwise.

### GetTaxIdsOk

`func (o *CreateCustomerRequest) GetTaxIdsOk() (*[]string, bool)`

GetTaxIdsOk returns a tuple with the TaxIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxIds

`func (o *CreateCustomerRequest) SetTaxIds(v []string)`

SetTaxIds sets TaxIds field to given value.

### HasTaxIds

`func (o *CreateCustomerRequest) HasTaxIds() bool`

HasTaxIds returns a boolean if a field has been set.

### SetTaxIdsNil

`func (o *CreateCustomerRequest) SetTaxIdsNil(b bool)`

 SetTaxIdsNil sets the value for TaxIds to be an explicit nil

### UnsetTaxIds
`func (o *CreateCustomerRequest) UnsetTaxIds()`

UnsetTaxIds ensures that no value is present for TaxIds, not even an explicit nil
### GetTaxId

`func (o *CreateCustomerRequest) GetTaxId() string`

GetTaxId returns the TaxId field if non-nil, zero value otherwise.

### GetTaxIdOk

`func (o *CreateCustomerRequest) GetTaxIdOk() (*string, bool)`

GetTaxIdOk returns a tuple with the TaxId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxId

`func (o *CreateCustomerRequest) SetTaxId(v string)`

SetTaxId sets TaxId field to given value.

### HasTaxId

`func (o *CreateCustomerRequest) HasTaxId() bool`

HasTaxId returns a boolean if a field has been set.

### SetTaxIdNil

`func (o *CreateCustomerRequest) SetTaxIdNil(b bool)`

 SetTaxIdNil sets the value for TaxId to be an explicit nil

### UnsetTaxId
`func (o *CreateCustomerRequest) UnsetTaxId()`

UnsetTaxId ensures that no value is present for TaxId, not even an explicit nil
### GetCloudProviderSettings

`func (o *CreateCustomerRequest) GetCloudProviderSettings() CustomerCloudProviderSettings`

GetCloudProviderSettings returns the CloudProviderSettings field if non-nil, zero value otherwise.

### GetCloudProviderSettingsOk

`func (o *CreateCustomerRequest) GetCloudProviderSettingsOk() (*CustomerCloudProviderSettings, bool)`

GetCloudProviderSettingsOk returns a tuple with the CloudProviderSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudProviderSettings

`func (o *CreateCustomerRequest) SetCloudProviderSettings(v CustomerCloudProviderSettings)`

SetCloudProviderSettings sets CloudProviderSettings field to given value.

### HasCloudProviderSettings

`func (o *CreateCustomerRequest) HasCloudProviderSettings() bool`

HasCloudProviderSettings returns a boolean if a field has been set.

### SetCloudProviderSettingsNil

`func (o *CreateCustomerRequest) SetCloudProviderSettingsNil(b bool)`

 SetCloudProviderSettingsNil sets the value for CloudProviderSettings to be an explicit nil

### UnsetCloudProviderSettings
`func (o *CreateCustomerRequest) UnsetCloudProviderSettings()`

UnsetCloudProviderSettings ensures that no value is present for CloudProviderSettings, not even an explicit nil
### GetExternalId

`func (o *CreateCustomerRequest) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *CreateCustomerRequest) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *CreateCustomerRequest) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *CreateCustomerRequest) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetCustomerErpId

`func (o *CreateCustomerRequest) GetCustomerErpId() string`

GetCustomerErpId returns the CustomerErpId field if non-nil, zero value otherwise.

### GetCustomerErpIdOk

`func (o *CreateCustomerRequest) GetCustomerErpIdOk() (*string, bool)`

GetCustomerErpIdOk returns a tuple with the CustomerErpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerErpId

`func (o *CreateCustomerRequest) SetCustomerErpId(v string)`

SetCustomerErpId sets CustomerErpId field to given value.

### HasCustomerErpId

`func (o *CreateCustomerRequest) HasCustomerErpId() bool`

HasCustomerErpId returns a boolean if a field has been set.

### SetCustomerErpIdNil

`func (o *CreateCustomerRequest) SetCustomerErpIdNil(b bool)`

 SetCustomerErpIdNil sets the value for CustomerErpId to be an explicit nil

### UnsetCustomerErpId
`func (o *CreateCustomerRequest) UnsetCustomerErpId()`

UnsetCustomerErpId ensures that no value is present for CustomerErpId, not even an explicit nil
### GetAddress

`func (o *CreateCustomerRequest) GetAddress() Address`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CreateCustomerRequest) GetAddressOk() (*Address, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CreateCustomerRequest) SetAddress(v Address)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *CreateCustomerRequest) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### SetAddressNil

`func (o *CreateCustomerRequest) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *CreateCustomerRequest) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetSalesForceAccountId

`func (o *CreateCustomerRequest) GetSalesForceAccountId() string`

GetSalesForceAccountId returns the SalesForceAccountId field if non-nil, zero value otherwise.

### GetSalesForceAccountIdOk

`func (o *CreateCustomerRequest) GetSalesForceAccountIdOk() (*string, bool)`

GetSalesForceAccountIdOk returns a tuple with the SalesForceAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesForceAccountId

`func (o *CreateCustomerRequest) SetSalesForceAccountId(v string)`

SetSalesForceAccountId sets SalesForceAccountId field to given value.

### HasSalesForceAccountId

`func (o *CreateCustomerRequest) HasSalesForceAccountId() bool`

HasSalesForceAccountId returns a boolean if a field has been set.

### SetSalesForceAccountIdNil

`func (o *CreateCustomerRequest) SetSalesForceAccountIdNil(b bool)`

 SetSalesForceAccountIdNil sets the value for SalesForceAccountId to be an explicit nil

### UnsetSalesForceAccountId
`func (o *CreateCustomerRequest) UnsetSalesForceAccountId()`

UnsetSalesForceAccountId ensures that no value is present for SalesForceAccountId, not even an explicit nil
### GetDueDays

`func (o *CreateCustomerRequest) GetDueDays() string`

GetDueDays returns the DueDays field if non-nil, zero value otherwise.

### GetDueDaysOk

`func (o *CreateCustomerRequest) GetDueDaysOk() (*string, bool)`

GetDueDaysOk returns a tuple with the DueDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDays

`func (o *CreateCustomerRequest) SetDueDays(v string)`

SetDueDays sets DueDays field to given value.

### HasDueDays

`func (o *CreateCustomerRequest) HasDueDays() bool`

HasDueDays returns a boolean if a field has been set.

### SetDueDaysNil

`func (o *CreateCustomerRequest) SetDueDaysNil(b bool)`

 SetDueDaysNil sets the value for DueDays to be an explicit nil

### UnsetDueDays
`func (o *CreateCustomerRequest) UnsetDueDays()`

UnsetDueDays ensures that no value is present for DueDays, not even an explicit nil
### GetCurrency

`func (o *CreateCustomerRequest) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CreateCustomerRequest) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CreateCustomerRequest) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *CreateCustomerRequest) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### SetCurrencyNil

`func (o *CreateCustomerRequest) SetCurrencyNil(b bool)`

 SetCurrencyNil sets the value for Currency to be an explicit nil

### UnsetCurrency
`func (o *CreateCustomerRequest) UnsetCurrency()`

UnsetCurrency ensures that no value is present for Currency, not even an explicit nil
### GetCustomFields

`func (o *CreateCustomerRequest) GetCustomFields() []CustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *CreateCustomerRequest) GetCustomFieldsOk() (*[]CustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *CreateCustomerRequest) SetCustomFields(v []CustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *CreateCustomerRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *CreateCustomerRequest) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *CreateCustomerRequest) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetSubsidiary

`func (o *CreateCustomerRequest) GetSubsidiary() string`

GetSubsidiary returns the Subsidiary field if non-nil, zero value otherwise.

### GetSubsidiaryOk

`func (o *CreateCustomerRequest) GetSubsidiaryOk() (*string, bool)`

GetSubsidiaryOk returns a tuple with the Subsidiary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsidiary

`func (o *CreateCustomerRequest) SetSubsidiary(v string)`

SetSubsidiary sets Subsidiary field to given value.

### HasSubsidiary

`func (o *CreateCustomerRequest) HasSubsidiary() bool`

HasSubsidiary returns a boolean if a field has been set.

### SetSubsidiaryNil

`func (o *CreateCustomerRequest) SetSubsidiaryNil(b bool)`

 SetSubsidiaryNil sets the value for Subsidiary to be an explicit nil

### UnsetSubsidiary
`func (o *CreateCustomerRequest) UnsetSubsidiary()`

UnsetSubsidiary ensures that no value is present for Subsidiary, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


