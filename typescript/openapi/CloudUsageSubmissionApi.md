# .CloudUsageSubmissionApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitCloudUsage**](CloudUsageSubmissionApi.md#submitCloudUsage) | **POST** /cloudUsageSubmission | Submit cloud usage


# **submitCloudUsage**
> any submitCloudUsage(submitCloudUsageRequest)

Submit cloud usage data

### Example


```typescript
import { createConfiguration, CloudUsageSubmissionApi } from '';
import type { CloudUsageSubmissionApiSubmitCloudUsageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CloudUsageSubmissionApi(configuration);

const request: CloudUsageSubmissionApiSubmitCloudUsageRequest = {
  
  submitCloudUsageRequest: {
    results: [
      {
        status: "ACCEPTED",
        errorCode: "errorCode_example",
        usageWindow: {
          start: new Date('1970-01-01T00:00:00.00Z'),
          end: new Date('1970-01-01T00:00:00.00Z'),
        },
        errorMessage: "errorMessage_example",
        correlationId: "correlationId_example",
        idempotencyKey: "vayu-ok%?x!u'K}qz^sEC)lJ*=-jQ-+'6`%cClu,k'!'su[.lzF6V,-V6rEtCO?&28nxs#k8z)"\6\%-TMxo:-sWVoim9gsbE`buHkrT",
        meterDimension: "meterDimension_example",
        acceptedQuantity: 3.14,
        partnerSubmission: {
          "key": {
            receivedAt: "receivedAt_example",
            status: "SUCCESS",
            error: null,
          },
        },
        quantitySubmitted: 3.14,
        timestampSubmitted: new Date('1970-01-01T00:00:00.00Z'),
        awsCustomerIdentifier: "awsCustomerIdentifier_example",
      },
    ],
    productCode: "productCode_example",
  },
};

const data = await apiInstance.submitCloudUsage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitCloudUsageRequest** | **SubmitCloudUsageRequest**|  |


### Return type

**any**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


