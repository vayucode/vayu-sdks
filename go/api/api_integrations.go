// api/api_integrations.go
package api

import (
	"github.com/weft-finance/vayu-go/client"
	"github.com/weft-finance/vayu-go/openapi"
)

type IntegrationsAPI struct {
	vayuClient *client.VayuClient
}

type NetSuiteExportSalesOrderRequest = openapi.NetSuiteExportSalesOrderRequest
type NetSuiteSyncInvoicesResponse = openapi.NetSuiteSyncInvoicesResponse
type NetSuiteSyncInvoicesRequest = openapi.NetSuiteSyncInvoicesRequest

func NewIntegrationsAPI(client *client.VayuClient) *IntegrationsAPI {
	return &IntegrationsAPI{
		vayuClient: client,
	}
}

func (api *IntegrationsAPI) ExportNetSuiteSalesOrder(input NetSuiteExportSalesOrderRequest) error {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.IntegrationsAPI.ExportNetSuiteSalesOrder(ctx)
	request = request.NetSuiteExportSalesOrderRequest((openapi.NetSuiteExportSalesOrderRequest)(input))
	_, err := request.Execute()

	if err != nil {
		return client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return nil
}

func (api *IntegrationsAPI) NetSuiteSyncInvoices(input NetSuiteSyncInvoicesRequest) (*NetSuiteSyncInvoicesResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.IntegrationsAPI.NetSuiteSyncInvoices(ctx)
	request = request.NetSuiteSyncInvoicesRequest((openapi.NetSuiteSyncInvoicesRequest)(input))
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}
