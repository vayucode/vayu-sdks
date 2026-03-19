# GetCustomerByNameResponseCustomer

The customer matching the provided name

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the customer | 
**aliases** | **List[str]** | The aliases of the customer used to match events to the customer. | [optional] [default to []]
**contacts** | [**List[Contact]**](Contact.md) | The contacts of the customer. Contact marked as primary is the target for invoice sharing. | [optional] 
**source** | [**CustomerSource**](CustomerSource.md) |  | [optional] 
**legal_name** | **str** | The legal name of the customer | [optional] 
**tax_ids** | **List[str]** | The tax IDs of the customer | [optional] [default to []]
**tax_id** | **str** | The tax ID of the customer (deprecated, use taxIds instead) | [optional] 
**cloud_provider_settings** | [**CustomerCloudProviderSettings**](CustomerCloudProviderSettings.md) |  | [optional] 
**external_id** | **str** | The external ID of the customer | [optional] 
**customer_erp_id** | **str** | The ID of the customer in the ERP system | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**sales_force_account_id** | **str** | The ID of the customer in the Salesforce system | [optional] 
**due_days** | **str** | The due days of the customer | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) | Custom fields from CRM systems (Salesforce, HubSpot, etc.) | [optional] 
**subsidiary** | **str** | The name of the subsidiary of the customer | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.get_customer_by_name_response_customer import GetCustomerByNameResponseCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerByNameResponseCustomer from a JSON string
get_customer_by_name_response_customer_instance = GetCustomerByNameResponseCustomer.from_json(json)
# print the JSON string representation of the object
print(GetCustomerByNameResponseCustomer.to_json())

# convert the object into a dict
get_customer_by_name_response_customer_dict = get_customer_by_name_response_customer_instance.to_dict()
# create an instance of GetCustomerByNameResponseCustomer from a dict
get_customer_by_name_response_customer_from_dict = GetCustomerByNameResponseCustomer.from_dict(get_customer_by_name_response_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


