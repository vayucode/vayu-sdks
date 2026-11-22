# CreditTopUpRequestCreditGrant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the credit grant. Used as the invoice line-item label when the grant is charged. | 
**credit_product_id** | **str** | ID of the credit product whose pool this grant funds. A usage product debits the same pool by listing this ID in consumesCreditProductIds. Discover IDs via GET /credit-products. | 
**balance_kind** | **str** | What grantAmount represents: a monetary value in the contract currency (MONETARY) or a quantity of units (UNIT). | 
**grant_amount** | **float** | Amount granted into the pool per grant period — a currency amount when balanceKind is MONETARY (e.g. 500 &#x3D; $500), or a unit quantity when balanceKind is UNIT. | 
**price** | **float** | Amount charged to the customer for this grant, in the contract currency. Required when balanceKind is UNIT (a unit quantity has no currency value of its own) — e.g. grant 1000 units for a price of 20 ($20). Optional when balanceKind is MONETARY: if omitted, the grant is sold at face value (price equals grantAmount). | [optional] 
**schedule** | **str** | How often the grant is applied: ONE_TIME grants once at contract start; RECURRING_MONTHLY, RECURRING_QUARTERLY and RECURRING_YEARLY re-grant each corresponding period. | 
**expiration_date** | **datetime** | Explicit date after which unused granted credits expire. Only supported on ONE_TIME grants. For policy-based expiry on recurring grants, use expirationPolicy instead. | [optional] 
**expiration_policy** | **str** | Controls when unused credits from a grant period expire. AT_NEXT_GRANT: credits expire at the end of each billing period (default for recurring). NEVER: credits never expire (default for ONE_TIME). END_OF_INVOICE: credits expire at the end of the invoice period. END_OF_RENEWAL_PERIOD: credits expire at the end of the contract renewal period. END_OF_CONTRACT: credits expire when the contract ends. AT_NEXT_GRANT and END_OF_INVOICE are not available for ONE_TIME grants. | [optional] 
**apply_automatically** | **bool** | Whether granted credits are applied to usage automatically. Defaults to true. | [optional] 
**external_integrations** | [**List[ProductExternalIntegration]**](ProductExternalIntegration.md) | Links the subscription created for a recurring credit grant to matching products in V3 integrations (e.g. Paddle). The grant&#39;s inferred product is linked to each external integration after the contract is created, so invoices for the grant are exported to it. At most one entry per provider. Applies only to credit grants on a contract — ignored on credit top-ups. Currently only Paddle is supported. | [optional] 

## Example

```python
from openapi.models.credit_top_up_request_credit_grant import CreditTopUpRequestCreditGrant

# TODO update the JSON string below
json = "{}"
# create an instance of CreditTopUpRequestCreditGrant from a JSON string
credit_top_up_request_credit_grant_instance = CreditTopUpRequestCreditGrant.from_json(json)
# print the JSON string representation of the object
print(CreditTopUpRequestCreditGrant.to_json())

# convert the object into a dict
credit_top_up_request_credit_grant_dict = credit_top_up_request_credit_grant_instance.to_dict()
# create an instance of CreditTopUpRequestCreditGrant from a dict
credit_top_up_request_credit_grant_from_dict = CreditTopUpRequestCreditGrant.from_dict(credit_top_up_request_credit_grant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


