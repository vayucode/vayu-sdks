# .CreditProductsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCreditProducts**](CreditProductsApi.md#listCreditProducts) | **GET** /credit-products | List credit products


# **listCreditProducts**
> ListCreditProductsResponse listCreditProducts()

Retrieve the credit products defined in your account. Use a credit product ID to fund a credit pool (a product creditGrant.creditProductId) or to debit one (a usage product consumesCreditProductIds). Distinct from the credit ledger (GET /credits).

### Example


```typescript
import { createConfiguration, CreditProductsApi } from '';

const configuration = createConfiguration();
const apiInstance = new CreditProductsApi(configuration);

const request = {};

const data = await apiInstance.listCreditProducts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListCreditProductsResponse**

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


