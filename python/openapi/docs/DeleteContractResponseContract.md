# DeleteContractResponseContract


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **datetime** | The start date of the contract | 
**customer_id** | **str** | The id of the customer that the contract is associated with | 
**plan_id** | **str** | The id of an existing plan to attach to this contract. When provided, products/productGroups are ignored and the plan is used as-is. Mutually exclusive with inline product definition. | [optional] 
**name** | **str** | The name of the contract. Required when planId is not provided. | [optional] 
**sales_force_opportunity_id** | **str** | The id of the sales force opportunity that the contract is associated with | [optional] 
**end_date** | **datetime** | The end date of the contract | [optional] 
**signature_date** | **datetime** | The signature date of the contract | [optional] 
**products** | [**List[ProductGroupProductsInner]**](ProductGroupProductsInner.md) | The products that the contract is associated with | [optional] 
**credit_grants** | [**List[ExternalCreditGrant]**](ExternalCreditGrant.md) | Credit grants that fund credit pools for the customer under this contract. Each grant credits a pool identified by its creditProductId; usage products draw down those pools via consumesCreditProductIds. | [optional] 
**product_groups** | [**List[ProductGroup]**](ProductGroup.md) | Product groups are list of products that can be grouped as a single line item with shared settings like ERP settings, commitment settings, etc. | [optional] 
**account_manager** | **str** | The name of the account manager of the contract | [optional] 
**should_pro_rate_invoices** | **bool** | Whether to pro rate the invoices for the contract. If not provided, it will default to false | [optional] 
**auto_renew_contract** | **bool** | Whether the contract is set to auto renew. If not provided, it will be treated as true | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) | Custom fields from CRM systems (Salesforce, HubSpot, etc.) | [optional] 
**custom_field_values** | [**List[CustomFieldValue]**](CustomFieldValue.md) | The stored custom field values associated with the contract | [optional] 
**status** | [**ContractStatus**](ContractStatus.md) |  | [optional] 
**purchase_order** | **str** | The purchase order number of the contract | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**is_trial** | **bool** | Whether the contract is a trial. All invoices under a trial contract are flagged with isTrial: true. If not provided, it defaults to false. | [optional] 
**external_id** | **str** | A caller-owned external id for the contract. Once set, the contract can be fetched or deleted by passing this value in place of the Vayu id on the /contracts/{contractId} endpoints. | [optional] 
**id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**deleted_at** | **str** |  | 

## Example

```python
from openapi.models.delete_contract_response_contract import DeleteContractResponseContract

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteContractResponseContract from a JSON string
delete_contract_response_contract_instance = DeleteContractResponseContract.from_json(json)
# print the JSON string representation of the object
print(DeleteContractResponseContract.to_json())

# convert the object into a dict
delete_contract_response_contract_dict = delete_contract_response_contract_instance.to_dict()
# create an instance of DeleteContractResponseContract from a dict
delete_contract_response_contract_from_dict = DeleteContractResponseContract.from_dict(delete_contract_response_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


