import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AcknowledgedEvent } from '../models/AcknowledgedEvent';
import { Address } from '../models/Address';
import { AggregationMethod } from '../models/AggregationMethod';
import { AggregationOperator } from '../models/AggregationOperator';
import { BillingCycleStatus } from '../models/BillingCycleStatus';
import { BillingInterval } from '../models/BillingInterval';
import { CloudUsageResult } from '../models/CloudUsageResult';
import { Condition } from '../models/Condition';
import { ConflictErrorResponse } from '../models/ConflictErrorResponse';
import { Contact } from '../models/Contact';
import { ContractStatus } from '../models/ContractStatus';
import { CreateCatalogProductRequest } from '../models/CreateCatalogProductRequest';
import { CreateCatalogProductResponse } from '../models/CreateCatalogProductResponse';
import { CreateCatalogProductResponseCatalogProduct } from '../models/CreateCatalogProductResponseCatalogProduct';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreateContractResponse } from '../models/CreateContractResponse';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreateCustomFieldResponse } from '../models/CreateCustomFieldResponse';
import { CreateCustomFieldResponseCustomField } from '../models/CreateCustomFieldResponseCustomField';
import { CreateCustomerRelationRequest } from '../models/CreateCustomerRelationRequest';
import { CreateCustomerRelationResponse } from '../models/CreateCustomerRelationResponse';
import { CreateCustomerRelationResponseCustomerRelation } from '../models/CreateCustomerRelationResponseCustomerRelation';
import { CreateCustomerRequest } from '../models/CreateCustomerRequest';
import { CreateCustomerResponse } from '../models/CreateCustomerResponse';
import { CreateCustomerResponseCustomer } from '../models/CreateCustomerResponseCustomer';
import { CreateMeasurementRequest } from '../models/CreateMeasurementRequest';
import { CreateMeasurementRequestUsageDate } from '../models/CreateMeasurementRequestUsageDate';
import { CreateMeasurementResponse } from '../models/CreateMeasurementResponse';
import { CreateMeasurementResponseMeasurement } from '../models/CreateMeasurementResponseMeasurement';
import { CreditLedgerEntry } from '../models/CreditLedgerEntry';
import { CreditTopUpRequest } from '../models/CreditTopUpRequest';
import { CreditTopUpRequestCreditGrant } from '../models/CreditTopUpRequestCreditGrant';
import { CreditTopUpResponse } from '../models/CreditTopUpResponse';
import { Criterion } from '../models/Criterion';
import { CriterionOperator } from '../models/CriterionOperator';
import { Currency } from '../models/Currency';
import { CustomField } from '../models/CustomField';
import { CustomFieldEntities } from '../models/CustomFieldEntities';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { CustomFieldValueTypes } from '../models/CustomFieldValueTypes';
import { CustomerCloudProviderSettings } from '../models/CustomerCloudProviderSettings';
import { CustomerExternalIntegration } from '../models/CustomerExternalIntegration';
import { CustomerRelationType } from '../models/CustomerRelationType';
import { CustomerSource } from '../models/CustomerSource';
import { CustomerStatus } from '../models/CustomerStatus';
import { DeductCreditsRequest } from '../models/DeductCreditsRequest';
import { DeleteCatalogProductResponse } from '../models/DeleteCatalogProductResponse';
import { DeleteCatalogProductResponseCatalogProduct } from '../models/DeleteCatalogProductResponseCatalogProduct';
import { DeleteContractResponse } from '../models/DeleteContractResponse';
import { DeleteContractResponseContract } from '../models/DeleteContractResponseContract';
import { DeleteCustomFieldResponse } from '../models/DeleteCustomFieldResponse';
import { DeleteCustomFieldResponseCustomField } from '../models/DeleteCustomFieldResponseCustomField';
import { DeleteCustomerResponse } from '../models/DeleteCustomerResponse';
import { DeleteCustomerResponseCustomer } from '../models/DeleteCustomerResponseCustomer';
import { DeleteEventResponse } from '../models/DeleteEventResponse';
import { DeleteEventResponseEvent } from '../models/DeleteEventResponseEvent';
import { DeleteEventsByRefsRequest } from '../models/DeleteEventsByRefsRequest';
import { DeleteEventsByRefsResponse } from '../models/DeleteEventsByRefsResponse';
import { DeleteEventsByRefsResponseEventsInner } from '../models/DeleteEventsByRefsResponseEventsInner';
import { DeleteMeasurementResponse } from '../models/DeleteMeasurementResponse';
import { DeleteMeasurementResponseMeasurement } from '../models/DeleteMeasurementResponseMeasurement';
import { DeleteMeterResponse } from '../models/DeleteMeterResponse';
import { DeleteMeterResponseMeter } from '../models/DeleteMeterResponseMeter';
import { DeletePlanResponse } from '../models/DeletePlanResponse';
import { DeletePlanResponsePlan } from '../models/DeletePlanResponsePlan';
import { Event } from '../models/Event';
import { EventsDryRunRequest } from '../models/EventsDryRunRequest';
import { EventsDryRunResponse } from '../models/EventsDryRunResponse';
import { EventsDryRunResponseObject } from '../models/EventsDryRunResponseObject';
import { EventsDryRunResponseObjectEvent } from '../models/EventsDryRunResponseObjectEvent';
import { EventsDryRunResponseObjectMeterWithValuesInner } from '../models/EventsDryRunResponseObjectMeterWithValuesInner';
import { ExternalCreditGrant } from '../models/ExternalCreditGrant';
import { ExternalCreditProduct } from '../models/ExternalCreditProduct';
import { ExternalOverageStrategy } from '../models/ExternalOverageStrategy';
import { Filter } from '../models/Filter';
import { FullDayPeriod } from '../models/FullDayPeriod';
import { GetCatalogProductResponse } from '../models/GetCatalogProductResponse';
import { GetContractByIntegrationIdResponse } from '../models/GetContractByIntegrationIdResponse';
import { GetContractResponse } from '../models/GetContractResponse';
import { GetContractResponseContract } from '../models/GetContractResponseContract';
import { GetCustomFieldResponse } from '../models/GetCustomFieldResponse';
import { GetCustomerByIntegrationIdResponse } from '../models/GetCustomerByIntegrationIdResponse';
import { GetCustomerByNameResponse } from '../models/GetCustomerByNameResponse';
import { GetCustomerByNameResponseCustomer } from '../models/GetCustomerByNameResponseCustomer';
import { GetCustomerProductsConsumptionsByAliasResponse } from '../models/GetCustomerProductsConsumptionsByAliasResponse';
import { GetCustomerProductsConsumptionsResponse } from '../models/GetCustomerProductsConsumptionsResponse';
import { GetCustomerRelationResponse } from '../models/GetCustomerRelationResponse';
import { GetCustomerResponse } from '../models/GetCustomerResponse';
import { GetEventResponse } from '../models/GetEventResponse';
import { GetEventResponseEvent } from '../models/GetEventResponseEvent';
import { GetInvoiceResponse } from '../models/GetInvoiceResponse';
import { GetInvoiceResponseInvoice } from '../models/GetInvoiceResponseInvoice';
import { GetInvoiceResponseInvoiceRevenueBreakdown } from '../models/GetInvoiceResponseInvoiceRevenueBreakdown';
import { GetMeasurementResponse } from '../models/GetMeasurementResponse';
import { GetMeterResponse } from '../models/GetMeterResponse';
import { GetMeterResponseMeter } from '../models/GetMeterResponseMeter';
import { GetPlanResponse } from '../models/GetPlanResponse';
import { GetPlanResponsePlan } from '../models/GetPlanResponsePlan';
import { GetProductConsumptionResponse } from '../models/GetProductConsumptionResponse';
import { GetProductConsumptionResponseProductConsumption } from '../models/GetProductConsumptionResponseProductConsumption';
import { GrantCreditsRequest } from '../models/GrantCreditsRequest';
import { IntegrationEntity } from '../models/IntegrationEntity';
import { IntegrationEntityTypes } from '../models/IntegrationEntityTypes';
import { IntegrationProviders } from '../models/IntegrationProviders';
import { InternalServerErrorResponse } from '../models/InternalServerErrorResponse';
import { InvalidEvent } from '../models/InvalidEvent';
import { InvoiceBillingStatus } from '../models/InvoiceBillingStatus';
import { InvoicePaymentStatusResponse } from '../models/InvoicePaymentStatusResponse';
import { LineItem } from '../models/LineItem';
import { LineItemRevenueBreakdown } from '../models/LineItemRevenueBreakdown';
import { ListCatalogProductsResponse } from '../models/ListCatalogProductsResponse';
import { ListContractsResponse } from '../models/ListContractsResponse';
import { ListCreditLedgerEntriesResponse } from '../models/ListCreditLedgerEntriesResponse';
import { ListCreditProductsResponse } from '../models/ListCreditProductsResponse';
import { ListCustomFieldsResponse } from '../models/ListCustomFieldsResponse';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListMeasurementsResponse } from '../models/ListMeasurementsResponse';
import { ListMetersResponse } from '../models/ListMetersResponse';
import { ListPlansResponse } from '../models/ListPlansResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Meter } from '../models/Meter';
import { NotFoundErrorResponse } from '../models/NotFoundErrorResponse';
import { NotificationEventType } from '../models/NotificationEventType';
import { PartnerSubmissionDetail } from '../models/PartnerSubmissionDetail';
import { PaymentInfo } from '../models/PaymentInfo';
import { PaymentInfoDepositTo } from '../models/PaymentInfoDepositTo';
import { PaymentTerm } from '../models/PaymentTerm';
import { PlanBillingData } from '../models/PlanBillingData';
import { PlanDuration } from '../models/PlanDuration';
import { PlanStatus } from '../models/PlanStatus';
import { ProductCloudProviderSettings } from '../models/ProductCloudProviderSettings';
import { ProductConsumption } from '../models/ProductConsumption';
import { ProductExternalIntegration } from '../models/ProductExternalIntegration';
import { ProductGroup } from '../models/ProductGroup';
import { ProductGroupCommitment } from '../models/ProductGroupCommitment';
import { ProductGroupProductsInner } from '../models/ProductGroupProductsInner';
import { ProductGroupProductsInnerCommitment } from '../models/ProductGroupProductsInnerCommitment';
import { ProductGroupProductsInnerCommitmentScheduling } from '../models/ProductGroupProductsInnerCommitmentScheduling';
import { ProductGroupProductsInnerCommitmentSchedulingDuration } from '../models/ProductGroupProductsInnerCommitmentSchedulingDuration';
import { ProductGroupProductsInnerPricing } from '../models/ProductGroupProductsInnerPricing';
import { ProductGroupProductsInnerPricingOneOf } from '../models/ProductGroupProductsInnerPricingOneOf';
import { ProductGroupProductsInnerPricingOneOf1 } from '../models/ProductGroupProductsInnerPricingOneOf1';
import { ProductGroupProductsInnerPricingOneOf1InstallmentsInner } from '../models/ProductGroupProductsInnerPricingOneOf1InstallmentsInner';
import { ProductGroupProductsInnerPricingOneOf2 } from '../models/ProductGroupProductsInnerPricingOneOf2';
import { ProductGroupProductsInnerPricingOneOf2SubscriptionCadence } from '../models/ProductGroupProductsInnerPricingOneOf2SubscriptionCadence';
import { ProductGroupProductsInnerPricingOneOf3 } from '../models/ProductGroupProductsInnerPricingOneOf3';
import { ProductGroupProductsInnerPricingOneOf3SubscriptionCadence } from '../models/ProductGroupProductsInnerPricingOneOf3SubscriptionCadence';
import { ProductGroupProductsInnerPricingOneOf3TiersInner } from '../models/ProductGroupProductsInnerPricingOneOf3TiersInner';
import { ProductGroupProductsInnerPricingOneOf4 } from '../models/ProductGroupProductsInnerPricingOneOf4';
import { ProductGroupProductsInnerPricingOneOf5 } from '../models/ProductGroupProductsInnerPricingOneOf5';
import { ProductGroupProductsInnerPricingOneOf6 } from '../models/ProductGroupProductsInnerPricingOneOf6';
import { ProductGroupProductsInnerPricingOneOfDiscount } from '../models/ProductGroupProductsInnerPricingOneOfDiscount';
import { ProductGroupProductsInnerScheduling } from '../models/ProductGroupProductsInnerScheduling';
import { ProductGroupProductsInnerSchedulingDuration } from '../models/ProductGroupProductsInnerSchedulingDuration';
import { QueryEventsResponse } from '../models/QueryEventsResponse';
import { QueryEventsResponseEventsInner } from '../models/QueryEventsResponseEventsInner';
import { RateLimitErrorResponse } from '../models/RateLimitErrorResponse';
import { RefreshContractCreditsRequest } from '../models/RefreshContractCreditsRequest';
import { RefreshContractCreditsRequestGrantsInner } from '../models/RefreshContractCreditsRequestGrantsInner';
import { RefreshContractCreditsResponse } from '../models/RefreshContractCreditsResponse';
import { RequestTooLongErrorResponse } from '../models/RequestTooLongErrorResponse';
import { SendEventsRequest } from '../models/SendEventsRequest';
import { SendEventsResponse } from '../models/SendEventsResponse';
import { SubmitCloudUsageRequest } from '../models/SubmitCloudUsageRequest';
import { SyncStatus } from '../models/SyncStatus';
import { TerminateContractRequest } from '../models/TerminateContractRequest';
import { TerminateContractResponse } from '../models/TerminateContractResponse';
import { UnauthorizedErrorResponse } from '../models/UnauthorizedErrorResponse';
import { UnlimitedDuration } from '../models/UnlimitedDuration';
import { UpdateCatalogProductRequest } from '../models/UpdateCatalogProductRequest';
import { UpdateCatalogProductResponse } from '../models/UpdateCatalogProductResponse';
import { UpdateCustomFieldRequest } from '../models/UpdateCustomFieldRequest';
import { UpdateCustomFieldResponse } from '../models/UpdateCustomFieldResponse';
import { UpdateCustomerRequest } from '../models/UpdateCustomerRequest';
import { UpdateCustomerResponse } from '../models/UpdateCustomerResponse';
import { UpdateMeterRequest } from '../models/UpdateMeterRequest';
import { UpdateMeterResponse } from '../models/UpdateMeterResponse';
import { UsageWindow } from '../models/UsageWindow';
import { V2DeleteEventResponse } from '../models/V2DeleteEventResponse';
import { V2DeleteEventsByRefsRequest } from '../models/V2DeleteEventsByRefsRequest';
import { V2DeleteEventsByRefsResponse } from '../models/V2DeleteEventsByRefsResponse';
import { V2EventsDryRunRequest } from '../models/V2EventsDryRunRequest';
import { V2EventsDryRunResponse } from '../models/V2EventsDryRunResponse';
import { V2GetEventResponse } from '../models/V2GetEventResponse';
import { V2QueryEventsAggregationRequest } from '../models/V2QueryEventsAggregationRequest';
import { V2QueryEventsAggregationRequestMetersInner } from '../models/V2QueryEventsAggregationRequestMetersInner';
import { V2QueryEventsAggregationRequestMetersInnerAggregation } from '../models/V2QueryEventsAggregationRequestMetersInnerAggregation';
import { V2QueryEventsAggregationRequestMetersInnerAggregationFieldArithmetic } from '../models/V2QueryEventsAggregationRequestMetersInnerAggregationFieldArithmetic';
import { V2QueryEventsAggregationRequestMetersInnerFiltersInner } from '../models/V2QueryEventsAggregationRequestMetersInnerFiltersInner';
import { V2QueryEventsAggregationRequestMetersInnerFiltersInnerValue } from '../models/V2QueryEventsAggregationRequestMetersInnerFiltersInnerValue';
import { V2QueryEventsAggregationRequestMetersInnerSqlFullQuery } from '../models/V2QueryEventsAggregationRequestMetersInnerSqlFullQuery';
import { V2QueryEventsAggregationRequestPeriod } from '../models/V2QueryEventsAggregationRequestPeriod';
import { V2QueryEventsAggregationResponse } from '../models/V2QueryEventsAggregationResponse';
import { V2QueryEventsAggregationResponseDataPointsInner } from '../models/V2QueryEventsAggregationResponseDataPointsInner';
import { V2QueryEventsResponse } from '../models/V2QueryEventsResponse';
import { V2SendEventsRequest } from '../models/V2SendEventsRequest';
import { V2SendEventsResponse } from '../models/V2SendEventsResponse';
import { ValidationErrorResponse } from '../models/ValidationErrorResponse';
import { ValidationErrorResponseParamsInner } from '../models/ValidationErrorResponseParamsInner';
import { WebhookSubscribeRequest } from '../models/WebhookSubscribeRequest';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.
     * Login by obtaining a new access token
     * @param loginRequest
     */
    public loginWithHttpInfo(loginRequest: LoginRequest, _options?: Configuration): Observable<HttpInfo<LoginResponse>> {
        const requestContextPromise = this.requestFactory.login(loginRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.
     * Login by obtaining a new access token
     * @param loginRequest
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Observable<LoginResponse> {
        return this.loginWithHttpInfo(loginRequest, _options).pipe(map((apiResponse: HttpInfo<LoginResponse>) => apiResponse.data));
    }

}

import { CatalogProductsApiRequestFactory, CatalogProductsApiResponseProcessor} from "../apis/CatalogProductsApi";
export class ObservableCatalogProductsApi {
    private requestFactory: CatalogProductsApiRequestFactory;
    private responseProcessor: CatalogProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CatalogProductsApiRequestFactory,
        responseProcessor?: CatalogProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CatalogProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CatalogProductsApiResponseProcessor();
    }

    /**
     * Create a new Catalog product.
     * Create Catalog product
     * @param createCatalogProductRequest
     */
    public createCatalogProductWithHttpInfo(createCatalogProductRequest: CreateCatalogProductRequest, _options?: Configuration): Observable<HttpInfo<CreateCatalogProductResponse>> {
        const requestContextPromise = this.requestFactory.createCatalogProduct(createCatalogProductRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCatalogProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Catalog product.
     * Create Catalog product
     * @param createCatalogProductRequest
     */
    public createCatalogProduct(createCatalogProductRequest: CreateCatalogProductRequest, _options?: Configuration): Observable<CreateCatalogProductResponse> {
        return this.createCatalogProductWithHttpInfo(createCatalogProductRequest, _options).pipe(map((apiResponse: HttpInfo<CreateCatalogProductResponse>) => apiResponse.data));
    }

    /**
     * Delete a Catalog product by id.
     * Delete Catalog product
     * @param catalogProductId
     */
    public deleteCatalogProductWithHttpInfo(catalogProductId: string, _options?: Configuration): Observable<HttpInfo<DeleteCatalogProductResponse>> {
        const requestContextPromise = this.requestFactory.deleteCatalogProduct(catalogProductId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCatalogProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Catalog product by id.
     * Delete Catalog product
     * @param catalogProductId
     */
    public deleteCatalogProduct(catalogProductId: string, _options?: Configuration): Observable<DeleteCatalogProductResponse> {
        return this.deleteCatalogProductWithHttpInfo(catalogProductId, _options).pipe(map((apiResponse: HttpInfo<DeleteCatalogProductResponse>) => apiResponse.data));
    }

    /**
     * Get a Catalog product by id.
     * Get Catalog product
     * @param catalogProductId
     */
    public getCatalogProductWithHttpInfo(catalogProductId: string, _options?: Configuration): Observable<HttpInfo<GetCatalogProductResponse>> {
        const requestContextPromise = this.requestFactory.getCatalogProduct(catalogProductId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCatalogProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Catalog product by id.
     * Get Catalog product
     * @param catalogProductId
     */
    public getCatalogProduct(catalogProductId: string, _options?: Configuration): Observable<GetCatalogProductResponse> {
        return this.getCatalogProductWithHttpInfo(catalogProductId, _options).pipe(map((apiResponse: HttpInfo<GetCatalogProductResponse>) => apiResponse.data));
    }

    /**
     * Get a list of Catalog products.
     * List Catalog products
     * @param [limit]
     * @param [cursor]
     */
    public listCatalogProductsWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<ListCatalogProductsResponse>> {
        const requestContextPromise = this.requestFactory.listCatalogProducts(limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCatalogProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Catalog products.
     * List Catalog products
     * @param [limit]
     * @param [cursor]
     */
    public listCatalogProducts(limit?: number, cursor?: string, _options?: Configuration): Observable<ListCatalogProductsResponse> {
        return this.listCatalogProductsWithHttpInfo(limit, cursor, _options).pipe(map((apiResponse: HttpInfo<ListCatalogProductsResponse>) => apiResponse.data));
    }

    /**
     * Update a Catalog product by id.
     * Update Catalog product
     * @param updateCatalogProductRequest
     * @param catalogProductId
     */
    public updateCatalogProductWithHttpInfo(updateCatalogProductRequest: UpdateCatalogProductRequest, catalogProductId: string, _options?: Configuration): Observable<HttpInfo<UpdateCatalogProductResponse>> {
        const requestContextPromise = this.requestFactory.updateCatalogProduct(updateCatalogProductRequest, catalogProductId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCatalogProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Catalog product by id.
     * Update Catalog product
     * @param updateCatalogProductRequest
     * @param catalogProductId
     */
    public updateCatalogProduct(updateCatalogProductRequest: UpdateCatalogProductRequest, catalogProductId: string, _options?: Configuration): Observable<UpdateCatalogProductResponse> {
        return this.updateCatalogProductWithHttpInfo(updateCatalogProductRequest, catalogProductId, _options).pipe(map((apiResponse: HttpInfo<UpdateCatalogProductResponse>) => apiResponse.data));
    }

}

import { CloudUsageSubmissionApiRequestFactory, CloudUsageSubmissionApiResponseProcessor} from "../apis/CloudUsageSubmissionApi";
export class ObservableCloudUsageSubmissionApi {
    private requestFactory: CloudUsageSubmissionApiRequestFactory;
    private responseProcessor: CloudUsageSubmissionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudUsageSubmissionApiRequestFactory,
        responseProcessor?: CloudUsageSubmissionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CloudUsageSubmissionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CloudUsageSubmissionApiResponseProcessor();
    }

    /**
     * Submit cloud usage data
     * Submit cloud usage
     * @param submitCloudUsageRequest
     */
    public submitCloudUsageWithHttpInfo(submitCloudUsageRequest: SubmitCloudUsageRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.submitCloudUsage(submitCloudUsageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.submitCloudUsageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submit cloud usage data
     * Submit cloud usage
     * @param submitCloudUsageRequest
     */
    public submitCloudUsage(submitCloudUsageRequest: SubmitCloudUsageRequest, _options?: Configuration): Observable<any> {
        return this.submitCloudUsageWithHttpInfo(submitCloudUsageRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";
export class ObservableContractsApi {
    private requestFactory: ContractsApiRequestFactory;
    private responseProcessor: ContractsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContractsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContractsApiResponseProcessor();
    }

    /**
     * Create a new Contract.
     * Create Contract
     * @param createContractRequest
     */
    public createContractWithHttpInfo(createContractRequest: CreateContractRequest, _options?: Configuration): Observable<HttpInfo<CreateContractResponse>> {
        const requestContextPromise = this.requestFactory.createContract(createContractRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Contract.
     * Create Contract
     * @param createContractRequest
     */
    public createContract(createContractRequest: CreateContractRequest, _options?: Configuration): Observable<CreateContractResponse> {
        return this.createContractWithHttpInfo(createContractRequest, _options).pipe(map((apiResponse: HttpInfo<CreateContractResponse>) => apiResponse.data));
    }

    /**
     * Delete a Contract by id.
     * Delete Contract
     * @param contractId
     */
    public deleteContractWithHttpInfo(contractId: string, _options?: Configuration): Observable<HttpInfo<DeleteContractResponse>> {
        const requestContextPromise = this.requestFactory.deleteContract(contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Contract by id.
     * Delete Contract
     * @param contractId
     */
    public deleteContract(contractId: string, _options?: Configuration): Observable<DeleteContractResponse> {
        return this.deleteContractWithHttpInfo(contractId, _options).pipe(map((apiResponse: HttpInfo<DeleteContractResponse>) => apiResponse.data));
    }

    /**
     * Get a Contract by id.
     * Get Contract
     * @param contractId
     */
    public getContractWithHttpInfo(contractId: string, _options?: Configuration): Observable<HttpInfo<GetContractResponse>> {
        const requestContextPromise = this.requestFactory.getContract(contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Contract by id.
     * Get Contract
     * @param contractId
     */
    public getContract(contractId: string, _options?: Configuration): Observable<GetContractResponse> {
        return this.getContractWithHttpInfo(contractId, _options).pipe(map((apiResponse: HttpInfo<GetContractResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to get a specific contract using its integration provider and identifier.
     * Get contract by integration id
     * @param integrationType
     * @param integrationId
     */
    public getContractByIntegrationIdWithHttpInfo(integrationType: IntegrationProviders, integrationId: string, _options?: Configuration): Observable<HttpInfo<GetContractByIntegrationIdResponse>> {
        const requestContextPromise = this.requestFactory.getContractByIntegrationId(integrationType, integrationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContractByIntegrationIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get a specific contract using its integration provider and identifier.
     * Get contract by integration id
     * @param integrationType
     * @param integrationId
     */
    public getContractByIntegrationId(integrationType: IntegrationProviders, integrationId: string, _options?: Configuration): Observable<GetContractByIntegrationIdResponse> {
        return this.getContractByIntegrationIdWithHttpInfo(integrationType, integrationId, _options).pipe(map((apiResponse: HttpInfo<GetContractByIntegrationIdResponse>) => apiResponse.data));
    }

    /**
     * List contracts for the account. Optionally filter by customerId or customerExternalId to retrieve contracts for a specific customer (provide at most one, not both).
     * List contracts
     * @param [limit]
     * @param [cursor]
     * @param [customerId]
     * @param [customerExternalId]
     */
    public listContractsWithHttpInfo(limit?: number, cursor?: string, customerId?: string, customerExternalId?: string, _options?: Configuration): Observable<HttpInfo<ListContractsResponse>> {
        const requestContextPromise = this.requestFactory.listContracts(limit, cursor, customerId, customerExternalId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContractsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List contracts for the account. Optionally filter by customerId or customerExternalId to retrieve contracts for a specific customer (provide at most one, not both).
     * List contracts
     * @param [limit]
     * @param [cursor]
     * @param [customerId]
     * @param [customerExternalId]
     */
    public listContracts(limit?: number, cursor?: string, customerId?: string, customerExternalId?: string, _options?: Configuration): Observable<ListContractsResponse> {
        return this.listContractsWithHttpInfo(limit, cursor, customerId, customerExternalId, _options).pipe(map((apiResponse: HttpInfo<ListContractsResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to refresh the credit grants on a contract by creating a new contract phase     (a contract revision) that takes effect immediately.      Provide a list of credit grants to refresh in the request body — each is identified by its credit product     (credit type) id and is set to non-prorated in the new phase, optionally with a new price. Every other credit     grant on the contract is set to prorated. If the grants list is omitted, all credit grants on the contract are     refreshed (set to non-prorated).      If a supplied credit product matches more than one grant product on the contract and a newPrice is provided,     the request is rejected because the price cannot be applied unambiguously.
     * Refresh the credit grants on a contract
     * @param refreshContractCreditsRequest
     * @param contractId
     */
    public refreshContractCreditsWithHttpInfo(refreshContractCreditsRequest: RefreshContractCreditsRequest, contractId: string, _options?: Configuration): Observable<HttpInfo<RefreshContractCreditsResponse>> {
        const requestContextPromise = this.requestFactory.refreshContractCredits(refreshContractCreditsRequest, contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshContractCreditsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to refresh the credit grants on a contract by creating a new contract phase     (a contract revision) that takes effect immediately.      Provide a list of credit grants to refresh in the request body — each is identified by its credit product     (credit type) id and is set to non-prorated in the new phase, optionally with a new price. Every other credit     grant on the contract is set to prorated. If the grants list is omitted, all credit grants on the contract are     refreshed (set to non-prorated).      If a supplied credit product matches more than one grant product on the contract and a newPrice is provided,     the request is rejected because the price cannot be applied unambiguously.
     * Refresh the credit grants on a contract
     * @param refreshContractCreditsRequest
     * @param contractId
     */
    public refreshContractCredits(refreshContractCreditsRequest: RefreshContractCreditsRequest, contractId: string, _options?: Configuration): Observable<RefreshContractCreditsResponse> {
        return this.refreshContractCreditsWithHttpInfo(refreshContractCreditsRequest, contractId, _options).pipe(map((apiResponse: HttpInfo<RefreshContractCreditsResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to terminate a contract.     Provide a terminationDate in the request body to schedule the termination for a specific date,     or omit it to terminate the contract immediately.     The contract\'s status is set to PendingTermination and its end date is updated accordingly.
     * Terminate a contract
     * @param terminateContractRequest
     * @param contractId
     */
    public terminateContractWithHttpInfo(terminateContractRequest: TerminateContractRequest, contractId: string, _options?: Configuration): Observable<HttpInfo<TerminateContractResponse>> {
        const requestContextPromise = this.requestFactory.terminateContract(terminateContractRequest, contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.terminateContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to terminate a contract.     Provide a terminationDate in the request body to schedule the termination for a specific date,     or omit it to terminate the contract immediately.     The contract\'s status is set to PendingTermination and its end date is updated accordingly.
     * Terminate a contract
     * @param terminateContractRequest
     * @param contractId
     */
    public terminateContract(terminateContractRequest: TerminateContractRequest, contractId: string, _options?: Configuration): Observable<TerminateContractResponse> {
        return this.terminateContractWithHttpInfo(terminateContractRequest, contractId, _options).pipe(map((apiResponse: HttpInfo<TerminateContractResponse>) => apiResponse.data));
    }

}

import { CreditProductsApiRequestFactory, CreditProductsApiResponseProcessor} from "../apis/CreditProductsApi";
export class ObservableCreditProductsApi {
    private requestFactory: CreditProductsApiRequestFactory;
    private responseProcessor: CreditProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CreditProductsApiRequestFactory,
        responseProcessor?: CreditProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CreditProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CreditProductsApiResponseProcessor();
    }

    /**
     * Retrieve the credit products defined in your account. Use a credit product ID to fund a credit pool (a product creditGrant.creditProductId) or to debit one (a usage product consumesCreditProductIds). Distinct from the credit ledger (GET /credits).
     * List credit products
     */
    public listCreditProductsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ListCreditProductsResponse>> {
        const requestContextPromise = this.requestFactory.listCreditProducts(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCreditProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the credit products defined in your account. Use a credit product ID to fund a credit pool (a product creditGrant.creditProductId) or to debit one (a usage product consumesCreditProductIds). Distinct from the credit ledger (GET /credits).
     * List credit products
     */
    public listCreditProducts(_options?: Configuration): Observable<ListCreditProductsResponse> {
        return this.listCreditProductsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListCreditProductsResponse>) => apiResponse.data));
    }

}

import { CreditsApiRequestFactory, CreditsApiResponseProcessor} from "../apis/CreditsApi";
export class ObservableCreditsApi {
    private requestFactory: CreditsApiRequestFactory;
    private responseProcessor: CreditsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CreditsApiRequestFactory,
        responseProcessor?: CreditsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CreditsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CreditsApiResponseProcessor();
    }

    /**
     * This endpoint creates a one-off invoice that bills a customer for a credit grant.     Submit the customer ID and the credit grant (credit product, amount, type and price) in the request     body — the same credit grant shape used when defining grants on a contract. The grant\'s price is     charged on the invoice, and the credits are granted to the customer when the invoice is approved.
     * Create a one-off invoice to top up a customer with credits
     * @param creditTopUpRequest
     */
    public creditTopUpWithHttpInfo(creditTopUpRequest: CreditTopUpRequest, _options?: Configuration): Observable<HttpInfo<CreditTopUpResponse>> {
        const requestContextPromise = this.requestFactory.creditTopUp(creditTopUpRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.creditTopUpWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint creates a one-off invoice that bills a customer for a credit grant.     Submit the customer ID and the credit grant (credit product, amount, type and price) in the request     body — the same credit grant shape used when defining grants on a contract. The grant\'s price is     charged on the invoice, and the credits are granted to the customer when the invoice is approved.
     * Create a one-off invoice to top up a customer with credits
     * @param creditTopUpRequest
     */
    public creditTopUp(creditTopUpRequest: CreditTopUpRequest, _options?: Configuration): Observable<CreditTopUpResponse> {
        return this.creditTopUpWithHttpInfo(creditTopUpRequest, _options).pipe(map((apiResponse: HttpInfo<CreditTopUpResponse>) => apiResponse.data));
    }

    /**
     * This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.
     * Deduct credits from customer credit ledger
     * @param deductCreditsRequest
     */
    public deductCreditsWithHttpInfo(deductCreditsRequest: DeductCreditsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deductCredits(deductCreditsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deductCreditsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.
     * Deduct credits from customer credit ledger
     * @param deductCreditsRequest
     */
    public deductCredits(deductCreditsRequest: DeductCreditsRequest, _options?: Configuration): Observable<void> {
        return this.deductCreditsWithHttpInfo(deductCreditsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.
     * Grant credits to a customer credit ledger
     * @param grantCreditsRequest
     */
    public grantCreditsWithHttpInfo(grantCreditsRequest: GrantCreditsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.grantCredits(grantCreditsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.grantCreditsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.
     * Grant credits to a customer credit ledger
     * @param grantCreditsRequest
     */
    public grantCredits(grantCreditsRequest: GrantCreditsRequest, _options?: Configuration): Observable<void> {
        return this.grantCreditsWithHttpInfo(grantCreditsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This endpoint is used to retrieve the credit ledger entries for a specific customer.
     * Retrieve credit ledger entries for customer.
     * @param customerId
     * @param [limit]
     * @param [cursor]
     */
    public listCreditLedgerEntriesWithHttpInfo(customerId: string, limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<ListCreditLedgerEntriesResponse>> {
        const requestContextPromise = this.requestFactory.listCreditLedgerEntries(customerId, limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCreditLedgerEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint is used to retrieve the credit ledger entries for a specific customer.
     * Retrieve credit ledger entries for customer.
     * @param customerId
     * @param [limit]
     * @param [cursor]
     */
    public listCreditLedgerEntries(customerId: string, limit?: number, cursor?: string, _options?: Configuration): Observable<ListCreditLedgerEntriesResponse> {
        return this.listCreditLedgerEntriesWithHttpInfo(customerId, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<ListCreditLedgerEntriesResponse>) => apiResponse.data));
    }

}

import { CustomFieldsApiRequestFactory, CustomFieldsApiResponseProcessor} from "../apis/CustomFieldsApi";
export class ObservableCustomFieldsApi {
    private requestFactory: CustomFieldsApiRequestFactory;
    private responseProcessor: CustomFieldsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomFieldsApiRequestFactory,
        responseProcessor?: CustomFieldsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomFieldsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomFieldsApiResponseProcessor();
    }

    /**
     * Create a new Custom field.
     * Create Custom field
     * @param createCustomFieldRequest
     */
    public createCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CreateCustomFieldResponse>> {
        const requestContextPromise = this.requestFactory.createCustomField(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Custom field.
     * Create Custom field
     * @param createCustomFieldRequest
     */
    public createCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CreateCustomFieldResponse> {
        return this.createCustomFieldWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CreateCustomFieldResponse>) => apiResponse.data));
    }

    /**
     * Delete a Custom field by id.
     * Delete Custom field
     * @param customFieldId
     */
    public deleteCustomFieldWithHttpInfo(customFieldId: string, _options?: Configuration): Observable<HttpInfo<DeleteCustomFieldResponse>> {
        const requestContextPromise = this.requestFactory.deleteCustomField(customFieldId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Custom field by id.
     * Delete Custom field
     * @param customFieldId
     */
    public deleteCustomField(customFieldId: string, _options?: Configuration): Observable<DeleteCustomFieldResponse> {
        return this.deleteCustomFieldWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<DeleteCustomFieldResponse>) => apiResponse.data));
    }

    /**
     * Get a Custom field by id.
     * Get Custom field
     * @param customFieldId
     */
    public getCustomFieldWithHttpInfo(customFieldId: string, _options?: Configuration): Observable<HttpInfo<GetCustomFieldResponse>> {
        const requestContextPromise = this.requestFactory.getCustomField(customFieldId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Custom field by id.
     * Get Custom field
     * @param customFieldId
     */
    public getCustomField(customFieldId: string, _options?: Configuration): Observable<GetCustomFieldResponse> {
        return this.getCustomFieldWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<GetCustomFieldResponse>) => apiResponse.data));
    }

    /**
     * Get a list of Custom fields.
     * List Custom fields
     * @param [limit]
     * @param [cursor]
     */
    public listCustomFieldsWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<ListCustomFieldsResponse>> {
        const requestContextPromise = this.requestFactory.listCustomFields(limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Custom fields.
     * List Custom fields
     * @param [limit]
     * @param [cursor]
     */
    public listCustomFields(limit?: number, cursor?: string, _options?: Configuration): Observable<ListCustomFieldsResponse> {
        return this.listCustomFieldsWithHttpInfo(limit, cursor, _options).pipe(map((apiResponse: HttpInfo<ListCustomFieldsResponse>) => apiResponse.data));
    }

    /**
     * Update a Custom field by id.
     * Update Custom field
     * @param updateCustomFieldRequest
     * @param customFieldId
     */
    public updateCustomFieldWithHttpInfo(updateCustomFieldRequest: UpdateCustomFieldRequest, customFieldId: string, _options?: Configuration): Observable<HttpInfo<UpdateCustomFieldResponse>> {
        const requestContextPromise = this.requestFactory.updateCustomField(updateCustomFieldRequest, customFieldId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Custom field by id.
     * Update Custom field
     * @param updateCustomFieldRequest
     * @param customFieldId
     */
    public updateCustomField(updateCustomFieldRequest: UpdateCustomFieldRequest, customFieldId: string, _options?: Configuration): Observable<UpdateCustomFieldResponse> {
        return this.updateCustomFieldWithHttpInfo(updateCustomFieldRequest, customFieldId, _options).pipe(map((apiResponse: HttpInfo<UpdateCustomFieldResponse>) => apiResponse.data));
    }

}

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class ObservableCustomersApi {
    private requestFactory: CustomersApiRequestFactory;
    private responseProcessor: CustomersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomersApiResponseProcessor();
    }

    /**
     * Create a new Customer.
     * Create Customer
     * @param createCustomerRequest
     */
    public createCustomerWithHttpInfo(createCustomerRequest: CreateCustomerRequest, _options?: Configuration): Observable<HttpInfo<CreateCustomerResponse>> {
        const requestContextPromise = this.requestFactory.createCustomer(createCustomerRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Customer.
     * Create Customer
     * @param createCustomerRequest
     */
    public createCustomer(createCustomerRequest: CreateCustomerRequest, _options?: Configuration): Observable<CreateCustomerResponse> {
        return this.createCustomerWithHttpInfo(createCustomerRequest, _options).pipe(map((apiResponse: HttpInfo<CreateCustomerResponse>) => apiResponse.data));
    }

    /**
     * Create a new Customer relation.
     * Create Customer relation
     * @param createCustomerRelationRequest
     */
    public createCustomerRelationWithHttpInfo(createCustomerRelationRequest: CreateCustomerRelationRequest, _options?: Configuration): Observable<HttpInfo<CreateCustomerRelationResponse>> {
        const requestContextPromise = this.requestFactory.createCustomerRelation(createCustomerRelationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomerRelationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Customer relation.
     * Create Customer relation
     * @param createCustomerRelationRequest
     */
    public createCustomerRelation(createCustomerRelationRequest: CreateCustomerRelationRequest, _options?: Configuration): Observable<CreateCustomerRelationResponse> {
        return this.createCustomerRelationWithHttpInfo(createCustomerRelationRequest, _options).pipe(map((apiResponse: HttpInfo<CreateCustomerRelationResponse>) => apiResponse.data));
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param customerId
     */
    public deleteCustomerWithHttpInfo(customerId: string, _options?: Configuration): Observable<HttpInfo<DeleteCustomerResponse>> {
        const requestContextPromise = this.requestFactory.deleteCustomer(customerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param customerId
     */
    public deleteCustomer(customerId: string, _options?: Configuration): Observable<DeleteCustomerResponse> {
        return this.deleteCustomerWithHttpInfo(customerId, _options).pipe(map((apiResponse: HttpInfo<DeleteCustomerResponse>) => apiResponse.data));
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param customerId
     */
    public getCustomerWithHttpInfo(customerId: string, _options?: Configuration): Observable<HttpInfo<GetCustomerResponse>> {
        const requestContextPromise = this.requestFactory.getCustomer(customerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param customerId
     */
    public getCustomer(customerId: string, _options?: Configuration): Observable<GetCustomerResponse> {
        return this.getCustomerWithHttpInfo(customerId, _options).pipe(map((apiResponse: HttpInfo<GetCustomerResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param externalId
     */
    public getCustomerByExternalIdWithHttpInfo(externalId: string, _options?: Configuration): Observable<HttpInfo<GetCustomerResponse>> {
        const requestContextPromise = this.requestFactory.getCustomerByExternalId(externalId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerByExternalIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param externalId
     */
    public getCustomerByExternalId(externalId: string, _options?: Configuration): Observable<GetCustomerResponse> {
        return this.getCustomerByExternalIdWithHttpInfo(externalId, _options).pipe(map((apiResponse: HttpInfo<GetCustomerResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to get a specific customer using its integration provider and identifier.
     * Get customer by integration id
     * @param integrationType
     * @param integrationId
     */
    public getCustomerByIntegrationIdWithHttpInfo(integrationType: IntegrationProviders, integrationId: string, _options?: Configuration): Observable<HttpInfo<GetCustomerByIntegrationIdResponse>> {
        const requestContextPromise = this.requestFactory.getCustomerByIntegrationId(integrationType, integrationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerByIntegrationIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get a specific customer using its integration provider and identifier.
     * Get customer by integration id
     * @param integrationType
     * @param integrationId
     */
    public getCustomerByIntegrationId(integrationType: IntegrationProviders, integrationId: string, _options?: Configuration): Observable<GetCustomerByIntegrationIdResponse> {
        return this.getCustomerByIntegrationIdWithHttpInfo(integrationType, integrationId, _options).pipe(map((apiResponse: HttpInfo<GetCustomerByIntegrationIdResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to get a specific customer using its name.
     * Get customer by name
     * @param name
     */
    public getCustomerByNameWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<GetCustomerByNameResponse>> {
        const requestContextPromise = this.requestFactory.getCustomerByName(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerByNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get a specific customer using its name.
     * Get customer by name
     * @param name
     */
    public getCustomerByName(name: string, _options?: Configuration): Observable<GetCustomerByNameResponse> {
        return this.getCustomerByNameWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<GetCustomerByNameResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param customerId
     */
    public getCustomerProductsConsumptionsWithHttpInfo(customerId: string, _options?: Configuration): Observable<HttpInfo<GetCustomerProductsConsumptionsResponse>> {
        const requestContextPromise = this.requestFactory.getCustomerProductsConsumptions(customerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerProductsConsumptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param customerId
     */
    public getCustomerProductsConsumptions(customerId: string, _options?: Configuration): Observable<GetCustomerProductsConsumptionsResponse> {
        return this.getCustomerProductsConsumptionsWithHttpInfo(customerId, _options).pipe(map((apiResponse: HttpInfo<GetCustomerProductsConsumptionsResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to get the products consumptions by the customer alias.
     * Get products consumptions by customer alias
     * @param alias
     */
    public getCustomerProductsConsumptionsByAliasWithHttpInfo(alias: string, _options?: Configuration): Observable<HttpInfo<GetCustomerProductsConsumptionsByAliasResponse>> {
        const requestContextPromise = this.requestFactory.getCustomerProductsConsumptionsByAlias(alias, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerProductsConsumptionsByAliasWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get the products consumptions by the customer alias.
     * Get products consumptions by customer alias
     * @param alias
     */
    public getCustomerProductsConsumptionsByAlias(alias: string, _options?: Configuration): Observable<GetCustomerProductsConsumptionsByAliasResponse> {
        return this.getCustomerProductsConsumptionsByAliasWithHttpInfo(alias, _options).pipe(map((apiResponse: HttpInfo<GetCustomerProductsConsumptionsByAliasResponse>) => apiResponse.data));
    }

    /**
     * Get a Customer relation by id.
     * Get Customer relation
     * @param customerRelationId
     */
    public getCustomerRelationWithHttpInfo(customerRelationId: string, _options?: Configuration): Observable<HttpInfo<GetCustomerRelationResponse>> {
        const requestContextPromise = this.requestFactory.getCustomerRelation(customerRelationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerRelationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Customer relation by id.
     * Get Customer relation
     * @param customerRelationId
     */
    public getCustomerRelation(customerRelationId: string, _options?: Configuration): Observable<GetCustomerRelationResponse> {
        return this.getCustomerRelationWithHttpInfo(customerRelationId, _options).pipe(map((apiResponse: HttpInfo<GetCustomerRelationResponse>) => apiResponse.data));
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param [status]
     * @param [limit]
     * @param [cursor]
     */
    public listCustomersWithHttpInfo(status?: CustomerStatus, limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<ListCustomersResponse>> {
        const requestContextPromise = this.requestFactory.listCustomers(status, limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param [status]
     * @param [limit]
     * @param [cursor]
     */
    public listCustomers(status?: CustomerStatus, limit?: number, cursor?: string, _options?: Configuration): Observable<ListCustomersResponse> {
        return this.listCustomersWithHttpInfo(status, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<ListCustomersResponse>) => apiResponse.data));
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param updateCustomerRequest
     * @param customerId
     */
    public updateCustomerWithHttpInfo(updateCustomerRequest: UpdateCustomerRequest, customerId: string, _options?: Configuration): Observable<HttpInfo<UpdateCustomerResponse>> {
        const requestContextPromise = this.requestFactory.updateCustomer(updateCustomerRequest, customerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param updateCustomerRequest
     * @param customerId
     */
    public updateCustomer(updateCustomerRequest: UpdateCustomerRequest, customerId: string, _options?: Configuration): Observable<UpdateCustomerResponse> {
        return this.updateCustomerWithHttpInfo(updateCustomerRequest, customerId, _options).pipe(map((apiResponse: HttpInfo<UpdateCustomerResponse>) => apiResponse.data));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param refId
     */
    public deleteEventByRefIdWithHttpInfo(refId: string, _options?: Configuration): Observable<HttpInfo<DeleteEventResponse>> {
        const requestContextPromise = this.requestFactory.deleteEventByRefId(refId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEventByRefIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param refId
     */
    public deleteEventByRefId(refId: string, _options?: Configuration): Observable<DeleteEventResponse> {
        return this.deleteEventByRefIdWithHttpInfo(refId, _options).pipe(map((apiResponse: HttpInfo<DeleteEventResponse>) => apiResponse.data));
    }

    /**
     * Delete multiple events, identified by ref, in a single request.
     * Delete events by refs
     * @param deleteEventsByRefsRequest A list of event refs to delete. The request deletes the matching events for the authenticated account.
     */
    public deleteEventsByRefsWithHttpInfo(deleteEventsByRefsRequest: DeleteEventsByRefsRequest, _options?: Configuration): Observable<HttpInfo<DeleteEventsByRefsResponse>> {
        const requestContextPromise = this.requestFactory.deleteEventsByRefs(deleteEventsByRefsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEventsByRefsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete multiple events, identified by ref, in a single request.
     * Delete events by refs
     * @param deleteEventsByRefsRequest A list of event refs to delete. The request deletes the matching events for the authenticated account.
     */
    public deleteEventsByRefs(deleteEventsByRefsRequest: DeleteEventsByRefsRequest, _options?: Configuration): Observable<DeleteEventsByRefsResponse> {
        return this.deleteEventsByRefsWithHttpInfo(deleteEventsByRefsRequest, _options).pipe(map((apiResponse: HttpInfo<DeleteEventsByRefsResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param refId
     */
    public getEventByRefIdWithHttpInfo(refId: string, _options?: Configuration): Observable<HttpInfo<GetEventResponse>> {
        const requestContextPromise = this.requestFactory.getEventByRefId(refId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventByRefIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param refId
     */
    public getEventByRefId(refId: string, _options?: Configuration): Observable<GetEventResponse> {
        return this.getEventByRefIdWithHttpInfo(refId, _options).pipe(map((apiResponse: HttpInfo<GetEventResponse>) => apiResponse.data));
    }

    /**
     * Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.
     * Query events by timestamp period and optional event name
     * @param startTime
     * @param endTime
     * @param [eventName]
     * @param [customerAlias]
     * @param [limit]
     * @param [cursor]
     */
    public queryEventsWithHttpInfo(startTime: Date, endTime: Date, eventName?: string, customerAlias?: string, limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<QueryEventsResponse>> {
        const requestContextPromise = this.requestFactory.queryEvents(startTime, endTime, eventName, customerAlias, limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.
     * Query events by timestamp period and optional event name
     * @param startTime
     * @param endTime
     * @param [eventName]
     * @param [customerAlias]
     * @param [limit]
     * @param [cursor]
     */
    public queryEvents(startTime: Date, endTime: Date, eventName?: string, customerAlias?: string, limit?: number, cursor?: string, _options?: Configuration): Observable<QueryEventsResponse> {
        return this.queryEventsWithHttpInfo(startTime, endTime, eventName, customerAlias, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<QueryEventsResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param sendEventsRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsWithHttpInfo(sendEventsRequest: SendEventsRequest, _options?: Configuration): Observable<HttpInfo<SendEventsResponse>> {
        const requestContextPromise = this.requestFactory.sendEvents(sendEventsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param sendEventsRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEvents(sendEventsRequest: SendEventsRequest, _options?: Configuration): Observable<SendEventsResponse> {
        return this.sendEventsWithHttpInfo(sendEventsRequest, _options).pipe(map((apiResponse: HttpInfo<SendEventsResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param eventsDryRunRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsDryRunWithHttpInfo(eventsDryRunRequest: EventsDryRunRequest, _options?: Configuration): Observable<HttpInfo<EventsDryRunResponse>> {
        const requestContextPromise = this.requestFactory.sendEventsDryRun(eventsDryRunRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEventsDryRunWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param eventsDryRunRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsDryRun(eventsDryRunRequest: EventsDryRunRequest, _options?: Configuration): Observable<EventsDryRunResponse> {
        return this.sendEventsDryRunWithHttpInfo(eventsDryRunRequest, _options).pipe(map((apiResponse: HttpInfo<EventsDryRunResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID (v2).
     * Delete an event by refId (v2)
     * @param refId
     */
    public v2DeleteEventByRefIdWithHttpInfo(refId: string, _options?: Configuration): Observable<HttpInfo<V2DeleteEventResponse>> {
        const requestContextPromise = this.requestFactory.v2DeleteEventByRefId(refId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2DeleteEventByRefIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID (v2).
     * Delete an event by refId (v2)
     * @param refId
     */
    public v2DeleteEventByRefId(refId: string, _options?: Configuration): Observable<V2DeleteEventResponse> {
        return this.v2DeleteEventByRefIdWithHttpInfo(refId, _options).pipe(map((apiResponse: HttpInfo<V2DeleteEventResponse>) => apiResponse.data));
    }

    /**
     * Delete multiple events, identified by ref, in a single request (v2).
     * Delete events by refs (v2)
     * @param v2DeleteEventsByRefsRequest A list of event refs to delete. The request deletes the matching events for the authenticated account.
     */
    public v2DeleteEventsByRefsWithHttpInfo(v2DeleteEventsByRefsRequest: V2DeleteEventsByRefsRequest, _options?: Configuration): Observable<HttpInfo<V2DeleteEventsByRefsResponse>> {
        const requestContextPromise = this.requestFactory.v2DeleteEventsByRefs(v2DeleteEventsByRefsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2DeleteEventsByRefsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete multiple events, identified by ref, in a single request (v2).
     * Delete events by refs (v2)
     * @param v2DeleteEventsByRefsRequest A list of event refs to delete. The request deletes the matching events for the authenticated account.
     */
    public v2DeleteEventsByRefs(v2DeleteEventsByRefsRequest: V2DeleteEventsByRefsRequest, _options?: Configuration): Observable<V2DeleteEventsByRefsResponse> {
        return this.v2DeleteEventsByRefsWithHttpInfo(v2DeleteEventsByRefsRequest, _options).pipe(map((apiResponse: HttpInfo<V2DeleteEventsByRefsResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to get a specific event using its reference ID (v2).
     * Get event by refId (v2)
     * @param refId
     */
    public v2GetEventByRefIdWithHttpInfo(refId: string, _options?: Configuration): Observable<HttpInfo<V2GetEventResponse>> {
        const requestContextPromise = this.requestFactory.v2GetEventByRefId(refId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GetEventByRefIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get a specific event using its reference ID (v2).
     * Get event by refId (v2)
     * @param refId
     */
    public v2GetEventByRefId(refId: string, _options?: Configuration): Observable<V2GetEventResponse> {
        return this.v2GetEventByRefIdWithHttpInfo(refId, _options).pipe(map((apiResponse: HttpInfo<V2GetEventResponse>) => apiResponse.data));
    }

    /**
     * Fetch events occurring within a specified timestamp range via the events-service (ClickHouse-backed).
     * Query events by timestamp period and optional event name (v2)
     * @param startTime
     * @param endTime
     * @param [eventName]
     * @param [customerAlias]
     * @param [limit]
     * @param [cursor]
     */
    public v2QueryEventsWithHttpInfo(startTime: Date, endTime: Date, eventName?: string, customerAlias?: string, limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<V2QueryEventsResponse>> {
        const requestContextPromise = this.requestFactory.v2QueryEvents(startTime, endTime, eventName, customerAlias, limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2QueryEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch events occurring within a specified timestamp range via the events-service (ClickHouse-backed).
     * Query events by timestamp period and optional event name (v2)
     * @param startTime
     * @param endTime
     * @param [eventName]
     * @param [customerAlias]
     * @param [limit]
     * @param [cursor]
     */
    public v2QueryEvents(startTime: Date, endTime: Date, eventName?: string, customerAlias?: string, limit?: number, cursor?: string, _options?: Configuration): Observable<V2QueryEventsResponse> {
        return this.v2QueryEventsWithHttpInfo(startTime, endTime, eventName, customerAlias, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<V2QueryEventsResponse>) => apiResponse.data));
    }

    /**
     * Aggregate events by meters and time grouping via the events-service.
     * Aggregate events (v2)
     * @param v2QueryEventsAggregationRequest Configuration for aggregating events by meters and time grouping.
     */
    public v2QueryEventsAggregationWithHttpInfo(v2QueryEventsAggregationRequest: V2QueryEventsAggregationRequest, _options?: Configuration): Observable<HttpInfo<V2QueryEventsAggregationResponse>> {
        const requestContextPromise = this.requestFactory.v2QueryEventsAggregation(v2QueryEventsAggregationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2QueryEventsAggregationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Aggregate events by meters and time grouping via the events-service.
     * Aggregate events (v2)
     * @param v2QueryEventsAggregationRequest Configuration for aggregating events by meters and time grouping.
     */
    public v2QueryEventsAggregation(v2QueryEventsAggregationRequest: V2QueryEventsAggregationRequest, _options?: Configuration): Observable<V2QueryEventsAggregationResponse> {
        return this.v2QueryEventsAggregationWithHttpInfo(v2QueryEventsAggregationRequest, _options).pipe(map((apiResponse: HttpInfo<V2QueryEventsAggregationResponse>) => apiResponse.data));
    }

    /**
     * Submit a batch of events for ingestion via the events-service.
     * Submit a batch of events for ingestion (v2)
     * @param v2SendEventsRequest An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
     */
    public v2SendEventsWithHttpInfo(v2SendEventsRequest: V2SendEventsRequest, _options?: Configuration): Observable<HttpInfo<V2SendEventsResponse>> {
        const requestContextPromise = this.requestFactory.v2SendEvents(v2SendEventsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SendEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submit a batch of events for ingestion via the events-service.
     * Submit a batch of events for ingestion (v2)
     * @param v2SendEventsRequest An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
     */
    public v2SendEvents(v2SendEventsRequest: V2SendEventsRequest, _options?: Configuration): Observable<V2SendEventsResponse> {
        return this.v2SendEventsWithHttpInfo(v2SendEventsRequest, _options).pipe(map((apiResponse: HttpInfo<V2SendEventsResponse>) => apiResponse.data));
    }

    /**
     * Submit a batch of events for testing via the events-service. NOTE: this is a dry run and will not store the events.
     * Submit a batch of events for testing (v2)
     * @param v2EventsDryRunRequest An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
     */
    public v2SendEventsDryRunWithHttpInfo(v2EventsDryRunRequest: V2EventsDryRunRequest, _options?: Configuration): Observable<HttpInfo<V2EventsDryRunResponse>> {
        const requestContextPromise = this.requestFactory.v2SendEventsDryRun(v2EventsDryRunRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SendEventsDryRunWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submit a batch of events for testing via the events-service. NOTE: this is a dry run and will not store the events.
     * Submit a batch of events for testing (v2)
     * @param v2EventsDryRunRequest An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
     */
    public v2SendEventsDryRun(v2EventsDryRunRequest: V2EventsDryRunRequest, _options?: Configuration): Observable<V2EventsDryRunResponse> {
        return this.v2SendEventsDryRunWithHttpInfo(v2EventsDryRunRequest, _options).pipe(map((apiResponse: HttpInfo<V2EventsDryRunResponse>) => apiResponse.data));
    }

}

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class ObservableInvoicesApi {
    private requestFactory: InvoicesApiRequestFactory;
    private responseProcessor: InvoicesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoicesApiResponseProcessor();
    }

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param invoiceId
     */
    public getInvoiceWithHttpInfo(invoiceId: string, _options?: Configuration): Observable<HttpInfo<GetInvoiceResponse>> {
        const requestContextPromise = this.requestFactory.getInvoice(invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param invoiceId
     */
    public getInvoice(invoiceId: string, _options?: Configuration): Observable<GetInvoiceResponse> {
        return this.getInvoiceWithHttpInfo(invoiceId, _options).pipe(map((apiResponse: HttpInfo<GetInvoiceResponse>) => apiResponse.data));
    }

    /**
     * Use this endpoint to retrieve payment status information for a specific invoice, including payment status, amount due, amount paid, total, due date, paid date, and invoice PDF URL.
     * Get invoice payment status
     * @param invoiceId
     */
    public getInvoicePaymentStatusWithHttpInfo(invoiceId: string, _options?: Configuration): Observable<HttpInfo<InvoicePaymentStatusResponse>> {
        const requestContextPromise = this.requestFactory.getInvoicePaymentStatus(invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoicePaymentStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to retrieve payment status information for a specific invoice, including payment status, amount due, amount paid, total, due date, paid date, and invoice PDF URL.
     * Get invoice payment status
     * @param invoiceId
     */
    public getInvoicePaymentStatus(invoiceId: string, _options?: Configuration): Observable<InvoicePaymentStatusResponse> {
        return this.getInvoicePaymentStatusWithHttpInfo(invoiceId, _options).pipe(map((apiResponse: HttpInfo<InvoicePaymentStatusResponse>) => apiResponse.data));
    }

    /**
     * List invoices for the account. Optionally filter by customerId to retrieve invoices for a specific customer.
     * List invoices
     * @param [limit]
     * @param [cursor]
     * @param [customerId]
     * @param [billingStatus]
     * @param [issuedAfter]
     * @param [issuedBefore]
     */
    public listInvoicesWithHttpInfo(limit?: number, cursor?: string, customerId?: string, billingStatus?: InvoiceBillingStatus, issuedAfter?: string, issuedBefore?: string, _options?: Configuration): Observable<HttpInfo<ListInvoicesResponse>> {
        const requestContextPromise = this.requestFactory.listInvoices(limit, cursor, customerId, billingStatus, issuedAfter, issuedBefore, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listInvoicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List invoices for the account. Optionally filter by customerId to retrieve invoices for a specific customer.
     * List invoices
     * @param [limit]
     * @param [cursor]
     * @param [customerId]
     * @param [billingStatus]
     * @param [issuedAfter]
     * @param [issuedBefore]
     */
    public listInvoices(limit?: number, cursor?: string, customerId?: string, billingStatus?: InvoiceBillingStatus, issuedAfter?: string, issuedBefore?: string, _options?: Configuration): Observable<ListInvoicesResponse> {
        return this.listInvoicesWithHttpInfo(limit, cursor, customerId, billingStatus, issuedAfter, issuedBefore, _options).pipe(map((apiResponse: HttpInfo<ListInvoicesResponse>) => apiResponse.data));
    }

}

import { MeasurementsApiRequestFactory, MeasurementsApiResponseProcessor} from "../apis/MeasurementsApi";
export class ObservableMeasurementsApi {
    private requestFactory: MeasurementsApiRequestFactory;
    private responseProcessor: MeasurementsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MeasurementsApiRequestFactory,
        responseProcessor?: MeasurementsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MeasurementsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MeasurementsApiResponseProcessor();
    }

    /**
     * Create a new Measurement.
     * Create Measurement
     * @param createMeasurementRequest
     */
    public createMeasurementWithHttpInfo(createMeasurementRequest: CreateMeasurementRequest, _options?: Configuration): Observable<HttpInfo<CreateMeasurementResponse>> {
        const requestContextPromise = this.requestFactory.createMeasurement(createMeasurementRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMeasurementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Measurement.
     * Create Measurement
     * @param createMeasurementRequest
     */
    public createMeasurement(createMeasurementRequest: CreateMeasurementRequest, _options?: Configuration): Observable<CreateMeasurementResponse> {
        return this.createMeasurementWithHttpInfo(createMeasurementRequest, _options).pipe(map((apiResponse: HttpInfo<CreateMeasurementResponse>) => apiResponse.data));
    }

    /**
     * Delete a Measurement by id.
     * Delete Measurement
     * @param measurementId
     */
    public deleteMeasurementWithHttpInfo(measurementId: string, _options?: Configuration): Observable<HttpInfo<DeleteMeasurementResponse>> {
        const requestContextPromise = this.requestFactory.deleteMeasurement(measurementId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMeasurementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Measurement by id.
     * Delete Measurement
     * @param measurementId
     */
    public deleteMeasurement(measurementId: string, _options?: Configuration): Observable<DeleteMeasurementResponse> {
        return this.deleteMeasurementWithHttpInfo(measurementId, _options).pipe(map((apiResponse: HttpInfo<DeleteMeasurementResponse>) => apiResponse.data));
    }

    /**
     * Get a Measurement by id.
     * Get Measurement
     * @param measurementId
     */
    public getMeasurementWithHttpInfo(measurementId: string, _options?: Configuration): Observable<HttpInfo<GetMeasurementResponse>> {
        const requestContextPromise = this.requestFactory.getMeasurement(measurementId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeasurementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Measurement by id.
     * Get Measurement
     * @param measurementId
     */
    public getMeasurement(measurementId: string, _options?: Configuration): Observable<GetMeasurementResponse> {
        return this.getMeasurementWithHttpInfo(measurementId, _options).pipe(map((apiResponse: HttpInfo<GetMeasurementResponse>) => apiResponse.data));
    }

    /**
     * Get a list of Measurements.
     * List Measurements
     * @param [limit]
     * @param [cursor]
     */
    public listMeasurementsWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<ListMeasurementsResponse>> {
        const requestContextPromise = this.requestFactory.listMeasurements(limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMeasurementsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Measurements.
     * List Measurements
     * @param [limit]
     * @param [cursor]
     */
    public listMeasurements(limit?: number, cursor?: string, _options?: Configuration): Observable<ListMeasurementsResponse> {
        return this.listMeasurementsWithHttpInfo(limit, cursor, _options).pipe(map((apiResponse: HttpInfo<ListMeasurementsResponse>) => apiResponse.data));
    }

}

import { MetersApiRequestFactory, MetersApiResponseProcessor} from "../apis/MetersApi";
export class ObservableMetersApi {
    private requestFactory: MetersApiRequestFactory;
    private responseProcessor: MetersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetersApiRequestFactory,
        responseProcessor?: MetersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetersApiResponseProcessor();
    }

    /**
     * Delete a Meter by id.
     * Delete Meter
     * @param meterId
     */
    public deleteMeterWithHttpInfo(meterId: string, _options?: Configuration): Observable<HttpInfo<DeleteMeterResponse>> {
        const requestContextPromise = this.requestFactory.deleteMeter(meterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMeterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Meter by id.
     * Delete Meter
     * @param meterId
     */
    public deleteMeter(meterId: string, _options?: Configuration): Observable<DeleteMeterResponse> {
        return this.deleteMeterWithHttpInfo(meterId, _options).pipe(map((apiResponse: HttpInfo<DeleteMeterResponse>) => apiResponse.data));
    }

    /**
     * Get a Meter by id.
     * Get Meter
     * @param meterId
     */
    public getMeterWithHttpInfo(meterId: string, _options?: Configuration): Observable<HttpInfo<GetMeterResponse>> {
        const requestContextPromise = this.requestFactory.getMeter(meterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Meter by id.
     * Get Meter
     * @param meterId
     */
    public getMeter(meterId: string, _options?: Configuration): Observable<GetMeterResponse> {
        return this.getMeterWithHttpInfo(meterId, _options).pipe(map((apiResponse: HttpInfo<GetMeterResponse>) => apiResponse.data));
    }

    /**
     * Get a list of Meters.
     * List Meters
     * @param [limit]
     * @param [cursor]
     */
    public listMetersWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<ListMetersResponse>> {
        const requestContextPromise = this.requestFactory.listMeters(limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMetersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Meters.
     * List Meters
     * @param [limit]
     * @param [cursor]
     */
    public listMeters(limit?: number, cursor?: string, _options?: Configuration): Observable<ListMetersResponse> {
        return this.listMetersWithHttpInfo(limit, cursor, _options).pipe(map((apiResponse: HttpInfo<ListMetersResponse>) => apiResponse.data));
    }

    /**
     * Update a Meter by id.
     * Update Meter
     * @param updateMeterRequest
     * @param meterId
     */
    public updateMeterWithHttpInfo(updateMeterRequest: UpdateMeterRequest, meterId: string, _options?: Configuration): Observable<HttpInfo<UpdateMeterResponse>> {
        const requestContextPromise = this.requestFactory.updateMeter(updateMeterRequest, meterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateMeterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Meter by id.
     * Update Meter
     * @param updateMeterRequest
     * @param meterId
     */
    public updateMeter(updateMeterRequest: UpdateMeterRequest, meterId: string, _options?: Configuration): Observable<UpdateMeterResponse> {
        return this.updateMeterWithHttpInfo(updateMeterRequest, meterId, _options).pipe(map((apiResponse: HttpInfo<UpdateMeterResponse>) => apiResponse.data));
    }

}

import { PlansApiRequestFactory, PlansApiResponseProcessor} from "../apis/PlansApi";
export class ObservablePlansApi {
    private requestFactory: PlansApiRequestFactory;
    private responseProcessor: PlansApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlansApiRequestFactory,
        responseProcessor?: PlansApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlansApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlansApiResponseProcessor();
    }

    /**
     * Delete a Plan by id.
     * Delete Plan
     * @param planId
     */
    public deletePlanWithHttpInfo(planId: string, _options?: Configuration): Observable<HttpInfo<DeletePlanResponse>> {
        const requestContextPromise = this.requestFactory.deletePlan(planId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePlanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Plan by id.
     * Delete Plan
     * @param planId
     */
    public deletePlan(planId: string, _options?: Configuration): Observable<DeletePlanResponse> {
        return this.deletePlanWithHttpInfo(planId, _options).pipe(map((apiResponse: HttpInfo<DeletePlanResponse>) => apiResponse.data));
    }

    /**
     * Get a Plan by id.
     * Get Plan
     * @param planId
     */
    public getPlanWithHttpInfo(planId: string, _options?: Configuration): Observable<HttpInfo<GetPlanResponse>> {
        const requestContextPromise = this.requestFactory.getPlan(planId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Plan by id.
     * Get Plan
     * @param planId
     */
    public getPlan(planId: string, _options?: Configuration): Observable<GetPlanResponse> {
        return this.getPlanWithHttpInfo(planId, _options).pipe(map((apiResponse: HttpInfo<GetPlanResponse>) => apiResponse.data));
    }

    /**
     * Get a list of Plans.
     * List Plans
     * @param [limit]
     * @param [cursor]
     */
    public listPlansWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<ListPlansResponse>> {
        const requestContextPromise = this.requestFactory.listPlans(limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPlansWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Plans.
     * List Plans
     * @param [limit]
     * @param [cursor]
     */
    public listPlans(limit?: number, cursor?: string, _options?: Configuration): Observable<ListPlansResponse> {
        return this.listPlansWithHttpInfo(limit, cursor, _options).pipe(map((apiResponse: HttpInfo<ListPlansResponse>) => apiResponse.data));
    }

}

import { ProductConsumptionsApiRequestFactory, ProductConsumptionsApiResponseProcessor} from "../apis/ProductConsumptionsApi";
export class ObservableProductConsumptionsApi {
    private requestFactory: ProductConsumptionsApiRequestFactory;
    private responseProcessor: ProductConsumptionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductConsumptionsApiRequestFactory,
        responseProcessor?: ProductConsumptionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductConsumptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductConsumptionsApiResponseProcessor();
    }

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param productId
     */
    public getProductConsumptionWithHttpInfo(productId: string, _options?: Configuration): Observable<HttpInfo<GetProductConsumptionResponse>> {
        const requestContextPromise = this.requestFactory.getProductConsumption(productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductConsumptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param productId
     */
    public getProductConsumption(productId: string, _options?: Configuration): Observable<GetProductConsumptionResponse> {
        return this.getProductConsumptionWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<GetProductConsumptionResponse>) => apiResponse.data));
    }

}

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";
export class ObservableWebhooksApi {
    private requestFactory: WebhooksApiRequestFactory;
    private responseProcessor: WebhooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhooksApiResponseProcessor();
    }

    /**
     * Use this endpoint to subscribe to webhooks and receive event notifications.
     * Subscribe to webhooks
     * @param webhookSubscribeRequest Subscribe to webhooks and receive event notifications.
     */
    public webhookSubscribeWithHttpInfo(webhookSubscribeRequest: WebhookSubscribeRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.webhookSubscribe(webhookSubscribeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.webhookSubscribeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to subscribe to webhooks and receive event notifications.
     * Subscribe to webhooks
     * @param webhookSubscribeRequest Subscribe to webhooks and receive event notifications.
     */
    public webhookSubscribe(webhookSubscribeRequest: WebhookSubscribeRequest, _options?: Configuration): Observable<void> {
        return this.webhookSubscribeWithHttpInfo(webhookSubscribeRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
