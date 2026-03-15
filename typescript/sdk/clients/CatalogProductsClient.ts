import type { CreateCatalogProductRequest, UpdateCatalogProductRequest } from '../../openapi';
import { CatalogProductsApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class CatalogProductsClient {
  private client: CatalogProductsApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(CatalogProductsApi);
  }

  async list(pagination?: PaginationOptions) {
    const cursor = pagination?.cursor;
    const limit = pagination?.limit;

    return this.client.listCatalogProducts(limit, cursor);
  }

  async get(id: string) {
    return this.client.getCatalogProduct(id);
  }

  async create(payload: CreateCatalogProductRequest) {
    return this.client.createCatalogProduct(payload);
  }

  async update(id: string, payload: UpdateCatalogProductRequest) {
    return this.client.updateCatalogProduct(payload, id);
  }

  async delete(id: string) {
    return this.client.deleteCatalogProduct(id);
  }
}
