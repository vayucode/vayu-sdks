# CreateCustomerRequestShippingAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** |  | [optional] 
**country_code** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**address_text** | **str** |  | [optional] 
**street_name** | **str** |  | [optional] 
**apartment** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 

## Example

```python
from openapi.models.create_customer_request_shipping_address import CreateCustomerRequestShippingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomerRequestShippingAddress from a JSON string
create_customer_request_shipping_address_instance = CreateCustomerRequestShippingAddress.from_json(json)
# print the JSON string representation of the object
print(CreateCustomerRequestShippingAddress.to_json())

# convert the object into a dict
create_customer_request_shipping_address_dict = create_customer_request_shipping_address_instance.to_dict()
# create an instance of CreateCustomerRequestShippingAddress from a dict
create_customer_request_shipping_address_from_dict = CreateCustomerRequestShippingAddress.from_dict(create_customer_request_shipping_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


