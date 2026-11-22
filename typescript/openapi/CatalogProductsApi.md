# .CatalogProductsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCatalogProduct**](CatalogProductsApi.md#createCatalogProduct) | **POST** /catalogProducts | Create Catalog product
[**deleteCatalogProduct**](CatalogProductsApi.md#deleteCatalogProduct) | **DELETE** /catalogProducts/{catalogProductId} | Delete Catalog product
[**getCatalogProduct**](CatalogProductsApi.md#getCatalogProduct) | **GET** /catalogProducts/{catalogProductId} | Get Catalog product
[**getCatalogProductByIntegrationId**](CatalogProductsApi.md#getCatalogProductByIntegrationId) | **GET** /catalogProducts/integration/{integrationType}/{integrationId} | Get catalog product by integration id
[**getCatalogProductByName**](CatalogProductsApi.md#getCatalogProductByName) | **GET** /catalogProducts/name/{name} | Get catalog product by name
[**listCatalogProducts**](CatalogProductsApi.md#listCatalogProducts) | **GET** /catalogProducts | List Catalog products
[**updateCatalogProduct**](CatalogProductsApi.md#updateCatalogProduct) | **PUT** /catalogProducts/{catalogProductId} | Update Catalog product


# **createCatalogProduct**
> CreateCatalogProductResponse createCatalogProduct(createCatalogProductRequest)

Create a new Catalog product.

### Example


```typescript
import { createConfiguration, CatalogProductsApi } from '';
import type { CatalogProductsApiCreateCatalogProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CatalogProductsApi(configuration);

const request: CatalogProductsApiCreateCatalogProductRequest = {
  
  createCatalogProductRequest: {
    name: "name_example",
    description: "description_example",
    productCode: "productCode_example",
    disableDescription: true,
    externalId: "externalId_example",
    salesForceProductId: "salesForceProductId_example",
  },
};

const data = await apiInstance.createCatalogProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCatalogProductRequest** | **CreateCatalogProductRequest**|  |


### Return type

**CreateCatalogProductResponse**

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

# **deleteCatalogProduct**
> DeleteCatalogProductResponse deleteCatalogProduct()

Delete a Catalog product by id.

### Example


```typescript
import { createConfiguration, CatalogProductsApi } from '';
import type { CatalogProductsApiDeleteCatalogProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CatalogProductsApi(configuration);

const request: CatalogProductsApiDeleteCatalogProductRequest = {
  
  catalogProductId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deleteCatalogProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogProductId** | [**string**] |  | defaults to undefined


### Return type

**DeleteCatalogProductResponse**

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

# **getCatalogProduct**
> GetCatalogProductResponse getCatalogProduct()

Get a Catalog product by id.

### Example


```typescript
import { createConfiguration, CatalogProductsApi } from '';
import type { CatalogProductsApiGetCatalogProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CatalogProductsApi(configuration);

const request: CatalogProductsApiGetCatalogProductRequest = {
  
  catalogProductId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getCatalogProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogProductId** | [**string**] |  | defaults to undefined


### Return type

**GetCatalogProductResponse**

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

# **getCatalogProductByIntegrationId**
> GetCatalogProductByIntegrationIdResponse getCatalogProductByIntegrationId()

Use this endpoint to get a specific catalog product using its integration provider and identifier.

### Example


```typescript
import { createConfiguration, CatalogProductsApi } from '';
import type { CatalogProductsApiGetCatalogProductByIntegrationIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CatalogProductsApi(configuration);

const request: CatalogProductsApiGetCatalogProductByIntegrationIdRequest = {
  
  integrationType: "Hubspot",
  
  integrationId: "integrationId_example",
};

const data = await apiInstance.getCatalogProductByIntegrationId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationType** | **IntegrationProviders** |  | defaults to undefined
 **integrationId** | [**string**] |  | defaults to undefined


### Return type

**GetCatalogProductByIntegrationIdResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response contains the catalog product matching the provided integration id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCatalogProductByName**
> GetCatalogProductByNameResponse getCatalogProductByName()

Use this endpoint to get a specific catalog product using its name.

### Example


```typescript
import { createConfiguration, CatalogProductsApi } from '';
import type { CatalogProductsApiGetCatalogProductByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CatalogProductsApi(configuration);

const request: CatalogProductsApiGetCatalogProductByNameRequest = {
  
  name: "name_example",
};

const data = await apiInstance.getCatalogProductByName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined


### Return type

**GetCatalogProductByNameResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the catalog product matching the provided name |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCatalogProducts**
> ListCatalogProductsResponse listCatalogProducts()

Get a list of Catalog products.

### Example


```typescript
import { createConfiguration, CatalogProductsApi } from '';
import type { CatalogProductsApiListCatalogProductsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CatalogProductsApi(configuration);

const request: CatalogProductsApiListCatalogProductsRequest = {
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.listCatalogProducts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListCatalogProductsResponse**

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

# **updateCatalogProduct**
> UpdateCatalogProductResponse updateCatalogProduct(updateCatalogProductRequest, )

Update a Catalog product by id.

### Example


```typescript
import { createConfiguration, CatalogProductsApi } from '';
import type { CatalogProductsApiUpdateCatalogProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CatalogProductsApi(configuration);

const request: CatalogProductsApiUpdateCatalogProductRequest = {
  
  updateCatalogProductRequest: {
    name: "name_example",
    description: "description_example",
    productCode: "productCode_example",
    disableDescription: true,
    externalId: "externalId_example",
    salesForceProductId: "salesForceProductId_example",
  },
  
  catalogProductId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.updateCatalogProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCatalogProductRequest** | **UpdateCatalogProductRequest**|  |
 **catalogProductId** | [**string**] |  | defaults to undefined


### Return type

**UpdateCatalogProductResponse**

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


