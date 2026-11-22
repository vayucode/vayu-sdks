# openapi.InvoicesApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_invoice**](InvoicesApi.md#cancel_invoice) | **POST** /invoices/{invoiceId}/cancel | Cancel an invoice
[**delete_invoice**](InvoicesApi.md#delete_invoice) | **DELETE** /invoices/{invoiceId} | Delete Invoice
[**get_invoice**](InvoicesApi.md#get_invoice) | **GET** /invoices/{invoiceId} | Get Invoice
[**get_invoice_payment_status**](InvoicesApi.md#get_invoice_payment_status) | **GET** /invoices/{invoiceId}/payment-status | Get invoice payment status
[**list_invoices**](InvoicesApi.md#list_invoices) | **GET** /invoices | List invoices
[**record_invoice_payment**](InvoicesApi.md#record_invoice_payment) | **POST** /invoices/{invoiceId}/payments | Record a payment on an invoice
[**reissue_invoice**](InvoicesApi.md#reissue_invoice) | **POST** /invoices/{invoiceId}/reissue | Reissue an invoice
[**update_invoice_due_date**](InvoicesApi.md#update_invoice_due_date) | **PUT** /invoices/{invoiceId}/due-date | Update the due date of an invoice
[**update_invoice_issue_date**](InvoicesApi.md#update_invoice_issue_date) | **PUT** /invoices/{invoiceId}/issue-date | Update the issue date of an invoice


# **cancel_invoice**
> CancelInvoiceResponse cancel_invoice(invoice_id)

Cancel an invoice

Use this endpoint to cancel an invoice.     Only an approved invoice with no payments recorded can be cancelled.     Cancelling an invoice cannot be undone.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.cancel_invoice_response import CancelInvoiceResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    invoice_id = 'invoice_id_example' # str | 

    try:
        # Cancel an invoice
        api_response = api_instance.cancel_invoice(invoice_id)
        print("The response of InvoicesApi->cancel_invoice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->cancel_invoice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice_id** | **str**|  | 

### Return type

[**CancelInvoiceResponse**](CancelInvoiceResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_invoice**
> DeleteInvoiceResponse delete_invoice(invoice_id)

Delete Invoice

Delete a Invoice by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.delete_invoice_response import DeleteInvoiceResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    invoice_id = 'invoice_id_example' # str | 

    try:
        # Delete Invoice
        api_response = api_instance.delete_invoice(invoice_id)
        print("The response of InvoicesApi->delete_invoice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->delete_invoice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice_id** | **str**|  | 

### Return type

[**DeleteInvoiceResponse**](DeleteInvoiceResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_invoice**
> GetInvoiceResponse get_invoice(invoice_id)

Get Invoice

Get a Invoice by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_invoice_response import GetInvoiceResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    invoice_id = 'invoice_id_example' # str | 

    try:
        # Get Invoice
        api_response = api_instance.get_invoice(invoice_id)
        print("The response of InvoicesApi->get_invoice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->get_invoice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice_id** | **str**|  | 

### Return type

[**GetInvoiceResponse**](GetInvoiceResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_invoice_payment_status**
> InvoicePaymentStatusResponse get_invoice_payment_status(invoice_id)

Get invoice payment status

Use this endpoint to retrieve payment status information for a specific invoice, including payment status, amount due, amount paid, total, due date, paid date, and invoice PDF URL.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.invoice_payment_status_response import InvoicePaymentStatusResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    invoice_id = 'invoice_id_example' # str | 

    try:
        # Get invoice payment status
        api_response = api_instance.get_invoice_payment_status(invoice_id)
        print("The response of InvoicesApi->get_invoice_payment_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->get_invoice_payment_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice_id** | **str**|  | 

### Return type

[**InvoicePaymentStatusResponse**](InvoicePaymentStatusResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_invoices**
> ListInvoicesResponse list_invoices(limit=limit, cursor=cursor, customer_id=customer_id, billing_status=billing_status, issued_after=issued_after, issued_before=issued_before)

List invoices

List invoices for the account. Optionally filter by customerId to retrieve invoices for a specific customer.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.invoice_billing_status import InvoiceBillingStatus
from openapi.models.list_invoices_response import ListInvoicesResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)
    customer_id = 'customer_id_example' # str |  (optional)
    billing_status = openapi.InvoiceBillingStatus() # InvoiceBillingStatus |  (optional)
    issued_after = 'issued_after_example' # str |  (optional)
    issued_before = 'issued_before_example' # str |  (optional)

    try:
        # List invoices
        api_response = api_instance.list_invoices(limit=limit, cursor=cursor, customer_id=customer_id, billing_status=billing_status, issued_after=issued_after, issued_before=issued_before)
        print("The response of InvoicesApi->list_invoices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->list_invoices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 
 **customer_id** | **str**|  | [optional] 
 **billing_status** | [**InvoiceBillingStatus**](.md)|  | [optional] 
 **issued_after** | **str**|  | [optional] 
 **issued_before** | **str**|  | [optional] 

### Return type

[**ListInvoicesResponse**](ListInvoicesResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_invoice_payment**
> RecordInvoicePaymentResponse record_invoice_payment(record_invoice_payment_request, invoice_id)

Record a payment on an invoice

Use this endpoint to record a payment on an approved invoice.     Provide the amount and an idempotencyKey in the request body.     Partial payments are allowed. When the amount is higher than what is still owed, the invoice is marked as paid and the excess is added as a credit to the customer.     That credit is not exported as a credit memo to a connected accounting system.     The idempotencyKey makes a retry safe: repeating a request with the same key and the same body does not record a second payment, and the same key with a different body is rejected.     An idempotencyKey is remembered for 24 hours.     A request whose transactionId is already recorded on the invoice is refused.     If a request with the same idempotencyKey is still being processed or ended without a result, the answer is a conflict: retry after a short delay, and if the answer stays the same, read the invoice to check whether the payment was recorded and, if it was not, send the request again with a new idempotencyKey.     A recorded payment cannot be edited or deleted through the API.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.record_invoice_payment_request import RecordInvoicePaymentRequest
from openapi.models.record_invoice_payment_response import RecordInvoicePaymentResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    record_invoice_payment_request = openapi.RecordInvoicePaymentRequest() # RecordInvoicePaymentRequest | 
    invoice_id = 'invoice_id_example' # str | 

    try:
        # Record a payment on an invoice
        api_response = api_instance.record_invoice_payment(record_invoice_payment_request, invoice_id)
        print("The response of InvoicesApi->record_invoice_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->record_invoice_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **record_invoice_payment_request** | [**RecordInvoicePaymentRequest**](RecordInvoicePaymentRequest.md)|  | 
 **invoice_id** | **str**|  | 

### Return type

[**RecordInvoicePaymentResponse**](RecordInvoicePaymentResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reissue_invoice**
> ReissueInvoiceResponse reissue_invoice(invoice_id)

Reissue an invoice

Use this endpoint to reissue an invoice: the original invoice is cancelled and a replacement is produced.     Only an approved invoice with no payments or credits applied that is not linked to a parent or child invoice can be reissued.     The original invoice is cancelled and cannot be restored.     For a manually created invoice, the replacement is created right away and its id is returned in replacementInvoiceId by this call only. Store it, because calling this endpoint again for that invoice is refused.     For an invoice generated from a contract, replacementInvoiceId is null at first because the replacement is generated shortly after the request. Calling this endpoint again returns the replacement's id once it exists and can be matched to this invoice; otherwise it returns null and asks again for the replacement to be generated.     A replacement can be read through GET /invoices/{invoiceId} only once it has finished calculating, because invoices that are still being calculated are not returned.     Invoice reissue must be enabled for your account.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.reissue_invoice_response import ReissueInvoiceResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    invoice_id = 'invoice_id_example' # str | 

    try:
        # Reissue an invoice
        api_response = api_instance.reissue_invoice(invoice_id)
        print("The response of InvoicesApi->reissue_invoice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->reissue_invoice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice_id** | **str**|  | 

### Return type

[**ReissueInvoiceResponse**](ReissueInvoiceResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_invoice_due_date**
> UpdateInvoiceDueDateResponse update_invoice_due_date(update_invoice_due_date_request, invoice_id)

Update the due date of an invoice

Use this endpoint to change the due date of an invoice.     Provide the new dueDate in the request body.     The due date of an invoice that is already paid or cancelled cannot be changed.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.update_invoice_due_date_request import UpdateInvoiceDueDateRequest
from openapi.models.update_invoice_due_date_response import UpdateInvoiceDueDateResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    update_invoice_due_date_request = openapi.UpdateInvoiceDueDateRequest() # UpdateInvoiceDueDateRequest | 
    invoice_id = 'invoice_id_example' # str | 

    try:
        # Update the due date of an invoice
        api_response = api_instance.update_invoice_due_date(update_invoice_due_date_request, invoice_id)
        print("The response of InvoicesApi->update_invoice_due_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->update_invoice_due_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_invoice_due_date_request** | [**UpdateInvoiceDueDateRequest**](UpdateInvoiceDueDateRequest.md)|  | 
 **invoice_id** | **str**|  | 

### Return type

[**UpdateInvoiceDueDateResponse**](UpdateInvoiceDueDateResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_invoice_issue_date**
> UpdateInvoiceIssueDateResponse update_invoice_issue_date(update_invoice_issue_date_request, invoice_id)

Update the issue date of an invoice

Use this endpoint to change the issue date of an invoice.     Provide the new issuedAt date in the request body.     The issue date can only be changed before the invoice is approved.     Changing it recalculates the due date from the invoice's payment terms.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.update_invoice_issue_date_request import UpdateInvoiceIssueDateRequest
from openapi.models.update_invoice_issue_date_response import UpdateInvoiceIssueDateResponse
from openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.withvayu.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi.Configuration(
    host = "https://connect.withvayu.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): BearerAuthorizer
configuration = openapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi.InvoicesApi(api_client)
    update_invoice_issue_date_request = openapi.UpdateInvoiceIssueDateRequest() # UpdateInvoiceIssueDateRequest | 
    invoice_id = 'invoice_id_example' # str | 

    try:
        # Update the issue date of an invoice
        api_response = api_instance.update_invoice_issue_date(update_invoice_issue_date_request, invoice_id)
        print("The response of InvoicesApi->update_invoice_issue_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->update_invoice_issue_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_invoice_issue_date_request** | [**UpdateInvoiceIssueDateRequest**](UpdateInvoiceIssueDateRequest.md)|  | 
 **invoice_id** | **str**|  | 

### Return type

[**UpdateInvoiceIssueDateResponse**](UpdateInvoiceIssueDateResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

