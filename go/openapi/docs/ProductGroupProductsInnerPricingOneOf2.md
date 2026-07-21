# ProductGroupProductsInnerPricingOneOf2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Price** | **float32** |  | 
**SubscriptionCadence** | [**ProductGroupProductsInnerPricingOneOf2SubscriptionCadence**](ProductGroupProductsInnerPricingOneOf2SubscriptionCadence.md) |  | 
**Discount** | Pointer to [**NullableProductGroupProductsInnerPricingOneOfDiscount**](ProductGroupProductsInnerPricingOneOfDiscount.md) |  | [optional] 
**IssuedSeparately** | Pointer to **bool** | When true, this product is billed on its own invoice instead of being combined with other products in the same contract. Defaults to false. | [optional] 

## Methods

### NewProductGroupProductsInnerPricingOneOf2

`func NewProductGroupProductsInnerPricingOneOf2(type_ string, price float32, subscriptionCadence ProductGroupProductsInnerPricingOneOf2SubscriptionCadence, ) *ProductGroupProductsInnerPricingOneOf2`

NewProductGroupProductsInnerPricingOneOf2 instantiates a new ProductGroupProductsInnerPricingOneOf2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupProductsInnerPricingOneOf2WithDefaults

`func NewProductGroupProductsInnerPricingOneOf2WithDefaults() *ProductGroupProductsInnerPricingOneOf2`

NewProductGroupProductsInnerPricingOneOf2WithDefaults instantiates a new ProductGroupProductsInnerPricingOneOf2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ProductGroupProductsInnerPricingOneOf2) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProductGroupProductsInnerPricingOneOf2) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProductGroupProductsInnerPricingOneOf2) SetType(v string)`

SetType sets Type field to given value.


### GetPrice

`func (o *ProductGroupProductsInnerPricingOneOf2) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ProductGroupProductsInnerPricingOneOf2) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ProductGroupProductsInnerPricingOneOf2) SetPrice(v float32)`

SetPrice sets Price field to given value.


### GetSubscriptionCadence

`func (o *ProductGroupProductsInnerPricingOneOf2) GetSubscriptionCadence() ProductGroupProductsInnerPricingOneOf2SubscriptionCadence`

GetSubscriptionCadence returns the SubscriptionCadence field if non-nil, zero value otherwise.

### GetSubscriptionCadenceOk

`func (o *ProductGroupProductsInnerPricingOneOf2) GetSubscriptionCadenceOk() (*ProductGroupProductsInnerPricingOneOf2SubscriptionCadence, bool)`

GetSubscriptionCadenceOk returns a tuple with the SubscriptionCadence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionCadence

`func (o *ProductGroupProductsInnerPricingOneOf2) SetSubscriptionCadence(v ProductGroupProductsInnerPricingOneOf2SubscriptionCadence)`

SetSubscriptionCadence sets SubscriptionCadence field to given value.


### GetDiscount

`func (o *ProductGroupProductsInnerPricingOneOf2) GetDiscount() ProductGroupProductsInnerPricingOneOfDiscount`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *ProductGroupProductsInnerPricingOneOf2) GetDiscountOk() (*ProductGroupProductsInnerPricingOneOfDiscount, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *ProductGroupProductsInnerPricingOneOf2) SetDiscount(v ProductGroupProductsInnerPricingOneOfDiscount)`

SetDiscount sets Discount field to given value.

### HasDiscount

`func (o *ProductGroupProductsInnerPricingOneOf2) HasDiscount() bool`

HasDiscount returns a boolean if a field has been set.

### SetDiscountNil

`func (o *ProductGroupProductsInnerPricingOneOf2) SetDiscountNil(b bool)`

 SetDiscountNil sets the value for Discount to be an explicit nil

### UnsetDiscount
`func (o *ProductGroupProductsInnerPricingOneOf2) UnsetDiscount()`

UnsetDiscount ensures that no value is present for Discount, not even an explicit nil
### GetIssuedSeparately

`func (o *ProductGroupProductsInnerPricingOneOf2) GetIssuedSeparately() bool`

GetIssuedSeparately returns the IssuedSeparately field if non-nil, zero value otherwise.

### GetIssuedSeparatelyOk

`func (o *ProductGroupProductsInnerPricingOneOf2) GetIssuedSeparatelyOk() (*bool, bool)`

GetIssuedSeparatelyOk returns a tuple with the IssuedSeparately field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedSeparately

`func (o *ProductGroupProductsInnerPricingOneOf2) SetIssuedSeparately(v bool)`

SetIssuedSeparately sets IssuedSeparately field to given value.

### HasIssuedSeparately

`func (o *ProductGroupProductsInnerPricingOneOf2) HasIssuedSeparately() bool`

HasIssuedSeparately returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


