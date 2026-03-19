# CloudUsageResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** | The status of the cloud usage submission result | 
**ErrorCode** | Pointer to **string** | Error code if the submission was rejected | [optional] 
**UsageWindow** | [**UsageWindow**](UsageWindow.md) |  | 
**ErrorMessage** | Pointer to **string** | Detailed error message if the submission was rejected | [optional] 
**CorrelationId** | **string** | Unique identifier for tracing the submission through the system | 
**IdempotencyKey** | **string** | Key used to ensure the submission is processed exactly once | 
**MeterDimension** | **string** | The dimension of the meter being reported (e.g., API_CALLS, STORAGE_GB) | 
**AcceptedQuantity** | **float32** | The quantity that was accepted by the cloud provider | 
**PartnerSubmission** | [**map[string]PartnerSubmissionDetail**](PartnerSubmissionDetail.md) | Details of submissions to partner systems, keyed by request ID | 
**QuantitySubmitted** | **float32** | The total quantity that was submitted | 
**TimestampSubmitted** | **time.Time** | The timestamp when the usage was submitted | 
**AwsCustomerIdentifier** | **string** | The AWS customer identifier associated with this usage | 

## Methods

### NewCloudUsageResult

`func NewCloudUsageResult(status string, usageWindow UsageWindow, correlationId string, idempotencyKey string, meterDimension string, acceptedQuantity float32, partnerSubmission map[string]PartnerSubmissionDetail, quantitySubmitted float32, timestampSubmitted time.Time, awsCustomerIdentifier string, ) *CloudUsageResult`

NewCloudUsageResult instantiates a new CloudUsageResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudUsageResultWithDefaults

`func NewCloudUsageResultWithDefaults() *CloudUsageResult`

NewCloudUsageResultWithDefaults instantiates a new CloudUsageResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *CloudUsageResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CloudUsageResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CloudUsageResult) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetErrorCode

`func (o *CloudUsageResult) GetErrorCode() string`

GetErrorCode returns the ErrorCode field if non-nil, zero value otherwise.

### GetErrorCodeOk

`func (o *CloudUsageResult) GetErrorCodeOk() (*string, bool)`

GetErrorCodeOk returns a tuple with the ErrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCode

`func (o *CloudUsageResult) SetErrorCode(v string)`

SetErrorCode sets ErrorCode field to given value.

### HasErrorCode

`func (o *CloudUsageResult) HasErrorCode() bool`

HasErrorCode returns a boolean if a field has been set.

### GetUsageWindow

`func (o *CloudUsageResult) GetUsageWindow() UsageWindow`

GetUsageWindow returns the UsageWindow field if non-nil, zero value otherwise.

### GetUsageWindowOk

`func (o *CloudUsageResult) GetUsageWindowOk() (*UsageWindow, bool)`

GetUsageWindowOk returns a tuple with the UsageWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageWindow

`func (o *CloudUsageResult) SetUsageWindow(v UsageWindow)`

SetUsageWindow sets UsageWindow field to given value.


### GetErrorMessage

`func (o *CloudUsageResult) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *CloudUsageResult) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *CloudUsageResult) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *CloudUsageResult) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetCorrelationId

`func (o *CloudUsageResult) GetCorrelationId() string`

GetCorrelationId returns the CorrelationId field if non-nil, zero value otherwise.

### GetCorrelationIdOk

`func (o *CloudUsageResult) GetCorrelationIdOk() (*string, bool)`

GetCorrelationIdOk returns a tuple with the CorrelationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationId

`func (o *CloudUsageResult) SetCorrelationId(v string)`

SetCorrelationId sets CorrelationId field to given value.


### GetIdempotencyKey

`func (o *CloudUsageResult) GetIdempotencyKey() string`

GetIdempotencyKey returns the IdempotencyKey field if non-nil, zero value otherwise.

### GetIdempotencyKeyOk

`func (o *CloudUsageResult) GetIdempotencyKeyOk() (*string, bool)`

GetIdempotencyKeyOk returns a tuple with the IdempotencyKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdempotencyKey

`func (o *CloudUsageResult) SetIdempotencyKey(v string)`

SetIdempotencyKey sets IdempotencyKey field to given value.


### GetMeterDimension

`func (o *CloudUsageResult) GetMeterDimension() string`

GetMeterDimension returns the MeterDimension field if non-nil, zero value otherwise.

### GetMeterDimensionOk

`func (o *CloudUsageResult) GetMeterDimensionOk() (*string, bool)`

GetMeterDimensionOk returns a tuple with the MeterDimension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterDimension

`func (o *CloudUsageResult) SetMeterDimension(v string)`

SetMeterDimension sets MeterDimension field to given value.


### GetAcceptedQuantity

`func (o *CloudUsageResult) GetAcceptedQuantity() float32`

GetAcceptedQuantity returns the AcceptedQuantity field if non-nil, zero value otherwise.

### GetAcceptedQuantityOk

`func (o *CloudUsageResult) GetAcceptedQuantityOk() (*float32, bool)`

GetAcceptedQuantityOk returns a tuple with the AcceptedQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAcceptedQuantity

`func (o *CloudUsageResult) SetAcceptedQuantity(v float32)`

SetAcceptedQuantity sets AcceptedQuantity field to given value.


### GetPartnerSubmission

`func (o *CloudUsageResult) GetPartnerSubmission() map[string]PartnerSubmissionDetail`

GetPartnerSubmission returns the PartnerSubmission field if non-nil, zero value otherwise.

### GetPartnerSubmissionOk

`func (o *CloudUsageResult) GetPartnerSubmissionOk() (*map[string]PartnerSubmissionDetail, bool)`

GetPartnerSubmissionOk returns a tuple with the PartnerSubmission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartnerSubmission

`func (o *CloudUsageResult) SetPartnerSubmission(v map[string]PartnerSubmissionDetail)`

SetPartnerSubmission sets PartnerSubmission field to given value.


### GetQuantitySubmitted

`func (o *CloudUsageResult) GetQuantitySubmitted() float32`

GetQuantitySubmitted returns the QuantitySubmitted field if non-nil, zero value otherwise.

### GetQuantitySubmittedOk

`func (o *CloudUsageResult) GetQuantitySubmittedOk() (*float32, bool)`

GetQuantitySubmittedOk returns a tuple with the QuantitySubmitted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantitySubmitted

`func (o *CloudUsageResult) SetQuantitySubmitted(v float32)`

SetQuantitySubmitted sets QuantitySubmitted field to given value.


### GetTimestampSubmitted

`func (o *CloudUsageResult) GetTimestampSubmitted() time.Time`

GetTimestampSubmitted returns the TimestampSubmitted field if non-nil, zero value otherwise.

### GetTimestampSubmittedOk

`func (o *CloudUsageResult) GetTimestampSubmittedOk() (*time.Time, bool)`

GetTimestampSubmittedOk returns a tuple with the TimestampSubmitted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampSubmitted

`func (o *CloudUsageResult) SetTimestampSubmitted(v time.Time)`

SetTimestampSubmitted sets TimestampSubmitted field to given value.


### GetAwsCustomerIdentifier

`func (o *CloudUsageResult) GetAwsCustomerIdentifier() string`

GetAwsCustomerIdentifier returns the AwsCustomerIdentifier field if non-nil, zero value otherwise.

### GetAwsCustomerIdentifierOk

`func (o *CloudUsageResult) GetAwsCustomerIdentifierOk() (*string, bool)`

GetAwsCustomerIdentifierOk returns a tuple with the AwsCustomerIdentifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsCustomerIdentifier

`func (o *CloudUsageResult) SetAwsCustomerIdentifier(v string)`

SetAwsCustomerIdentifier sets AwsCustomerIdentifier field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


