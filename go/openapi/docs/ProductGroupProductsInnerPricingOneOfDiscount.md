# ProductGroupProductsInnerPricingOneOfDiscount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the discount. Will appear on the invoice. | 
**Type** | **string** | The type of discount — FIXED for a fixed amount, PERCENTAGE for a percentage-based discount. | 
**Amount** | **float32** | The discount amount. Interpreted as a currency amount for FIXED or a percentage for PERCENTAGE. | 
**Recurring** | Pointer to **int32** | The number of billing periods the discount applies for. If not provided, the discount recurs indefinitely. | [optional] 

## Methods

### NewProductGroupProductsInnerPricingOneOfDiscount

`func NewProductGroupProductsInnerPricingOneOfDiscount(name string, type_ string, amount float32, ) *ProductGroupProductsInnerPricingOneOfDiscount`

NewProductGroupProductsInnerPricingOneOfDiscount instantiates a new ProductGroupProductsInnerPricingOneOfDiscount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductGroupProductsInnerPricingOneOfDiscountWithDefaults

`func NewProductGroupProductsInnerPricingOneOfDiscountWithDefaults() *ProductGroupProductsInnerPricingOneOfDiscount`

NewProductGroupProductsInnerPricingOneOfDiscountWithDefaults instantiates a new ProductGroupProductsInnerPricingOneOfDiscount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) SetType(v string)`

SetType sets Type field to given value.


### GetAmount

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetRecurring

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) GetRecurring() int32`

GetRecurring returns the Recurring field if non-nil, zero value otherwise.

### GetRecurringOk

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) GetRecurringOk() (*int32, bool)`

GetRecurringOk returns a tuple with the Recurring field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurring

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) SetRecurring(v int32)`

SetRecurring sets Recurring field to given value.

### HasRecurring

`func (o *ProductGroupProductsInnerPricingOneOfDiscount) HasRecurring() bool`

HasRecurring returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


