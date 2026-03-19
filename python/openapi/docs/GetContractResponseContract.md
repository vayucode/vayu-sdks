# GetContractResponseContract


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **datetime** | The start date of the contract | 
**customer_id** | **str** | The id of the customer that the contract is associated with | 
**name** | **str** | The name of the contract | 
**sales_force_opportunity_id** | **str** | The id of the sales force opportunity that the contract is associated with | [optional] 
**end_date** | **datetime** | The end date of the contract | [optional] 
**signature_date** | **datetime** | The signature date of the contract | [optional] 
**products** | [**List[ProductGroupProductsInner]**](ProductGroupProductsInner.md) | The products that the contract is associated with | [optional] 
**product_groups** | [**List[ProductGroup]**](ProductGroup.md) | Product groups are list of products that can be grouped as a single line item with shared settings like ERP settings, commitment settings, etc. | [optional] 
**account_manager** | **str** | The name of the account manager of the contract | [optional] 
**should_pro_rate_invoices** | **bool** | Whether to pro rate the invoices for the contract. If not provided, it will default to false | [optional] 
**auto_renew_contract** | **bool** | Whether the contract is set to auto renew. If not provided, it will be treated as true | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) | Custom fields from CRM systems (Salesforce, HubSpot, etc.) | [optional] 
**custom_field_values** | [**List[CustomFieldValue]**](CustomFieldValue.md) | The stored custom field values associated with the contract | [optional] 
**status** | [**ContractStatus**](ContractStatus.md) |  | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi.models.get_contract_response_contract import GetContractResponseContract

# TODO update the JSON string below
json = "{}"
# create an instance of GetContractResponseContract from a JSON string
get_contract_response_contract_instance = GetContractResponseContract.from_json(json)
# print the JSON string representation of the object
print(GetContractResponseContract.to_json())

# convert the object into a dict
get_contract_response_contract_dict = get_contract_response_contract_instance.to_dict()
# create an instance of GetContractResponseContract from a dict
get_contract_response_contract_from_dict = GetContractResponseContract.from_dict(get_contract_response_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


