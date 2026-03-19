# openapi.ContractsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_contract**](ContractsApi.md#create_contract) | **POST** /contracts | Create Contract
[**delete_contract**](ContractsApi.md#delete_contract) | **DELETE** /contracts/{contractId} | Delete Contract
[**get_contract**](ContractsApi.md#get_contract) | **GET** /contracts/{contractId} | Get Contract
[**get_contract_by_integration_id**](ContractsApi.md#get_contract_by_integration_id) | **GET** /contracts/integration/{integrationType}/{integrationId} | Get contract by integration id
[**list_contracts**](ContractsApi.md#list_contracts) | **GET** /contracts | List contracts


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
from openapi.models.integration_type import IntegrationType
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
    integration_type = openapi.IntegrationType() # IntegrationType | 
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
 **integration_type** | [**IntegrationType**](.md)|  | 
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
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_contracts**
> ListContractsResponse list_contracts(limit=limit, cursor=cursor, customer_id=customer_id)

List contracts

List contracts for the account. Optionally filter by customerId to retrieve contracts for a specific customer.

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

    try:
        # List contracts
        api_response = api_instance.list_contracts(limit=limit, cursor=cursor, customer_id=customer_id)
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

