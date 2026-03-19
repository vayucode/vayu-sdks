package api

import (
	"github.com/vayucode/vayu-sdks/go/client"
	"github.com/vayucode/vayu-sdks/go/openapi"
)

type CustomersAPI struct {
	vayuClient *client.VayuClient
}

type Customer = openapi.CreateCustomerResponseCustomer
type Address = openapi.Address
type Contact = openapi.Contact
type IntegrationType = openapi.IntegrationType
type ListCustomersResponse = openapi.ListCustomersResponse
type GetCustomerResponse = openapi.GetCustomerResponse
type GetCustomerByNameResponse = openapi.GetCustomerByNameResponse
type GetCustomerByIntegrationIdResponse = openapi.GetCustomerByIntegrationIdResponse
type CreateCustomerRequest = openapi.CreateCustomerRequest
type CreateCustomerResponse = openapi.CreateCustomerResponse
type UpdateCustomerRequest = openapi.UpdateCustomerRequest
type UpdateCustomerResponse = openapi.UpdateCustomerResponse
type DeleteCustomerResponse = openapi.DeleteCustomerResponse

func NewCustomersAPI(client *client.VayuClient) *CustomersAPI {
	return &CustomersAPI{
		vayuClient: client,
	}
}

func NewAddress(country *string, city *string, addressText *string, state *string, postalCode *string) *Address {
	address := &openapi.Address{}

	if country != nil {
		address.SetCountry(*country)
	}
	if city != nil {
		address.SetCity(*city)
	}
	if addressText != nil {
		address.SetAddressText(*addressText)
	}
	if state != nil {
		address.SetState(*state)
	}
	if postalCode != nil {
		address.SetPostalCode(*postalCode)
	}

	return address
}

func NewContact(email *string, name *string) *Contact {
	return &openapi.Contact{Email: email, Name: name}
}

func NewCreateCustomerRequest(name string, externalId *string, aliases []string, address *Address, contacts []Contact) *CreateCustomerRequest {
	request := &openapi.CreateCustomerRequest{Name: name, ExternalId: externalId, Aliases: aliases, Contacts: contacts}

	if address != nil {
		request.SetAddress(*address)
	}

	return request
}

func NewUpdateCustomerRequest(name *string, externalId *string, aliases []string, address *Address) *UpdateCustomerRequest {
	request := &openapi.UpdateCustomerRequest{Name: name, ExternalId: externalId, Aliases: aliases}

	if address != nil {
		request.SetAddress(*address)
	}

	return request
}

func (api *CustomersAPI) ListCustomers(limit *float32, cursor *string) (*ListCustomersResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.ListCustomers(ctx)

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

func (api *CustomersAPI) GetCustomer(customerId string) (*GetCustomerResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.GetCustomer(ctx, customerId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CustomersAPI) GetCustomerByExternalId(externalId string) (*GetCustomerResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.GetCustomerByExternalId(ctx, externalId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CustomersAPI) CreateCustomer(payload CreateCustomerRequest) (*CreateCustomerResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.CreateCustomer(ctx)
	request = request.CreateCustomerRequest(payload)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CustomersAPI) UpdateCustomer(customerId string, payload UpdateCustomerRequest) (*UpdateCustomerResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.UpdateCustomer(ctx, customerId)
	request = request.UpdateCustomerRequest(payload)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CustomersAPI) GetCustomerByName(name string) (*GetCustomerByNameResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.GetCustomerByName(ctx, name)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CustomersAPI) GetCustomerByIntegrationId(integrationType IntegrationType, integrationId string) (*GetCustomerByIntegrationIdResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.GetCustomerByIntegrationId(ctx, integrationType, integrationId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}

func (api *CustomersAPI) DeleteCustomer(customerId string) (*DeleteCustomerResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CustomersAPI.DeleteCustomer(ctx, customerId)
	response, _, err := request.Execute()

	if err != nil {
		return nil, client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return response, nil
}
