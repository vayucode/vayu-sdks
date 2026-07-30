package VayuSDK

import (
	"encoding/json"
	"testing"

	"github.com/vayucode/vayu-sdks/go/openapi"
)

func TestSendEventsResponseDecodesScalarDataValues(t *testing.T) {
	body := []byte(`{"validEvents":[{"name":"api_call","timestamp":"2026-07-30T08:00:00.000Z","customerAlias":"customer_12345","ref":"4f6cf35x-2c4y-483z-a0a9-158621f77a21","data":{"api_url":"https://example.com/v1","duration_ms":123,"cached":false},"ackId":"01J5A3B7K9QRSTUV2WXYZ4DEFG"}],"invalidEvents":[]}`)

	var resp openapi.SendEventsResponse
	if err := json.Unmarshal(body, &resp); err != nil {
		t.Fatalf("decode failed: %v", err)
	}

	if len(resp.ValidEvents) != 1 {
		t.Fatalf("expected 1 valid event, got %d", len(resp.ValidEvents))
	}
	ev := resp.ValidEvents[0]
	if ev.AckId != "01J5A3B7K9QRSTUV2WXYZ4DEFG" {
		t.Errorf("unexpected ackId: %q", ev.AckId)
	}
	if ev.Data["api_url"] != "https://example.com/v1" {
		t.Errorf("unexpected data.api_url: %v", ev.Data["api_url"])
	}
	if ev.Data["duration_ms"] != float64(123) {
		t.Errorf("unexpected data.duration_ms: %v", ev.Data["duration_ms"])
	}
	if ev.Data["cached"] != false {
		t.Errorf("unexpected data.cached: %v", ev.Data["cached"])
	}
}
