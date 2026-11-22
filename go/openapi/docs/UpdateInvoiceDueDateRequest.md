# UpdateInvoiceDueDateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DueDate** | **time.Time** | The new due date, as an ISO 8601 date-time. A date without a time is read as midnight UTC. | 

## Methods

### NewUpdateInvoiceDueDateRequest

`func NewUpdateInvoiceDueDateRequest(dueDate time.Time, ) *UpdateInvoiceDueDateRequest`

NewUpdateInvoiceDueDateRequest instantiates a new UpdateInvoiceDueDateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateInvoiceDueDateRequestWithDefaults

`func NewUpdateInvoiceDueDateRequestWithDefaults() *UpdateInvoiceDueDateRequest`

NewUpdateInvoiceDueDateRequestWithDefaults instantiates a new UpdateInvoiceDueDateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDueDate

`func (o *UpdateInvoiceDueDateRequest) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *UpdateInvoiceDueDateRequest) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *UpdateInvoiceDueDateRequest) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


