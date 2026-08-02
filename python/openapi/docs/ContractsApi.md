# openapi.ContractsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_contract**](ContractsApi.md#create_contract) | **POST** /contracts | Create Contract
[**delete_contract**](ContractsApi.md#delete_contract) | **DELETE** /contracts/{contractId} | Delete Contract
[**get_contract**](ContractsApi.md#get_contract) | **GET** /contracts/{contractId} | Get Contract
[**get_contract_by_integration_id**](ContractsApi.md#get_contract_by_integration_id) | **GET** /contracts/integration/{integrationType}/{integrationId} | Get contract by integration id
[**list_contracts**](ContractsApi.md#list_contracts) | **GET** /contracts | List contracts
[**refresh_contract_credits**](ContractsApi.md#refresh_contract_credits) | **POST** /contracts/{contractId}/credits/refresh | Refresh the credit grants on a contract
[**terminate_contract**](ContractsApi.md#terminate_contract) | **POST** /contracts/{contractId}/terminate | Terminate a contract


# **create_contract**
> CreateContractResponse create_contract(create_contract_request)

Create Contract

Create a new Contract.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.create_contract_request import CreateContractRequest
from openapi.models.create_contract_response import CreateContractResponse
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
    api_instance = openapi.ContractsApi(api_client)
    create_contract_request = openapi.CreateContractRequest() # CreateContractRequest | 

    try:
        # Create Contract
        api_response = api_instance.create_contract(create_contract_request)
        print("The response of ContractsApi->create_contract:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->create_contract: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_contract_request** | [**CreateContractRequest**](CreateContractRequest.md)|  | 

### Return type

[**CreateContractResponse**](CreateContractResponse.md)

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
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_contract**
> DeleteContractResponse delete_contract(contract_id)

Delete Contract

Delete a Contract by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.delete_contract_response import DeleteContractResponse
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
    api_instance = openapi.ContractsApi(api_client)
    contract_id = 'contract_id_example' # str | 

    try:
        # Delete Contract
        api_response = api_instance.delete_contract(contract_id)
        print("The response of ContractsApi->delete_contract:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->delete_contract: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract_id** | **str**|  | 

### Return type

[**DeleteContractResponse**](DeleteContractResponse.md)

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

# **get_contract**
> GetContractResponse get_contract(contract_id)

Get Contract

Get a Contract by id.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_contract_response import GetContractResponse
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
    api_instance = openapi.ContractsApi(api_client)
    contract_id = 'contract_id_example' # str | 

    try:
        # Get Contract
        api_response = api_instance.get_contract(contract_id)
        print("The response of ContractsApi->get_contract:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->get_contract: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract_id** | **str**|  | 

### Return type

[**GetContractResponse**](GetContractResponse.md)

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

# **get_contract_by_integration_id**
> GetContractByIntegrationIdResponse get_contract_by_integration_id(integration_type, integration_id)

Get contract by integration id

Use this endpoint to get a specific contract using its integration provider and identifier.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.get_contract_by_integration_id_response import GetContractByIntegrationIdResponse
from openapi.models.integration_providers import IntegrationProviders
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
    api_instance = openapi.ContractsApi(api_client)
    integration_type = openapi.IntegrationProviders() # IntegrationProviders | 
    integration_id = 'integration_id_example' # str | 

    try:
        # Get contract by integration id
        api_response = api_instance.get_contract_by_integration_id(integration_type, integration_id)
        print("The response of ContractsApi->get_contract_by_integration_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->get_contract_by_integration_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integration_type** | [**IntegrationProviders**](.md)|  | 
 **integration_id** | **str**|  | 

### Return type

[**GetContractByIntegrationIdResponse**](GetContractByIntegrationIdResponse.md)

### Authorization

[BearerAuthorizer](../README.md#BearerAuthorizer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_contracts**
> ListContractsResponse list_contracts(limit=limit, cursor=cursor, customer_id=customer_id, customer_external_id=customer_external_id)

List contracts

List contracts for the account. Optionally filter by customerId or customerExternalId to retrieve contracts for a specific customer (provide at most one, not both).

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.list_contracts_response import ListContractsResponse
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
    api_instance = openapi.ContractsApi(api_client)
    limit = 10 # float |  (optional) (default to 10)
    cursor = 'cursor_example' # str |  (optional)
    customer_id = 'customer_id_example' # str |  (optional)
    customer_external_id = 'customer_external_id_example' # str |  (optional)

    try:
        # List contracts
        api_response = api_instance.list_contracts(limit=limit, cursor=cursor, customer_id=customer_id, customer_external_id=customer_external_id)
        print("The response of ContractsApi->list_contracts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->list_contracts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**|  | [optional] [default to 10]
 **cursor** | **str**|  | [optional] 
 **customer_id** | **str**|  | [optional] 
 **customer_external_id** | **str**|  | [optional] 

### Return type

[**ListContractsResponse**](ListContractsResponse.md)

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

# **refresh_contract_credits**
> RefreshContractCreditsResponse refresh_contract_credits(refresh_contract_credits_request, contract_id)

Refresh the credit grants on a contract

Use this endpoint to refresh the credit grants on a contract by creating a new contract phase     (a contract revision) that takes effect immediately.      Provide a list of credit grants to refresh in the request body — each is identified by its credit product     (credit type) id and is set to non-prorated in the new phase, optionally with a new price. Every other credit     grant on the contract is set to prorated. If the grants list is omitted, all credit grants on the contract are     refreshed (set to non-prorated).      If a supplied credit product matches more than one grant product on the contract and a newPrice is provided,     the request is rejected because the price cannot be applied unambiguously.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.refresh_contract_credits_request import RefreshContractCreditsRequest
from openapi.models.refresh_contract_credits_response import RefreshContractCreditsResponse
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
    api_instance = openapi.ContractsApi(api_client)
    refresh_contract_credits_request = openapi.RefreshContractCreditsRequest() # RefreshContractCreditsRequest | 
    contract_id = 'contract_id_example' # str | 

    try:
        # Refresh the credit grants on a contract
        api_response = api_instance.refresh_contract_credits(refresh_contract_credits_request, contract_id)
        print("The response of ContractsApi->refresh_contract_credits:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->refresh_contract_credits: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refresh_contract_credits_request** | [**RefreshContractCreditsRequest**](RefreshContractCreditsRequest.md)|  | 
 **contract_id** | **str**|  | 

### Return type

[**RefreshContractCreditsResponse**](RefreshContractCreditsResponse.md)

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
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminate_contract**
> TerminateContractResponse terminate_contract(terminate_contract_request, contract_id)

Terminate a contract

Use this endpoint to terminate a contract.     Provide a terminationDate in the request body to schedule the termination for a specific date,     or omit it to terminate the contract immediately.     The contract's status is set to PendingTermination and its end date is updated accordingly.

### Example

* Bearer (JWT) Authentication (BearerAuthorizer):

```python
import openapi
from openapi.models.terminate_contract_request import TerminateContractRequest
from openapi.models.terminate_contract_response import TerminateContractResponse
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
    api_instance = openapi.ContractsApi(api_client)
    terminate_contract_request = openapi.TerminateContractRequest() # TerminateContractRequest | 
    contract_id = 'contract_id_example' # str | 

    try:
        # Terminate a contract
        api_response = api_instance.terminate_contract(terminate_contract_request, contract_id)
        print("The response of ContractsApi->terminate_contract:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->terminate_contract: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminate_contract_request** | [**TerminateContractRequest**](TerminateContractRequest.md)|  | 
 **contract_id** | **str**|  | 

### Return type

[**TerminateContractResponse**](TerminateContractResponse.md)

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
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

