import type { CreateCustomerRelationRequest, CreateCustomerRequest, IntegrationType, UpdateCustomerRequest } from '../../openapi';
import { CustomersApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class CustomersClient {
  private client: CustomersApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(CustomersApi);
  }

  async list(paginationOptions?: PaginationOptions) {
    const cursor = paginationOptions?.cursor;
    const limit = paginationOptions?.limit;

    return this.client.listCustomers(limit, cursor);
  }

  async get(id: string) {
    return this.client.getCustomer(id);
  }

  async getByExternalId(externalId: string) {
    return this.client.getCustomerByExternalId(externalId);
  }

  async create(payload: CreateCustomerRequest) {
    return this.client.createCustomer(payload);
  }

  async update(id: string, payload: UpdateCustomerRequest) {
    return this.client.updateCustomer(payload, id);
  }

  async delete(id: string) {
    return this.client.deleteCustomer(id);
  }

  async listCustomerProductsConsumptions(id: string) {
    return this.client.getCustomerProductsConsumptions(id);
  }

  async listCustomerProductsConsumptionsByAlias(alias: string) {
    return this.client.getCustomerProductsConsumptionsByAlias(alias);
  }

  async getByName(name: string) {
    return this.client.getCustomerByName(name);
  }

  async getByIntegrationId(integrationType: IntegrationType, integrationId: string) {
    return this.client.getCustomerByIntegrationId(integrationType, integrationId);
  }

  async createRelation(payload: CreateCustomerRelationRequest) {
    return this.client.createCustomerRelation(payload);
  }

  async getRelation(customerRelationId: string) {
    return this.client.getCustomerRelation(customerRelationId);
  }
}