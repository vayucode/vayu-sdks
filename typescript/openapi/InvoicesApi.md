# .InvoicesApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelInvoice**](InvoicesApi.md#cancelInvoice) | **POST** /invoices/{invoiceId}/cancel | Cancel an invoice
[**deleteInvoice**](InvoicesApi.md#deleteInvoice) | **DELETE** /invoices/{invoiceId} | Delete Invoice
[**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /invoices/{invoiceId} | Get Invoice
[**getInvoicePaymentStatus**](InvoicesApi.md#getInvoicePaymentStatus) | **GET** /invoices/{invoiceId}/payment-status | Get invoice payment status
[**listInvoices**](InvoicesApi.md#listInvoices) | **GET** /invoices | List invoices
[**recordInvoicePayment**](InvoicesApi.md#recordInvoicePayment) | **POST** /invoices/{invoiceId}/payments | Record a payment on an invoice
[**reissueInvoice**](InvoicesApi.md#reissueInvoice) | **POST** /invoices/{invoiceId}/reissue | Reissue an invoice
[**updateInvoiceDueDate**](InvoicesApi.md#updateInvoiceDueDate) | **PUT** /invoices/{invoiceId}/due-date | Update the due date of an invoice
[**updateInvoiceIssueDate**](InvoicesApi.md#updateInvoiceIssueDate) | **PUT** /invoices/{invoiceId}/issue-date | Update the issue date of an invoice


# **cancelInvoice**
> CancelInvoiceResponse cancelInvoice()

Use this endpoint to cancel an invoice.     Only an approved invoice with no payments recorded can be cancelled.     Cancelling an invoice cannot be undone.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiCancelInvoiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiCancelInvoiceRequest = {
  
  invoiceId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.cancelInvoice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | [**string**] |  | defaults to undefined


### Return type

**CancelInvoiceResponse**

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
**409** | Conflict |  -  |
**424** | Failed Dependency |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteInvoice**
> DeleteInvoiceResponse deleteInvoice()

Delete a Invoice by id.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiDeleteInvoiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiDeleteInvoiceRequest = {
  
  invoiceId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deleteInvoice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | [**string**] |  | defaults to undefined


### Return type

**DeleteInvoiceResponse**

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
  
  billingStatus: "None",
  
  issuedAfter: "issuedAfter_example",
  
  issuedBefore: "issuedBefore_example",
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
 **billingStatus** | **InvoiceBillingStatus** |  | (optional) defaults to undefined
 **issuedAfter** | [**string**] |  | (optional) defaults to undefined
 **issuedBefore** | [**string**] |  | (optional) defaults to undefined


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

# **recordInvoicePayment**
> RecordInvoicePaymentResponse recordInvoicePayment(recordInvoicePaymentRequest, )

Use this endpoint to record a payment on an approved invoice.     Provide the amount and an idempotencyKey in the request body.     Partial payments are allowed. When the amount is higher than what is still owed, the invoice is marked as paid and the excess is added as a credit to the customer.     That credit is not exported as a credit memo to a connected accounting system.     The idempotencyKey makes a retry safe: repeating a request with the same key and the same body does not record a second payment, and the same key with a different body is rejected.     An idempotencyKey is remembered for 24 hours.     A request whose transactionId is already recorded on the invoice is refused.     If a request with the same idempotencyKey is still being processed or ended without a result, the answer is a conflict: retry after a short delay, and if the answer stays the same, read the invoice to check whether the payment was recorded and, if it was not, send the request again with a new idempotencyKey.     A recorded payment cannot be edited or deleted through the API.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiRecordInvoicePaymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiRecordInvoicePaymentRequest = {
  
  recordInvoicePaymentRequest: {
    date: new Date('1970-01-01T00:00:00.00Z'),
    paymentMethod: "paymentMethod_example",
    transactionId: "transactionId_example",
    note: "note_example",
    paymentMethodId: "paymentMethodId_example",
    depositTo: {
      id: "id_example",
      name: "name_example",
      integration: "NetSuite",
    },
    amount: 0,
    idempotencyKey: "idempotencyKey_example",
  },
  
  invoiceId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.recordInvoicePayment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordInvoicePaymentRequest** | **RecordInvoicePaymentRequest**|  |
 **invoiceId** | [**string**] |  | defaults to undefined


### Return type

**RecordInvoicePaymentResponse**

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
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reissueInvoice**
> ReissueInvoiceResponse reissueInvoice()

Use this endpoint to reissue an invoice: the original invoice is cancelled and a replacement is produced.     Only an approved invoice with no payments or credits applied that is not linked to a parent or child invoice can be reissued.     The original invoice is cancelled and cannot be restored.     For a manually created invoice, the replacement is created right away and its id is returned in replacementInvoiceId by this call only. Store it, because calling this endpoint again for that invoice is refused.     For an invoice generated from a contract, replacementInvoiceId is null at first because the replacement is generated shortly after the request. Calling this endpoint again returns the replacement\'s id once it exists and can be matched to this invoice; otherwise it returns null and asks again for the replacement to be generated.     A replacement can be read through GET /invoices/{invoiceId} only once it has finished calculating, because invoices that are still being calculated are not returned.     Invoice reissue must be enabled for your account.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiReissueInvoiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiReissueInvoiceRequest = {
  
  invoiceId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.reissueInvoice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | [**string**] |  | defaults to undefined


### Return type

**ReissueInvoiceResponse**

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
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**424** | Failed Dependency |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateInvoiceDueDate**
> UpdateInvoiceDueDateResponse updateInvoiceDueDate(updateInvoiceDueDateRequest, )

Use this endpoint to change the due date of an invoice.     Provide the new dueDate in the request body.     The due date of an invoice that is already paid or cancelled cannot be changed.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiUpdateInvoiceDueDateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiUpdateInvoiceDueDateRequest = {
  
  updateInvoiceDueDateRequest: {
    dueDate: new Date('1970-01-01T00:00:00.00Z'),
  },
  
  invoiceId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.updateInvoiceDueDate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInvoiceDueDateRequest** | **UpdateInvoiceDueDateRequest**|  |
 **invoiceId** | [**string**] |  | defaults to undefined


### Return type

**UpdateInvoiceDueDateResponse**

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

# **updateInvoiceIssueDate**
> UpdateInvoiceIssueDateResponse updateInvoiceIssueDate(updateInvoiceIssueDateRequest, )

Use this endpoint to change the issue date of an invoice.     Provide the new issuedAt date in the request body.     The issue date can only be changed before the invoice is approved.     Changing it recalculates the due date from the invoice\'s payment terms.

### Example


```typescript
import { createConfiguration, InvoicesApi } from '';
import type { InvoicesApiUpdateInvoiceIssueDateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InvoicesApi(configuration);

const request: InvoicesApiUpdateInvoiceIssueDateRequest = {
  
  updateInvoiceIssueDateRequest: {
    issuedAt: new Date('1970-01-01T00:00:00.00Z'),
  },
  
  invoiceId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.updateInvoiceIssueDate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInvoiceIssueDateRequest** | **UpdateInvoiceIssueDateRequest**|  |
 **invoiceId** | [**string**] |  | defaults to undefined


### Return type

**UpdateInvoiceIssueDateResponse**

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
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


