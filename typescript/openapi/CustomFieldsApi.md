# .CustomFieldsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomField**](CustomFieldsApi.md#createCustomField) | **POST** /customFields | Create Custom field
[**deleteCustomField**](CustomFieldsApi.md#deleteCustomField) | **DELETE** /customFields/{customFieldId} | Delete Custom field
[**getCustomField**](CustomFieldsApi.md#getCustomField) | **GET** /customFields/{customFieldId} | Get Custom field
[**listCustomFields**](CustomFieldsApi.md#listCustomFields) | **GET** /customFields | List Custom fields
[**updateCustomField**](CustomFieldsApi.md#updateCustomField) | **PUT** /customFields/{customFieldId} | Update Custom field


# **createCustomField**
> CreateCustomFieldResponse createCustomField(createCustomFieldRequest)

Create a new Custom field.

### Example


```typescript
import { createConfiguration, CustomFieldsApi } from '';
import type { CustomFieldsApiCreateCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomFieldsApi(configuration);

const request: CustomFieldsApiCreateCustomFieldRequest = {
  
  createCustomFieldRequest: {
    vayuEntity: "Customer",
    vayuCustomFieldName: "vayuCustomFieldName_example",
    valueType: "String",
    integrationSource: "NetSuite",
    integrationEntityType: null,
    fieldPath: "fieldPath_example",
    allowedValues: [
      "allowedValues_example",
    ],
    defaultValue: "defaultValue_example",
  },
};

const data = await apiInstance.createCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**|  |


### Return type

**CreateCustomFieldResponse**

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

# **deleteCustomField**
> DeleteCustomFieldResponse deleteCustomField()

Delete a Custom field by id.

### Example


```typescript
import { createConfiguration, CustomFieldsApi } from '';
import type { CustomFieldsApiDeleteCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomFieldsApi(configuration);

const request: CustomFieldsApiDeleteCustomFieldRequest = {
  
  customFieldId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deleteCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] |  | defaults to undefined


### Return type

**DeleteCustomFieldResponse**

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

# **getCustomField**
> GetCustomFieldResponse getCustomField()

Get a Custom field by id.

### Example


```typescript
import { createConfiguration, CustomFieldsApi } from '';
import type { CustomFieldsApiGetCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomFieldsApi(configuration);

const request: CustomFieldsApiGetCustomFieldRequest = {
  
  customFieldId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomFieldResponse**

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

# **listCustomFields**
> ListCustomFieldsResponse listCustomFields()

Get a list of Custom fields.

### Example


```typescript
import { createConfiguration, CustomFieldsApi } from '';
import type { CustomFieldsApiListCustomFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomFieldsApi(configuration);

const request: CustomFieldsApiListCustomFieldsRequest = {
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.listCustomFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListCustomFieldsResponse**

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

# **updateCustomField**
> UpdateCustomFieldResponse updateCustomField(updateCustomFieldRequest, )

Update a Custom field by id.

### Example


```typescript
import { createConfiguration, CustomFieldsApi } from '';
import type { CustomFieldsApiUpdateCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomFieldsApi(configuration);

const request: CustomFieldsApiUpdateCustomFieldRequest = {
  
  updateCustomFieldRequest: {
    vayuEntity: "Customer",
    vayuCustomFieldName: "vayuCustomFieldName_example",
    valueType: "String",
    integrationSource: "NetSuite",
    integrationEntityType: null,
    fieldPath: "fieldPath_example",
    allowedValues: [
      "allowedValues_example",
    ],
    defaultValue: "defaultValue_example",
  },
  
  customFieldId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.updateCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldRequest** | **UpdateCustomFieldRequest**|  |
 **customFieldId** | [**string**] |  | defaults to undefined


### Return type

**UpdateCustomFieldResponse**

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


