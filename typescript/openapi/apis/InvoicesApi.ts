// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ActionRefusedErrorResponse } from '../models/ActionRefusedErrorResponse';
import { CancelInvoiceResponse } from '../models/CancelInvoiceResponse';
import { DeleteInvoiceResponse } from '../models/DeleteInvoiceResponse';
import { FailedDependencyErrorResponse } from '../models/FailedDependencyErrorResponse';
import { ForbiddenErrorResponse } from '../models/ForbiddenErrorResponse';
import { GetInvoiceResponse } from '../models/GetInvoiceResponse';
import { InternalServerErrorResponse } from '../models/InternalServerErrorResponse';
import { InvoiceBillingStatus } from '../models/InvoiceBillingStatus';
import { InvoicePaymentStatusResponse } from '../models/InvoicePaymentStatusResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { NotFoundErrorResponse } from '../models/NotFoundErrorResponse';
import { RateLimitErrorResponse } from '../models/RateLimitErrorResponse';
import { RecordInvoicePaymentRequest } from '../models/RecordInvoicePaymentRequest';
import { RecordInvoicePaymentResponse } from '../models/RecordInvoicePaymentResponse';
import { ReissueInvoiceResponse } from '../models/ReissueInvoiceResponse';
import { UnauthorizedErrorResponse } from '../models/UnauthorizedErrorResponse';
import { UnprocessableEntityErrorResponse } from '../models/UnprocessableEntityErrorResponse';
import { UpdateInvoiceDueDateRequest } from '../models/UpdateInvoiceDueDateRequest';
import { UpdateInvoiceDueDateResponse } from '../models/UpdateInvoiceDueDateResponse';
import { UpdateInvoiceIssueDateRequest } from '../models/UpdateInvoiceIssueDateRequest';
import { UpdateInvoiceIssueDateResponse } from '../models/UpdateInvoiceIssueDateResponse';
import { ValidationErrorResponse } from '../models/ValidationErrorResponse';

/**
 * no description
 */
export class InvoicesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Use this endpoint to cancel an invoice.     Only an approved invoice with no payments recorded can be cancelled.     Cancelling an invoice cannot be undone.
     * Cancel an invoice
     * @param invoiceId 
     */
    public async cancelInvoice(invoiceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoicesApi", "cancelInvoice", "invoiceId");
        }


        // Path Params
        const localVarPath = '/invoices/{invoiceId}/cancel'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Delete a Invoice by id.
     * Delete Invoice
     * @param invoiceId 
     */
    public async deleteInvoice(invoiceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoicesApi", "deleteInvoice", "invoiceId");
        }


        // Path Params
        const localVarPath = '/invoices/{invoiceId}'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

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

    /**
     * Use this endpoint to record a payment on an approved invoice.     Provide the amount and an idempotencyKey in the request body.     Partial payments are allowed. When the amount is higher than what is still owed, the invoice is marked as paid and the excess is added as a credit to the customer.     That credit is not exported as a credit memo to a connected accounting system.     The idempotencyKey makes a retry safe: repeating a request with the same key and the same body does not record a second payment, and the same key with a different body is rejected.     An idempotencyKey is remembered for 24 hours.     A request whose transactionId is already recorded on the invoice is refused.     If a request with the same idempotencyKey is still being processed or ended without a result, the answer is a conflict: retry after a short delay, and if the answer stays the same, read the invoice to check whether the payment was recorded and, if it was not, send the request again with a new idempotencyKey.     A recorded payment cannot be edited or deleted through the API.
     * Record a payment on an invoice
     * @param recordInvoicePaymentRequest 
     * @param invoiceId 
     */
    public async recordInvoicePayment(recordInvoicePaymentRequest: RecordInvoicePaymentRequest, invoiceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'recordInvoicePaymentRequest' is not null or undefined
        if (recordInvoicePaymentRequest === null || recordInvoicePaymentRequest === undefined) {
            throw new RequiredError("InvoicesApi", "recordInvoicePayment", "recordInvoicePaymentRequest");
        }


        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoicesApi", "recordInvoicePayment", "invoiceId");
        }


        // Path Params
        const localVarPath = '/invoices/{invoiceId}/payments'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(recordInvoicePaymentRequest, "RecordInvoicePaymentRequest", ""),
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
     * Use this endpoint to reissue an invoice: the original invoice is cancelled and a replacement is produced.     Only an approved invoice with no payments or credits applied that is not linked to a parent or child invoice can be reissued.     The original invoice is cancelled and cannot be restored.     For a manually created invoice, the replacement is created right away and its id is returned in replacementInvoiceId by this call only. Store it, because calling this endpoint again for that invoice is refused.     For an invoice generated from a contract, replacementInvoiceId is null at first because the replacement is generated shortly after the request. Calling this endpoint again returns the replacement\'s id once it exists and can be matched to this invoice; otherwise it returns null and asks again for the replacement to be generated.     A replacement can be read through GET /invoices/{invoiceId} only once it has finished calculating, because invoices that are still being calculated are not returned.     Invoice reissue must be enabled for your account.
     * Reissue an invoice
     * @param invoiceId 
     */
    public async reissueInvoice(invoiceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoicesApi", "reissueInvoice", "invoiceId");
        }


        // Path Params
        const localVarPath = '/invoices/{invoiceId}/reissue'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Use this endpoint to change the due date of an invoice.     Provide the new dueDate in the request body.     The due date of an invoice that is already paid or cancelled cannot be changed.
     * Update the due date of an invoice
     * @param updateInvoiceDueDateRequest 
     * @param invoiceId 
     */
    public async updateInvoiceDueDate(updateInvoiceDueDateRequest: UpdateInvoiceDueDateRequest, invoiceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'updateInvoiceDueDateRequest' is not null or undefined
        if (updateInvoiceDueDateRequest === null || updateInvoiceDueDateRequest === undefined) {
            throw new RequiredError("InvoicesApi", "updateInvoiceDueDate", "updateInvoiceDueDateRequest");
        }


        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoicesApi", "updateInvoiceDueDate", "invoiceId");
        }


        // Path Params
        const localVarPath = '/invoices/{invoiceId}/due-date'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateInvoiceDueDateRequest, "UpdateInvoiceDueDateRequest", ""),
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
     * Use this endpoint to change the issue date of an invoice.     Provide the new issuedAt date in the request body.     The issue date can only be changed before the invoice is approved.     Changing it recalculates the due date from the invoice\'s payment terms.
     * Update the issue date of an invoice
     * @param updateInvoiceIssueDateRequest 
     * @param invoiceId 
     */
    public async updateInvoiceIssueDate(updateInvoiceIssueDateRequest: UpdateInvoiceIssueDateRequest, invoiceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'updateInvoiceIssueDateRequest' is not null or undefined
        if (updateInvoiceIssueDateRequest === null || updateInvoiceIssueDateRequest === undefined) {
            throw new RequiredError("InvoicesApi", "updateInvoiceIssueDate", "updateInvoiceIssueDateRequest");
        }


        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoicesApi", "updateInvoiceIssueDate", "invoiceId");
        }


        // Path Params
        const localVarPath = '/invoices/{invoiceId}/issue-date'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateInvoiceIssueDateRequest, "UpdateInvoiceIssueDateRequest", ""),
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

export class InvoicesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelInvoice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelInvoiceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CancelInvoiceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CancelInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelInvoiceResponse", ""
            ) as CancelInvoiceResponse;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ActionRefusedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionRefusedErrorResponse", ""
            ) as ActionRefusedErrorResponse;
            throw new ApiException<ActionRefusedErrorResponse>(response.httpStatusCode, "Conflict", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: FailedDependencyErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FailedDependencyErrorResponse", ""
            ) as FailedDependencyErrorResponse;
            throw new ApiException<FailedDependencyErrorResponse>(response.httpStatusCode, "Failed Dependency", body, response.headers);
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
            const body: CancelInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelInvoiceResponse", ""
            ) as CancelInvoiceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteInvoice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteInvoiceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeleteInvoiceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteInvoiceResponse", ""
            ) as DeleteInvoiceResponse;
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
            const body: DeleteInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteInvoiceResponse", ""
            ) as DeleteInvoiceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to recordInvoicePayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async recordInvoicePaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecordInvoicePaymentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecordInvoicePaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecordInvoicePaymentResponse", ""
            ) as RecordInvoicePaymentResponse;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ActionRefusedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionRefusedErrorResponse", ""
            ) as ActionRefusedErrorResponse;
            throw new ApiException<ActionRefusedErrorResponse>(response.httpStatusCode, "Conflict", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: UnprocessableEntityErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnprocessableEntityErrorResponse", ""
            ) as UnprocessableEntityErrorResponse;
            throw new ApiException<UnprocessableEntityErrorResponse>(response.httpStatusCode, "Unprocessable Entity", body, response.headers);
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
            const body: RecordInvoicePaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecordInvoicePaymentResponse", ""
            ) as RecordInvoicePaymentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reissueInvoice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reissueInvoiceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReissueInvoiceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReissueInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReissueInvoiceResponse", ""
            ) as ReissueInvoiceResponse;
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ForbiddenErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ForbiddenErrorResponse", ""
            ) as ForbiddenErrorResponse;
            throw new ApiException<ForbiddenErrorResponse>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrorResponse", ""
            ) as NotFoundErrorResponse;
            throw new ApiException<NotFoundErrorResponse>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ActionRefusedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionRefusedErrorResponse", ""
            ) as ActionRefusedErrorResponse;
            throw new ApiException<ActionRefusedErrorResponse>(response.httpStatusCode, "Conflict", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: FailedDependencyErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FailedDependencyErrorResponse", ""
            ) as FailedDependencyErrorResponse;
            throw new ApiException<FailedDependencyErrorResponse>(response.httpStatusCode, "Failed Dependency", body, response.headers);
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
            const body: ReissueInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReissueInvoiceResponse", ""
            ) as ReissueInvoiceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateInvoiceDueDate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateInvoiceDueDateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateInvoiceDueDateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateInvoiceDueDateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateInvoiceDueDateResponse", ""
            ) as UpdateInvoiceDueDateResponse;
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
            const body: UpdateInvoiceDueDateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateInvoiceDueDateResponse", ""
            ) as UpdateInvoiceDueDateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateInvoiceIssueDate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateInvoiceIssueDateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateInvoiceIssueDateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateInvoiceIssueDateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateInvoiceIssueDateResponse", ""
            ) as UpdateInvoiceIssueDateResponse;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ActionRefusedErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionRefusedErrorResponse", ""
            ) as ActionRefusedErrorResponse;
            throw new ApiException<ActionRefusedErrorResponse>(response.httpStatusCode, "Conflict", body, response.headers);
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
            const body: UpdateInvoiceIssueDateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateInvoiceIssueDateResponse", ""
            ) as UpdateInvoiceIssueDateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
