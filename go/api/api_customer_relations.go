package api

import (
	"github.com/vayucode/vayu-sdks/go/client"
	"github.com/vayucode/vayu-sdks/go/openapi"
)

type CustomerRelation = openapi.CreateCustomerRelationResponseCustomerRelation
type CreateCustomerRelationRequest = openapi.CreateCustomerRelationRequest
type CreateCustomerRelationResponse = openapi.CreateCustomerRelationResponse
type GetCustomerRelationResponse = openapi.GetCustomerRelationResponse

type CustomerRelationsAPI struct {
	vayuClient *client.VayuClient
}

func NewCustomerRelationsAPI(vayuClient *client.VayuClient) *CustomerRelationsAPI {
	return &CustomerRelationsAPI{vayuClient: vayuClient}
}

func NewCreateCustomerRelationRequest(vayuParentCustomerId string, vayuChildCustomerId string) *CreateCustomerRelationRequest {
	return &openapi.CreateCustomerRelationRequest{
		VayuParentCustomerId: vayuParentCustomerId,
		VayuChildCustomerId:  vayuChildCustomerId,
	}
}

func (api *CustomerRelationsAPI) CreateCustomerRelation(payload CreateCustomerRelationRequest) (*CreateCustomerRelationResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.CreateCustomerRelation(ctx)
	request = request.CreateCustomerRelationRequest(payload)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CustomerRelationsAPI) GetCustomerRelation(customerRelationId string) (*GetCustomerRelationResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.GetCustomerRelation(ctx, customerRelationId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}
