# BillingDate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor** | [**BillingDateAnchor**](BillingDateAnchor.md) |  | 
**day_of_month** | **int** |  | 

## Example

```python
from openapi.models.billing_date import BillingDate

# TODO update the JSON string below
json = "{}"
# create an instance of BillingDate from a JSON string
billing_date_instance = BillingDate.from_json(json)
# print the JSON string representation of the object
print(BillingDate.to_json())

# convert the object into a dict
billing_date_dict = billing_date_instance.to_dict()
# create an instance of BillingDate from a dict
billing_date_from_dict = BillingDate.from_dict(billing_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


