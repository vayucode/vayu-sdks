# ExternalCreditGrant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the credit grant. Used as the invoice line-item label when the grant is charged. | 
**CreditProductId** | **string** | ID of the credit product whose pool this grant funds. A usage product debits the same pool by listing this ID in consumesCreditProductIds. Discover IDs via GET /credit-products. | 
**BalanceKind** | **string** | What grantAmount represents: a monetary value in the contract currency (MONETARY) or a quantity of units (UNIT). | 
**GrantAmount** | **float32** | Amount granted into the pool per grant period — a currency amount when balanceKind is MONETARY (e.g. 500 &#x3D; $500), or a unit quantity when balanceKind is UNIT. | 
**Price** | Pointer to **NullableFloat32** | Amount charged to the customer for this grant, in the contract currency. Required when balanceKind is UNIT (a unit quantity has no currency value of its own) — e.g. grant 1000 units for a price of 20 ($20). Optional when balanceKind is MONETARY: if omitted, the grant is sold at face value (price equals grantAmount). | [optional] 
**Schedule** | **string** | How often the grant is applied: ONE_TIME grants once at contract start; RECURRING_MONTHLY, RECURRING_QUARTERLY and RECURRING_YEARLY re-grant each corresponding period. | 
**ExpirationDate** | Pointer to **NullableTime** | Explicit date after which unused granted credits expire. Only supported on ONE_TIME grants. For policy-based expiry on recurring grants, use expirationPolicy instead. | [optional] 
**ExpirationPolicy** | Pointer to **string** | Controls when unused credits from a grant period expire. AT_NEXT_GRANT: credits expire at the end of each billing period (default for recurring). NEVER: credits never expire (default for ONE_TIME). END_OF_INVOICE: credits expire at the end of the invoice period. END_OF_RENEWAL_PERIOD: credits expire at the end of the contract renewal period. END_OF_CONTRACT: credits expire when the contract ends. AT_NEXT_GRANT and END_OF_INVOICE are not available for ONE_TIME grants. | [optional] 
**ApplyAutomatically** | Pointer to **bool** | Whether granted credits are applied to usage automatically. Defaults to true. | [optional] 
**ExternalIntegrations** | Pointer to [**[]ProductExternalIntegration**](ProductExternalIntegration.md) | Links the subscription created for a recurring credit grant to matching products in V3 integrations (e.g. Paddle). The grant&#39;s inferred product is linked to each external integration after the contract is created, so invoices for the grant are exported to it. At most one entry per provider. Applies only to credit grants on a contract — ignored on credit top-ups. Currently only Paddle is supported. | [optional] 

## Methods

### NewExternalCreditGrant

`func NewExternalCreditGrant(name string, creditProductId string, balanceKind string, grantAmount float32, schedule string, ) *ExternalCreditGrant`

NewExternalCreditGrant instantiates a new ExternalCreditGrant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalCreditGrantWithDefaults

`func NewExternalCreditGrantWithDefaults() *ExternalCreditGrant`

NewExternalCreditGrantWithDefaults instantiates a new ExternalCreditGrant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ExternalCreditGrant) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExternalCreditGrant) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExternalCreditGrant) SetName(v string)`

SetName sets Name field to given value.


### GetCreditProductId

`func (o *ExternalCreditGrant) GetCreditProductId() string`

GetCreditProductId returns the CreditProductId field if non-nil, zero value otherwise.

### GetCreditProductIdOk

`func (o *ExternalCreditGrant) GetCreditProductIdOk() (*string, bool)`

GetCreditProductIdOk returns a tuple with the CreditProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditProductId

`func (o *ExternalCreditGrant) SetCreditProductId(v string)`

SetCreditProductId sets CreditProductId field to given value.


### GetBalanceKind

`func (o *ExternalCreditGrant) GetBalanceKind() string`

GetBalanceKind returns the BalanceKind field if non-nil, zero value otherwise.

### GetBalanceKindOk

`func (o *ExternalCreditGrant) GetBalanceKindOk() (*string, bool)`

GetBalanceKindOk returns a tuple with the BalanceKind field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceKind

`func (o *ExternalCreditGrant) SetBalanceKind(v string)`

SetBalanceKind sets BalanceKind field to given value.


### GetGrantAmount

`func (o *ExternalCreditGrant) GetGrantAmount() float32`

GetGrantAmount returns the GrantAmount field if non-nil, zero value otherwise.

### GetGrantAmountOk

`func (o *ExternalCreditGrant) GetGrantAmountOk() (*float32, bool)`

GetGrantAmountOk returns a tuple with the GrantAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantAmount

`func (o *ExternalCreditGrant) SetGrantAmount(v float32)`

SetGrantAmount sets GrantAmount field to given value.


### GetPrice

`func (o *ExternalCreditGrant) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ExternalCreditGrant) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ExternalCreditGrant) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ExternalCreditGrant) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### SetPriceNil

`func (o *ExternalCreditGrant) SetPriceNil(b bool)`

 SetPriceNil sets the value for Price to be an explicit nil

### UnsetPrice
`func (o *ExternalCreditGrant) UnsetPrice()`

UnsetPrice ensures that no value is present for Price, not even an explicit nil
### GetSchedule

`func (o *ExternalCreditGrant) GetSchedule() string`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *ExternalCreditGrant) GetScheduleOk() (*string, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *ExternalCreditGrant) SetSchedule(v string)`

SetSchedule sets Schedule field to given value.


### GetExpirationDate

`func (o *ExternalCreditGrant) GetExpirationDate() time.Time`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *ExternalCreditGrant) GetExpirationDateOk() (*time.Time, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *ExternalCreditGrant) SetExpirationDate(v time.Time)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *ExternalCreditGrant) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### SetExpirationDateNil

`func (o *ExternalCreditGrant) SetExpirationDateNil(b bool)`

 SetExpirationDateNil sets the value for ExpirationDate to be an explicit nil

### UnsetExpirationDate
`func (o *ExternalCreditGrant) UnsetExpirationDate()`

UnsetExpirationDate ensures that no value is present for ExpirationDate, not even an explicit nil
### GetExpirationPolicy

`func (o *ExternalCreditGrant) GetExpirationPolicy() string`

GetExpirationPolicy returns the ExpirationPolicy field if non-nil, zero value otherwise.

### GetExpirationPolicyOk

`func (o *ExternalCreditGrant) GetExpirationPolicyOk() (*string, bool)`

GetExpirationPolicyOk returns a tuple with the ExpirationPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationPolicy

`func (o *ExternalCreditGrant) SetExpirationPolicy(v string)`

SetExpirationPolicy sets ExpirationPolicy field to given value.

### HasExpirationPolicy

`func (o *ExternalCreditGrant) HasExpirationPolicy() bool`

HasExpirationPolicy returns a boolean if a field has been set.

### GetApplyAutomatically

`func (o *ExternalCreditGrant) GetApplyAutomatically() bool`

GetApplyAutomatically returns the ApplyAutomatically field if non-nil, zero value otherwise.

### GetApplyAutomaticallyOk

`func (o *ExternalCreditGrant) GetApplyAutomaticallyOk() (*bool, bool)`

GetApplyAutomaticallyOk returns a tuple with the ApplyAutomatically field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyAutomatically

`func (o *ExternalCreditGrant) SetApplyAutomatically(v bool)`

SetApplyAutomatically sets ApplyAutomatically field to given value.

### HasApplyAutomatically

`func (o *ExternalCreditGrant) HasApplyAutomatically() bool`

HasApplyAutomatically returns a boolean if a field has been set.

### GetExternalIntegrations

`func (o *ExternalCreditGrant) GetExternalIntegrations() []ProductExternalIntegration`

GetExternalIntegrations returns the ExternalIntegrations field if non-nil, zero value otherwise.

### GetExternalIntegrationsOk

`func (o *ExternalCreditGrant) GetExternalIntegrationsOk() (*[]ProductExternalIntegration, bool)`

GetExternalIntegrationsOk returns a tuple with the ExternalIntegrations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalIntegrations

`func (o *ExternalCreditGrant) SetExternalIntegrations(v []ProductExternalIntegration)`

SetExternalIntegrations sets ExternalIntegrations field to given value.

### HasExternalIntegrations

`func (o *ExternalCreditGrant) HasExternalIntegrations() bool`

HasExternalIntegrations returns a boolean if a field has been set.

### SetExternalIntegrationsNil

`func (o *ExternalCreditGrant) SetExternalIntegrationsNil(b bool)`

 SetExternalIntegrationsNil sets the value for ExternalIntegrations to be an explicit nil

### UnsetExternalIntegrations
`func (o *ExternalCreditGrant) UnsetExternalIntegrations()`

UnsetExternalIntegrations ensures that no value is present for ExternalIntegrations, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


