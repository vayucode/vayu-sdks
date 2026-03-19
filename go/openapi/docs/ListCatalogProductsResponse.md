# ListCatalogProductsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CatalogProducts** | [**[]CreateCatalogProductResponseCatalogProduct**](CreateCatalogProductResponseCatalogProduct.md) |  | 
**Total** | **float32** |  | 
**HasMore** | **bool** |  | 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewListCatalogProductsResponse

`func NewListCatalogProductsResponse(catalogProducts []CreateCatalogProductResponseCatalogProduct, total float32, hasMore bool, ) *ListCatalogProductsResponse`

NewListCatalogProductsResponse instantiates a new ListCatalogProductsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListCatalogProductsResponseWithDefaults

`func NewListCatalogProductsResponseWithDefaults() *ListCatalogProductsResponse`

NewListCatalogProductsResponseWithDefaults instantiates a new ListCatalogProductsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCatalogProducts

`func (o *ListCatalogProductsResponse) GetCatalogProducts() []CreateCatalogProductResponseCatalogProduct`

GetCatalogProducts returns the CatalogProducts field if non-nil, zero value otherwise.

### GetCatalogProductsOk

`func (o *ListCatalogProductsResponse) GetCatalogProductsOk() (*[]CreateCatalogProductResponseCatalogProduct, bool)`

GetCatalogProductsOk returns a tuple with the CatalogProducts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogProducts

`func (o *ListCatalogProductsResponse) SetCatalogProducts(v []CreateCatalogProductResponseCatalogProduct)`

SetCatalogProducts sets CatalogProducts field to given value.


### GetTotal

`func (o *ListCatalogProductsResponse) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ListCatalogProductsResponse) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ListCatalogProductsResponse) SetTotal(v float32)`

SetTotal sets Total field to given value.


### GetHasMore

`func (o *ListCatalogProductsResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ListCatalogProductsResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ListCatalogProductsResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.


### GetNextCursor

`func (o *ListCatalogProductsResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *ListCatalogProductsResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *ListCatalogProductsResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *ListCatalogProductsResponse) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


