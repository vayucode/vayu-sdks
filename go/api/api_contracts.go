package api

import (
	"time"

	"github.com/weft-finance/vayu-go/client"
	"github.com/weft-finance/vayu-go/openapi"
)

type ContractsAPI struct {
	vayuClient *client.VayuClient
}

type Contract = openapi.GetContractResponseContract
type ListContractsResponse = openapi.ListContractsResponse
type GetContractResponse = openapi.GetContractResponse
type GetContractByIntegrationIdResponse = openapi.GetContractByIntegrationIdResponse
type CreateContractRequest = openapi.CreateContractRequest
type CreateContractResponse = openapi.CreateContractResponse
type DeleteContractResponse = openapi.DeleteContractResponse

func NewContractsAPI(client *client.VayuClient) *ContractsAPI {
	return &ContractsAPI{
		vayuClient: client,
	}
}
func NewCreateContractRequest(startDate time.Time, endDate *time.Time, customerId string, name string) *CreateContractRequest {
	request := &openapi.CreateContractRequest{StartDate: startDate, CustomerId: customerId, Name: name}

	if endDate != nil {
		request.SetEndDate(*endDate)
	}

	return request
}

func (api *ContractsAPI) ListContracts(limit *float32, cursor *string) (*ListContractsResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.ContractsAPI.ListContracts(ctx)

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

func (api *ContractsAPI) GetContract(contractId string) (*GetContractResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.ContractsAPI.GetContract(ctx, contractId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *ContractsAPI) CreateContract(input CreateContractRequest) (*CreateContractResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.ContractsAPI.CreateContract(ctx)
	request = request.CreateContractRequest((openapi.CreateContractRequest)(input))
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *ContractsAPI) GetContractByIntegrationId(integrationType IntegrationType, integrationId string) (*GetContractByIntegrationIdResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.ContractsAPI.GetContractByIntegrationId(ctx, integrationType, integrationId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *ContractsAPI) DeleteContract(contractId string) (*DeleteContractResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.ContractsAPI.DeleteContract(ctx, contractId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}
