# AcknowledgedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The distinctive label assigned to an event, serving as a critical identifier for categorizing and pricing events within the system&#39;s backend infrastructure. | 
**Timestamp** | **time.Time** | The temporal marker denoting the exact moment of event occurrence. The timestamp is formatted as an ISO 8601 string and is expressed in Coordinated Universal Time (UTC). i.e. YYYY-MM-DDTHH:MM:SS.SSSZ | 
**CustomerAlias** | **string** | A pseudonymous or otherwise obfuscated identifier uniquely assigned to each customer. | 
**Ref** | **string** | A universally unique identifier (UUID) or other form of high-entropy string serving as an immutable reference for each event entry. | 
**Data** | Pointer to **map[string]map[string]interface{}** | A schema-less JSON object encapsulating miscellaneous attributes and metrics associated with the event. | [optional] 
**AckId** | **string** | Per-event acknowledgment ID confirming Vayu received this event. Use it to demonstrate the event was sent to Vayu. | 

## Methods

### NewAcknowledgedEvent

`func NewAcknowledgedEvent(name string, timestamp time.Time, customerAlias string, ref string, ackId string, ) *AcknowledgedEvent`

NewAcknowledgedEvent instantiates a new AcknowledgedEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAcknowledgedEventWithDefaults

`func NewAcknowledgedEventWithDefaults() *AcknowledgedEvent`

NewAcknowledgedEventWithDefaults instantiates a new AcknowledgedEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AcknowledgedEvent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AcknowledgedEvent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AcknowledgedEvent) SetName(v string)`

SetName sets Name field to given value.


### GetTimestamp

`func (o *AcknowledgedEvent) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *AcknowledgedEvent) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *AcknowledgedEvent) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.


### GetCustomerAlias

`func (o *AcknowledgedEvent) GetCustomerAlias() string`

GetCustomerAlias returns the CustomerAlias field if non-nil, zero value otherwise.

### GetCustomerAliasOk

`func (o *AcknowledgedEvent) GetCustomerAliasOk() (*string, bool)`

GetCustomerAliasOk returns a tuple with the CustomerAlias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerAlias

`func (o *AcknowledgedEvent) SetCustomerAlias(v string)`

SetCustomerAlias sets CustomerAlias field to given value.


### GetRef

`func (o *AcknowledgedEvent) GetRef() string`

GetRef returns the Ref field if non-nil, zero value otherwise.

### GetRefOk

`func (o *AcknowledgedEvent) GetRefOk() (*string, bool)`

GetRefOk returns a tuple with the Ref field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRef

`func (o *AcknowledgedEvent) SetRef(v string)`

SetRef sets Ref field to given value.


### GetData

`func (o *AcknowledgedEvent) GetData() map[string]map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *AcknowledgedEvent) GetDataOk() (*map[string]map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *AcknowledgedEvent) SetData(v map[string]map[string]interface{})`

SetData sets Data field to given value.

### HasData

`func (o *AcknowledgedEvent) HasData() bool`

HasData returns a boolean if a field has been set.

### SetDataNil

`func (o *AcknowledgedEvent) SetDataNil(b bool)`

 SetDataNil sets the value for Data to be an explicit nil

### UnsetData
`func (o *AcknowledgedEvent) UnsetData()`

UnsetData ensures that no value is present for Data, not even an explicit nil
### GetAckId

`func (o *AcknowledgedEvent) GetAckId() string`

GetAckId returns the AckId field if non-nil, zero value otherwise.

### GetAckIdOk

`func (o *AcknowledgedEvent) GetAckIdOk() (*string, bool)`

GetAckIdOk returns a tuple with the AckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAckId

`func (o *AcknowledgedEvent) SetAckId(v string)`

SetAckId sets AckId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


