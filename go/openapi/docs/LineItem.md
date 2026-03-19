# LineItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoiceId** | **string** | The id of the invoice that the line item is a part of | 
**RevenueBreakdown** | [**LineItemRevenueBreakdown**](LineItemRevenueBreakdown.md) |  | 

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



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


