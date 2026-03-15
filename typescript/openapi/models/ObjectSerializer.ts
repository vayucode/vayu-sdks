export * from '../models/Address';
export * from '../models/AggregationMethod';
export * from '../models/AggregationOperator';
export * from '../models/BillingCycleStatus';
export * from '../models/CloudUsageResult';
export * from '../models/Condition';
export * from '../models/Contact';
export * from '../models/ContractStatus';
export * from '../models/CreateCatalogProductRequest';
export * from '../models/CreateCatalogProductResponse';
export * from '../models/CreateCatalogProductResponseCatalogProduct';
export * from '../models/CreateContractRequest';
export * from '../models/CreateContractResponse';
export * from '../models/CreateCustomerRelationRequest';
export * from '../models/CreateCustomerRelationResponse';
export * from '../models/CreateCustomerRelationResponseCustomerRelation';
export * from '../models/CreateCustomerRequest';
export * from '../models/CreateCustomerResponse';
export * from '../models/CreateCustomerResponseCustomer';
export * from '../models/CreateMeasurementRequest';
export * from '../models/CreateMeasurementRequestUsageDate';
export * from '../models/CreateMeasurementResponse';
export * from '../models/CreateMeasurementResponseMeasurement';
export * from '../models/CreditLedgerEntry';
export * from '../models/Criterion';
export * from '../models/CriterionOperator';
export * from '../models/Currency';
export * from '../models/CustomField';
export * from '../models/CustomFieldValue';
export * from '../models/CustomFieldValueTypes';
export * from '../models/CustomerCloudProviderSettings';
export * from '../models/CustomerSource';
export * from '../models/DeductCreditsRequest';
export * from '../models/DeleteCatalogProductResponse';
export * from '../models/DeleteCatalogProductResponseCatalogProduct';
export * from '../models/DeleteContractResponse';
export * from '../models/DeleteContractResponseContract';
export * from '../models/DeleteCustomerResponse';
export * from '../models/DeleteCustomerResponseCustomer';
export * from '../models/DeleteEventResponse';
export * from '../models/DeleteEventResponseEvent';
export * from '../models/DeleteEventsByRefsRequest';
export * from '../models/DeleteEventsByRefsResponse';
export * from '../models/DeleteEventsByRefsResponseEventsInner';
export * from '../models/DeleteMeasurementResponse';
export * from '../models/DeleteMeasurementResponseMeasurement';
export * from '../models/DeleteMeterResponse';
export * from '../models/DeleteMeterResponseMeter';
export * from '../models/Event';
export * from '../models/EventsDryRunRequest';
export * from '../models/EventsDryRunResponse';
export * from '../models/EventsDryRunResponseObject';
export * from '../models/EventsDryRunResponseObjectEvent';
export * from '../models/EventsDryRunResponseObjectMeterWithValuesInner';
export * from '../models/ExternalOverageStrategy';
export * from '../models/Filter';
export * from '../models/FullDayPeriod';
export * from '../models/GetCatalogProductResponse';
export * from '../models/GetContractByIntegrationIdResponse';
export * from '../models/GetContractResponse';
export * from '../models/GetContractResponseContract';
export * from '../models/GetCustomerByIntegrationIdResponse';
export * from '../models/GetCustomerByNameResponse';
export * from '../models/GetCustomerByNameResponseCustomer';
export * from '../models/GetCustomerProductsConsumptionsByAliasResponse';
export * from '../models/GetCustomerProductsConsumptionsResponse';
export * from '../models/GetCustomerRelationResponse';
export * from '../models/GetCustomerResponse';
export * from '../models/GetEventResponse';
export * from '../models/GetEventResponseEvent';
export * from '../models/GetInvoiceResponse';
export * from '../models/GetInvoiceResponseInvoice';
export * from '../models/GetInvoiceResponseInvoiceRevenueBreakdown';
export * from '../models/GetMeasurementResponse';
export * from '../models/GetMeterResponse';
export * from '../models/GetMeterResponseMeter';
export * from '../models/GetProductConsumptionResponse';
export * from '../models/GetProductConsumptionResponseProductConsumption';
export * from '../models/GrantCreditsRequest';
export * from '../models/IntegrationEntity';
export * from '../models/IntegrationEntityTypes';
export * from '../models/IntegrationProviders';
export * from '../models/IntegrationType';
export * from '../models/InvalidEvent';
export * from '../models/InvoiceBillingStatus';
export * from '../models/InvoicePaymentStatusResponse';
export * from '../models/LineItem';
export * from '../models/LineItemRevenueBreakdown';
export * from '../models/ListCatalogProductsResponse';
export * from '../models/ListContractsResponse';
export * from '../models/ListCreditLedgerEntriesResponse';
export * from '../models/ListCustomersResponse';
export * from '../models/ListInvoicesResponse';
export * from '../models/ListMeasurementsResponse';
export * from '../models/ListMetersResponse';
export * from '../models/LoginRequest';
export * from '../models/LoginResponse';
export * from '../models/Meter';
export * from '../models/NotificationEventType';
export * from '../models/PartnerSubmissionDetail';
export * from '../models/PaymentInfo';
export * from '../models/PaymentInfoDepositTo';
export * from '../models/PaymentTerm';
export * from '../models/ProductCloudProviderSettings';
export * from '../models/ProductConsumption';
export * from '../models/ProductGroup';
export * from '../models/ProductGroupCommitment';
export * from '../models/ProductGroupProductsInner';
export * from '../models/ProductGroupProductsInnerCommitment';
export * from '../models/ProductGroupProductsInnerCommitmentScheduling';
export * from '../models/ProductGroupProductsInnerPricing';
export * from '../models/ProductGroupProductsInnerPricingOneOf';
export * from '../models/ProductGroupProductsInnerPricingOneOf1';
export * from '../models/ProductGroupProductsInnerPricingOneOf1InstallmentsInner';
export * from '../models/ProductGroupProductsInnerPricingOneOf2';
export * from '../models/ProductGroupProductsInnerPricingOneOf2SubscriptionCadence';
export * from '../models/ProductGroupProductsInnerPricingOneOf3';
export * from '../models/ProductGroupProductsInnerPricingOneOf3SubscriptionCadence';
export * from '../models/ProductGroupProductsInnerPricingOneOf3TiersInner';
export * from '../models/ProductGroupProductsInnerPricingOneOf4';
export * from '../models/ProductGroupProductsInnerScheduling';
export * from '../models/ProductGroupProductsInnerSchedulingDuration';
export * from '../models/QueryEventsResponse';
export * from '../models/QueryEventsResponseEventsInner';
export * from '../models/SendEventsRequest';
export * from '../models/SendEventsResponse';
export * from '../models/SubmitCloudUsageRequest';
export * from '../models/SyncStatus';
export * from '../models/UpdateCatalogProductRequest';
export * from '../models/UpdateCatalogProductResponse';
export * from '../models/UpdateCustomerRequest';
export * from '../models/UpdateCustomerResponse';
export * from '../models/UpdateMeterRequest';
export * from '../models/UpdateMeterResponse';
export * from '../models/UsageWindow';
export * from '../models/WebhookSubscribeRequest';

import { Address } from '../models/Address';
import { AggregationMethod    } from '../models/AggregationMethod';
import { AggregationOperator } from '../models/AggregationOperator';
import { BillingCycleStatus } from '../models/BillingCycleStatus';
import { CloudUsageResult, CloudUsageResultStatusEnum              } from '../models/CloudUsageResult';
import { Condition } from '../models/Condition';
import { Contact } from '../models/Contact';
import { ContractStatus } from '../models/ContractStatus';
import { CreateCatalogProductRequest } from '../models/CreateCatalogProductRequest';
import { CreateCatalogProductResponse } from '../models/CreateCatalogProductResponse';
import { CreateCatalogProductResponseCatalogProduct } from '../models/CreateCatalogProductResponseCatalogProduct';
import { CreateContractRequest               } from '../models/CreateContractRequest';
import { CreateContractResponse } from '../models/CreateContractResponse';
import { CreateCustomerRelationRequest } from '../models/CreateCustomerRelationRequest';
import { CreateCustomerRelationResponse } from '../models/CreateCustomerRelationResponse';
import { CreateCustomerRelationResponseCustomerRelation } from '../models/CreateCustomerRelationResponseCustomerRelation';
import { CreateCustomerRequest            , CreateCustomerRequestDueDaysEnum      } from '../models/CreateCustomerRequest';
import { CreateCustomerResponse } from '../models/CreateCustomerResponse';
import { CreateCustomerResponseCustomer            , CreateCustomerResponseCustomerDueDaysEnum         } from '../models/CreateCustomerResponseCustomer';
import { CreateMeasurementRequest } from '../models/CreateMeasurementRequest';
import { CreateMeasurementRequestUsageDate } from '../models/CreateMeasurementRequestUsageDate';
import { CreateMeasurementResponse } from '../models/CreateMeasurementResponse';
import { CreateMeasurementResponseMeasurement } from '../models/CreateMeasurementResponseMeasurement';
import { CreditLedgerEntry          } from '../models/CreditLedgerEntry';
import { Criterion    } from '../models/Criterion';
import { CriterionOperator } from '../models/CriterionOperator';
import { Currency } from '../models/Currency';
import { CustomField, CustomFieldIntegrationSourceEnum        } from '../models/CustomField';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { CustomFieldValueTypes } from '../models/CustomFieldValueTypes';
import { CustomerCloudProviderSettings, CustomerCloudProviderSettingsCloudProviderEnum     } from '../models/CustomerCloudProviderSettings';
import { CustomerSource } from '../models/CustomerSource';
import { DeductCreditsRequest } from '../models/DeductCreditsRequest';
import { DeleteCatalogProductResponse } from '../models/DeleteCatalogProductResponse';
import { DeleteCatalogProductResponseCatalogProduct } from '../models/DeleteCatalogProductResponseCatalogProduct';
import { DeleteContractResponse } from '../models/DeleteContractResponse';
import { DeleteContractResponseContract                   } from '../models/DeleteContractResponseContract';
import { DeleteCustomerResponse } from '../models/DeleteCustomerResponse';
import { DeleteCustomerResponseCustomer            , DeleteCustomerResponseCustomerDueDaysEnum          } from '../models/DeleteCustomerResponseCustomer';
import { DeleteEventResponse } from '../models/DeleteEventResponse';
import { DeleteEventResponseEvent } from '../models/DeleteEventResponseEvent';
import { DeleteEventsByRefsRequest } from '../models/DeleteEventsByRefsRequest';
import { DeleteEventsByRefsResponse } from '../models/DeleteEventsByRefsResponse';
import { DeleteEventsByRefsResponseEventsInner } from '../models/DeleteEventsByRefsResponseEventsInner';
import { DeleteMeasurementResponse } from '../models/DeleteMeasurementResponse';
import { DeleteMeasurementResponseMeasurement } from '../models/DeleteMeasurementResponseMeasurement';
import { DeleteMeterResponse } from '../models/DeleteMeterResponse';
import { DeleteMeterResponseMeter } from '../models/DeleteMeterResponseMeter';
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
import { GetContractResponseContract                  } from '../models/GetContractResponseContract';
import { GetCustomerByIntegrationIdResponse } from '../models/GetCustomerByIntegrationIdResponse';
import { GetCustomerByNameResponse } from '../models/GetCustomerByNameResponse';
import { GetCustomerByNameResponseCustomer            , GetCustomerByNameResponseCustomerDueDaysEnum         } from '../models/GetCustomerByNameResponseCustomer';
import { GetCustomerProductsConsumptionsByAliasResponse } from '../models/GetCustomerProductsConsumptionsByAliasResponse';
import { GetCustomerProductsConsumptionsResponse } from '../models/GetCustomerProductsConsumptionsResponse';
import { GetCustomerRelationResponse } from '../models/GetCustomerRelationResponse';
import { GetCustomerResponse } from '../models/GetCustomerResponse';
import { GetEventResponse } from '../models/GetEventResponse';
import { GetEventResponseEvent } from '../models/GetEventResponseEvent';
import { GetInvoiceResponse } from '../models/GetInvoiceResponse';
import { GetInvoiceResponseInvoice               } from '../models/GetInvoiceResponseInvoice';
import { GetInvoiceResponseInvoiceRevenueBreakdown } from '../models/GetInvoiceResponseInvoiceRevenueBreakdown';
import { GetMeasurementResponse } from '../models/GetMeasurementResponse';
import { GetMeterResponse } from '../models/GetMeterResponse';
import { GetMeterResponseMeter } from '../models/GetMeterResponseMeter';
import { GetProductConsumptionResponse } from '../models/GetProductConsumptionResponse';
import { GetProductConsumptionResponseProductConsumption } from '../models/GetProductConsumptionResponseProductConsumption';
import { GrantCreditsRequest } from '../models/GrantCreditsRequest';
import { IntegrationEntity       } from '../models/IntegrationEntity';
import { IntegrationEntityTypes } from '../models/IntegrationEntityTypes';
import { IntegrationProviders } from '../models/IntegrationProviders';
import { IntegrationType } from '../models/IntegrationType';
import { InvalidEvent } from '../models/InvalidEvent';
import { InvoiceBillingStatus } from '../models/InvoiceBillingStatus';
import { InvoicePaymentStatusResponse         } from '../models/InvoicePaymentStatusResponse';
import { LineItem } from '../models/LineItem';
import { LineItemRevenueBreakdown } from '../models/LineItemRevenueBreakdown';
import { ListCatalogProductsResponse } from '../models/ListCatalogProductsResponse';
import { ListContractsResponse } from '../models/ListContractsResponse';
import { ListCreditLedgerEntriesResponse } from '../models/ListCreditLedgerEntriesResponse';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListMeasurementsResponse } from '../models/ListMeasurementsResponse';
import { ListMetersResponse } from '../models/ListMetersResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Meter } from '../models/Meter';
import { NotificationEventType } from '../models/NotificationEventType';
import { PartnerSubmissionDetail , PartnerSubmissionDetailStatusEnum    } from '../models/PartnerSubmissionDetail';
import { PaymentInfo           } from '../models/PaymentInfo';
import { PaymentInfoDepositTo } from '../models/PaymentInfoDepositTo';
import { PaymentTerm } from '../models/PaymentTerm';
import { ProductCloudProviderSettings, ProductCloudProviderSettingsCloudProviderEnum     } from '../models/ProductCloudProviderSettings';
import { ProductConsumption } from '../models/ProductConsumption';
import { ProductGroup } from '../models/ProductGroup';
import { ProductGroupCommitment     } from '../models/ProductGroupCommitment';
import { ProductGroupProductsInner             } from '../models/ProductGroupProductsInner';
import { ProductGroupProductsInnerCommitment     } from '../models/ProductGroupProductsInnerCommitment';
import { ProductGroupProductsInnerCommitmentScheduling } from '../models/ProductGroupProductsInnerCommitmentScheduling';
import { ProductGroupProductsInnerPricingClass } from '../models/ProductGroupProductsInnerPricing';
import { ProductGroupProductsInnerPricingOneOf, ProductGroupProductsInnerPricingOneOfTypeEnum    } from '../models/ProductGroupProductsInnerPricingOneOf';
import { ProductGroupProductsInnerPricingOneOf1, ProductGroupProductsInnerPricingOneOf1TypeEnum     } from '../models/ProductGroupProductsInnerPricingOneOf1';
import { ProductGroupProductsInnerPricingOneOf1InstallmentsInner } from '../models/ProductGroupProductsInnerPricingOneOf1InstallmentsInner';
import { ProductGroupProductsInnerPricingOneOf2, ProductGroupProductsInnerPricingOneOf2TypeEnum     } from '../models/ProductGroupProductsInnerPricingOneOf2';
import { ProductGroupProductsInnerPricingOneOf2SubscriptionCadence, ProductGroupProductsInnerPricingOneOf2SubscriptionCadenceUnitEnum    } from '../models/ProductGroupProductsInnerPricingOneOf2SubscriptionCadence';
import { ProductGroupProductsInnerPricingOneOf3, ProductGroupProductsInnerPricingOneOf3TypeEnum          } from '../models/ProductGroupProductsInnerPricingOneOf3';
import { ProductGroupProductsInnerPricingOneOf3SubscriptionCadence, ProductGroupProductsInnerPricingOneOf3SubscriptionCadenceUnitEnum    } from '../models/ProductGroupProductsInnerPricingOneOf3SubscriptionCadence';
import { ProductGroupProductsInnerPricingOneOf3TiersInner } from '../models/ProductGroupProductsInnerPricingOneOf3TiersInner';
import { ProductGroupProductsInnerPricingOneOf4, ProductGroupProductsInnerPricingOneOf4TypeEnum       } from '../models/ProductGroupProductsInnerPricingOneOf4';
import { ProductGroupProductsInnerScheduling } from '../models/ProductGroupProductsInnerScheduling';
import { ProductGroupProductsInnerSchedulingDuration, ProductGroupProductsInnerSchedulingDurationUnitEnum    } from '../models/ProductGroupProductsInnerSchedulingDuration';
import { QueryEventsResponse } from '../models/QueryEventsResponse';
import { QueryEventsResponseEventsInner } from '../models/QueryEventsResponseEventsInner';
import { SendEventsRequest } from '../models/SendEventsRequest';
import { SendEventsResponse } from '../models/SendEventsResponse';
import { SubmitCloudUsageRequest } from '../models/SubmitCloudUsageRequest';
import { SyncStatus } from '../models/SyncStatus';
import { UpdateCatalogProductRequest } from '../models/UpdateCatalogProductRequest';
import { UpdateCatalogProductResponse } from '../models/UpdateCatalogProductResponse';
import { UpdateCustomerRequest            , UpdateCustomerRequestDueDaysEnum      } from '../models/UpdateCustomerRequest';
import { UpdateCustomerResponse } from '../models/UpdateCustomerResponse';
import { UpdateMeterRequest } from '../models/UpdateMeterRequest';
import { UpdateMeterResponse } from '../models/UpdateMeterResponse';
import { UsageWindow } from '../models/UsageWindow';
import { WebhookSubscribeRequest   } from '../models/WebhookSubscribeRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "AggregationOperator",
    "BillingCycleStatus",
    "CloudUsageResultStatusEnum",
    "ContractStatus",
    "CreateCustomerRequestDueDaysEnum",
    "CreateCustomerResponseCustomerDueDaysEnum",
    "CriterionOperator",
    "Currency",
    "CustomFieldIntegrationSourceEnum",
    "CustomFieldValueTypes",
    "CustomerCloudProviderSettingsCloudProviderEnum",
    "CustomerSource",
    "DeleteCustomerResponseCustomerDueDaysEnum",
    "ExternalOverageStrategy",
    "GetCustomerByNameResponseCustomerDueDaysEnum",
    "IntegrationEntityTypes",
    "IntegrationProviders",
    "IntegrationType",
    "InvoiceBillingStatus",
    "NotificationEventType",
    "PartnerSubmissionDetailStatusEnum",
    "PaymentTerm",
    "ProductCloudProviderSettingsCloudProviderEnum",
    "ProductGroupProductsInnerPricingTypeEnum",
    "ProductGroupProductsInnerPricingOneOfTypeEnum",
    "ProductGroupProductsInnerPricingOneOf1TypeEnum",
    "ProductGroupProductsInnerPricingOneOf2TypeEnum",
    "ProductGroupProductsInnerPricingOneOf2SubscriptionCadenceUnitEnum",
    "ProductGroupProductsInnerPricingOneOf3TypeEnum",
    "ProductGroupProductsInnerPricingOneOf3SubscriptionCadenceUnitEnum",
    "ProductGroupProductsInnerPricingOneOf4TypeEnum",
    "ProductGroupProductsInnerSchedulingDurationUnitEnum",
    "SyncStatus",
    "UpdateCustomerRequestDueDaysEnum",
]);

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "AggregationMethod": AggregationMethod,
    "CloudUsageResult": CloudUsageResult,
    "Condition": Condition,
    "Contact": Contact,
    "CreateCatalogProductRequest": CreateCatalogProductRequest,
    "CreateCatalogProductResponse": CreateCatalogProductResponse,
    "CreateCatalogProductResponseCatalogProduct": CreateCatalogProductResponseCatalogProduct,
    "CreateContractRequest": CreateContractRequest,
    "CreateContractResponse": CreateContractResponse,
    "CreateCustomerRelationRequest": CreateCustomerRelationRequest,
    "CreateCustomerRelationResponse": CreateCustomerRelationResponse,
    "CreateCustomerRelationResponseCustomerRelation": CreateCustomerRelationResponseCustomerRelation,
    "CreateCustomerRequest": CreateCustomerRequest,
    "CreateCustomerResponse": CreateCustomerResponse,
    "CreateCustomerResponseCustomer": CreateCustomerResponseCustomer,
    "CreateMeasurementRequest": CreateMeasurementRequest,
    "CreateMeasurementRequestUsageDate": CreateMeasurementRequestUsageDate,
    "CreateMeasurementResponse": CreateMeasurementResponse,
    "CreateMeasurementResponseMeasurement": CreateMeasurementResponseMeasurement,
    "CreditLedgerEntry": CreditLedgerEntry,
    "Criterion": Criterion,
    "CustomField": CustomField,
    "CustomFieldValue": CustomFieldValue,
    "CustomerCloudProviderSettings": CustomerCloudProviderSettings,
    "DeductCreditsRequest": DeductCreditsRequest,
    "DeleteCatalogProductResponse": DeleteCatalogProductResponse,
    "DeleteCatalogProductResponseCatalogProduct": DeleteCatalogProductResponseCatalogProduct,
    "DeleteContractResponse": DeleteContractResponse,
    "DeleteContractResponseContract": DeleteContractResponseContract,
    "DeleteCustomerResponse": DeleteCustomerResponse,
    "DeleteCustomerResponseCustomer": DeleteCustomerResponseCustomer,
    "DeleteEventResponse": DeleteEventResponse,
    "DeleteEventResponseEvent": DeleteEventResponseEvent,
    "DeleteEventsByRefsRequest": DeleteEventsByRefsRequest,
    "DeleteEventsByRefsResponse": DeleteEventsByRefsResponse,
    "DeleteEventsByRefsResponseEventsInner": DeleteEventsByRefsResponseEventsInner,
    "DeleteMeasurementResponse": DeleteMeasurementResponse,
    "DeleteMeasurementResponseMeasurement": DeleteMeasurementResponseMeasurement,
    "DeleteMeterResponse": DeleteMeterResponse,
    "DeleteMeterResponseMeter": DeleteMeterResponseMeter,
    "Event": Event,
    "EventsDryRunRequest": EventsDryRunRequest,
    "EventsDryRunResponse": EventsDryRunResponse,
    "EventsDryRunResponseObject": EventsDryRunResponseObject,
    "EventsDryRunResponseObjectEvent": EventsDryRunResponseObjectEvent,
    "EventsDryRunResponseObjectMeterWithValuesInner": EventsDryRunResponseObjectMeterWithValuesInner,
    "Filter": Filter,
    "FullDayPeriod": FullDayPeriod,
    "GetCatalogProductResponse": GetCatalogProductResponse,
    "GetContractByIntegrationIdResponse": GetContractByIntegrationIdResponse,
    "GetContractResponse": GetContractResponse,
    "GetContractResponseContract": GetContractResponseContract,
    "GetCustomerByIntegrationIdResponse": GetCustomerByIntegrationIdResponse,
    "GetCustomerByNameResponse": GetCustomerByNameResponse,
    "GetCustomerByNameResponseCustomer": GetCustomerByNameResponseCustomer,
    "GetCustomerProductsConsumptionsByAliasResponse": GetCustomerProductsConsumptionsByAliasResponse,
    "GetCustomerProductsConsumptionsResponse": GetCustomerProductsConsumptionsResponse,
    "GetCustomerRelationResponse": GetCustomerRelationResponse,
    "GetCustomerResponse": GetCustomerResponse,
    "GetEventResponse": GetEventResponse,
    "GetEventResponseEvent": GetEventResponseEvent,
    "GetInvoiceResponse": GetInvoiceResponse,
    "GetInvoiceResponseInvoice": GetInvoiceResponseInvoice,
    "GetInvoiceResponseInvoiceRevenueBreakdown": GetInvoiceResponseInvoiceRevenueBreakdown,
    "GetMeasurementResponse": GetMeasurementResponse,
    "GetMeterResponse": GetMeterResponse,
    "GetMeterResponseMeter": GetMeterResponseMeter,
    "GetProductConsumptionResponse": GetProductConsumptionResponse,
    "GetProductConsumptionResponseProductConsumption": GetProductConsumptionResponseProductConsumption,
    "GrantCreditsRequest": GrantCreditsRequest,
    "IntegrationEntity": IntegrationEntity,
    "InvalidEvent": InvalidEvent,
    "InvoicePaymentStatusResponse": InvoicePaymentStatusResponse,
    "LineItem": LineItem,
    "LineItemRevenueBreakdown": LineItemRevenueBreakdown,
    "ListCatalogProductsResponse": ListCatalogProductsResponse,
    "ListContractsResponse": ListContractsResponse,
    "ListCreditLedgerEntriesResponse": ListCreditLedgerEntriesResponse,
    "ListCustomersResponse": ListCustomersResponse,
    "ListInvoicesResponse": ListInvoicesResponse,
    "ListMeasurementsResponse": ListMeasurementsResponse,
    "ListMetersResponse": ListMetersResponse,
    "LoginRequest": LoginRequest,
    "LoginResponse": LoginResponse,
    "Meter": Meter,
    "PartnerSubmissionDetail": PartnerSubmissionDetail,
    "PaymentInfo": PaymentInfo,
    "PaymentInfoDepositTo": PaymentInfoDepositTo,
    "ProductCloudProviderSettings": ProductCloudProviderSettings,
    "ProductConsumption": ProductConsumption,
    "ProductGroup": ProductGroup,
    "ProductGroupCommitment": ProductGroupCommitment,
    "ProductGroupProductsInner": ProductGroupProductsInner,
    "ProductGroupProductsInnerCommitment": ProductGroupProductsInnerCommitment,
    "ProductGroupProductsInnerCommitmentScheduling": ProductGroupProductsInnerCommitmentScheduling,
    "ProductGroupProductsInnerPricing": ProductGroupProductsInnerPricingClass,
    "ProductGroupProductsInnerPricingOneOf": ProductGroupProductsInnerPricingOneOf,
    "ProductGroupProductsInnerPricingOneOf1": ProductGroupProductsInnerPricingOneOf1,
    "ProductGroupProductsInnerPricingOneOf1InstallmentsInner": ProductGroupProductsInnerPricingOneOf1InstallmentsInner,
    "ProductGroupProductsInnerPricingOneOf2": ProductGroupProductsInnerPricingOneOf2,
    "ProductGroupProductsInnerPricingOneOf2SubscriptionCadence": ProductGroupProductsInnerPricingOneOf2SubscriptionCadence,
    "ProductGroupProductsInnerPricingOneOf3": ProductGroupProductsInnerPricingOneOf3,
    "ProductGroupProductsInnerPricingOneOf3SubscriptionCadence": ProductGroupProductsInnerPricingOneOf3SubscriptionCadence,
    "ProductGroupProductsInnerPricingOneOf3TiersInner": ProductGroupProductsInnerPricingOneOf3TiersInner,
    "ProductGroupProductsInnerPricingOneOf4": ProductGroupProductsInnerPricingOneOf4,
    "ProductGroupProductsInnerScheduling": ProductGroupProductsInnerScheduling,
    "ProductGroupProductsInnerSchedulingDuration": ProductGroupProductsInnerSchedulingDuration,
    "QueryEventsResponse": QueryEventsResponse,
    "QueryEventsResponseEventsInner": QueryEventsResponseEventsInner,
    "SendEventsRequest": SendEventsRequest,
    "SendEventsResponse": SendEventsResponse,
    "SubmitCloudUsageRequest": SubmitCloudUsageRequest,
    "UpdateCatalogProductRequest": UpdateCatalogProductRequest,
    "UpdateCatalogProductResponse": UpdateCatalogProductResponse,
    "UpdateCustomerRequest": UpdateCustomerRequest,
    "UpdateCustomerResponse": UpdateCustomerResponse,
    "UpdateMeterRequest": UpdateMeterRequest,
    "UpdateMeterResponse": UpdateMeterResponse,
    "UsageWindow": UsageWindow,
    "WebhookSubscribeRequest": WebhookSubscribeRequest,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
