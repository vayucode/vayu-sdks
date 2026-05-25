# .PlansApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePlan**](PlansApi.md#deletePlan) | **DELETE** /plans/{planId} | Delete Plan
[**getPlan**](PlansApi.md#getPlan) | **GET** /plans/{planId} | Get Plan
[**listPlans**](PlansApi.md#listPlans) | **GET** /plans | List Plans


# **deletePlan**
> DeletePlanResponse deletePlan()

Delete a Plan by id.

### Example


```typescript
import { createConfiguration, PlansApi } from '';
import type { PlansApiDeletePlanRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlansApi(configuration);

const request: PlansApiDeletePlanRequest = {
  
  planId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deletePlan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | [**string**] |  | defaults to undefined


### Return type

**DeletePlanResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlan**
> GetPlanResponse getPlan()

Get a Plan by id.

### Example


```typescript
import { createConfiguration, PlansApi } from '';
import type { PlansApiGetPlanRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlansApi(configuration);

const request: PlansApiGetPlanRequest = {
  
  planId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getPlan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | [**string**] |  | defaults to undefined


### Return type

**GetPlanResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPlans**
> ListPlansResponse listPlans()

Get a list of Plans.

### Example


```typescript
import { createConfiguration, PlansApi } from '';
import type { PlansApiListPlansRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlansApi(configuration);

const request: PlansApiListPlansRequest = {
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.listPlans(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListPlansResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
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


