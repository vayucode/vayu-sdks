# Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Email** | Pointer to **string** |  | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**Phone** | Pointer to **string** |  | [optional] 
**ReceiveInvoiceEmail** | Pointer to **bool** |  | [optional] 

## Methods

### NewContact

`func NewContact() *Contact`

NewContact instantiates a new Contact object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContactWithDefaults

`func NewContactWithDefaults() *Contact`

NewContactWithDefaults instantiates a new Contact object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Contact) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Contact) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Contact) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Contact) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *Contact) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Contact) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Contact) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Contact) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetTitle

`func (o *Contact) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Contact) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Contact) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Contact) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetPhone

`func (o *Contact) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *Contact) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *Contact) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *Contact) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetReceiveInvoiceEmail

`func (o *Contact) GetReceiveInvoiceEmail() bool`

GetReceiveInvoiceEmail returns the ReceiveInvoiceEmail field if non-nil, zero value otherwise.

### GetReceiveInvoiceEmailOk

`func (o *Contact) GetReceiveInvoiceEmailOk() (*bool, bool)`

GetReceiveInvoiceEmailOk returns a tuple with the ReceiveInvoiceEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiveInvoiceEmail

`func (o *Contact) SetReceiveInvoiceEmail(v bool)`

SetReceiveInvoiceEmail sets ReceiveInvoiceEmail field to given value.

### HasReceiveInvoiceEmail

`func (o *Contact) HasReceiveInvoiceEmail() bool`

HasReceiveInvoiceEmail returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


