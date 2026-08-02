// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetInvoiceResponse } from '../models/GetInvoiceResponse';
import { InternalServerErrorResponse } from '../models/InternalServerErrorResponse';
import { InvoiceBillingStatus } from '../models/InvoiceBillingStatus';
import { InvoicePaymentStatusResponse } from '../models/InvoicePaymentStatusResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { NotFoundErrorResponse } from '../models/NotFoundErrorResponse';
import { RateLimitErrorResponse } from '../models/RateLimitErrorResponse';
import { UnauthorizedErrorResponse } from '../models/UnauthorizedErrorResponse';
import { ValidationErrorResponse } from '../models/ValidationErrorResponse';

/**
 * no description
 */
export class InvoicesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param invoiceId 
     */
    public async getInvoice(invoiceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoicesApi", "getInvoice", "invoiceId");
        }


        // Path Params
        const localVarPath = '/invoices/{invoiceId}'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

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
     * Use this endpoint to retrieve payment status information for a specific invoice, including payment status, amount due, amount paid, total, due date, paid date, and invoice PDF URL.
     * Get invoice payment status
     * @param invoiceId 
     */
    public async getInvoicePaymentStatus(invoiceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoicesApi", "getInvoicePaymentStatus", "invoiceId");
        }


        // Path Params
        const localVarPath = '/invoices/{invoiceId}/payment-status'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

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
     * List invoices for the account. Optionally filter by customerId to retrieve invoices for a specific customer.
     * List invoices
     * @param limit 
     * @param cursor 
     * @param customerId 
     * @param billingStatus 
     * @param issuedAfter 
     * @param issuedBefore 
     */
    public async listInvoices(limit?: number, cursor?: string, customerId?: string, billingStatus?: InvoiceBillingStatus, issuedAfter?: string, issuedBefore?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/invoices';

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
        if (billingStatus !== undefined) {
            const serializedParams = ObjectSerializer.serialize(billingStatus, "InvoiceBillingStatus", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (issuedAfter !== undefined) {
            requestContext.setQueryParam("issuedAfter", ObjectSerializer.serialize(issuedAfter, "string", ""));
        }

        // Query Params
        if (issuedBefore !== undefined) {
            requestContext.setQueryParam("issuedBefore", ObjectSerializer.serialize(issuedBefore, "string", ""));
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

}

export class InvoicesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInvoice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInvoiceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetInvoiceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetInvoiceResponse", ""
            ) as GetInvoiceResponse;
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
            const body: GetInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetInvoiceResponse", ""
            ) as GetInvoiceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInvoicePaymentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInvoicePaymentStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InvoicePaymentStatusResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InvoicePaymentStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoicePaymentStatusResponse", ""
            ) as InvoicePaymentStatusResponse;
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
            const body: InvoicePaymentStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoicePaymentStatusResponse", ""
            ) as InvoicePaymentStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listInvoices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listInvoicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListInvoicesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListInvoicesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListInvoicesResponse", ""
            ) as ListInvoicesResponse;
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
            const body: ListInvoicesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListInvoicesResponse", ""
            ) as ListInvoicesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
