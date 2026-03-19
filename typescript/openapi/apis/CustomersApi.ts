// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateCustomerRelationRequest } from '../models/CreateCustomerRelationRequest';
import { CreateCustomerRelationResponse } from '../models/CreateCustomerRelationResponse';
import { CreateCustomerRequest } from '../models/CreateCustomerRequest';
import { CreateCustomerResponse } from '../models/CreateCustomerResponse';
import { DeleteCustomerResponse } from '../models/DeleteCustomerResponse';
import { GetCustomerByIntegrationIdResponse } from '../models/GetCustomerByIntegrationIdResponse';
import { GetCustomerByNameResponse } from '../models/GetCustomerByNameResponse';
import { GetCustomerProductsConsumptionsByAliasResponse } from '../models/GetCustomerProductsConsumptionsByAliasResponse';
import { GetCustomerProductsConsumptionsResponse } from '../models/GetCustomerProductsConsumptionsResponse';
import { GetCustomerRelationResponse } from '../models/GetCustomerRelationResponse';
import { GetCustomerResponse } from '../models/GetCustomerResponse';
import { IntegrationType } from '../models/IntegrationType';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { UpdateCustomerRequest } from '../models/UpdateCustomerRequest';
import { UpdateCustomerResponse } from '../models/UpdateCustomerResponse';

/**
 * no description
 */
export class CustomersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new Customer.
     * Create Customer
     * @param createCustomerRequest 
     */
    public async createCustomer(createCustomerRequest: CreateCustomerRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createCustomerRequest' is not null or undefined
        if (createCustomerRequest === null || createCustomerRequest === undefined) {
            throw new RequiredError("CustomersApi", "createCustomer", "createCustomerRequest");
        }


        // Path Params
        const localVarPath = '/customers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createCustomerRequest, "CreateCustomerRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new Customer relation.
     * Create Customer relation
     * @param createCustomerRelationRequest 
     */
    public async createCustomerRelation(createCustomerRelationRequest: CreateCustomerRelationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createCustomerRelationRequest' is not null or undefined
        if (createCustomerRelationRequest === null || createCustomerRelationRequest === undefined) {
            throw new RequiredError("CustomersApi", "createCustomerRelation", "createCustomerRelationRequest");
        }


        // Path Params
        const localVarPath = '/customer-relations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createCustomerRelationRequest, "CreateCustomerRelationRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param customerId 
     */
    public async deleteCustomer(customerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new RequiredError("CustomersApi", "deleteCustomer", "customerId");
        }


        // Path Params
        const localVarPath = '/customers/{customerId}'
            .replace('{' + 'customerId' + '}', encodeURIComponent(String(customerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param customerId 
     */
    public async getCustomer(customerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new RequiredError("CustomersApi", "getCustomer", "customerId");
        }


        // Path Params
        const localVarPath = '/customers/{customerId}'
            .replace('{' + 'customerId' + '}', encodeURIComponent(String(customerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param externalId 
     */
    public async getCustomerByExternalId(externalId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalId' is not null or undefined
        if (externalId === null || externalId === undefined) {
            throw new RequiredError("CustomersApi", "getCustomerByExternalId", "externalId");
        }


        // Path Params
        const localVarPath = '/customers/externalId/{externalId}'
            .replace('{' + 'externalId' + '}', encodeURIComponent(String(externalId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to get a specific customer using its integration provider and identifier.
     * Get customer by integration id
     * @param integrationType 
     * @param integrationId 
     */
    public async getCustomerByIntegrationId(integrationType: IntegrationType, integrationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'integrationType' is not null or undefined
        if (integrationType === null || integrationType === undefined) {
            throw new RequiredError("CustomersApi", "getCustomerByIntegrationId", "integrationType");
        }


        // verify required parameter 'integrationId' is not null or undefined
        if (integrationId === null || integrationId === undefined) {
            throw new RequiredError("CustomersApi", "getCustomerByIntegrationId", "integrationId");
        }


        // Path Params
        const localVarPath = '/customers/integration/{integrationType}/{integrationId}'
            .replace('{' + 'integrationType' + '}', encodeURIComponent(String(integrationType)))
            .replace('{' + 'integrationId' + '}', encodeURIComponent(String(integrationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to get a specific customer using its name.
     * Get customer by name
     * @param name 
     */
    public async getCustomerByName(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("CustomersApi", "getCustomerByName", "name");
        }


        // Path Params
        const localVarPath = '/customers/name/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param customerId 
     */
    public async getCustomerProductsConsumptions(customerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new RequiredError("CustomersApi", "getCustomerProductsConsumptions", "customerId");
        }


        // Path Params
        const localVarPath = '/customers/products-consumptions/{customerId}'
            .replace('{' + 'customerId' + '}', encodeURIComponent(String(customerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to get the products consumptions by the customer alias.
     * Get products consumptions by customer alias
     * @param alias 
     */
    public async getCustomerProductsConsumptionsByAlias(alias: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'alias' is not null or undefined
        if (alias === null || alias === undefined) {
            throw new RequiredError("CustomersApi", "getCustomerProductsConsumptionsByAlias", "alias");
        }


        // Path Params
        const localVarPath = '/customers/products-consumptions/alias/{alias}'
            .replace('{' + 'alias' + '}', encodeURIComponent(String(alias)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a Customer relation by id.
     * Get Customer relation
     * @param customerRelationId 
     */
    public async getCustomerRelation(customerRelationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'customerRelationId' is not null or undefined
        if (customerRelationId === null || customerRelationId === undefined) {
            throw new RequiredError("CustomersApi", "getCustomerRelation", "customerRelationId");
        }


        // Path Params
        const localVarPath = '/customer-relations/{customerRelationId}'
            .replace('{' + 'customerRelationId' + '}', encodeURIComponent(String(customerRelationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param limit 
     * @param cursor 
     */
    public async listCustomers(limit?: number, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/customers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param updateCustomerRequest 
     * @param customerId 
     */
    public async updateCustomer(updateCustomerRequest: UpdateCustomerRequest, customerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'updateCustomerRequest' is not null or undefined
        if (updateCustomerRequest === null || updateCustomerRequest === undefined) {
            throw new RequiredError("CustomersApi", "updateCustomer", "updateCustomerRequest");
        }


        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new RequiredError("CustomersApi", "updateCustomer", "customerId");
        }


        // Path Params
        const localVarPath = '/customers/{customerId}'
            .replace('{' + 'customerId' + '}', encodeURIComponent(String(customerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateCustomerRequest, "UpdateCustomerRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CustomersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCustomerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateCustomerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateCustomerResponse", ""
            ) as CreateCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateCustomerResponse", ""
            ) as CreateCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomerRelation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCustomerRelationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateCustomerRelationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateCustomerRelationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateCustomerRelationResponse", ""
            ) as CreateCustomerRelationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateCustomerRelationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateCustomerRelationResponse", ""
            ) as CreateCustomerRelationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCustomerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeleteCustomerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteCustomerResponse", ""
            ) as DeleteCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not Found", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteCustomerResponse", ""
            ) as DeleteCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCustomerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerResponse", ""
            ) as GetCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not Found", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerResponse", ""
            ) as GetCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomerByExternalId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomerByExternalIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCustomerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerResponse", ""
            ) as GetCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerResponse", ""
            ) as GetCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomerByIntegrationId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomerByIntegrationIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCustomerByIntegrationIdResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCustomerByIntegrationIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerByIntegrationIdResponse", ""
            ) as GetCustomerByIntegrationIdResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCustomerByIntegrationIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerByIntegrationIdResponse", ""
            ) as GetCustomerByIntegrationIdResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomerByName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomerByNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCustomerByNameResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCustomerByNameResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerByNameResponse", ""
            ) as GetCustomerByNameResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCustomerByNameResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerByNameResponse", ""
            ) as GetCustomerByNameResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomerProductsConsumptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomerProductsConsumptionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCustomerProductsConsumptionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCustomerProductsConsumptionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerProductsConsumptionsResponse", ""
            ) as GetCustomerProductsConsumptionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCustomerProductsConsumptionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerProductsConsumptionsResponse", ""
            ) as GetCustomerProductsConsumptionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomerProductsConsumptionsByAlias
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomerProductsConsumptionsByAliasWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCustomerProductsConsumptionsByAliasResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCustomerProductsConsumptionsByAliasResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerProductsConsumptionsByAliasResponse", ""
            ) as GetCustomerProductsConsumptionsByAliasResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCustomerProductsConsumptionsByAliasResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerProductsConsumptionsByAliasResponse", ""
            ) as GetCustomerProductsConsumptionsByAliasResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomerRelation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomerRelationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCustomerRelationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCustomerRelationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerRelationResponse", ""
            ) as GetCustomerRelationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not Found", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCustomerRelationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerRelationResponse", ""
            ) as GetCustomerRelationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCustomers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCustomersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListCustomersResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListCustomersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListCustomersResponse", ""
            ) as ListCustomersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListCustomersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListCustomersResponse", ""
            ) as ListCustomersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCustomer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCustomerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateCustomerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateCustomerResponse", ""
            ) as UpdateCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not Found", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateCustomerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateCustomerResponse", ""
            ) as UpdateCustomerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
