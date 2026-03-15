package client

import (
	"net/http"
)

type vayuRoundTripper struct {
	rt   http.RoundTripper
	auth *Authenticator
}

func (c *vayuRoundTripper) RoundTrip(req *http.Request) (*http.Response, error) {
	// Skip auth for login endpoint (prevents recursion)
	if req.URL.Path == "/login" {
		return c.rt.RoundTrip(req)
	}

	// Get a valid token (lazy login + proactive refresh)
	token, err := c.auth.EnsureValidToken()
	if err != nil {
		return nil, err
	}

	req.Header.Set("Authorization", "Bearer "+token)

	resp, err := c.rt.RoundTrip(req)
	if err != nil {
		return nil, err
	}

	// 401 retry: re-authenticate and retry once
	if resp.StatusCode == 401 {
		resp.Body.Close()

		if err := c.auth.Authenticate(); err != nil {
			return nil, err
		}

		// Restore request body for POST/PUT/PATCH retry
		if req.GetBody != nil {
			newBody, err := req.GetBody()
			if err != nil {
				return nil, err
			}
			req.Body = newBody
		}

		req.Header.Set("Authorization", "Bearer "+c.auth.AccessToken())
		return c.rt.RoundTrip(req)
	}

	return resp, nil
}
