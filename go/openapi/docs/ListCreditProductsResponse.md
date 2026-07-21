# ListCreditProductsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditProducts** | [**[]ExternalCreditProduct**](ExternalCreditProduct.md) | The credit products defined in your account. | 

## Methods

### NewListCreditProductsResponse

`func NewListCreditProductsResponse(creditProducts []ExternalCreditProduct, ) *ListCreditProductsResponse`

NewListCreditProductsResponse instantiates a new ListCreditProductsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListCreditProductsResponseWithDefaults

`func NewListCreditProductsResponseWithDefaults() *ListCreditProductsResponse`

NewListCreditProductsResponseWithDefaults instantiates a new ListCreditProductsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditProducts

`func (o *ListCreditProductsResponse) GetCreditProducts() []ExternalCreditProduct`

GetCreditProducts returns the CreditProducts field if non-nil, zero value otherwise.

### GetCreditProductsOk

`func (o *ListCreditProductsResponse) GetCreditProductsOk() (*[]ExternalCreditProduct, bool)`

GetCreditProductsOk returns a tuple with the CreditProducts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditProducts

`func (o *ListCreditProductsResponse) SetCreditProducts(v []ExternalCreditProduct)`

SetCreditProducts sets CreditProducts field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


