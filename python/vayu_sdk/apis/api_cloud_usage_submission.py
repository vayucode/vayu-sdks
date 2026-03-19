from openapi.api.cloud_usage_submission_api import CloudUsageSubmissionApi
from openapi.models.submit_cloud_usage_request import SubmitCloudUsageRequest
from vayu_sdk.clients.vayu_client import VayuClient


class CloudUsageSubmissionAPI:
    __client: CloudUsageSubmissionApi = None

    def __init__(self, vayu_client: VayuClient):
        self.__client = CloudUsageSubmissionApi(vayu_client.client)

    def submit(self, request: SubmitCloudUsageRequest):
        return self.__client.submit_cloud_usage(submit_cloud_usage_request=request)
