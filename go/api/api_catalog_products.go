package api

import (
	"github.com/vayucode/vayu-sdks/go/client"
	"github.com/vayucode/vayu-sdks/go/openapi"
)

type CatalogProduct = openapi.CreateCatalogProductResponseCatalogProduct
type ListCatalogProductsResponse = openapi.ListCatalogProductsResponse
type GetCatalogProductResponse = openapi.GetCatalogProductResponse
type CreateCatalogProductRequest = openapi.CreateCatalogProductRequest
type CreateCatalogProductResponse = openapi.CreateCatalogProductResponse
type UpdateCatalogProductRequest = openapi.UpdateCatalogProductRequest
type UpdateCatalogProductResponse = openapi.UpdateCatalogProductResponse
type DeleteCatalogProductResponse = openapi.DeleteCatalogProductResponse

type CatalogProductsAPI struct {
	vayuClient *client.VayuClient
}

func NewCatalogProductsAPI(vayuClient *client.VayuClient) *CatalogProductsAPI {
	return &CatalogProductsAPI{vayuClient: vayuClient}
}

func NewCreateCatalogProductRequest(name string, description *string, externalId *string) *CreateCatalogProductRequest {
	request := &openapi.CreateCatalogProductRequest{Name: name}
	request.Description = description
	request.ExternalId = externalId
	return request
}

func NewUpdateCatalogProductRequest(name *string, description *string, externalId *string) *UpdateCatalogProductRequest {
	return &openapi.UpdateCatalogProductRequest{Name: name, Description: description, ExternalId: externalId}
}

func (api *CatalogProductsAPI) ListCatalogProducts(limit *float32, cursor *string) (*ListCatalogProductsResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CatalogProductsAPI.ListCatalogProducts(ctx)

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

func (api *CatalogProductsAPI) GetCatalogProduct(catalogProductId string) (*GetCatalogProductResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CatalogProductsAPI.GetCatalogProduct(ctx, catalogProductId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CatalogProductsAPI) CreateCatalogProduct(payload CreateCatalogProductRequest) (*CreateCatalogProductResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CatalogProductsAPI.CreateCatalogProduct(ctx)
	request = request.CreateCatalogProductRequest(payload)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CatalogProductsAPI) UpdateCatalogProduct(catalogProductId string, payload UpdateCatalogProductRequest) (*UpdateCatalogProductResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CatalogProductsAPI.UpdateCatalogProduct(ctx, catalogProductId)
	request = request.UpdateCatalogProductRequest(payload)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CatalogProductsAPI) DeleteCatalogProduct(catalogProductId string) (*DeleteCatalogProductResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CatalogProductsAPI.DeleteCatalogProduct(ctx, catalogProductId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}
