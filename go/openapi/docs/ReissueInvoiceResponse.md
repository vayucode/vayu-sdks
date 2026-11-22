# ReissueInvoiceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Invoice** | [**ReissueInvoiceResponseInvoice**](ReissueInvoiceResponseInvoice.md) |  | 
**ReplacementInvoiceId** | **NullableString** | The id of the replacement invoice. For a manually created invoice it is returned by the call that reissues it, and only by that call. For an invoice generated from a contract it is null while the replacement is still being generated. A later call returns it once the replacement exists and can be matched to this invoice; if it cannot be matched, the call returns null and asks again for the replacement to be generated. | 

## Methods

### NewReissueInvoiceResponse

`func NewReissueInvoiceResponse(invoice ReissueInvoiceResponseInvoice, replacementInvoiceId NullableString, ) *ReissueInvoiceResponse`

NewReissueInvoiceResponse instantiates a new ReissueInvoiceResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReissueInvoiceResponseWithDefaults

`func NewReissueInvoiceResponseWithDefaults() *ReissueInvoiceResponse`

NewReissueInvoiceResponseWithDefaults instantiates a new ReissueInvoiceResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoice

`func (o *ReissueInvoiceResponse) GetInvoice() ReissueInvoiceResponseInvoice`

GetInvoice returns the Invoice field if non-nil, zero value otherwise.

### GetInvoiceOk

`func (o *ReissueInvoiceResponse) GetInvoiceOk() (*ReissueInvoiceResponseInvoice, bool)`

GetInvoiceOk returns a tuple with the Invoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoice

`func (o *ReissueInvoiceResponse) SetInvoice(v ReissueInvoiceResponseInvoice)`

SetInvoice sets Invoice field to given value.


### GetReplacementInvoiceId

`func (o *ReissueInvoiceResponse) GetReplacementInvoiceId() string`

GetReplacementInvoiceId returns the ReplacementInvoiceId field if non-nil, zero value otherwise.

### GetReplacementInvoiceIdOk

`func (o *ReissueInvoiceResponse) GetReplacementInvoiceIdOk() (*string, bool)`

GetReplacementInvoiceIdOk returns a tuple with the ReplacementInvoiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacementInvoiceId

`func (o *ReissueInvoiceResponse) SetReplacementInvoiceId(v string)`

SetReplacementInvoiceId sets ReplacementInvoiceId field to given value.


### SetReplacementInvoiceIdNil

`func (o *ReissueInvoiceResponse) SetReplacementInvoiceIdNil(b bool)`

 SetReplacementInvoiceIdNil sets the value for ReplacementInvoiceId to be an explicit nil

### UnsetReplacementInvoiceId
`func (o *ReissueInvoiceResponse) UnsetReplacementInvoiceId()`

UnsetReplacementInvoiceId ensures that no value is present for ReplacementInvoiceId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


