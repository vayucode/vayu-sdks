# CreateCustomerRelationResponseCustomerRelation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VayuParentCustomerId** | **string** | Identifier of the parent customer in Vayu. | 
**VayuChildCustomerId** | **string** | Identifier of the child customer in Vayu. | 
**Id** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewCreateCustomerRelationResponseCustomerRelation

`func NewCreateCustomerRelationResponseCustomerRelation(vayuParentCustomerId string, vayuChildCustomerId string, id string, createdAt time.Time, updatedAt time.Time, ) *CreateCustomerRelationResponseCustomerRelation`

NewCreateCustomerRelationResponseCustomerRelation instantiates a new CreateCustomerRelationResponseCustomerRelation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCustomerRelationResponseCustomerRelationWithDefaults

`func NewCreateCustomerRelationResponseCustomerRelationWithDefaults() *CreateCustomerRelationResponseCustomerRelation`

NewCreateCustomerRelationResponseCustomerRelationWithDefaults instantiates a new CreateCustomerRelationResponseCustomerRelation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVayuParentCustomerId

`func (o *CreateCustomerRelationResponseCustomerRelation) GetVayuParentCustomerId() string`

GetVayuParentCustomerId returns the VayuParentCustomerId field if non-nil, zero value otherwise.

### GetVayuParentCustomerIdOk

`func (o *CreateCustomerRelationResponseCustomerRelation) GetVayuParentCustomerIdOk() (*string, bool)`

GetVayuParentCustomerIdOk returns a tuple with the VayuParentCustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuParentCustomerId

`func (o *CreateCustomerRelationResponseCustomerRelation) SetVayuParentCustomerId(v string)`

SetVayuParentCustomerId sets VayuParentCustomerId field to given value.


### GetVayuChildCustomerId

`func (o *CreateCustomerRelationResponseCustomerRelation) GetVayuChildCustomerId() string`

GetVayuChildCustomerId returns the VayuChildCustomerId field if non-nil, zero value otherwise.

### GetVayuChildCustomerIdOk

`func (o *CreateCustomerRelationResponseCustomerRelation) GetVayuChildCustomerIdOk() (*string, bool)`

GetVayuChildCustomerIdOk returns a tuple with the VayuChildCustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVayuChildCustomerId

`func (o *CreateCustomerRelationResponseCustomerRelation) SetVayuChildCustomerId(v string)`

SetVayuChildCustomerId sets VayuChildCustomerId field to given value.


### GetId

`func (o *CreateCustomerRelationResponseCustomerRelation) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreateCustomerRelationResponseCustomerRelation) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreateCustomerRelationResponseCustomerRelation) SetId(v string)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *CreateCustomerRelationResponseCustomerRelation) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CreateCustomerRelationResponseCustomerRelation) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CreateCustomerRelationResponseCustomerRelation) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CreateCustomerRelationResponseCustomerRelation) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CreateCustomerRelationResponseCustomerRelation) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CreateCustomerRelationResponseCustomerRelation) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


