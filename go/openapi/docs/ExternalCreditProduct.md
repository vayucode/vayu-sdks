# ExternalCreditProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique ID of the credit product. Use it as a product creditGrant.creditProductId to fund its pool, or in a usage product&#39;s consumesCreditProductIds to debit it. | 
**Name** | **string** | Human-readable name of the credit product. | 

## Methods

### NewExternalCreditProduct

`func NewExternalCreditProduct(id string, name string, ) *ExternalCreditProduct`

NewExternalCreditProduct instantiates a new ExternalCreditProduct object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalCreditProductWithDefaults

`func NewExternalCreditProductWithDefaults() *ExternalCreditProduct`

NewExternalCreditProductWithDefaults instantiates a new ExternalCreditProduct object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ExternalCreditProduct) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ExternalCreditProduct) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ExternalCreditProduct) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *ExternalCreditProduct) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExternalCreditProduct) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExternalCreditProduct) SetName(v string)`

SetName sets Name field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


