# .ProductConsumptionsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductConsumption**](ProductConsumptionsApi.md#getProductConsumption) | **GET** /product-consumption/{productId} | Get product consumption


# **getProductConsumption**
> GetProductConsumptionResponse getProductConsumption()

Use this action to get the consumption data for a product

### Example


```typescript
import { createConfiguration, ProductConsumptionsApi } from '';
import type { ProductConsumptionsApiGetProductConsumptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductConsumptionsApi(configuration);

const request: ProductConsumptionsApiGetProductConsumptionRequest = {
  
  productId: "productId_example",
};

const data = await apiInstance.getProductConsumption(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] |  | defaults to undefined


### Return type

**GetProductConsumptionResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response from the get product consumption action |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


