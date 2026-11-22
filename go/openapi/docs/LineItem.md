# LineItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoiceId** | **string** | The id of the invoice that the line item is a part of | 
**RevenueBreakdown** | [**LineItemRevenueBreakdown**](LineItemRevenueBreakdown.md) |  | 
**ProductName** | Pointer to **string** | The name of the product on the line | [optional] 
**Description** | Pointer to **string** | The description shown on the line | [optional] 
**ServicePeriod** | Pointer to [**LineItemServicePeriod**](LineItemServicePeriod.md) |  | [optional] 

## Methods

### NewLineItem

`func NewLineItem(invoiceId string, revenueBreakdown LineItemRevenueBreakdown, ) *LineItem`

NewLineItem instantiates a new LineItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLineItemWithDefaults

`func NewLineItemWithDefaults() *LineItem`

NewLineItemWithDefaults instantiates a new LineItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoiceId

`func (o *LineItem) GetInvoiceId() string`

GetInvoiceId returns the InvoiceId field if non-nil, zero value otherwise.

### GetInvoiceIdOk

`func (o *LineItem) GetInvoiceIdOk() (*string, bool)`

GetInvoiceIdOk returns a tuple with the InvoiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceId

`func (o *LineItem) SetInvoiceId(v string)`

SetInvoiceId sets InvoiceId field to given value.


### GetRevenueBreakdown

`func (o *LineItem) GetRevenueBreakdown() LineItemRevenueBreakdown`

GetRevenueBreakdown returns the RevenueBreakdown field if non-nil, zero value otherwise.

### GetRevenueBreakdownOk

`func (o *LineItem) GetRevenueBreakdownOk() (*LineItemRevenueBreakdown, bool)`

GetRevenueBreakdownOk returns a tuple with the RevenueBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBreakdown

`func (o *LineItem) SetRevenueBreakdown(v LineItemRevenueBreakdown)`

SetRevenueBreakdown sets RevenueBreakdown field to given value.


### GetProductName

`func (o *LineItem) GetProductName() string`

GetProductName returns the ProductName field if non-nil, zero value otherwise.

### GetProductNameOk

`func (o *LineItem) GetProductNameOk() (*string, bool)`

GetProductNameOk returns a tuple with the ProductName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductName

`func (o *LineItem) SetProductName(v string)`

SetProductName sets ProductName field to given value.

### HasProductName

`func (o *LineItem) HasProductName() bool`

HasProductName returns a boolean if a field has been set.

### GetDescription

`func (o *LineItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LineItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LineItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LineItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetServicePeriod

`func (o *LineItem) GetServicePeriod() LineItemServicePeriod`

GetServicePeriod returns the ServicePeriod field if non-nil, zero value otherwise.

### GetServicePeriodOk

`func (o *LineItem) GetServicePeriodOk() (*LineItemServicePeriod, bool)`

GetServicePeriodOk returns a tuple with the ServicePeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServicePeriod

`func (o *LineItem) SetServicePeriod(v LineItemServicePeriod)`

SetServicePeriod sets ServicePeriod field to given value.

### HasServicePeriod

`func (o *LineItem) HasServicePeriod() bool`

HasServicePeriod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


