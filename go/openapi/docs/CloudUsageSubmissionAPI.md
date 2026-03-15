# \CloudUsageSubmissionAPI

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SubmitCloudUsage**](CloudUsageSubmissionAPI.md#SubmitCloudUsage) | **Post** /cloudUsageSubmission | Submit cloud usage



## SubmitCloudUsage

> map[string]interface{} SubmitCloudUsage(ctx).SubmitCloudUsageRequest(submitCloudUsageRequest).Execute()

Submit cloud usage



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	submitCloudUsageRequest := *openapiclient.NewSubmitCloudUsageRequest([]openapiclient.CloudUsageResult{*openapiclient.NewCloudUsageResult("Status_example", *openapiclient.NewUsageWindow(time.Now(), time.Now()), "CorrelationId_example", "IdempotencyKey_example", "MeterDimension_example", float32(123), map[string]PartnerSubmissionDetail{"key": *openapiclient.NewPartnerSubmissionDetail("ReceivedAt_example", "Status_example")}, float32(123), time.Now(), "AwsCustomerIdentifier_example")}, "ProductCode_example") // SubmitCloudUsageRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CloudUsageSubmissionAPI.SubmitCloudUsage(context.Background()).SubmitCloudUsageRequest(submitCloudUsageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CloudUsageSubmissionAPI.SubmitCloudUsage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitCloudUsage`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `CloudUsageSubmissionAPI.SubmitCloudUsage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitCloudUsageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitCloudUsageRequest** | [**SubmitCloudUsageRequest**](SubmitCloudUsageRequest.md) |  | 

### Return type

**map[string]interface{}**

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

