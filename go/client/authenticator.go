package client

import (
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/weft-finance/vayu-go/openapi"
)

const tokenExpiryThreshold = 5 * time.Minute

type Authenticator struct {
	apiKey      string
	accessToken string
	expiresAt   time.Time
	apiClient   *openapi.APIClient
}

func NewAuthenticator(apiKey string, apiClient *openapi.APIClient) *Authenticator {
	return &Authenticator{
		apiKey:    apiKey,
		apiClient: apiClient,
	}
}

func (a *Authenticator) IsAuthenticated() bool {
	return a.accessToken != ""
}

func (a *Authenticator) AccessToken() string {
	return a.accessToken
}

func (a *Authenticator) NeedsRefresh() bool {
	return !a.IsAuthenticated() || time.Now().Add(tokenExpiryThreshold).After(a.expiresAt)
}

// EnsureValidToken returns a valid access token, logging in or refreshing as needed.
func (a *Authenticator) EnsureValidToken() (string, error) {
	if a.NeedsRefresh() {
		if err := a.Authenticate(); err != nil {
			return "", err
		}
	}

	return a.accessToken, nil
}

// Authenticate exchanges the refresh token for a new access token.
func (a *Authenticator) Authenticate() error {
	ctx, cancel := GenerateContextWithTimeout()
	defer cancel()

	request := a.apiClient.AuthAPI.Login(ctx)
	request = request.LoginRequest(openapi.LoginRequest{RefreshToken: a.apiKey})
	response, _, err := request.Execute()

	if err != nil {
		return BuildVayuErrorFromGenericOpenAPIError(err)
	}

	a.accessToken = response.AccessToken

	if err := a.extractJWTExpiry(); err != nil {
		return err
	}

	return nil
}

func (a *Authenticator) extractJWTExpiry() error {
	token, _, err := new(jwt.Parser).ParseUnverified(a.accessToken, jwt.MapClaims{})
	if err != nil {
		return BuildVayuError(fmt.Errorf("failed to parse JWT"))
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return BuildVayuError(fmt.Errorf("failed to parse JWT claims"))
	}

	exp, ok := claims["exp"].(float64)
	if !ok {
		return BuildVayuError(fmt.Errorf("expiry date not found in JWT"))
	}

	a.expiresAt = time.Unix(int64(exp), 0)
	return nil
}
