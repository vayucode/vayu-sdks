package api

import (
	"time"

	"github.com/vayucode/vayu-sdks/go/client"
	"github.com/vayucode/vayu-sdks/go/openapi"
)

type InvoicesAPI struct {
	vayuClient *client.VayuClient
}

type Invoice = openapi.GetInvoiceResponseInvoice
type GetInvoiceResponse = openapi.GetInvoiceResponse
type InvoicePaymentStatusResponse = openapi.InvoicePaymentStatusResponse
type ListInvoicesResponse = openapi.ListInvoicesResponse

const (
	InvoiceBillingStatusNone           = "None"
	InvoiceBillingStatusPaid           = "Paid"
	InvoiceBillingStatusRejected       = "Rejected"
	InvoiceBillingStatusPendingPayment = "PendingPayment"
	InvoiceBillingStatusOverdue        = "Overdue"
)

type ListInvoicesFilter struct {
	Limit         *float32
	Cursor        *string
	CustomerId    *string
	BillingStatus *string
	IssuedAtFrom  *time.Time
	IssuedAtTo    *time.Time
}

func NewInvoicesAPI(client *client.VayuClient) *InvoicesAPI {
	return &InvoicesAPI{
		vayuClient: client,
	}
}

func (api *InvoicesAPI) GetInvoicePaymentStatus(invoiceId string) (*InvoicePaymentStatusResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.InvoicesAPI.GetInvoicePaymentStatus(ctx, invoiceId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *InvoicesAPI) ListInvoices(limit *float32, cursor *string) (*ListInvoicesResponse, error) {
	return api.ListInvoicesWithFilter(ListInvoicesFilter{Limit: limit, Cursor: cursor})
}

func (api *InvoicesAPI) ListInvoicesWithFilter(filter ListInvoicesFilter) (*ListInvoicesResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.InvoicesAPI.ListInvoices(ctx)
	if filter.Limit != nil {
		request = request.Limit(*filter.Limit)
	}
	if filter.Cursor != nil {
		request = request.Cursor(*filter.Cursor)
	}
	if filter.CustomerId != nil {
		request = request.CustomerId(*filter.CustomerId)
	}
	if filter.BillingStatus != nil {
		request = request.BillingStatus(openapi.InvoiceBillingStatus(*filter.BillingStatus))
	}
	if filter.IssuedAtFrom != nil {
		request = request.IssuedAfter(filter.IssuedAtFrom.Format(time.RFC3339))
	}
	if filter.IssuedAtTo != nil {
		request = request.IssuedBefore(filter.IssuedAtTo.Format(time.RFC3339))
	}
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *InvoicesAPI) GetInvoice(invoiceId string) (*GetInvoiceResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.InvoicesAPI.GetInvoice(ctx, invoiceId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}
