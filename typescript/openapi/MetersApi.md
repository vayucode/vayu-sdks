# .MetersApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMeter**](MetersApi.md#deleteMeter) | **DELETE** /meters/{meterId} | Delete Meter
[**getMeter**](MetersApi.md#getMeter) | **GET** /meters/{meterId} | Get Meter
[**getMeterByIntegrationId**](MetersApi.md#getMeterByIntegrationId) | **GET** /meters/integration/{integrationType}/{integrationId} | Get meter by integration id
[**getMeterByName**](MetersApi.md#getMeterByName) | **GET** /meters/name/{name} | Get meter by name
[**listMeters**](MetersApi.md#listMeters) | **GET** /meters | List Meters
[**updateMeter**](MetersApi.md#updateMeter) | **PUT** /meters/{meterId} | Update Meter


# **deleteMeter**
> DeleteMeterResponse deleteMeter()

Delete a Meter by id.

### Example


```typescript
import { createConfiguration, MetersApi } from '';
import type { MetersApiDeleteMeterRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetersApi(configuration);

const request: MetersApiDeleteMeterRequest = {
  
  meterId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deleteMeter(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meterId** | [**string**] |  | defaults to undefined


### Return type

**DeleteMeterResponse**

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

# **getMeter**
> GetMeterResponse getMeter()

Get a Meter by id.

### Example


```typescript
import { createConfiguration, MetersApi } from '';
import type { MetersApiGetMeterRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetersApi(configuration);

const request: MetersApiGetMeterRequest = {
  
  meterId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getMeter(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meterId** | [**string**] |  | defaults to undefined


### Return type

**GetMeterResponse**

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

# **getMeterByIntegrationId**
> GetMeterByIntegrationIdResponse getMeterByIntegrationId()

Use this endpoint to get a specific meter using its integration provider and identifier.

### Example


```typescript
import { createConfiguration, MetersApi } from '';
import type { MetersApiGetMeterByIntegrationIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetersApi(configuration);

const request: MetersApiGetMeterByIntegrationIdRequest = {
  
  integrationType: "Hubspot",
  
  integrationId: "integrationId_example",
};

const data = await apiInstance.getMeterByIntegrationId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationType** | **IntegrationProviders** |  | defaults to undefined
 **integrationId** | [**string**] |  | defaults to undefined


### Return type

**GetMeterByIntegrationIdResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response contains the meter matching the provided integration id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMeterByName**
> GetMeterByNameResponse getMeterByName()

Use this endpoint to get a specific meter using its name.

### Example


```typescript
import { createConfiguration, MetersApi } from '';
import type { MetersApiGetMeterByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetersApi(configuration);

const request: MetersApiGetMeterByNameRequest = {
  
  name: "name_example",
};

const data = await apiInstance.getMeterByName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined


### Return type

**GetMeterByNameResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the meter matching the provided name |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMeters**
> ListMetersResponse listMeters()

Get a list of Meters.

### Example


```typescript
import { createConfiguration, MetersApi } from '';
import type { MetersApiListMetersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetersApi(configuration);

const request: MetersApiListMetersRequest = {
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.listMeters(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListMetersResponse**

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

# **updateMeter**
> UpdateMeterResponse updateMeter(updateMeterRequest, )

Update a Meter by id.

### Example


```typescript
import { createConfiguration, MetersApi } from '';
import type { MetersApiUpdateMeterRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetersApi(configuration);

const request: MetersApiUpdateMeterRequest = {
  
  updateMeterRequest: {
    name: "name_example",
    eventName: "eventName_example",
    productCode: "productCode_example",
    aggregationMethod: {
      operator: "Count",
      field: "field_example",
      instanceKey: "instanceKey_example",
    },
    filter: {
      conditions: [
        {
          criterions: [
            {
              field: "field_example",
              operator: "Equals",
              value: "value_example",
            },
          ],
        },
      ],
    },
    salesForceProductId: "salesForceProductId_example",
  },
  
  meterId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.updateMeter(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMeterRequest** | **UpdateMeterRequest**|  |
 **meterId** | [**string**] |  | defaults to undefined


### Return type

**UpdateMeterResponse**

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


