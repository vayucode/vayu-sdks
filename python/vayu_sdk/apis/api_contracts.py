from datetime import datetime
from typing import List, Optional

from openapi.api.contracts_api import ContractsApi
from vayu_sdk.clients.vayu_client import VayuClient
from openapi.models.contract_status import ContractStatus
from openapi.models.create_contract_request import CreateContractRequest
from openapi.models.custom_field import CustomField
from openapi.models.custom_field_value import CustomFieldValue
from openapi.models.product_group import ProductGroup
from openapi.models.product_group_products_inner import ProductGroupProductsInner

from openapi.models.get_contract_response_contract import GetContractResponseContract
from openapi.models.list_contracts_response import ListContractsResponse
from openapi.models.get_contract_response import GetContractResponse
from openapi.models.create_contract_response import CreateContractResponse
from openapi.models.delete_contract_response import DeleteContractResponse
from openapi.models.get_contract_by_integration_id_response import GetContractByIntegrationIdResponse
from openapi.models.integration_type import IntegrationType

Contract = GetContractResponseContract


class ContractsAPI:
    __client: ContractsApi = None

    def __init__(self, vayu_client: VayuClient):
        self.__client = ContractsApi(vayu_client.client)

    def list(self, limit: int = None, cursor: int = None):
        return self.__client.list_contracts(limit=limit, cursor=cursor)

    def get(self, id: str):
        response = self.__client.get_contract(contract_id=id)

        return response

    def create(
        self,
        name: str,
        customer_id: str,
        start_date: datetime,
        end_date: Optional[datetime] = None,
        products: Optional[List[ProductGroupProductsInner]] = None,
        product_groups: Optional[List[ProductGroup]] = None,
        status: Optional[ContractStatus] = None,
        auto_renew_contract: Optional[bool] = None,
        should_pro_rate_invoices: Optional[bool] = None,
        custom_fields: Optional[List[CustomField]] = None,
        custom_field_values: Optional[List[CustomFieldValue]] = None,
    ):
        request = CreateContractRequest(
            name=name,
            customerId=customer_id,
            startDate=start_date,
            endDate=end_date,
            products=products,
            productGroups=product_groups,
            status=status,
            autoRenewContract=auto_renew_contract,
            shouldProRateInvoices=should_pro_rate_invoices,
            customFields=custom_fields,
            customFieldValues=custom_field_values,
        )
        return self.__client.create_contract(create_contract_request=request)

    def delete(self, id: str):
        response = self.__client.delete_contract(contract_id=id)

        return response

    def get_by_integration_id(self, integration_type: IntegrationType, integration_id: str):
        return self.__client.get_contract_by_integration_id(
            integration_type=integration_type,
            integration_id=integration_id,
        )
