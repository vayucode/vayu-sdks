# .ContractsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContract**](ContractsApi.md#createContract) | **POST** /contracts | Create Contract
[**deleteContract**](ContractsApi.md#deleteContract) | **DELETE** /contracts/{contractId} | Delete Contract
[**getContract**](ContractsApi.md#getContract) | **GET** /contracts/{contractId} | Get Contract
[**getContractByIntegrationId**](ContractsApi.md#getContractByIntegrationId) | **GET** /contracts/integration/{integrationType}/{integrationId} | Get contract by integration id
[**listContracts**](ContractsApi.md#listContracts) | **GET** /contracts | List contracts
[**refreshContractCredits**](ContractsApi.md#refreshContractCredits) | **POST** /contracts/{contractId}/credits/refresh | Refresh the credit grants on a contract
[**terminateContract**](ContractsApi.md#terminateContract) | **POST** /contracts/{contractId}/terminate | Terminate a contract


# **createContract**
> CreateContractResponse createContract(createContractRequest)

Create a new Contract.

### Example


```typescript
import { createConfiguration, ContractsApi } from '';
import type { ContractsApiCreateContractRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContractsApi(configuration);

const request: ContractsApiCreateContractRequest = {
  
  createContractRequest: {
    startDate: new Date('1970-01-01T00:00:00.00Z'),
    customerId: "62ECB020842930cc01FFCCfe",
    planId: "62ECB020842930cc01FFCCfe",
    name: "name_example",
    salesForceOpportunityId: "salesForceOpportunityId_example",
    endDate: new Date('1970-01-01T00:00:00.00Z'),
    signatureDate: new Date('1970-01-01T00:00:00.00Z'),
    products: [
      {
        displayName: "displayName_example",
        description: "description_example",
        disableDescription: true,
        scheduling: {
          billingDay: 1,
          duration: {
            unit: "MONTH",
            value: 0,
          },
        },
        pricing: null,
        catalogProductId: "catalogProductId_example",
        productErpId: "productErpId_example",
        nsClass: "nsClass_example",
        nsClassId: "nsClassId_example",
        externalIntegrations: [
          {
            provider: "Paddle",
            externalId: "externalId_example",
          },
        ],
        commitment: {
          units: 0,
          price: 0,
          type: "UNITS",
          scheduling: {
            billingDay: 1,
            duration: {
              unit: "MONTH",
              value: 0,
            },
          },
          overageStrategy: "IGNORE",
        },
        paymentTerm: "Prepayment",
        isCalendarAligned: true,
        cloudProviderSettings: {
          cloudProvider: "AWS",
          cloudProviderMarketplaceId: "cloudProviderMarketplaceId_example",
          dimension: "dimension_example",
        },
        consumesCreditProductIds: [
          "62ECB020842930cc01FFCCfe",
        ],
      },
    ],
    creditGrants: [
      {
        name: "name_example",
        creditProductId: "62ECB020842930cc01FFCCfe",
        balanceKind: "MONETARY",
        grantAmount: 0,
        price: 0,
        schedule: "ONE_TIME",
        expirationDate: new Date('1970-01-01T00:00:00.00Z'),
        expirationPolicy: "AT_NEXT_GRANT",
        applyAutomatically: true,
        externalIntegrations: [
          {
            provider: "Paddle",
            externalId: "externalId_example",
          },
        ],
      },
    ],
    productGroups: [
      {
        displayName: "displayName_example",
        description: "description_example",
        productErpId: "productErpId_example",
        nsClass: "nsClass_example",
        nsClassId: "nsClassId_example",
        products: [
          {
            displayName: "displayName_example",
            description: "description_example",
            disableDescription: true,
            scheduling: {
              billingDay: 1,
              duration: {
                unit: "MONTH",
                value: 0,
              },
            },
            pricing: null,
            catalogProductId: "catalogProductId_example",
            productErpId: "productErpId_example",
            nsClass: "nsClass_example",
            nsClassId: "nsClassId_example",
            externalIntegrations: [
              {
                provider: "Paddle",
                externalId: "externalId_example",
              },
            ],
            commitment: {
              units: 0,
              price: 0,
              type: "UNITS",
              scheduling: {
                billingDay: 1,
                duration: {
                  unit: "MONTH",
                  value: 0,
                },
              },
              overageStrategy: "IGNORE",
            },
            paymentTerm: "Prepayment",
            isCalendarAligned: true,
            cloudProviderSettings: {
              cloudProvider: "AWS",
              cloudProviderMarketplaceId: "cloudProviderMarketplaceId_example",
              dimension: "dimension_example",
            },
            consumesCreditProductIds: [
              "62ECB020842930cc01FFCCfe",
            ],
          },
        ],
        baseAmount: 3.14,
        commitment: {
          units: 0,
          price: 0,
          type: "UNITS",
          scheduling: {
            billingDay: 1,
            duration: {
              unit: "MONTH",
              value: 0,
            },
          },
          overageStrategy: "IGNORE",
        },
        isCalendarAligned: true,
      },
    ],
    accountManager: "accountManager_example",
    shouldProRateInvoices: true,
    autoRenewContract: true,
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
    customFieldValues: [
      {
        customFieldDefinitionId: "customFieldDefinitionId_example",
        value: "value_example",
        fieldName: "fieldName_example",
      },
    ],
    status: "InReview",
    purchaseOrder: "purchaseOrder_example",
    currency: null,
    isTrial: true,
    externalId: "externalId_example",
  },
};

const data = await apiInstance.createContract(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContractRequest** | **CreateContractRequest**|  |


### Return type

**CreateContractResponse**

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

# **deleteContract**
> DeleteContractResponse deleteContract()

Delete a Contract by id.

### Example


```typescript
import { createConfiguration, ContractsApi } from '';
import type { ContractsApiDeleteContractRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContractsApi(configuration);

const request: ContractsApiDeleteContractRequest = {
  
  contractId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deleteContract(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | [**string**] |  | defaults to undefined


### Return type

**DeleteContractResponse**

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

# **getContract**
> GetContractResponse getContract()

Get a Contract by id.

### Example


```typescript
import { createConfiguration, ContractsApi } from '';
import type { ContractsApiGetContractRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContractsApi(configuration);

const request: ContractsApiGetContractRequest = {
  
  contractId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getContract(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | [**string**] |  | defaults to undefined


### Return type

**GetContractResponse**

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

# **getContractByIntegrationId**
> GetContractByIntegrationIdResponse getContractByIntegrationId()

Use this endpoint to get a specific contract using its integration provider and identifier.

### Example


```typescript
import { createConfiguration, ContractsApi } from '';
import type { ContractsApiGetContractByIntegrationIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContractsApi(configuration);

const request: ContractsApiGetContractByIntegrationIdRequest = {
  
  integrationType: "Hubspot",
  
  integrationId: "integrationId_example",
};

const data = await apiInstance.getContractByIntegrationId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationType** | **IntegrationProviders** |  | defaults to undefined
 **integrationId** | [**string**] |  | defaults to undefined


### Return type

**GetContractByIntegrationIdResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response contains the contract matching the provided integration id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listContracts**
> ListContractsResponse listContracts()

List contracts for the account. Optionally filter by customerId or customerExternalId to retrieve contracts for a specific customer (provide at most one, not both).

### Example


```typescript
import { createConfiguration, ContractsApi } from '';
import type { ContractsApiListContractsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContractsApi(configuration);

const request: ContractsApiListContractsRequest = {
  
  limit: 10,
  
  cursor: "cursor_example",
  
  customerId: "62ECB020842930cc01FFCCfe",
  
  customerExternalId: "customerExternalId_example",
};

const data = await apiInstance.listContracts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **customerId** | [**string**] |  | (optional) defaults to undefined
 **customerExternalId** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListContractsResponse**

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

# **refreshContractCredits**
> RefreshContractCreditsResponse refreshContractCredits(refreshContractCreditsRequest, )

Use this endpoint to refresh the credit grants on a contract by creating a new contract phase     (a contract revision) that takes effect immediately.      Provide a list of credit grants to refresh in the request body — each is identified by its credit product     (credit type) id and is set to non-prorated in the new phase, optionally with a new price. Every other credit     grant on the contract is set to prorated. If the grants list is omitted, all credit grants on the contract are     refreshed (set to non-prorated).      If a supplied credit product matches more than one grant product on the contract and a newPrice is provided,     the request is rejected because the price cannot be applied unambiguously.

### Example


```typescript
import { createConfiguration, ContractsApi } from '';
import type { ContractsApiRefreshContractCreditsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContractsApi(configuration);

const request: ContractsApiRefreshContractCreditsRequest = {
  
  refreshContractCreditsRequest: {
    grants: [
      {
        grantProductId: "62ECB020842930cc01FFCCfe",
        newPrice: 0,
      },
    ],
  },
  
  contractId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.refreshContractCredits(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshContractCreditsRequest** | **RefreshContractCreditsRequest**|  |
 **contractId** | [**string**] |  | defaults to undefined


### Return type

**RefreshContractCreditsResponse**

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

# **terminateContract**
> TerminateContractResponse terminateContract(terminateContractRequest, )

Use this endpoint to terminate a contract.     Provide a terminationDate in the request body to schedule the termination for a specific date,     or omit it to terminate the contract immediately.     The contract\'s status is set to PendingTermination and its end date is updated accordingly.

### Example


```typescript
import { createConfiguration, ContractsApi } from '';
import type { ContractsApiTerminateContractRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContractsApi(configuration);

const request: ContractsApiTerminateContractRequest = {
  
  terminateContractRequest: {
    terminationDate: new Date('1970-01-01T00:00:00.00Z'),
  },
  
  contractId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.terminateContract(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminateContractRequest** | **TerminateContractRequest**|  |
 **contractId** | [**string**] |  | defaults to undefined


### Return type

**TerminateContractResponse**

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


