package api

import (
	"github.com/vayucode/vayu-sdks/go/client"
	"github.com/vayucode/vayu-sdks/go/openapi"
)

type CloudUsageResult = openapi.CloudUsageResult
type SubmitCloudUsageRequest = openapi.SubmitCloudUsageRequest

type CloudUsageSubmissionAPI struct {
	vayuClient *client.VayuClient
}

func NewCloudUsageSubmissionAPI(vayuClient *client.VayuClient) *CloudUsageSubmissionAPI {
	return &CloudUsageSubmissionAPI{vayuClient: vayuClient}
}

func NewSubmitCloudUsageRequest(results []CloudUsageResult, productCode string) *SubmitCloudUsageRequest {
	return &openapi.SubmitCloudUsageRequest{Results: results, ProductCode: productCode}
}

func (api *CloudUsageSubmissionAPI) SubmitCloudUsage(payload SubmitCloudUsageRequest) (map[string]interface{}, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CloudUsageSubmissionAPI.SubmitCloudUsage(ctx)
	request = request.SubmitCloudUsageRequest(payload)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}
