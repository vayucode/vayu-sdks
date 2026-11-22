# UpdateInvoiceIssueDateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssuedAt** | **time.Time** | The new issue date, as an ISO 8601 date-time. A date without a time is read as midnight UTC. | 

## Methods

### NewUpdateInvoiceIssueDateRequest

`func NewUpdateInvoiceIssueDateRequest(issuedAt time.Time, ) *UpdateInvoiceIssueDateRequest`

NewUpdateInvoiceIssueDateRequest instantiates a new UpdateInvoiceIssueDateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateInvoiceIssueDateRequestWithDefaults

`func NewUpdateInvoiceIssueDateRequestWithDefaults() *UpdateInvoiceIssueDateRequest`

NewUpdateInvoiceIssueDateRequestWithDefaults instantiates a new UpdateInvoiceIssueDateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIssuedAt

`func (o *UpdateInvoiceIssueDateRequest) GetIssuedAt() time.Time`

GetIssuedAt returns the IssuedAt field if non-nil, zero value otherwise.

### GetIssuedAtOk

`func (o *UpdateInvoiceIssueDateRequest) GetIssuedAtOk() (*time.Time, bool)`

GetIssuedAtOk returns a tuple with the IssuedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedAt

`func (o *UpdateInvoiceIssueDateRequest) SetIssuedAt(v time.Time)`

SetIssuedAt sets IssuedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


