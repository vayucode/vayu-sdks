package client

import (
	"net/http"

	"github.com/weft-finance/vayu-go/openapi"
)

type VayuClient struct {
	auth   *Authenticator
	Client *openapi.APIClient
}

func NewVayuClient(APIKey string) *VayuClient {
	apiClient := openapi.NewAPIClient(openapi.NewConfiguration())

	cfg := apiClient.GetConfig()
	cfg.UserAgent = "VayuSDK/go"

	auth := NewAuthenticator(APIKey, apiClient)

	vc := &VayuClient{
		auth:   auth,
		Client: apiClient,
	}

	vc.installRoundTripper()

	return vc
}

func (vc *VayuClient) SetCustomHost(host string) {
	cfg := vc.Client.GetConfig()
	cfg.Servers = openapi.ServerConfigurations{
		{
			URL:         host,
			Description: "Custom server",
		},
	}
}

// Deprecated: Authentication is now handled automatically. You can remove this call.
func (vc *VayuClient) Login() error {
	return vc.auth.Authenticate()
}

func (vc *VayuClient) IsLoggedIn() bool {
	return vc.auth.IsAuthenticated()
}

// Deprecated: Authentication is now handled automatically.
func (vc *VayuClient) ValidateLoggedIn() error {
	return nil
}

func (vc *VayuClient) installRoundTripper() {
	cfg := vc.Client.GetConfig()

	if cfg.HTTPClient.Transport == nil {
		cfg.HTTPClient.Transport = http.DefaultTransport
	}

	cfg.HTTPClient.Transport = &vayuRoundTripper{
		rt:   cfg.HTTPClient.Transport,
		auth: vc.auth,
	}
}
