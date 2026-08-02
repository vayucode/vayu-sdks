// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreateContractResponse } from '../models/CreateContractResponse';
import { DeleteContractResponse } from '../models/DeleteContractResponse';
import { GetContractByIntegrationIdResponse } from '../models/GetContractByIntegrationIdResponse';
import { GetContractResponse } from '../models/GetContractResponse';
import { IntegrationProviders } from '../models/IntegrationProviders';
import { InternalServerErrorResponse } from '../models/InternalServerErrorResponse';
import { ListContractsResponse } from '../models/ListContractsResponse';
import { NotFoundErrorResponse } from '../models/NotFoundErrorResponse';
import { RateLimitErrorResponse } from '../models/RateLimitErrorResponse';
import { RefreshContractCreditsRequest } from '../models/RefreshContractCreditsRequest';
import { RefreshContractCreditsResponse } from '../models/RefreshContractCreditsResponse';
import { TerminateContractRequest } from '../models/TerminateContractRequest';
import { TerminateContractResponse } from '../models/TerminateContractResponse';
import { UnauthorizedErrorResponse } from '../models/UnauthorizedErrorResponse';
import { ValidationErrorResponse } from '../models/ValidationErrorResponse';

/**
 * no description
 */
export class ContractsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new Contract.
     * Create Contract
     * @param createContractRequest 
     */
    public async createContract(createContractRequest: CreateContractRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createContractRequest' is not null or undefined
        if (createContractRequest === null || createContractRequest === undefined) {
            throw new RequiredError("ContractsApi", "createContract", "createContractRequest");
        }


        // Path Params
        const localVarPath = '/contracts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createContractRequest, "CreateContractRequest", ""),
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
     * Delete a Contract by id.
     * Delete Contract
     * @param contractId 
     */
    public async deleteContract(contractId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'contractId' is not null or undefined
        if (contractId === null || contractId === undefined) {
            throw new RequiredError("ContractsApi", "deleteContract", "contractId");
        }


        // Path Params
        const localVarPath = '/contracts/{contractId}'
            .replace('{' + 'contractId' + '}', encodeURIComponent(String(contractId)));

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
     * Get a Contract by id.
     * Get Contract
     * @param contractId 
     */
    public async getContract(contractId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'contractId' is not null or undefined
        if (contractId === null || contractId === undefined) {
            throw new RequiredError("ContractsApi", "getContract", "contractId");
        }


        // Path Params
        const localVarPath = '/contracts/{contractId}'
            .replace('{' + 'contractId' + '}', encodeURIComponent(String(contractId)));

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
     * Use this endpoint to get a specific contract using its integration provider and identifier.
     * Get contract by integration id
     * @param integrationType 
     * @param integrationId 
     */
    public async getContractByIntegrationId(integrationType: IntegrationProviders, integrationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'integrationType' is not null or undefined
        if (integrationType === null || integrationType === undefined) {
            throw new RequiredError("ContractsApi", "getContractByIntegrationId", "integrationType");
        }


        // verify required parameter 'integrationId' is not null or undefined
        if (integrationId === null || integrationId === undefined) {
            throw new RequiredError("ContractsApi", "getContractByIntegrationId", "integrationId");
        }


        // Path Params
        const localVarPath = '/contracts/integration/{integrationType}/{integrationId}'
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
     * List contracts for the account. Optionally filter by customerId or customerExternalId to retrieve contracts for a specific customer (provide at most one, not both).
     * List contracts
     * @param limit 
     * @param cursor 
     * @param customerId 
     * @param customerExternalId 
     */
    public async listContracts(limit?: number, cursor?: string, customerId?: string, customerExternalId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/contracts';

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

        // Query Params
        if (customerId !== undefined) {
            requestContext.setQueryParam("customerId", ObjectSerializer.serialize(customerId, "string", ""));
        }

        // Query Params
        if (customerExternalId !== undefined) {
            requestContext.setQueryParam("customerExternalId", ObjectSerializer.serialize(customerExternalId, "string", ""));
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
     * Use this endpoint to refresh the credit grants on a contract by creating a new contract phase     (a contract revision) that takes effect immediately.      Provide a list of credit grants to refresh in the request body — each is identified by its credit product     (credit type) id and is set to non-prorated in the new phase, optionally with a new price. Every other credit     grant on the contract is set to prorated. If the grants list is omitted, all credit grants on the contract are     refreshed (set to non-prorated).      If a supplied credit product matches more than one grant product on the contract and a newPrice is provided,     the request is rejected because the price cannot be applied unambiguously.
     * Refresh the credit grants on a contract
     * @param refreshContractCreditsRequest 
     * @param contractId 
     */
    public async refreshContractCredits(refreshContractCreditsRequest: RefreshContractCreditsRequest, contractId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'refreshContractCreditsRequest' is not null or undefined
        if (refreshContractCreditsRequest === null || refreshContractCreditsRequest === undefined) {
            throw new RequiredError("ContractsApi", "refreshContractCredits", "refreshContractCreditsRequest");
        }


        // verify required parameter 'contractId' is not null or undefined
        if (contractId === null || contractId === undefined) {
            throw new RequiredError("ContractsApi", "refreshContractCredits", "contractId");
        }


        // Path Params
        const localVarPath = '/contracts/{contractId}/credits/refresh'
            .replace('{' + 'contractId' + '}', encodeURIComponent(String(contractId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(refreshContractCreditsRequest, "RefreshContractCreditsRequest", ""),
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
     * Use this endpoint to terminate a contract.     Provide a terminationDate in the request body to schedule the termination for a specific date,     or omit it to terminate the contract immediately.     The contract\'s status is set to PendingTermination and its end date is updated accordingly.
     * Terminate a contract
     * @param terminateContractRequest 
     * @param contractId 
     */
    public async terminateContract(terminateContractRequest: TerminateContractRequest, contractId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminateContractRequest' is not null or undefined
        if (terminateContractRequest === null || terminateContractRequest === undefined) {
            throw new RequiredError("ContractsApi", "terminateContract", "terminateContractRequest");
        }


        // verify required parameter 'contractId' is not null or undefined
        if (contractId === null || contractId === undefined) {
            throw new RequiredError("ContractsApi", "terminateContract", "contractId");
        }


        // Path Params
        const localVarPath = '/contracts/{contractId}/terminate'
            .replace('{' + 'contractId' + '}', encodeURIComponent(String(contractId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(terminateContractRequest, "TerminateContractRequest", ""),
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

export class ContractsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createContractWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateContractResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateContractResponse", ""
            ) as CreateContractResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedErrorResponse", ""
            ) as UnauthorizedErrorResponse;
            throw new ApiException<UnauthorizedErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitErrorResponse", ""
            ) as RateLimitErrorResponse;
            throw new ApiException<RateLimitErrorResponse>(response.httpStatusCode, "Too Many Requests", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorResponse", ""
            ) as InternalServerErrorResponse;
            throw new ApiException<InternalServerErrorResponse>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateContractResponse", ""
            ) as CreateContractResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteContractWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeleteContractResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteContractResponse", ""
            ) as DeleteContractResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedErrorResponse", ""
            ) as UnauthorizedErrorResponse;
            throw new ApiException<UnauthorizedErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrorResponse", ""
            ) as NotFoundErrorResponse;
            throw new ApiException<NotFoundErrorResponse>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitErrorResponse", ""
            ) as RateLimitErrorResponse;
            throw new ApiException<RateLimitErrorResponse>(response.httpStatusCode, "Too Many Requests", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorResponse", ""
            ) as InternalServerErrorResponse;
            throw new ApiException<InternalServerErrorResponse>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteContractResponse", ""
            ) as DeleteContractResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getContractWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetContractResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetContractResponse", ""
            ) as GetContractResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedErrorResponse", ""
            ) as UnauthorizedErrorResponse;
            throw new ApiException<UnauthorizedErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrorResponse", ""
            ) as NotFoundErrorResponse;
            throw new ApiException<NotFoundErrorResponse>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitErrorResponse", ""
            ) as RateLimitErrorResponse;
            throw new ApiException<RateLimitErrorResponse>(response.httpStatusCode, "Too Many Requests", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorResponse", ""
            ) as InternalServerErrorResponse;
            throw new ApiException<InternalServerErrorResponse>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetContractResponse", ""
            ) as GetContractResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContractByIntegrationId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getContractByIntegrationIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetContractByIntegrationIdResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetContractByIntegrationIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetContractByIntegrationIdResponse", ""
            ) as GetContractByIntegrationIdResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedErrorResponse", ""
            ) as UnauthorizedErrorResponse;
            throw new ApiException<UnauthorizedErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrorResponse", ""
            ) as NotFoundErrorResponse;
            throw new ApiException<NotFoundErrorResponse>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitErrorResponse", ""
            ) as RateLimitErrorResponse;
            throw new ApiException<RateLimitErrorResponse>(response.httpStatusCode, "Too Many Requests", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorResponse", ""
            ) as InternalServerErrorResponse;
            throw new ApiException<InternalServerErrorResponse>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetContractByIntegrationIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetContractByIntegrationIdResponse", ""
            ) as GetContractByIntegrationIdResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listContracts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listContractsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListContractsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListContractsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListContractsResponse", ""
            ) as ListContractsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedErrorResponse", ""
            ) as UnauthorizedErrorResponse;
            throw new ApiException<UnauthorizedErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitErrorResponse", ""
            ) as RateLimitErrorResponse;
            throw new ApiException<RateLimitErrorResponse>(response.httpStatusCode, "Too Many Requests", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorResponse", ""
            ) as InternalServerErrorResponse;
            throw new ApiException<InternalServerErrorResponse>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListContractsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListContractsResponse", ""
            ) as ListContractsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshContractCredits
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async refreshContractCreditsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RefreshContractCreditsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RefreshContractCreditsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefreshContractCreditsResponse", ""
            ) as RefreshContractCreditsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedErrorResponse", ""
            ) as UnauthorizedErrorResponse;
            throw new ApiException<UnauthorizedErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitErrorResponse", ""
            ) as RateLimitErrorResponse;
            throw new ApiException<RateLimitErrorResponse>(response.httpStatusCode, "Too Many Requests", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorResponse", ""
            ) as InternalServerErrorResponse;
            throw new ApiException<InternalServerErrorResponse>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RefreshContractCreditsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefreshContractCreditsResponse", ""
            ) as RefreshContractCreditsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to terminateContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async terminateContractWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TerminateContractResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TerminateContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TerminateContractResponse", ""
            ) as TerminateContractResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedErrorResponse", ""
            ) as UnauthorizedErrorResponse;
            throw new ApiException<UnauthorizedErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitErrorResponse", ""
            ) as RateLimitErrorResponse;
            throw new ApiException<RateLimitErrorResponse>(response.httpStatusCode, "Too Many Requests", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorResponse", ""
            ) as InternalServerErrorResponse;
            throw new ApiException<InternalServerErrorResponse>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TerminateContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TerminateContractResponse", ""
            ) as TerminateContractResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
