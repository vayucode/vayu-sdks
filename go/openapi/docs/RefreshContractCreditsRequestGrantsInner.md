# RefreshContractCreditsRequestGrantsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GrantProductId** | **string** | The credit product (credit type) id identifying the grant to refresh. Every grant product on the contract for this credit product is set to non-prorated in the new phase. | 
**NewPrice** | Pointer to **float32** | The grant&#39;s new price in the refreshed phase. If omitted, the current price is kept. If this credit product matches more than one grant product on the contract, a price cannot be applied unambiguously and the request is rejected. | [optional] 

## Methods

### NewRefreshContractCreditsRequestGrantsInner

`func NewRefreshContractCreditsRequestGrantsInner(grantProductId string, ) *RefreshContractCreditsRequestGrantsInner`

NewRefreshContractCreditsRequestGrantsInner instantiates a new RefreshContractCreditsRequestGrantsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefreshContractCreditsRequestGrantsInnerWithDefaults

`func NewRefreshContractCreditsRequestGrantsInnerWithDefaults() *RefreshContractCreditsRequestGrantsInner`

NewRefreshContractCreditsRequestGrantsInnerWithDefaults instantiates a new RefreshContractCreditsRequestGrantsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGrantProductId

`func (o *RefreshContractCreditsRequestGrantsInner) GetGrantProductId() string`

GetGrantProductId returns the GrantProductId field if non-nil, zero value otherwise.

### GetGrantProductIdOk

`func (o *RefreshContractCreditsRequestGrantsInner) GetGrantProductIdOk() (*string, bool)`

GetGrantProductIdOk returns a tuple with the GrantProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantProductId

`func (o *RefreshContractCreditsRequestGrantsInner) SetGrantProductId(v string)`

SetGrantProductId sets GrantProductId field to given value.


### GetNewPrice

`func (o *RefreshContractCreditsRequestGrantsInner) GetNewPrice() float32`

GetNewPrice returns the NewPrice field if non-nil, zero value otherwise.

### GetNewPriceOk

`func (o *RefreshContractCreditsRequestGrantsInner) GetNewPriceOk() (*float32, bool)`

GetNewPriceOk returns a tuple with the NewPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewPrice

`func (o *RefreshContractCreditsRequestGrantsInner) SetNewPrice(v float32)`

SetNewPrice sets NewPrice field to given value.

### HasNewPrice

`func (o *RefreshContractCreditsRequestGrantsInner) HasNewPrice() bool`

HasNewPrice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


