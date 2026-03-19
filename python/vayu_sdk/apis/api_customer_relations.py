from openapi.api.customers_api import CustomersApi
from openapi.models.create_customer_relation_request import CreateCustomerRelationRequest
from openapi.models.create_customer_relation_response import CreateCustomerRelationResponse
from openapi.models.get_customer_relation_response import GetCustomerRelationResponse
from vayu_sdk.clients.vayu_client import VayuClient


class CustomerRelationsAPI:
    __client: CustomersApi = None

    def __init__(self, vayu_client: VayuClient):
        self.__client = CustomersApi(vayu_client.client)

    def create(self, parent_customer_id: str, child_customer_id: str):
        request = CreateCustomerRelationRequest(
            vayuParentCustomerId=parent_customer_id,
            vayuChildCustomerId=child_customer_id,
        )
        return self.__client.create_customer_relation(create_customer_relation_request=request)

    def get(self, customer_relation_id: str):
        return self.__client.get_customer_relation(customer_relation_id=customer_relation_id)
