# .InvoicesApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /invoices/{invoiceId} | Get Invoice
[**getInvoicePaymentStatus**](InvoicesApi.md#getInvoicePaymentStatus) | **GET** /invoices/{invoiceId}/payment-status | Get invoice payment status
[**listInvoices**](InvoicesApi.md#listInvoices) | **GET** /invoices | List invoices


# **getInvoice**
> GetInvoiceResponse getInvoice()

Get a Invoice by id.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiGetInvoiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiGetInvoiceRequest = {
  
  invoiceId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getInvoice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | [**string**] |  | defaults to undefined


### Return type

**GetInvoiceResponse**

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

# **getInvoicePaymentStatus**
> InvoicePaymentStatusResponse getInvoicePaymentStatus()

Use this endpoint to retrieve payment status information for a specific invoice, including payment status, amount due, amount paid, total, due date, paid date, and invoice PDF URL.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiGetInvoicePaymentStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiGetInvoicePaymentStatusRequest = {
  
  invoiceId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getInvoicePaymentStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | [**string**] |  | defaults to undefined


### Return type

**InvoicePaymentStatusResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invoice payment status information including payment status, amounts, and dates. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listInvoices**
> ListInvoicesResponse listInvoices()

List invoices for the account. Optionally filter by customerId to retrieve invoices for a specific customer.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiListInvoicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiListInvoicesRequest = {
  
  limit: 10,
  
  cursor: "cursor_example",
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.listInvoices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **customerId** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListInvoicesResponse**

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


