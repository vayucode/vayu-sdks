# ProductConsumption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProductId** | **string** | The id of the product. | 
**ProductName** | **string** | The name of the product. | 
**ProvisionedAmount** | **float32** | The amount of units provisioned to the customer. | 
**ConsumedAmount** | **float32** | The amount of units consumed by the customer. | 
**UsagePercentage** | **float32** | The percentage of the provisioned amount that has been consumed. | 
**HasAccess** | **bool** | Whether the customer has access to the product. | 
**RemainingAmount** | Pointer to **float32** | The amount of units remaining to consume. | [optional] 
**ExceededAmount** | Pointer to **float32** | The amount of units exceeded. | [optional] 

## Methods

### NewProductConsumption

`func NewProductConsumption(productId string, productName string, provisionedAmount float32, consumedAmount float32, usagePercentage float32, hasAccess bool, ) *ProductConsumption`

NewProductConsumption instantiates a new ProductConsumption object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductConsumptionWithDefaults

`func NewProductConsumptionWithDefaults() *ProductConsumption`

NewProductConsumptionWithDefaults instantiates a new ProductConsumption object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProductId

`func (o *ProductConsumption) GetProductId() string`

GetProductId returns the ProductId field if non-nil, zero value otherwise.

### GetProductIdOk

`func (o *ProductConsumption) GetProductIdOk() (*string, bool)`

GetProductIdOk returns a tuple with the ProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductId

`func (o *ProductConsumption) SetProductId(v string)`

SetProductId sets ProductId field to given value.


### GetProductName

`func (o *ProductConsumption) GetProductName() string`

GetProductName returns the ProductName field if non-nil, zero value otherwise.

### GetProductNameOk

`func (o *ProductConsumption) GetProductNameOk() (*string, bool)`

GetProductNameOk returns a tuple with the ProductName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductName

`func (o *ProductConsumption) SetProductName(v string)`

SetProductName sets ProductName field to given value.


### GetProvisionedAmount

`func (o *ProductConsumption) GetProvisionedAmount() float32`

GetProvisionedAmount returns the ProvisionedAmount field if non-nil, zero value otherwise.

### GetProvisionedAmountOk

`func (o *ProductConsumption) GetProvisionedAmountOk() (*float32, bool)`

GetProvisionedAmountOk returns a tuple with the ProvisionedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionedAmount

`func (o *ProductConsumption) SetProvisionedAmount(v float32)`

SetProvisionedAmount sets ProvisionedAmount field to given value.


### GetConsumedAmount

`func (o *ProductConsumption) GetConsumedAmount() float32`

GetConsumedAmount returns the ConsumedAmount field if non-nil, zero value otherwise.

### GetConsumedAmountOk

`func (o *ProductConsumption) GetConsumedAmountOk() (*float32, bool)`

GetConsumedAmountOk returns a tuple with the ConsumedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumedAmount

`func (o *ProductConsumption) SetConsumedAmount(v float32)`

SetConsumedAmount sets ConsumedAmount field to given value.


### GetUsagePercentage

`func (o *ProductConsumption) GetUsagePercentage() float32`

GetUsagePercentage returns the UsagePercentage field if non-nil, zero value otherwise.

### GetUsagePercentageOk

`func (o *ProductConsumption) GetUsagePercentageOk() (*float32, bool)`

GetUsagePercentageOk returns a tuple with the UsagePercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsagePercentage

`func (o *ProductConsumption) SetUsagePercentage(v float32)`

SetUsagePercentage sets UsagePercentage field to given value.


### GetHasAccess

`func (o *ProductConsumption) GetHasAccess() bool`

GetHasAccess returns the HasAccess field if non-nil, zero value otherwise.

### GetHasAccessOk

`func (o *ProductConsumption) GetHasAccessOk() (*bool, bool)`

GetHasAccessOk returns a tuple with the HasAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAccess

`func (o *ProductConsumption) SetHasAccess(v bool)`

SetHasAccess sets HasAccess field to given value.


### GetRemainingAmount

`func (o *ProductConsumption) GetRemainingAmount() float32`

GetRemainingAmount returns the RemainingAmount field if non-nil, zero value otherwise.

### GetRemainingAmountOk

`func (o *ProductConsumption) GetRemainingAmountOk() (*float32, bool)`

GetRemainingAmountOk returns a tuple with the RemainingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemainingAmount

`func (o *ProductConsumption) SetRemainingAmount(v float32)`

SetRemainingAmount sets RemainingAmount field to given value.

### HasRemainingAmount

`func (o *ProductConsumption) HasRemainingAmount() bool`

HasRemainingAmount returns a boolean if a field has been set.

### GetExceededAmount

`func (o *ProductConsumption) GetExceededAmount() float32`

GetExceededAmount returns the ExceededAmount field if non-nil, zero value otherwise.

### GetExceededAmountOk

`func (o *ProductConsumption) GetExceededAmountOk() (*float32, bool)`

GetExceededAmountOk returns a tuple with the ExceededAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceededAmount

`func (o *ProductConsumption) SetExceededAmount(v float32)`

SetExceededAmount sets ExceededAmount field to given value.

### HasExceededAmount

`func (o *ProductConsumption) HasExceededAmount() bool`

HasExceededAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


