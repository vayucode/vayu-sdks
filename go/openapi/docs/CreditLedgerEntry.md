# CreditLedgerEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**Type** | [**BillingCycleStatus**](BillingCycleStatus.md) |  | 
**Amount** | **float32** |  | 
**BalanceAfterEntry** | **float32** |  | 
**InvoiceId** | Pointer to **string** |  | [optional] 
**ErpId** | Pointer to **string** |  | [optional] 
**ContractId** | Pointer to **string** |  | [optional] 
**IntegrationEntities** | [**[]IntegrationEntity**](IntegrationEntity.md) |  | 

## Methods

### NewCreditLedgerEntry

`func NewCreditLedgerEntry(id string, createdAt time.Time, type_ BillingCycleStatus, amount float32, balanceAfterEntry float32, integrationEntities []IntegrationEntity, ) *CreditLedgerEntry`

NewCreditLedgerEntry instantiates a new CreditLedgerEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditLedgerEntryWithDefaults

`func NewCreditLedgerEntryWithDefaults() *CreditLedgerEntry`

NewCreditLedgerEntryWithDefaults instantiates a new CreditLedgerEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CreditLedgerEntry) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreditLedgerEntry) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreditLedgerEntry) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *CreditLedgerEntry) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CreditLedgerEntry) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CreditLedgerEntry) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetType

`func (o *CreditLedgerEntry) GetType() BillingCycleStatus`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreditLedgerEntry) GetTypeOk() (*BillingCycleStatus, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreditLedgerEntry) SetType(v BillingCycleStatus)`

SetType sets Type field to given value.


### GetAmount

`func (o *CreditLedgerEntry) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreditLedgerEntry) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreditLedgerEntry) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetBalanceAfterEntry

`func (o *CreditLedgerEntry) GetBalanceAfterEntry() float32`

GetBalanceAfterEntry returns the BalanceAfterEntry field if non-nil, zero value otherwise.

### GetBalanceAfterEntryOk

`func (o *CreditLedgerEntry) GetBalanceAfterEntryOk() (*float32, bool)`

GetBalanceAfterEntryOk returns a tuple with the BalanceAfterEntry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceAfterEntry

`func (o *CreditLedgerEntry) SetBalanceAfterEntry(v float32)`

SetBalanceAfterEntry sets BalanceAfterEntry field to given value.


### GetInvoiceId

`func (o *CreditLedgerEntry) GetInvoiceId() string`

GetInvoiceId returns the InvoiceId field if non-nil, zero value otherwise.

### GetInvoiceIdOk

`func (o *CreditLedgerEntry) GetInvoiceIdOk() (*string, bool)`

GetInvoiceIdOk returns a tuple with the InvoiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceId

`func (o *CreditLedgerEntry) SetInvoiceId(v string)`

SetInvoiceId sets InvoiceId field to given value.

### HasInvoiceId

`func (o *CreditLedgerEntry) HasInvoiceId() bool`

HasInvoiceId returns a boolean if a field has been set.

### GetErpId

`func (o *CreditLedgerEntry) GetErpId() string`

GetErpId returns the ErpId field if non-nil, zero value otherwise.

### GetErpIdOk

`func (o *CreditLedgerEntry) GetErpIdOk() (*string, bool)`

GetErpIdOk returns a tuple with the ErpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErpId

`func (o *CreditLedgerEntry) SetErpId(v string)`

SetErpId sets ErpId field to given value.

### HasErpId

`func (o *CreditLedgerEntry) HasErpId() bool`

HasErpId returns a boolean if a field has been set.

### GetContractId

`func (o *CreditLedgerEntry) GetContractId() string`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *CreditLedgerEntry) GetContractIdOk() (*string, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *CreditLedgerEntry) SetContractId(v string)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *CreditLedgerEntry) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetIntegrationEntities

`func (o *CreditLedgerEntry) GetIntegrationEntities() []IntegrationEntity`

GetIntegrationEntities returns the IntegrationEntities field if non-nil, zero value otherwise.

### GetIntegrationEntitiesOk

`func (o *CreditLedgerEntry) GetIntegrationEntitiesOk() (*[]IntegrationEntity, bool)`

GetIntegrationEntitiesOk returns a tuple with the IntegrationEntities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationEntities

`func (o *CreditLedgerEntry) SetIntegrationEntities(v []IntegrationEntity)`

SetIntegrationEntities sets IntegrationEntities field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


