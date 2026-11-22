# InvoiceIntegration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The external system the invoice was exported to | 
**Id** | **string** | The id of the invoice in the external system | 
**Name** | Pointer to **string** | The document number of the invoice in the external system, when available | [optional] 

## Methods

### NewInvoiceIntegration

`func NewInvoiceIntegration(type_ string, id string, ) *InvoiceIntegration`

NewInvoiceIntegration instantiates a new InvoiceIntegration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoiceIntegrationWithDefaults

`func NewInvoiceIntegrationWithDefaults() *InvoiceIntegration`

NewInvoiceIntegrationWithDefaults instantiates a new InvoiceIntegration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *InvoiceIntegration) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InvoiceIntegration) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InvoiceIntegration) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *InvoiceIntegration) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InvoiceIntegration) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InvoiceIntegration) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *InvoiceIntegration) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *InvoiceIntegration) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *InvoiceIntegration) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *InvoiceIntegration) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


