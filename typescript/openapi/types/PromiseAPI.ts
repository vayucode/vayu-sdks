import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { Criterion } from '../models/Criterion';
import { CriterionOperator } from '../models/CriterionOperator';
import { Currency } from '../models/Currency';
import { CustomField } from '../models/CustomField';
import { CustomFieldEntities } from '../models/CustomFieldEntities';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { CustomFieldValueTypes } from '../models/CustomFieldValueTypes';
import { CustomerCloudProviderSettings } from '../models/CustomerCloudProviderSettings';
import { CustomerSource } from '../models/CustomerSource';
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
import { IntegrationType } from '../models/IntegrationType';
import { InternalServerErrorResponse } from '../models/InternalServerErrorResponse';
import { InvalidEvent } from '../models/InvalidEvent';
import { InvoiceBillingStatus } from '../models/InvoiceBillingStatus';
import { InvoicePaymentStatusResponse } from '../models/InvoicePaymentStatusResponse';
import { LineItem } from '../models/LineItem';
import { LineItemRevenueBreakdown } from '../models/LineItemRevenueBreakdown';
import { ListCatalogProductsResponse } from '../models/ListCatalogProductsResponse';
import { ListContractsResponse } from '../models/ListContractsResponse';
import { ListCreditLedgerEntriesResponse } from '../models/ListCreditLedgerEntriesResponse';
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
import { RequestTooLongErrorResponse } from '../models/RequestTooLongErrorResponse';
import { SendEventsRequest } from '../models/SendEventsRequest';
import { SendEventsResponse } from '../models/SendEventsResponse';
import { SubmitCloudUsageRequest } from '../models/SubmitCloudUsageRequest';
import { SyncStatus } from '../models/SyncStatus';
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
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.
     * Login by obtaining a new access token
     * @param loginRequest
     */
    public loginWithHttpInfo(loginRequest: LoginRequest, _options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        const result = this.api.loginWithHttpInfo(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.
     * Login by obtaining a new access token
     * @param loginRequest
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Promise<LoginResponse> {
        const result = this.api.login(loginRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCatalogProductsApi } from './ObservableAPI';

import { CatalogProductsApiRequestFactory, CatalogProductsApiResponseProcessor} from "../apis/CatalogProductsApi";
export class PromiseCatalogProductsApi {
    private api: ObservableCatalogProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CatalogProductsApiRequestFactory,
        responseProcessor?: CatalogProductsApiResponseProcessor
    ) {
        this.api = new ObservableCatalogProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Catalog product.
     * Create Catalog product
     * @param createCatalogProductRequest
     */
    public createCatalogProductWithHttpInfo(createCatalogProductRequest: CreateCatalogProductRequest, _options?: Configuration): Promise<HttpInfo<CreateCatalogProductResponse>> {
        const result = this.api.createCatalogProductWithHttpInfo(createCatalogProductRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new Catalog product.
     * Create Catalog product
     * @param createCatalogProductRequest
     */
    public createCatalogProduct(createCatalogProductRequest: CreateCatalogProductRequest, _options?: Configuration): Promise<CreateCatalogProductResponse> {
        const result = this.api.createCatalogProduct(createCatalogProductRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Catalog product by id.
     * Delete Catalog product
     * @param catalogProductId
     */
    public deleteCatalogProductWithHttpInfo(catalogProductId: string, _options?: Configuration): Promise<HttpInfo<DeleteCatalogProductResponse>> {
        const result = this.api.deleteCatalogProductWithHttpInfo(catalogProductId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Catalog product by id.
     * Delete Catalog product
     * @param catalogProductId
     */
    public deleteCatalogProduct(catalogProductId: string, _options?: Configuration): Promise<DeleteCatalogProductResponse> {
        const result = this.api.deleteCatalogProduct(catalogProductId, _options);
        return result.toPromise();
    }

    /**
     * Get a Catalog product by id.
     * Get Catalog product
     * @param catalogProductId
     */
    public getCatalogProductWithHttpInfo(catalogProductId: string, _options?: Configuration): Promise<HttpInfo<GetCatalogProductResponse>> {
        const result = this.api.getCatalogProductWithHttpInfo(catalogProductId, _options);
        return result.toPromise();
    }

    /**
     * Get a Catalog product by id.
     * Get Catalog product
     * @param catalogProductId
     */
    public getCatalogProduct(catalogProductId: string, _options?: Configuration): Promise<GetCatalogProductResponse> {
        const result = this.api.getCatalogProduct(catalogProductId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Catalog products.
     * List Catalog products
     * @param [limit]
     * @param [cursor]
     */
    public listCatalogProductsWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ListCatalogProductsResponse>> {
        const result = this.api.listCatalogProductsWithHttpInfo(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Catalog products.
     * List Catalog products
     * @param [limit]
     * @param [cursor]
     */
    public listCatalogProducts(limit?: number, cursor?: string, _options?: Configuration): Promise<ListCatalogProductsResponse> {
        const result = this.api.listCatalogProducts(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Update a Catalog product by id.
     * Update Catalog product
     * @param updateCatalogProductRequest
     * @param catalogProductId
     */
    public updateCatalogProductWithHttpInfo(updateCatalogProductRequest: UpdateCatalogProductRequest, catalogProductId: string, _options?: Configuration): Promise<HttpInfo<UpdateCatalogProductResponse>> {
        const result = this.api.updateCatalogProductWithHttpInfo(updateCatalogProductRequest, catalogProductId, _options);
        return result.toPromise();
    }

    /**
     * Update a Catalog product by id.
     * Update Catalog product
     * @param updateCatalogProductRequest
     * @param catalogProductId
     */
    public updateCatalogProduct(updateCatalogProductRequest: UpdateCatalogProductRequest, catalogProductId: string, _options?: Configuration): Promise<UpdateCatalogProductResponse> {
        const result = this.api.updateCatalogProduct(updateCatalogProductRequest, catalogProductId, _options);
        return result.toPromise();
    }


}



import { ObservableCloudUsageSubmissionApi } from './ObservableAPI';

import { CloudUsageSubmissionApiRequestFactory, CloudUsageSubmissionApiResponseProcessor} from "../apis/CloudUsageSubmissionApi";
export class PromiseCloudUsageSubmissionApi {
    private api: ObservableCloudUsageSubmissionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudUsageSubmissionApiRequestFactory,
        responseProcessor?: CloudUsageSubmissionApiResponseProcessor
    ) {
        this.api = new ObservableCloudUsageSubmissionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Submit cloud usage data
     * Submit cloud usage
     * @param submitCloudUsageRequest
     */
    public submitCloudUsageWithHttpInfo(submitCloudUsageRequest: SubmitCloudUsageRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.submitCloudUsageWithHttpInfo(submitCloudUsageRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit cloud usage data
     * Submit cloud usage
     * @param submitCloudUsageRequest
     */
    public submitCloudUsage(submitCloudUsageRequest: SubmitCloudUsageRequest, _options?: Configuration): Promise<any> {
        const result = this.api.submitCloudUsage(submitCloudUsageRequest, _options);
        return result.toPromise();
    }


}



import { ObservableContractsApi } from './ObservableAPI';

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";
export class PromiseContractsApi {
    private api: ObservableContractsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Contract.
     * Create Contract
     * @param createContractRequest
     */
    public createContractWithHttpInfo(createContractRequest: CreateContractRequest, _options?: Configuration): Promise<HttpInfo<CreateContractResponse>> {
        const result = this.api.createContractWithHttpInfo(createContractRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new Contract.
     * Create Contract
     * @param createContractRequest
     */
    public createContract(createContractRequest: CreateContractRequest, _options?: Configuration): Promise<CreateContractResponse> {
        const result = this.api.createContract(createContractRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Contract by id.
     * Delete Contract
     * @param contractId
     */
    public deleteContractWithHttpInfo(contractId: string, _options?: Configuration): Promise<HttpInfo<DeleteContractResponse>> {
        const result = this.api.deleteContractWithHttpInfo(contractId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Contract by id.
     * Delete Contract
     * @param contractId
     */
    public deleteContract(contractId: string, _options?: Configuration): Promise<DeleteContractResponse> {
        const result = this.api.deleteContract(contractId, _options);
        return result.toPromise();
    }

    /**
     * Get a Contract by id.
     * Get Contract
     * @param contractId
     */
    public getContractWithHttpInfo(contractId: string, _options?: Configuration): Promise<HttpInfo<GetContractResponse>> {
        const result = this.api.getContractWithHttpInfo(contractId, _options);
        return result.toPromise();
    }

    /**
     * Get a Contract by id.
     * Get Contract
     * @param contractId
     */
    public getContract(contractId: string, _options?: Configuration): Promise<GetContractResponse> {
        const result = this.api.getContract(contractId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific contract using its integration provider and identifier.
     * Get contract by integration id
     * @param integrationType
     * @param integrationId
     */
    public getContractByIntegrationIdWithHttpInfo(integrationType: IntegrationType, integrationId: string, _options?: Configuration): Promise<HttpInfo<GetContractByIntegrationIdResponse>> {
        const result = this.api.getContractByIntegrationIdWithHttpInfo(integrationType, integrationId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific contract using its integration provider and identifier.
     * Get contract by integration id
     * @param integrationType
     * @param integrationId
     */
    public getContractByIntegrationId(integrationType: IntegrationType, integrationId: string, _options?: Configuration): Promise<GetContractByIntegrationIdResponse> {
        const result = this.api.getContractByIntegrationId(integrationType, integrationId, _options);
        return result.toPromise();
    }

    /**
     * List contracts for the account. Optionally filter by customerId to retrieve contracts for a specific customer.
     * List contracts
     * @param [limit]
     * @param [cursor]
     * @param [customerId]
     */
    public listContractsWithHttpInfo(limit?: number, cursor?: string, customerId?: string, _options?: Configuration): Promise<HttpInfo<ListContractsResponse>> {
        const result = this.api.listContractsWithHttpInfo(limit, cursor, customerId, _options);
        return result.toPromise();
    }

    /**
     * List contracts for the account. Optionally filter by customerId to retrieve contracts for a specific customer.
     * List contracts
     * @param [limit]
     * @param [cursor]
     * @param [customerId]
     */
    public listContracts(limit?: number, cursor?: string, customerId?: string, _options?: Configuration): Promise<ListContractsResponse> {
        const result = this.api.listContracts(limit, cursor, customerId, _options);
        return result.toPromise();
    }


}



import { ObservableCreditsApi } from './ObservableAPI';

import { CreditsApiRequestFactory, CreditsApiResponseProcessor} from "../apis/CreditsApi";
export class PromiseCreditsApi {
    private api: ObservableCreditsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CreditsApiRequestFactory,
        responseProcessor?: CreditsApiResponseProcessor
    ) {
        this.api = new ObservableCreditsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.
     * Deduct credits from customer credit ledger
     * @param deductCreditsRequest
     */
    public deductCreditsWithHttpInfo(deductCreditsRequest: DeductCreditsRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deductCreditsWithHttpInfo(deductCreditsRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.
     * Deduct credits from customer credit ledger
     * @param deductCreditsRequest
     */
    public deductCredits(deductCreditsRequest: DeductCreditsRequest, _options?: Configuration): Promise<void> {
        const result = this.api.deductCredits(deductCreditsRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.
     * Grant credits to a customer credit ledger
     * @param grantCreditsRequest
     */
    public grantCreditsWithHttpInfo(grantCreditsRequest: GrantCreditsRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.grantCreditsWithHttpInfo(grantCreditsRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.
     * Grant credits to a customer credit ledger
     * @param grantCreditsRequest
     */
    public grantCredits(grantCreditsRequest: GrantCreditsRequest, _options?: Configuration): Promise<void> {
        const result = this.api.grantCredits(grantCreditsRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is used to retrieve the credit ledger entries for a specific customer.
     * Retrieve credit ledger entries for customer.
     * @param customerId
     * @param [limit]
     * @param [cursor]
     */
    public listCreditLedgerEntriesWithHttpInfo(customerId: string, limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ListCreditLedgerEntriesResponse>> {
        const result = this.api.listCreditLedgerEntriesWithHttpInfo(customerId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is used to retrieve the credit ledger entries for a specific customer.
     * Retrieve credit ledger entries for customer.
     * @param customerId
     * @param [limit]
     * @param [cursor]
     */
    public listCreditLedgerEntries(customerId: string, limit?: number, cursor?: string, _options?: Configuration): Promise<ListCreditLedgerEntriesResponse> {
        const result = this.api.listCreditLedgerEntries(customerId, limit, cursor, _options);
        return result.toPromise();
    }


}



import { ObservableCustomFieldsApi } from './ObservableAPI';

import { CustomFieldsApiRequestFactory, CustomFieldsApiResponseProcessor} from "../apis/CustomFieldsApi";
export class PromiseCustomFieldsApi {
    private api: ObservableCustomFieldsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomFieldsApiRequestFactory,
        responseProcessor?: CustomFieldsApiResponseProcessor
    ) {
        this.api = new ObservableCustomFieldsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Custom field.
     * Create Custom field
     * @param createCustomFieldRequest
     */
    public createCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CreateCustomFieldResponse>> {
        const result = this.api.createCustomFieldWithHttpInfo(createCustomFieldRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new Custom field.
     * Create Custom field
     * @param createCustomFieldRequest
     */
    public createCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Promise<CreateCustomFieldResponse> {
        const result = this.api.createCustomField(createCustomFieldRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Custom field by id.
     * Delete Custom field
     * @param customFieldId
     */
    public deleteCustomFieldWithHttpInfo(customFieldId: string, _options?: Configuration): Promise<HttpInfo<DeleteCustomFieldResponse>> {
        const result = this.api.deleteCustomFieldWithHttpInfo(customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Custom field by id.
     * Delete Custom field
     * @param customFieldId
     */
    public deleteCustomField(customFieldId: string, _options?: Configuration): Promise<DeleteCustomFieldResponse> {
        const result = this.api.deleteCustomField(customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Get a Custom field by id.
     * Get Custom field
     * @param customFieldId
     */
    public getCustomFieldWithHttpInfo(customFieldId: string, _options?: Configuration): Promise<HttpInfo<GetCustomFieldResponse>> {
        const result = this.api.getCustomFieldWithHttpInfo(customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Get a Custom field by id.
     * Get Custom field
     * @param customFieldId
     */
    public getCustomField(customFieldId: string, _options?: Configuration): Promise<GetCustomFieldResponse> {
        const result = this.api.getCustomField(customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Custom fields.
     * List Custom fields
     * @param [limit]
     * @param [cursor]
     */
    public listCustomFieldsWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ListCustomFieldsResponse>> {
        const result = this.api.listCustomFieldsWithHttpInfo(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Custom fields.
     * List Custom fields
     * @param [limit]
     * @param [cursor]
     */
    public listCustomFields(limit?: number, cursor?: string, _options?: Configuration): Promise<ListCustomFieldsResponse> {
        const result = this.api.listCustomFields(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Update a Custom field by id.
     * Update Custom field
     * @param updateCustomFieldRequest
     * @param customFieldId
     */
    public updateCustomFieldWithHttpInfo(updateCustomFieldRequest: UpdateCustomFieldRequest, customFieldId: string, _options?: Configuration): Promise<HttpInfo<UpdateCustomFieldResponse>> {
        const result = this.api.updateCustomFieldWithHttpInfo(updateCustomFieldRequest, customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Update a Custom field by id.
     * Update Custom field
     * @param updateCustomFieldRequest
     * @param customFieldId
     */
    public updateCustomField(updateCustomFieldRequest: UpdateCustomFieldRequest, customFieldId: string, _options?: Configuration): Promise<UpdateCustomFieldResponse> {
        const result = this.api.updateCustomField(updateCustomFieldRequest, customFieldId, _options);
        return result.toPromise();
    }


}



import { ObservableCustomersApi } from './ObservableAPI';

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class PromiseCustomersApi {
    private api: ObservableCustomersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Customer.
     * Create Customer
     * @param createCustomerRequest
     */
    public createCustomerWithHttpInfo(createCustomerRequest: CreateCustomerRequest, _options?: Configuration): Promise<HttpInfo<CreateCustomerResponse>> {
        const result = this.api.createCustomerWithHttpInfo(createCustomerRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new Customer.
     * Create Customer
     * @param createCustomerRequest
     */
    public createCustomer(createCustomerRequest: CreateCustomerRequest, _options?: Configuration): Promise<CreateCustomerResponse> {
        const result = this.api.createCustomer(createCustomerRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new Customer relation.
     * Create Customer relation
     * @param createCustomerRelationRequest
     */
    public createCustomerRelationWithHttpInfo(createCustomerRelationRequest: CreateCustomerRelationRequest, _options?: Configuration): Promise<HttpInfo<CreateCustomerRelationResponse>> {
        const result = this.api.createCustomerRelationWithHttpInfo(createCustomerRelationRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new Customer relation.
     * Create Customer relation
     * @param createCustomerRelationRequest
     */
    public createCustomerRelation(createCustomerRelationRequest: CreateCustomerRelationRequest, _options?: Configuration): Promise<CreateCustomerRelationResponse> {
        const result = this.api.createCustomerRelation(createCustomerRelationRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param customerId
     */
    public deleteCustomerWithHttpInfo(customerId: string, _options?: Configuration): Promise<HttpInfo<DeleteCustomerResponse>> {
        const result = this.api.deleteCustomerWithHttpInfo(customerId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param customerId
     */
    public deleteCustomer(customerId: string, _options?: Configuration): Promise<DeleteCustomerResponse> {
        const result = this.api.deleteCustomer(customerId, _options);
        return result.toPromise();
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param customerId
     */
    public getCustomerWithHttpInfo(customerId: string, _options?: Configuration): Promise<HttpInfo<GetCustomerResponse>> {
        const result = this.api.getCustomerWithHttpInfo(customerId, _options);
        return result.toPromise();
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param customerId
     */
    public getCustomer(customerId: string, _options?: Configuration): Promise<GetCustomerResponse> {
        const result = this.api.getCustomer(customerId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param externalId
     */
    public getCustomerByExternalIdWithHttpInfo(externalId: string, _options?: Configuration): Promise<HttpInfo<GetCustomerResponse>> {
        const result = this.api.getCustomerByExternalIdWithHttpInfo(externalId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param externalId
     */
    public getCustomerByExternalId(externalId: string, _options?: Configuration): Promise<GetCustomerResponse> {
        const result = this.api.getCustomerByExternalId(externalId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its integration provider and identifier.
     * Get customer by integration id
     * @param integrationType
     * @param integrationId
     */
    public getCustomerByIntegrationIdWithHttpInfo(integrationType: IntegrationType, integrationId: string, _options?: Configuration): Promise<HttpInfo<GetCustomerByIntegrationIdResponse>> {
        const result = this.api.getCustomerByIntegrationIdWithHttpInfo(integrationType, integrationId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its integration provider and identifier.
     * Get customer by integration id
     * @param integrationType
     * @param integrationId
     */
    public getCustomerByIntegrationId(integrationType: IntegrationType, integrationId: string, _options?: Configuration): Promise<GetCustomerByIntegrationIdResponse> {
        const result = this.api.getCustomerByIntegrationId(integrationType, integrationId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its name.
     * Get customer by name
     * @param name
     */
    public getCustomerByNameWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<GetCustomerByNameResponse>> {
        const result = this.api.getCustomerByNameWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its name.
     * Get customer by name
     * @param name
     */
    public getCustomerByName(name: string, _options?: Configuration): Promise<GetCustomerByNameResponse> {
        const result = this.api.getCustomerByName(name, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param customerId
     */
    public getCustomerProductsConsumptionsWithHttpInfo(customerId: string, _options?: Configuration): Promise<HttpInfo<GetCustomerProductsConsumptionsResponse>> {
        const result = this.api.getCustomerProductsConsumptionsWithHttpInfo(customerId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param customerId
     */
    public getCustomerProductsConsumptions(customerId: string, _options?: Configuration): Promise<GetCustomerProductsConsumptionsResponse> {
        const result = this.api.getCustomerProductsConsumptions(customerId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer alias.
     * Get products consumptions by customer alias
     * @param alias
     */
    public getCustomerProductsConsumptionsByAliasWithHttpInfo(alias: string, _options?: Configuration): Promise<HttpInfo<GetCustomerProductsConsumptionsByAliasResponse>> {
        const result = this.api.getCustomerProductsConsumptionsByAliasWithHttpInfo(alias, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer alias.
     * Get products consumptions by customer alias
     * @param alias
     */
    public getCustomerProductsConsumptionsByAlias(alias: string, _options?: Configuration): Promise<GetCustomerProductsConsumptionsByAliasResponse> {
        const result = this.api.getCustomerProductsConsumptionsByAlias(alias, _options);
        return result.toPromise();
    }

    /**
     * Get a Customer relation by id.
     * Get Customer relation
     * @param customerRelationId
     */
    public getCustomerRelationWithHttpInfo(customerRelationId: string, _options?: Configuration): Promise<HttpInfo<GetCustomerRelationResponse>> {
        const result = this.api.getCustomerRelationWithHttpInfo(customerRelationId, _options);
        return result.toPromise();
    }

    /**
     * Get a Customer relation by id.
     * Get Customer relation
     * @param customerRelationId
     */
    public getCustomerRelation(customerRelationId: string, _options?: Configuration): Promise<GetCustomerRelationResponse> {
        const result = this.api.getCustomerRelation(customerRelationId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param [limit]
     * @param [cursor]
     */
    public listCustomersWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ListCustomersResponse>> {
        const result = this.api.listCustomersWithHttpInfo(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param [limit]
     * @param [cursor]
     */
    public listCustomers(limit?: number, cursor?: string, _options?: Configuration): Promise<ListCustomersResponse> {
        const result = this.api.listCustomers(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param updateCustomerRequest
     * @param customerId
     */
    public updateCustomerWithHttpInfo(updateCustomerRequest: UpdateCustomerRequest, customerId: string, _options?: Configuration): Promise<HttpInfo<UpdateCustomerResponse>> {
        const result = this.api.updateCustomerWithHttpInfo(updateCustomerRequest, customerId, _options);
        return result.toPromise();
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param updateCustomerRequest
     * @param customerId
     */
    public updateCustomer(updateCustomerRequest: UpdateCustomerRequest, customerId: string, _options?: Configuration): Promise<UpdateCustomerResponse> {
        const result = this.api.updateCustomer(updateCustomerRequest, customerId, _options);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param refId
     */
    public deleteEventByRefIdWithHttpInfo(refId: string, _options?: Configuration): Promise<HttpInfo<DeleteEventResponse>> {
        const result = this.api.deleteEventByRefIdWithHttpInfo(refId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param refId
     */
    public deleteEventByRefId(refId: string, _options?: Configuration): Promise<DeleteEventResponse> {
        const result = this.api.deleteEventByRefId(refId, _options);
        return result.toPromise();
    }

    /**
     * Delete multiple events, identified by ref, in a single request.
     * Delete events by refs
     * @param deleteEventsByRefsRequest A list of event refs to delete. The request deletes the matching events for the authenticated account.
     */
    public deleteEventsByRefsWithHttpInfo(deleteEventsByRefsRequest: DeleteEventsByRefsRequest, _options?: Configuration): Promise<HttpInfo<DeleteEventsByRefsResponse>> {
        const result = this.api.deleteEventsByRefsWithHttpInfo(deleteEventsByRefsRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete multiple events, identified by ref, in a single request.
     * Delete events by refs
     * @param deleteEventsByRefsRequest A list of event refs to delete. The request deletes the matching events for the authenticated account.
     */
    public deleteEventsByRefs(deleteEventsByRefsRequest: DeleteEventsByRefsRequest, _options?: Configuration): Promise<DeleteEventsByRefsResponse> {
        const result = this.api.deleteEventsByRefs(deleteEventsByRefsRequest, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param refId
     */
    public getEventByRefIdWithHttpInfo(refId: string, _options?: Configuration): Promise<HttpInfo<GetEventResponse>> {
        const result = this.api.getEventByRefIdWithHttpInfo(refId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param refId
     */
    public getEventByRefId(refId: string, _options?: Configuration): Promise<GetEventResponse> {
        const result = this.api.getEventByRefId(refId, _options);
        return result.toPromise();
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
    public queryEventsWithHttpInfo(startTime: Date, endTime: Date, eventName?: string, customerAlias?: string, limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<QueryEventsResponse>> {
        const result = this.api.queryEventsWithHttpInfo(startTime, endTime, eventName, customerAlias, limit, cursor, _options);
        return result.toPromise();
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
    public queryEvents(startTime: Date, endTime: Date, eventName?: string, customerAlias?: string, limit?: number, cursor?: string, _options?: Configuration): Promise<QueryEventsResponse> {
        const result = this.api.queryEvents(startTime, endTime, eventName, customerAlias, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param sendEventsRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsWithHttpInfo(sendEventsRequest: SendEventsRequest, _options?: Configuration): Promise<HttpInfo<SendEventsResponse>> {
        const result = this.api.sendEventsWithHttpInfo(sendEventsRequest, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param sendEventsRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEvents(sendEventsRequest: SendEventsRequest, _options?: Configuration): Promise<SendEventsResponse> {
        const result = this.api.sendEvents(sendEventsRequest, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param eventsDryRunRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsDryRunWithHttpInfo(eventsDryRunRequest: EventsDryRunRequest, _options?: Configuration): Promise<HttpInfo<EventsDryRunResponse>> {
        const result = this.api.sendEventsDryRunWithHttpInfo(eventsDryRunRequest, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param eventsDryRunRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsDryRun(eventsDryRunRequest: EventsDryRunRequest, _options?: Configuration): Promise<EventsDryRunResponse> {
        const result = this.api.sendEventsDryRun(eventsDryRunRequest, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID (v2).
     * Delete an event by refId (v2)
     * @param refId
     */
    public v2DeleteEventByRefIdWithHttpInfo(refId: string, _options?: Configuration): Promise<HttpInfo<V2DeleteEventResponse>> {
        const result = this.api.v2DeleteEventByRefIdWithHttpInfo(refId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID (v2).
     * Delete an event by refId (v2)
     * @param refId
     */
    public v2DeleteEventByRefId(refId: string, _options?: Configuration): Promise<V2DeleteEventResponse> {
        const result = this.api.v2DeleteEventByRefId(refId, _options);
        return result.toPromise();
    }

    /**
     * Delete multiple events, identified by ref, in a single request (v2).
     * Delete events by refs (v2)
     * @param v2DeleteEventsByRefsRequest A list of event refs to delete. The request deletes the matching events for the authenticated account.
     */
    public v2DeleteEventsByRefsWithHttpInfo(v2DeleteEventsByRefsRequest: V2DeleteEventsByRefsRequest, _options?: Configuration): Promise<HttpInfo<V2DeleteEventsByRefsResponse>> {
        const result = this.api.v2DeleteEventsByRefsWithHttpInfo(v2DeleteEventsByRefsRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete multiple events, identified by ref, in a single request (v2).
     * Delete events by refs (v2)
     * @param v2DeleteEventsByRefsRequest A list of event refs to delete. The request deletes the matching events for the authenticated account.
     */
    public v2DeleteEventsByRefs(v2DeleteEventsByRefsRequest: V2DeleteEventsByRefsRequest, _options?: Configuration): Promise<V2DeleteEventsByRefsResponse> {
        const result = this.api.v2DeleteEventsByRefs(v2DeleteEventsByRefsRequest, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific event using its reference ID (v2).
     * Get event by refId (v2)
     * @param refId
     */
    public v2GetEventByRefIdWithHttpInfo(refId: string, _options?: Configuration): Promise<HttpInfo<V2GetEventResponse>> {
        const result = this.api.v2GetEventByRefIdWithHttpInfo(refId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific event using its reference ID (v2).
     * Get event by refId (v2)
     * @param refId
     */
    public v2GetEventByRefId(refId: string, _options?: Configuration): Promise<V2GetEventResponse> {
        const result = this.api.v2GetEventByRefId(refId, _options);
        return result.toPromise();
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
    public v2QueryEventsWithHttpInfo(startTime: Date, endTime: Date, eventName?: string, customerAlias?: string, limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<V2QueryEventsResponse>> {
        const result = this.api.v2QueryEventsWithHttpInfo(startTime, endTime, eventName, customerAlias, limit, cursor, _options);
        return result.toPromise();
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
    public v2QueryEvents(startTime: Date, endTime: Date, eventName?: string, customerAlias?: string, limit?: number, cursor?: string, _options?: Configuration): Promise<V2QueryEventsResponse> {
        const result = this.api.v2QueryEvents(startTime, endTime, eventName, customerAlias, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Aggregate events by meters and time grouping via the events-service.
     * Aggregate events (v2)
     * @param v2QueryEventsAggregationRequest Configuration for aggregating events by meters and time grouping.
     */
    public v2QueryEventsAggregationWithHttpInfo(v2QueryEventsAggregationRequest: V2QueryEventsAggregationRequest, _options?: Configuration): Promise<HttpInfo<V2QueryEventsAggregationResponse>> {
        const result = this.api.v2QueryEventsAggregationWithHttpInfo(v2QueryEventsAggregationRequest, _options);
        return result.toPromise();
    }

    /**
     * Aggregate events by meters and time grouping via the events-service.
     * Aggregate events (v2)
     * @param v2QueryEventsAggregationRequest Configuration for aggregating events by meters and time grouping.
     */
    public v2QueryEventsAggregation(v2QueryEventsAggregationRequest: V2QueryEventsAggregationRequest, _options?: Configuration): Promise<V2QueryEventsAggregationResponse> {
        const result = this.api.v2QueryEventsAggregation(v2QueryEventsAggregationRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit a batch of events for ingestion via the events-service.
     * Submit a batch of events for ingestion (v2)
     * @param v2SendEventsRequest An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
     */
    public v2SendEventsWithHttpInfo(v2SendEventsRequest: V2SendEventsRequest, _options?: Configuration): Promise<HttpInfo<V2SendEventsResponse>> {
        const result = this.api.v2SendEventsWithHttpInfo(v2SendEventsRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit a batch of events for ingestion via the events-service.
     * Submit a batch of events for ingestion (v2)
     * @param v2SendEventsRequest An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
     */
    public v2SendEvents(v2SendEventsRequest: V2SendEventsRequest, _options?: Configuration): Promise<V2SendEventsResponse> {
        const result = this.api.v2SendEvents(v2SendEventsRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit a batch of events for testing via the events-service. NOTE: this is a dry run and will not store the events.
     * Submit a batch of events for testing (v2)
     * @param v2EventsDryRunRequest An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
     */
    public v2SendEventsDryRunWithHttpInfo(v2EventsDryRunRequest: V2EventsDryRunRequest, _options?: Configuration): Promise<HttpInfo<V2EventsDryRunResponse>> {
        const result = this.api.v2SendEventsDryRunWithHttpInfo(v2EventsDryRunRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit a batch of events for testing via the events-service. NOTE: this is a dry run and will not store the events.
     * Submit a batch of events for testing (v2)
     * @param v2EventsDryRunRequest An array of events following the EventInput schema. Up to 1000 events or a total payload max size of 256KB
     */
    public v2SendEventsDryRun(v2EventsDryRunRequest: V2EventsDryRunRequest, _options?: Configuration): Promise<V2EventsDryRunResponse> {
        const result = this.api.v2SendEventsDryRun(v2EventsDryRunRequest, _options);
        return result.toPromise();
    }


}



import { ObservableInvoicesApi } from './ObservableAPI';

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class PromiseInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param invoiceId
     */
    public getInvoiceWithHttpInfo(invoiceId: string, _options?: Configuration): Promise<HttpInfo<GetInvoiceResponse>> {
        const result = this.api.getInvoiceWithHttpInfo(invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param invoiceId
     */
    public getInvoice(invoiceId: string, _options?: Configuration): Promise<GetInvoiceResponse> {
        const result = this.api.getInvoice(invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to retrieve payment status information for a specific invoice, including payment status, amount due, amount paid, total, due date, paid date, and invoice PDF URL.
     * Get invoice payment status
     * @param invoiceId
     */
    public getInvoicePaymentStatusWithHttpInfo(invoiceId: string, _options?: Configuration): Promise<HttpInfo<InvoicePaymentStatusResponse>> {
        const result = this.api.getInvoicePaymentStatusWithHttpInfo(invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to retrieve payment status information for a specific invoice, including payment status, amount due, amount paid, total, due date, paid date, and invoice PDF URL.
     * Get invoice payment status
     * @param invoiceId
     */
    public getInvoicePaymentStatus(invoiceId: string, _options?: Configuration): Promise<InvoicePaymentStatusResponse> {
        const result = this.api.getInvoicePaymentStatus(invoiceId, _options);
        return result.toPromise();
    }

    /**
     * List invoices for the account. Optionally filter by customerId to retrieve invoices for a specific customer.
     * List invoices
     * @param [limit]
     * @param [cursor]
     * @param [customerId]
     * @param [billingStatus] Filter invoices by their billing status
     * @param [issuedAtFrom] Only include invoices issued on or after this timestamp
     * @param [issuedAtTo] Only include invoices issued on or before this timestamp
     */
    public listInvoicesWithHttpInfo(limit?: number, cursor?: string, customerId?: string, billingStatus?: 'None' | 'Paid' | 'Rejected' | 'PendingPayment' | 'Overdue', issuedAtFrom?: Date, issuedAtTo?: Date, _options?: Configuration): Promise<HttpInfo<ListInvoicesResponse>> {
        const result = this.api.listInvoicesWithHttpInfo(limit, cursor, customerId, billingStatus, issuedAtFrom, issuedAtTo, _options);
        return result.toPromise();
    }

    /**
     * List invoices for the account. Optionally filter by customerId to retrieve invoices for a specific customer.
     * List invoices
     * @param [limit]
     * @param [cursor]
     * @param [customerId]
     * @param [billingStatus] Filter invoices by their billing status
     * @param [issuedAtFrom] Only include invoices issued on or after this timestamp
     * @param [issuedAtTo] Only include invoices issued on or before this timestamp
     */
    public listInvoices(limit?: number, cursor?: string, customerId?: string, billingStatus?: 'None' | 'Paid' | 'Rejected' | 'PendingPayment' | 'Overdue', issuedAtFrom?: Date, issuedAtTo?: Date, _options?: Configuration): Promise<ListInvoicesResponse> {
        const result = this.api.listInvoices(limit, cursor, customerId, billingStatus, issuedAtFrom, issuedAtTo, _options);
        return result.toPromise();
    }


}



import { ObservableMeasurementsApi } from './ObservableAPI';

import { MeasurementsApiRequestFactory, MeasurementsApiResponseProcessor} from "../apis/MeasurementsApi";
export class PromiseMeasurementsApi {
    private api: ObservableMeasurementsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MeasurementsApiRequestFactory,
        responseProcessor?: MeasurementsApiResponseProcessor
    ) {
        this.api = new ObservableMeasurementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Measurement.
     * Create Measurement
     * @param createMeasurementRequest
     */
    public createMeasurementWithHttpInfo(createMeasurementRequest: CreateMeasurementRequest, _options?: Configuration): Promise<HttpInfo<CreateMeasurementResponse>> {
        const result = this.api.createMeasurementWithHttpInfo(createMeasurementRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new Measurement.
     * Create Measurement
     * @param createMeasurementRequest
     */
    public createMeasurement(createMeasurementRequest: CreateMeasurementRequest, _options?: Configuration): Promise<CreateMeasurementResponse> {
        const result = this.api.createMeasurement(createMeasurementRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Measurement by id.
     * Delete Measurement
     * @param measurementId
     */
    public deleteMeasurementWithHttpInfo(measurementId: string, _options?: Configuration): Promise<HttpInfo<DeleteMeasurementResponse>> {
        const result = this.api.deleteMeasurementWithHttpInfo(measurementId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Measurement by id.
     * Delete Measurement
     * @param measurementId
     */
    public deleteMeasurement(measurementId: string, _options?: Configuration): Promise<DeleteMeasurementResponse> {
        const result = this.api.deleteMeasurement(measurementId, _options);
        return result.toPromise();
    }

    /**
     * Get a Measurement by id.
     * Get Measurement
     * @param measurementId
     */
    public getMeasurementWithHttpInfo(measurementId: string, _options?: Configuration): Promise<HttpInfo<GetMeasurementResponse>> {
        const result = this.api.getMeasurementWithHttpInfo(measurementId, _options);
        return result.toPromise();
    }

    /**
     * Get a Measurement by id.
     * Get Measurement
     * @param measurementId
     */
    public getMeasurement(measurementId: string, _options?: Configuration): Promise<GetMeasurementResponse> {
        const result = this.api.getMeasurement(measurementId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Measurements.
     * List Measurements
     * @param [limit]
     * @param [cursor]
     */
    public listMeasurementsWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ListMeasurementsResponse>> {
        const result = this.api.listMeasurementsWithHttpInfo(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Measurements.
     * List Measurements
     * @param [limit]
     * @param [cursor]
     */
    public listMeasurements(limit?: number, cursor?: string, _options?: Configuration): Promise<ListMeasurementsResponse> {
        const result = this.api.listMeasurements(limit, cursor, _options);
        return result.toPromise();
    }


}



import { ObservableMetersApi } from './ObservableAPI';

import { MetersApiRequestFactory, MetersApiResponseProcessor} from "../apis/MetersApi";
export class PromiseMetersApi {
    private api: ObservableMetersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetersApiRequestFactory,
        responseProcessor?: MetersApiResponseProcessor
    ) {
        this.api = new ObservableMetersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a Meter by id.
     * Delete Meter
     * @param meterId
     */
    public deleteMeterWithHttpInfo(meterId: string, _options?: Configuration): Promise<HttpInfo<DeleteMeterResponse>> {
        const result = this.api.deleteMeterWithHttpInfo(meterId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Meter by id.
     * Delete Meter
     * @param meterId
     */
    public deleteMeter(meterId: string, _options?: Configuration): Promise<DeleteMeterResponse> {
        const result = this.api.deleteMeter(meterId, _options);
        return result.toPromise();
    }

    /**
     * Get a Meter by id.
     * Get Meter
     * @param meterId
     */
    public getMeterWithHttpInfo(meterId: string, _options?: Configuration): Promise<HttpInfo<GetMeterResponse>> {
        const result = this.api.getMeterWithHttpInfo(meterId, _options);
        return result.toPromise();
    }

    /**
     * Get a Meter by id.
     * Get Meter
     * @param meterId
     */
    public getMeter(meterId: string, _options?: Configuration): Promise<GetMeterResponse> {
        const result = this.api.getMeter(meterId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Meters.
     * List Meters
     * @param [limit]
     * @param [cursor]
     */
    public listMetersWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ListMetersResponse>> {
        const result = this.api.listMetersWithHttpInfo(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Meters.
     * List Meters
     * @param [limit]
     * @param [cursor]
     */
    public listMeters(limit?: number, cursor?: string, _options?: Configuration): Promise<ListMetersResponse> {
        const result = this.api.listMeters(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Update a Meter by id.
     * Update Meter
     * @param updateMeterRequest
     * @param meterId
     */
    public updateMeterWithHttpInfo(updateMeterRequest: UpdateMeterRequest, meterId: string, _options?: Configuration): Promise<HttpInfo<UpdateMeterResponse>> {
        const result = this.api.updateMeterWithHttpInfo(updateMeterRequest, meterId, _options);
        return result.toPromise();
    }

    /**
     * Update a Meter by id.
     * Update Meter
     * @param updateMeterRequest
     * @param meterId
     */
    public updateMeter(updateMeterRequest: UpdateMeterRequest, meterId: string, _options?: Configuration): Promise<UpdateMeterResponse> {
        const result = this.api.updateMeter(updateMeterRequest, meterId, _options);
        return result.toPromise();
    }


}



import { ObservablePlansApi } from './ObservableAPI';

import { PlansApiRequestFactory, PlansApiResponseProcessor} from "../apis/PlansApi";
export class PromisePlansApi {
    private api: ObservablePlansApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlansApiRequestFactory,
        responseProcessor?: PlansApiResponseProcessor
    ) {
        this.api = new ObservablePlansApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a Plan by id.
     * Delete Plan
     * @param planId
     */
    public deletePlanWithHttpInfo(planId: string, _options?: Configuration): Promise<HttpInfo<DeletePlanResponse>> {
        const result = this.api.deletePlanWithHttpInfo(planId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Plan by id.
     * Delete Plan
     * @param planId
     */
    public deletePlan(planId: string, _options?: Configuration): Promise<DeletePlanResponse> {
        const result = this.api.deletePlan(planId, _options);
        return result.toPromise();
    }

    /**
     * Get a Plan by id.
     * Get Plan
     * @param planId
     */
    public getPlanWithHttpInfo(planId: string, _options?: Configuration): Promise<HttpInfo<GetPlanResponse>> {
        const result = this.api.getPlanWithHttpInfo(planId, _options);
        return result.toPromise();
    }

    /**
     * Get a Plan by id.
     * Get Plan
     * @param planId
     */
    public getPlan(planId: string, _options?: Configuration): Promise<GetPlanResponse> {
        const result = this.api.getPlan(planId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Plans.
     * List Plans
     * @param [limit]
     * @param [cursor]
     */
    public listPlansWithHttpInfo(limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ListPlansResponse>> {
        const result = this.api.listPlansWithHttpInfo(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Plans.
     * List Plans
     * @param [limit]
     * @param [cursor]
     */
    public listPlans(limit?: number, cursor?: string, _options?: Configuration): Promise<ListPlansResponse> {
        const result = this.api.listPlans(limit, cursor, _options);
        return result.toPromise();
    }


}



import { ObservableProductConsumptionsApi } from './ObservableAPI';

import { ProductConsumptionsApiRequestFactory, ProductConsumptionsApiResponseProcessor} from "../apis/ProductConsumptionsApi";
export class PromiseProductConsumptionsApi {
    private api: ObservableProductConsumptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductConsumptionsApiRequestFactory,
        responseProcessor?: ProductConsumptionsApiResponseProcessor
    ) {
        this.api = new ObservableProductConsumptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param productId
     */
    public getProductConsumptionWithHttpInfo(productId: string, _options?: Configuration): Promise<HttpInfo<GetProductConsumptionResponse>> {
        const result = this.api.getProductConsumptionWithHttpInfo(productId, _options);
        return result.toPromise();
    }

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param productId
     */
    public getProductConsumption(productId: string, _options?: Configuration): Promise<GetProductConsumptionResponse> {
        const result = this.api.getProductConsumption(productId, _options);
        return result.toPromise();
    }


}



import { ObservableWebhooksApi } from './ObservableAPI';

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";
export class PromiseWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to subscribe to webhooks and receive event notifications.
     * Subscribe to webhooks
     * @param webhookSubscribeRequest Subscribe to webhooks and receive event notifications.
     */
    public webhookSubscribeWithHttpInfo(webhookSubscribeRequest: WebhookSubscribeRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.webhookSubscribeWithHttpInfo(webhookSubscribeRequest, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to subscribe to webhooks and receive event notifications.
     * Subscribe to webhooks
     * @param webhookSubscribeRequest Subscribe to webhooks and receive event notifications.
     */
    public webhookSubscribe(webhookSubscribeRequest: WebhookSubscribeRequest, _options?: Configuration): Promise<void> {
        const result = this.api.webhookSubscribe(webhookSubscribeRequest, _options);
        return result.toPromise();
    }


}



