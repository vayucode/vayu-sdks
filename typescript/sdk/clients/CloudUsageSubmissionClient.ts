import type { SubmitCloudUsageRequest } from '../../openapi';
import { CloudUsageSubmissionApi } from '../../openapi';
import { ConfigurationService } from '../services';

export class CloudUsageSubmissionClient {
  private client: CloudUsageSubmissionApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(CloudUsageSubmissionApi);
  }

  async submit(payload: SubmitCloudUsageRequest) {
    return this.client.submitCloudUsage(payload);
  }
}
