# .CustomersApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomer**](CustomersApi.md#createCustomer) | **POST** /customers | Create Customer
[**createCustomerRelation**](CustomersApi.md#createCustomerRelation) | **POST** /customer-relations | Create Customer relation
[**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /customers/{customerId} | Delete Customer
[**getCustomer**](CustomersApi.md#getCustomer) | **GET** /customers/{customerId} | Get Customer
[**getCustomerByExternalId**](CustomersApi.md#getCustomerByExternalId) | **GET** /customers/externalId/{externalId} | Get customer by externalId
[**getCustomerByIntegrationId**](CustomersApi.md#getCustomerByIntegrationId) | **GET** /customers/integration/{integrationType}/{integrationId} | Get customer by integration id
[**getCustomerByName**](CustomersApi.md#getCustomerByName) | **GET** /customers/name/{name} | Get customer by name
[**getCustomerProductsConsumptions**](CustomersApi.md#getCustomerProductsConsumptions) | **GET** /customers/products-consumptions/{customerId} | Get products consumptions by customer id
[**getCustomerProductsConsumptionsByAlias**](CustomersApi.md#getCustomerProductsConsumptionsByAlias) | **GET** /customers/products-consumptions/alias/{alias} | Get products consumptions by customer alias
[**getCustomerRelation**](CustomersApi.md#getCustomerRelation) | **GET** /customer-relations/{customerRelationId} | Get Customer relation
[**listCustomers**](CustomersApi.md#listCustomers) | **GET** /customers | List Customers
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PUT** /customers/{customerId} | Update Customer


# **createCustomer**
> CreateCustomerResponse createCustomer(createCustomerRequest)

Create a new Customer.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiCreateCustomerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiCreateCustomerRequest = {
  
  createCustomerRequest: {
    name: "name_example",
    aliases: [],
    contacts: [
      {
        name: "name_example",
        email: "email_example",
        title: "title_example",
        phone: "+9072888",
        receiveInvoiceEmail: true,
      },
    ],
    source: "Stripe",
    legalName: "legalName_example",
    taxIds: [],
    taxId: "taxId_example",
    cloudProviderSettings: {
      cloudProvider: "AWS",
      cloudProviderMarketplaceId: "cloudProviderMarketplaceId_example",
      customerIdentifier: "customerIdentifier_example",
    },
    externalId: "externalId_example",
    customerErpId: "customerErpId_example",
    address: {
      country: "country_example",
      city: "city_example",
      addressText: "addressText_example",
      state: "state_example",
      postalCode: "postalCode_example",
    },
    salesForceAccountId: "salesForceAccountId_example",
    dueDays: "END_OF_MONTH",
    currency: "USD",
    customFields: [
      {
        integrationSource: "NetSuite",
        integrationEntityType: "Account",
        fieldPath: "fieldPath_example",
        vayuCustomFieldName: "vayuCustomFieldName_example",
        valueType: "String",
        value: null,
      },
    ],
    subsidiary: "subsidiary_example",
  },
};

const data = await apiInstance.createCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomerRequest** | **CreateCustomerRequest**|  |


### Return type

**CreateCustomerResponse**

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

# **createCustomerRelation**
> CreateCustomerRelationResponse createCustomerRelation(createCustomerRelationRequest)

Create a new Customer relation.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiCreateCustomerRelationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiCreateCustomerRelationRequest = {
  
  createCustomerRelationRequest: {
    vayuParentCustomerId: "62ECB020842930cc01FFCCfe",
    vayuChildCustomerId: "62ECB020842930cc01FFCCfe",
  },
};

const data = await apiInstance.createCustomerRelation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomerRelationRequest** | **CreateCustomerRelationRequest**|  |


### Return type

**CreateCustomerRelationResponse**

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

# **deleteCustomer**
> DeleteCustomerResponse deleteCustomer()

Delete a Customer by id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiDeleteCustomerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiDeleteCustomerRequest = {
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deleteCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] |  | defaults to undefined


### Return type

**DeleteCustomerResponse**

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

# **getCustomer**
> GetCustomerResponse getCustomer()

Get a Customer by id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerRequest = {
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided externalId |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerByExternalId**
> GetCustomerResponse getCustomerByExternalId()

Use this endpoint to get a specific customer using its external Id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerByExternalIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerByExternalIdRequest = {
  
  externalId: "externalId_example",
};

const data = await apiInstance.getCustomerByExternalId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided externalId |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerByIntegrationId**
> GetCustomerByIntegrationIdResponse getCustomerByIntegrationId()

Use this endpoint to get a specific customer using its integration provider and identifier.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerByIntegrationIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerByIntegrationIdRequest = {
  
  integrationType: "Hubspot",
  
  integrationId: "integrationId_example",
};

const data = await apiInstance.getCustomerByIntegrationId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationType** | **IntegrationType** |  | defaults to undefined
 **integrationId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerByIntegrationIdResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided integration id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerByName**
> GetCustomerByNameResponse getCustomerByName()

Use this endpoint to get a specific customer using its name.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerByNameRequest = {
  
  name: "name_example",
};

const data = await apiInstance.getCustomerByName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerByNameResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided name |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerProductsConsumptions**
> GetCustomerProductsConsumptionsResponse getCustomerProductsConsumptions()

Use this endpoint to get the products consumptions by the customer id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerProductsConsumptionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerProductsConsumptionsRequest = {
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getCustomerProductsConsumptions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerProductsConsumptionsResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the products consumptions by the customer id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerProductsConsumptionsByAlias**
> GetCustomerProductsConsumptionsByAliasResponse getCustomerProductsConsumptionsByAlias()

Use this endpoint to get the products consumptions by the customer alias.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerProductsConsumptionsByAliasRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerProductsConsumptionsByAliasRequest = {
  
  alias: "alias_example",
};

const data = await apiInstance.getCustomerProductsConsumptionsByAlias(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerProductsConsumptionsByAliasResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the products consumptions by the customer alias |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerRelation**
> GetCustomerRelationResponse getCustomerRelation()

Get a Customer relation by id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerRelationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerRelationRequest = {
  
  customerRelationId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getCustomerRelation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerRelationId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerRelationResponse**

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

# **listCustomers**
> ListCustomersResponse listCustomers()

Get a list of Customers.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiListCustomersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiListCustomersRequest = {
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.listCustomers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListCustomersResponse**

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

# **updateCustomer**
> UpdateCustomerResponse updateCustomer(updateCustomerRequest, )

Update a Customer by id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiUpdateCustomerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiUpdateCustomerRequest = {
  
  updateCustomerRequest: {
    name: "name_example",
    aliases: [],
    contacts: [
      {
        name: "name_example",
        email: "email_example",
        title: "title_example",
        phone: "+9072888",
        receiveInvoiceEmail: true,
      },
    ],
    source: "Stripe",
    legalName: "legalName_example",
    taxIds: [],
    taxId: "taxId_example",
    cloudProviderSettings: {
      cloudProvider: "AWS",
      cloudProviderMarketplaceId: "cloudProviderMarketplaceId_example",
      customerIdentifier: "customerIdentifier_example",
    },
    externalId: "externalId_example",
    customerErpId: "customerErpId_example",
    address: {
      country: "country_example",
      city: "city_example",
      addressText: "addressText_example",
      state: "state_example",
      postalCode: "postalCode_example",
    },
    salesForceAccountId: "salesForceAccountId_example",
    dueDays: "END_OF_MONTH",
    currency: "USD",
    customFields: [
      {
        integrationSource: "NetSuite",
        integrationEntityType: "Account",
        fieldPath: "fieldPath_example",
        vayuCustomFieldName: "vayuCustomFieldName_example",
        valueType: "String",
        value: null,
      },
    ],
    subsidiary: "subsidiary_example",
  },
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.updateCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomerRequest** | **UpdateCustomerRequest**|  |
 **customerId** | [**string**] |  | defaults to undefined


### Return type

**UpdateCustomerResponse**

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


