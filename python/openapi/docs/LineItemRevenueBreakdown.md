# LineItemRevenueBreakdown

The revenue breakdown of the line item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**subtotal** | **float** |  | 
**overage** | **float** |  | 
**discount** | **float** |  | 
**credits_used** | **float** |  | 
**tax** | **float** |  | 

## Example

```python
from openapi.models.line_item_revenue_breakdown import LineItemRevenueBreakdown

# TODO update the JSON string below
json = "{}"
# create an instance of LineItemRevenueBreakdown from a JSON string
line_item_revenue_breakdown_instance = LineItemRevenueBreakdown.from_json(json)
# print the JSON string representation of the object
print(LineItemRevenueBreakdown.to_json())

# convert the object into a dict
line_item_revenue_breakdown_dict = line_item_revenue_breakdown_instance.to_dict()
# create an instance of LineItemRevenueBreakdown from a dict
line_item_revenue_breakdown_from_dict = LineItemRevenueBreakdown.from_dict(line_item_revenue_breakdown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


