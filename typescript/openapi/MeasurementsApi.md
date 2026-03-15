# .MeasurementsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMeasurement**](MeasurementsApi.md#createMeasurement) | **POST** /measurements | Create Measurement
[**deleteMeasurement**](MeasurementsApi.md#deleteMeasurement) | **DELETE** /measurements/{measurementId} | Delete Measurement
[**getMeasurement**](MeasurementsApi.md#getMeasurement) | **GET** /measurements/{measurementId} | Get Measurement
[**listMeasurements**](MeasurementsApi.md#listMeasurements) | **GET** /measurements | List Measurements


# **createMeasurement**
> CreateMeasurementResponse createMeasurement(createMeasurementRequest)

Create a new Measurement.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiCreateMeasurementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiCreateMeasurementRequest = {
  
  createMeasurementRequest: {
    customerId: "62ECB020842930cc01FFCCfe",
    meterId: "62ECB020842930cc01FFCCfe",
    usageDate: {
      year: 0,
      month: 0,
      day: 1,
    },
    value: 3.14,
  },
};

const data = await apiInstance.createMeasurement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMeasurementRequest** | **CreateMeasurementRequest**|  |


### Return type

**CreateMeasurementResponse**

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

# **deleteMeasurement**
> DeleteMeasurementResponse deleteMeasurement()

Delete a Measurement by id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiDeleteMeasurementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiDeleteMeasurementRequest = {
  
  measurementId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deleteMeasurement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measurementId** | [**string**] |  | defaults to undefined


### Return type

**DeleteMeasurementResponse**

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

# **getMeasurement**
> GetMeasurementResponse getMeasurement()

Get a Measurement by id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMeasurementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMeasurementRequest = {
  
  measurementId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getMeasurement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measurementId** | [**string**] |  | defaults to undefined


### Return type

**GetMeasurementResponse**

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

# **listMeasurements**
> ListMeasurementsResponse listMeasurements()

Get a list of Measurements.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiListMeasurementsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiListMeasurementsRequest = {
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.listMeasurements(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListMeasurementsResponse**

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


