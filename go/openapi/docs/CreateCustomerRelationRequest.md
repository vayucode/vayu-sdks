# CreateCustomerRelationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VayuParentCustomerId** | **string** | Identifier of the parent customer in Vayu. | 
**VayuChildCustomerId** | **string** | Identifier of the child customer in Vayu. | 

## Methods

### NewCreateCustomerRelationRequest

`func NewCreateCustomerRelationRequest(vayuParentCustomerId string, vayuChildCustomerId string, ) *CreateCustomerRelationRequest`

NewCreateCustomerRelationRequest instantiates a new CreateCustomerRelationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCustomerRelationRequestWithDefaults

`func NewCreateCustomerRelationRequestWithDefaults() *CreateCustomerRelationRequest`

NewCreateCustomerRelationRequestWithDefaults instantiates a new CreateCustomerRelationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVayuParentCustomerId

`func (o *CreateCustomerRelationRequest) GetVayuParentCustomerId() string`

GetVayuParentCustomerId returns the VayuParentCustomerId field if non-nil, zero value otherwise.

### GetVayuParentCustomerIdOk

`func (o *CreateCustomerRelationRequest) GetVayuParentCustomerIdOk() (*string, bool)`

GetVayuParentCustomerIdOk returns a tuple with the VayuParentCustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuParentCustomerId

`func (o *CreateCustomerRelationRequest) SetVayuParentCustomerId(v string)`

SetVayuParentCustomerId sets VayuParentCustomerId field to given value.


### GetVayuChildCustomerId

`func (o *CreateCustomerRelationRequest) GetVayuChildCustomerId() string`

GetVayuChildCustomerId returns the VayuChildCustomerId field if non-nil, zero value otherwise.

### GetVayuChildCustomerIdOk

`func (o *CreateCustomerRelationRequest) GetVayuChildCustomerIdOk() (*string, bool)`

GetVayuChildCustomerIdOk returns a tuple with the VayuChildCustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuChildCustomerId

`func (o *CreateCustomerRelationRequest) SetVayuChildCustomerId(v string)`

SetVayuChildCustomerId sets VayuChildCustomerId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


