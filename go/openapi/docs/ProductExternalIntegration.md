# ProductExternalIntegration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Provider** | **string** | The V3 integration provider to link the product to. Currently only Paddle is supported. | 
**ExternalId** | **string** | The id of the matching product in the external integration (e.g. the Paddle product id). The product must already exist in the connected integration; it is fetched and linked when the contract is created so that invoices for this product are exported to that integration. | 

## Methods

### NewProductExternalIntegration

`func NewProductExternalIntegration(provider string, externalId string, ) *ProductExternalIntegration`

NewProductExternalIntegration instantiates a new ProductExternalIntegration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductExternalIntegrationWithDefaults

`func NewProductExternalIntegrationWithDefaults() *ProductExternalIntegration`

NewProductExternalIntegrationWithDefaults instantiates a new ProductExternalIntegration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProvider

`func (o *ProductExternalIntegration) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *ProductExternalIntegration) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *ProductExternalIntegration) SetProvider(v string)`

SetProvider sets Provider field to given value.


### GetExternalId

`func (o *ProductExternalIntegration) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *ProductExternalIntegration) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *ProductExternalIntegration) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


