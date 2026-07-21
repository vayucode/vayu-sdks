# RefreshContractCreditsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Grants** | Pointer to [**[]RefreshContractCreditsRequestGrantsInner**](RefreshContractCreditsRequestGrantsInner.md) | The credit grants to refresh. Each refreshed grant is set to non-prorated (and optionally re-priced), while every other credit grant on the contract is set to prorated. If omitted, all credit grants on the contract are refreshed (set to non-prorated) and none are prorated. | [optional] 

## Methods

### NewRefreshContractCreditsRequest

`func NewRefreshContractCreditsRequest() *RefreshContractCreditsRequest`

NewRefreshContractCreditsRequest instantiates a new RefreshContractCreditsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefreshContractCreditsRequestWithDefaults

`func NewRefreshContractCreditsRequestWithDefaults() *RefreshContractCreditsRequest`

NewRefreshContractCreditsRequestWithDefaults instantiates a new RefreshContractCreditsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGrants

`func (o *RefreshContractCreditsRequest) GetGrants() []RefreshContractCreditsRequestGrantsInner`

GetGrants returns the Grants field if non-nil, zero value otherwise.

### GetGrantsOk

`func (o *RefreshContractCreditsRequest) GetGrantsOk() (*[]RefreshContractCreditsRequestGrantsInner, bool)`

GetGrantsOk returns a tuple with the Grants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrants

`func (o *RefreshContractCreditsRequest) SetGrants(v []RefreshContractCreditsRequestGrantsInner)`

SetGrants sets Grants field to given value.

### HasGrants

`func (o *RefreshContractCreditsRequest) HasGrants() bool`

HasGrants returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


