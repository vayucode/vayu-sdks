package VayuSDK

import (
	"github.com/weft-finance/vayu-go/api"
	"github.com/weft-finance/vayu-go/client"
)

type Vayu struct {
	client              *client.VayuClient
	CatalogProducts     *api.CatalogProductsAPI
	CloudUsageSubmission *api.CloudUsageSubmissionAPI
	Contracts           *api.ContractsAPI
	CustomerRelations   *api.CustomerRelationsAPI
	Customers           *api.CustomersAPI
	Events              *api.EventsAPI
	Invoices            *api.InvoicesAPI
	Meters              *api.MetersAPI
	Plans               *api.PlansAPI
	Webhooks            *api.WebhooksAPI
	Credits             *api.CreditsAPI
	Integrations        *api.IntegrationsAPI
	Reports             *api.ReportsAPI
}

func NewVayu(APIKey string) *Vayu {
	vayuClient := client.NewVayuClient(APIKey)
	return &Vayu{
		client:               vayuClient,
		CatalogProducts:      api.NewCatalogProductsAPI(vayuClient),
		CloudUsageSubmission: api.NewCloudUsageSubmissionAPI(vayuClient),
		Contracts:            api.NewContractsAPI(vayuClient),
		CustomerRelations:    api.NewCustomerRelationsAPI(vayuClient),
		Customers:            api.NewCustomersAPI(vayuClient),
		Events:               api.NewEventsAPI(vayuClient),
		Invoices:             api.NewInvoicesAPI(vayuClient),
		Meters:               api.NewMetersAPI(vayuClient),
		Plans:                api.NewPlansAPI(vayuClient),
		Webhooks:             api.NewWebhooksAPI(vayuClient),
		Credits:              api.NewCreditsAPI(vayuClient),
		Integrations:         api.NewIntegrationsAPI(vayuClient),
		Reports:              api.NewReportsAPI(vayuClient),
	}
}

func (v *Vayu) SetCustomHost(host string) {
	v.client.SetCustomHost(host)
}

// Deprecated: Authentication is now handled automatically. You can remove this call.
func (v *Vayu) Login() error {
	return v.client.Login()
}

func (v *Vayu) IsLoggedIn() bool {
	return v.client.IsLoggedIn()
}

// Types

type (
	VayuError = client.VayuError
)

type (
	CatalogProduct               = api.CatalogProduct
	ListCatalogProductsResponse  = api.ListCatalogProductsResponse
	GetCatalogProductResponse    = api.GetCatalogProductResponse
	CreateCatalogProductRequest  = api.CreateCatalogProductRequest
	CreateCatalogProductResponse = api.CreateCatalogProductResponse
	UpdateCatalogProductRequest  = api.UpdateCatalogProductRequest
	UpdateCatalogProductResponse = api.UpdateCatalogProductResponse
	DeleteCatalogProductResponse = api.DeleteCatalogProductResponse
)

type (
	CloudUsageResult      = api.CloudUsageResult
	SubmitCloudUsageRequest = api.SubmitCloudUsageRequest
)

type (
	Contract                        = api.Contract
	ListContractsResponse           = api.ListContractsResponse
	GetContractResponse             = api.GetContractResponse
	GetContractByIntegrationIdResponse = api.GetContractByIntegrationIdResponse
	CreateContractRequest           = api.CreateContractRequest
	CreateContractResponse          = api.CreateContractResponse
	DeleteContractResponse          = api.DeleteContractResponse
)

type (
	CustomerRelation               = api.CustomerRelation
	CreateCustomerRelationRequest  = api.CreateCustomerRelationRequest
	CreateCustomerRelationResponse = api.CreateCustomerRelationResponse
	GetCustomerRelationResponse    = api.GetCustomerRelationResponse
)

type (
	IntegrationType                    = api.IntegrationType
	Customer                           = api.Customer
	Address                            = api.Address
	Contact                            = api.Contact
	ListCustomersResponse              = api.ListCustomersResponse
	GetCustomerResponse                = api.GetCustomerResponse
	GetCustomerByNameResponse          = api.GetCustomerByNameResponse
	GetCustomerByIntegrationIdResponse = api.GetCustomerByIntegrationIdResponse
	CreateCustomerRequest              = api.CreateCustomerRequest
	CreateCustomerResponse             = api.CreateCustomerResponse
	UpdateCustomerRequest              = api.UpdateCustomerRequest
	UpdateCustomerResponse             = api.UpdateCustomerResponse
	DeleteCustomerResponse             = api.DeleteCustomerResponse
)

type (
	Event                      = api.Event
	GetEventResponse           = api.GetEventResponse
	DeleteEventResponse        = api.DeleteEventResponse
	DeleteEventsByRefsRequest  = api.DeleteEventsByRefsRequest
	DeleteEventsByRefsResponse = api.DeleteEventsByRefsResponse
	SendEventsResponse         = api.SendEventsResponse
	EventsDryRunResponse       = api.EventsDryRunResponse
	QueryEventsResponse        = api.QueryEventsResponse
)

type (
	Invoice                      = api.Invoice
	GetInvoiceResponse           = api.GetInvoiceResponse
	InvoicePaymentStatusResponse = api.InvoicePaymentStatusResponse
	ListInvoicesResponse         = api.ListInvoicesResponse
)

type (
	Meter              = api.Meter
	ListMetersResponse = api.ListMetersResponse
	GetMeterResponse   = api.GetMeterResponse
)

type (
	Plan               = api.Plan
	ListPlansResponse  = api.ListPlansResponse
	GetPlanResponse    = api.GetPlanResponse
	DeletePlanResponse = api.DeletePlanResponse
)

type (
	DeductCreditsRequest            = api.DeductCreditsRequest
	GrantCreditsRequest             = api.GrantCreditsRequest
	ListCreditLedgerEntriesResponse = api.ListCreditLedgerEntriesResponse
)

type (
	UpdateMeterRequest  = api.UpdateMeterRequest
	UpdateMeterResponse = api.UpdateMeterResponse
	DeleteMeterResponse = api.DeleteMeterResponse
)

type (
	NetSuiteExportSalesOrderRequest = api.NetSuiteExportSalesOrderRequest
	NetSuiteSyncInvoicesRequest     = api.NetSuiteSyncInvoicesRequest
	NetSuiteSyncInvoicesResponse    = api.NetSuiteSyncInvoicesResponse
)

type (
	GetCommitmentReportResponse    = api.GetCommitmentReportResponse
	GetProductsUsageReportResponse = api.GetProductsUsageReportResponse
)
