// api/api_reports.go
package api

import (
	"github.com/weft-finance/vayu-go/client"
	"github.com/weft-finance/vayu-go/openapi"
)

type ReportsAPI struct {
	vayuClient *client.VayuClient
}

type GetCommitmentReportResponse = openapi.GetCommitmentReportResponse
type GetProductsUsageReportResponse = openapi.GetProductsUsageReportResponse

func NewReportsAPI(client *client.VayuClient) *ReportsAPI {
	return &ReportsAPI{
		vayuClient: client,
	}
}

func (api *ReportsAPI) GetCommitmentReport(reportId *string) (*GetCommitmentReportResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.ReportsAPI.GetCommitmentReportResponse(ctx)

	if reportId != nil {
		request = request.ReportId(*reportId)
	}

	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *ReportsAPI) GetProductsUsageReport(limit *float32, cursor *string) (*GetProductsUsageReportResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.ReportsAPI.GetProductsUsageReport(ctx)

	if limit != nil {
		request = request.Limit(*limit)
	}

	if cursor != nil {
		request = request.Cursor(*cursor)
	}

	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}
