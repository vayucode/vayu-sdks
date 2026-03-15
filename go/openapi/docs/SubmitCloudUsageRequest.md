# SubmitCloudUsageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**[]CloudUsageResult**](CloudUsageResult.md) | Array of usage submission results from the cloud provider | 
**ProductCode** | **string** | The product code identifying the cloud marketplace product | 

## Methods

### NewSubmitCloudUsageRequest

`func NewSubmitCloudUsageRequest(results []CloudUsageResult, productCode string, ) *SubmitCloudUsageRequest`

NewSubmitCloudUsageRequest instantiates a new SubmitCloudUsageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitCloudUsageRequestWithDefaults

`func NewSubmitCloudUsageRequestWithDefaults() *SubmitCloudUsageRequest`

NewSubmitCloudUsageRequestWithDefaults instantiates a new SubmitCloudUsageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *SubmitCloudUsageRequest) GetResults() []CloudUsageResult`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *SubmitCloudUsageRequest) GetResultsOk() (*[]CloudUsageResult, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *SubmitCloudUsageRequest) SetResults(v []CloudUsageResult)`

SetResults sets Results field to given value.


### GetProductCode

`func (o *SubmitCloudUsageRequest) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *SubmitCloudUsageRequest) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *SubmitCloudUsageRequest) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


