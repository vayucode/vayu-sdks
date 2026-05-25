from openapi.api.webhooks_api import WebhooksApi
from openapi.models.notification_event_type import NotificationEventType
from openapi.models.webhook_subscribe_request import WebhookSubscribeRequest
from vayu_sdk.clients.vayu_client import VayuClient

class WebhooksAPI:
    __client: WebhooksApi = None

    def __init__(self, vayu_client: VayuClient):
        self.__client = WebhooksApi(vayu_client.client)

    def subscribe(self, callback_url: str, event_type: NotificationEventType):
        if event_type == NotificationEventType.COMMITMENTUSAGECROSSED:
            raise ValueError(
                "CommitmentUsageCrossed requires a threshold; "
                "use subscribe_to_commitment_usage_crossed(callback_url, threshold) instead."
            )
        request = WebhookSubscribeRequest(callback_url=callback_url, event_type=event_type)
        return self.__client.webhook_subscribe(webhook_subscribe_request=request)

    def subscribe_to_commitment_usage_crossed(self, callback_url: str, threshold: float):
        request = WebhookSubscribeRequest(
            callback_url=callback_url,
            event_type=NotificationEventType.COMMITMENTUSAGECROSSED,
            threshold=threshold,
        )
        return self.__client.webhook_subscribe(webhook_subscribe_request=request)
