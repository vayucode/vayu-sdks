# CreditTopUpResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoiceId** | **string** | The ID of the one-off invoice created for the credit top-up. | 
**CustomerId** | **string** | The ID of the customer the invoice was created for. | 

## Methods

### NewCreditTopUpResponse

`func NewCreditTopUpResponse(invoiceId string, customerId string, ) *CreditTopUpResponse`

NewCreditTopUpResponse instantiates a new CreditTopUpResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditTopUpResponseWithDefaults

`func NewCreditTopUpResponseWithDefaults() *CreditTopUpResponse`

NewCreditTopUpResponseWithDefaults instantiates a new CreditTopUpResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoiceId

`func (o *CreditTopUpResponse) GetInvoiceId() string`

GetInvoiceId returns the InvoiceId field if non-nil, zero value otherwise.

### GetInvoiceIdOk

`func (o *CreditTopUpResponse) GetInvoiceIdOk() (*string, bool)`

GetInvoiceIdOk returns a tuple with the InvoiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceId

`func (o *CreditTopUpResponse) SetInvoiceId(v string)`

SetInvoiceId sets InvoiceId field to given value.


### GetCustomerId

`func (o *CreditTopUpResponse) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *CreditTopUpResponse) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *CreditTopUpResponse) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


