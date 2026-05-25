// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetProductConsumptionResponse } from '../models/GetProductConsumptionResponse';
import { InternalServerErrorResponse } from '../models/InternalServerErrorResponse';
import { NotFoundErrorResponse } from '../models/NotFoundErrorResponse';
import { RateLimitErrorResponse } from '../models/RateLimitErrorResponse';
import { UnauthorizedErrorResponse } from '../models/UnauthorizedErrorResponse';
import { ValidationErrorResponse } from '../models/ValidationErrorResponse';

/**
 * no description
 */
export class ProductConsumptionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param productId 
     */
    public async getProductConsumption(productId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductConsumptionsApi", "getProductConsumption", "productId");
        }


        // Path Params
        const localVarPath = '/product-consumption/{productId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

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

}

export class ProductConsumptionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProductConsumption
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProductConsumptionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetProductConsumptionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetProductConsumptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetProductConsumptionResponse", ""
            ) as GetProductConsumptionResponse;
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
            const body: GetProductConsumptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetProductConsumptionResponse", ""
            ) as GetProductConsumptionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
