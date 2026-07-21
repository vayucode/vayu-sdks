# CreditTopUpRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomerId** | **string** | The ID of the customer to be billed for the credit top-up. | 
**CreditGrant** | [**CreditTopUpRequestCreditGrant**](CreditTopUpRequestCreditGrant.md) |  | 

## Methods

### NewCreditTopUpRequest

`func NewCreditTopUpRequest(customerId string, creditGrant CreditTopUpRequestCreditGrant, ) *CreditTopUpRequest`

NewCreditTopUpRequest instantiates a new CreditTopUpRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditTopUpRequestWithDefaults

`func NewCreditTopUpRequestWithDefaults() *CreditTopUpRequest`

NewCreditTopUpRequestWithDefaults instantiates a new CreditTopUpRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerId

`func (o *CreditTopUpRequest) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *CreditTopUpRequest) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *CreditTopUpRequest) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.


### GetCreditGrant

`func (o *CreditTopUpRequest) GetCreditGrant() CreditTopUpRequestCreditGrant`

GetCreditGrant returns the CreditGrant field if non-nil, zero value otherwise.

### GetCreditGrantOk

`func (o *CreditTopUpRequest) GetCreditGrantOk() (*CreditTopUpRequestCreditGrant, bool)`

GetCreditGrantOk returns a tuple with the CreditGrant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditGrant

`func (o *CreditTopUpRequest) SetCreditGrant(v CreditTopUpRequestCreditGrant)`

SetCreditGrant sets CreditGrant field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


