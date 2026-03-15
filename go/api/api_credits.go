// api/api_credits.go
package api

import (
	"github.com/weft-finance/vayu-go/client"
	"github.com/weft-finance/vayu-go/openapi"
)

type CreditsAPI struct {
	vayuClient *client.VayuClient
}

type DeductCreditsRequest = openapi.DeductCreditsRequest
type GrantCreditsRequest = openapi.GrantCreditsRequest
type ListCreditLedgerEntriesResponse = openapi.ListCreditLedgerEntriesResponse

func NewCreditsAPI(client *client.VayuClient) *CreditsAPI {
	return &CreditsAPI{
		vayuClient: client,
	}
}

func (api *CreditsAPI) DeductCredits(input DeductCreditsRequest) error {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CreditsAPI.DeductCredits(ctx)
	request = request.DeductCreditsRequest((openapi.DeductCreditsRequest)(input))
	_, err := request.Execute()

	if err != nil {
		return client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return nil
}

func (api *CreditsAPI) GrantCredits(input GrantCreditsRequest) error {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CreditsAPI.GrantCredits(ctx)
	request = request.GrantCreditsRequest((openapi.GrantCreditsRequest)(input))
	_, err := request.Execute()

	if err != nil {
		return client.BuildVayuErrorFromGenericOpenAPIError(err)
	}

	return nil
}

func (api *CreditsAPI) ListCreditLedgerEntries(customerId string, limit *float32, cursor *string) (*ListCreditLedgerEntriesResponse, error) {
	ctx, cancel := client.GenerateContextWithTimeout()
	defer cancel()

	request := api.vayuClient.Client.CreditsAPI.ListCreditLedgerEntries(ctx)
	request = request.CustomerId(customerId)

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
