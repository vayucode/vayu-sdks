from openapi.api.invoices_api import InvoicesApi
from vayu_sdk.clients.vayu_client import VayuClient

from openapi.models.get_invoice_response_invoice import GetInvoiceResponseInvoice
from openapi.models.list_invoices_response import ListInvoicesResponse
from openapi.models.get_invoice_response import GetInvoiceResponse
from openapi.models.invoice_payment_status_response import InvoicePaymentStatusResponse

Invoice = GetInvoiceResponseInvoice

class InvoicesAPI:
    __client: InvoicesApi = None

    def __init__(self, vayu_client: VayuClient):
        self.__client = InvoicesApi(vayu_client.client)
    
    def list(self, limit: int = None, cursor: int = None):
        return self.__client.list_invoices(limit=limit, cursor=cursor)

    def get(self, id: str):
        get_invoice_response = self.__client.get_invoice(invoice_id=id)

        return get_invoice_response

    def get_payment_status(self, invoice_id: str):
        return self.__client.get_invoice_payment_status(invoice_id=invoice_id)
