# GetProductConsumptionResponseProductConsumption

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

### NewGetProductConsumptionResponseProductConsumption

`func NewGetProductConsumptionResponseProductConsumption(productId string, productName string, provisionedAmount float32, consumedAmount float32, usagePercentage float32, hasAccess bool, ) *GetProductConsumptionResponseProductConsumption`

NewGetProductConsumptionResponseProductConsumption instantiates a new GetProductConsumptionResponseProductConsumption object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetProductConsumptionResponseProductConsumptionWithDefaults

`func NewGetProductConsumptionResponseProductConsumptionWithDefaults() *GetProductConsumptionResponseProductConsumption`

NewGetProductConsumptionResponseProductConsumptionWithDefaults instantiates a new GetProductConsumptionResponseProductConsumption object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProductId

`func (o *GetProductConsumptionResponseProductConsumption) GetProductId() string`

GetProductId returns the ProductId field if non-nil, zero value otherwise.

### GetProductIdOk

`func (o *GetProductConsumptionResponseProductConsumption) GetProductIdOk() (*string, bool)`

GetProductIdOk returns a tuple with the ProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductId

`func (o *GetProductConsumptionResponseProductConsumption) SetProductId(v string)`

SetProductId sets ProductId field to given value.


### GetProductName

`func (o *GetProductConsumptionResponseProductConsumption) GetProductName() string`

GetProductName returns the ProductName field if non-nil, zero value otherwise.

### GetProductNameOk

`func (o *GetProductConsumptionResponseProductConsumption) GetProductNameOk() (*string, bool)`

GetProductNameOk returns a tuple with the ProductName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductName

`func (o *GetProductConsumptionResponseProductConsumption) SetProductName(v string)`

SetProductName sets ProductName field to given value.


### GetProvisionedAmount

`func (o *GetProductConsumptionResponseProductConsumption) GetProvisionedAmount() float32`

GetProvisionedAmount returns the ProvisionedAmount field if non-nil, zero value otherwise.

### GetProvisionedAmountOk

`func (o *GetProductConsumptionResponseProductConsumption) GetProvisionedAmountOk() (*float32, bool)`

GetProvisionedAmountOk returns a tuple with the ProvisionedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionedAmount

`func (o *GetProductConsumptionResponseProductConsumption) SetProvisionedAmount(v float32)`

SetProvisionedAmount sets ProvisionedAmount field to given value.


### GetConsumedAmount

`func (o *GetProductConsumptionResponseProductConsumption) GetConsumedAmount() float32`

GetConsumedAmount returns the ConsumedAmount field if non-nil, zero value otherwise.

### GetConsumedAmountOk

`func (o *GetProductConsumptionResponseProductConsumption) GetConsumedAmountOk() (*float32, bool)`

GetConsumedAmountOk returns a tuple with the ConsumedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumedAmount

`func (o *GetProductConsumptionResponseProductConsumption) SetConsumedAmount(v float32)`

SetConsumedAmount sets ConsumedAmount field to given value.


### GetUsagePercentage

`func (o *GetProductConsumptionResponseProductConsumption) GetUsagePercentage() float32`

GetUsagePercentage returns the UsagePercentage field if non-nil, zero value otherwise.

### GetUsagePercentageOk

`func (o *GetProductConsumptionResponseProductConsumption) GetUsagePercentageOk() (*float32, bool)`

GetUsagePercentageOk returns a tuple with the UsagePercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsagePercentage

`func (o *GetProductConsumptionResponseProductConsumption) SetUsagePercentage(v float32)`

SetUsagePercentage sets UsagePercentage field to given value.


### GetHasAccess

`func (o *GetProductConsumptionResponseProductConsumption) GetHasAccess() bool`

GetHasAccess returns the HasAccess field if non-nil, zero value otherwise.

### GetHasAccessOk

`func (o *GetProductConsumptionResponseProductConsumption) GetHasAccessOk() (*bool, bool)`

GetHasAccessOk returns a tuple with the HasAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAccess

`func (o *GetProductConsumptionResponseProductConsumption) SetHasAccess(v bool)`

SetHasAccess sets HasAccess field to given value.


### GetRemainingAmount

`func (o *GetProductConsumptionResponseProductConsumption) GetRemainingAmount() float32`

GetRemainingAmount returns the RemainingAmount field if non-nil, zero value otherwise.

### GetRemainingAmountOk

`func (o *GetProductConsumptionResponseProductConsumption) GetRemainingAmountOk() (*float32, bool)`

GetRemainingAmountOk returns a tuple with the RemainingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemainingAmount

`func (o *GetProductConsumptionResponseProductConsumption) SetRemainingAmount(v float32)`

SetRemainingAmount sets RemainingAmount field to given value.

### HasRemainingAmount

`func (o *GetProductConsumptionResponseProductConsumption) HasRemainingAmount() bool`

HasRemainingAmount returns a boolean if a field has been set.

### GetExceededAmount

`func (o *GetProductConsumptionResponseProductConsumption) GetExceededAmount() float32`

GetExceededAmount returns the ExceededAmount field if non-nil, zero value otherwise.

### GetExceededAmountOk

`func (o *GetProductConsumptionResponseProductConsumption) GetExceededAmountOk() (*float32, bool)`

GetExceededAmountOk returns a tuple with the ExceededAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceededAmount

`func (o *GetProductConsumptionResponseProductConsumption) SetExceededAmount(v float32)`

SetExceededAmount sets ExceededAmount field to given value.

### HasExceededAmount

`func (o *GetProductConsumptionResponseProductConsumption) HasExceededAmount() bool`

HasExceededAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


