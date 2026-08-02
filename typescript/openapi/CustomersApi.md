# .CustomersApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomer**](CustomersApi.md#createCustomer) | **POST** /customers | Create Customer
[**createCustomerRelation**](CustomersApi.md#createCustomerRelation) | **POST** /customer-relations | Create Customer relation
[**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /customers/{customerId} | Delete Customer
[**getCustomer**](CustomersApi.md#getCustomer) | **GET** /customers/{customerId} | Get Customer
[**getCustomerByExternalId**](CustomersApi.md#getCustomerByExternalId) | **GET** /customers/externalId/{externalId} | Get customer by externalId
[**getCustomerByIntegrationId**](CustomersApi.md#getCustomerByIntegrationId) | **GET** /customers/integration/{integrationType}/{integrationId} | Get customer by integration id
[**getCustomerByName**](CustomersApi.md#getCustomerByName) | **GET** /customers/name/{name} | Get customer by name
[**getCustomerProductsConsumptions**](CustomersApi.md#getCustomerProductsConsumptions) | **GET** /customers/products-consumptions/{customerId} | Get products consumptions by customer id
[**getCustomerProductsConsumptionsByAlias**](CustomersApi.md#getCustomerProductsConsumptionsByAlias) | **GET** /customers/products-consumptions/alias/{alias} | Get products consumptions by customer alias
[**getCustomerRelation**](CustomersApi.md#getCustomerRelation) | **GET** /customer-relations/{customerRelationId} | Get Customer relation
[**listCustomers**](CustomersApi.md#listCustomers) | **GET** /customers | List Customers
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PUT** /customers/{customerId} | Update Customer


# **createCustomer**
> CreateCustomerResponse createCustomer(createCustomerRequest)

Create a new Customer.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiCreateCustomerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiCreateCustomerRequest = {
  
  createCustomerRequest: {
    name: "name_example",
    aliases: [],
    contacts: [
      {
        name: "name_example",
        email: "/-a7kp.R/g2*SVXkjc1XP^68kTyn!RSD}A?k-F-^+^%dG+%40$okj#v~z_k`mAwSdahssq^U0eYAPBcee8jqrm.='mk#ik&^m~.#-y|{pDW.OFjEPFVfXE8^Ej3ivU+}0'3ba5ng!NY8RFHCzKsJ3PJRFdvJiioPWo'G!+Cqg&xs8QX|V.zSdd'BOPeeq0ytC_7QRG9&n+ADTr%qIWZ{G7^q#/XM5}uMUC3oXkEDfs9iVJJ6uyAxmx4KkpP%rUjo.nRLjHba0KFCPIf_nngxBYmN&J~wT`mhGFn#i0v_Xcw%2gT=K2=_I4WfD{f`'}/7G{.EGFK*'LUA7V3c.}m|^AjUCYqyL38l3}B23YEfvC!9OtvR&5!_0`8.F#18cYR5`H9FRePCcc4Yolh+cnRMpkE=bpD3'K-1~06?.!M+aY?vEa%fOhK!MRzF3Fji=e&6O$kG~zQCd2r4}2E{qT-mTc!tE~/^YCWi$cMr.r`Q|'lDEC~nSmNUy&Z7-+oWzGSi'ZP.9!xG4esl%N9G6|EXKX8alZiUDfb4*${W?`fN-_7{e?*?sTQL3D5.Mx5OJk32RgE~m=NXAh'pEI*mKM=RuSculcIYSM?pH4y&D6$t||?+k6nvg0LJW!u%#GygMxUEFm.j+l~hjNdSTA{h!!OElFLP+R&mIyjH7u!^kZ}w$I~yiw'Xb$hdzwmW_TinGxtcW!.}Jugm=#zWcX8Fjx/EM5#0wkWX1c*wb'2n1{d8&2*X!xf'%GhF{oo?j51AuL5c}QXTMsz!hO-%}g{Vb|_ja--.*UOnpNz#-fkfhpE2CwY$YzM4J~6BZaF!h/A}UaMlRV`ZrDq+_IDiYQ~xyp-IOF{G24J5%/.22Z*Akgrq4-6WAVfnxMC-%QRapCV{tL*tvsh'LNSxNSy4EBqPfGaMgMn$C_5%v*3sV^s5%uQZ=FYbWpfwzHfx%X$D36bL$ZT.'uHMWCKhE3FiRc?N'&MDPvgs9votz0~vT~tZLB2cP3uEESw?gqG`Ldb6R~~V92=|_NxRLyue6P0oGa29M3B7y&rKpL.gKl_3vMPSNYYbf2gi-71~%pohKYhHe4cFLB64BD+QW^-D+U%H==FQ9$Ys.}zh/GFK?lDX.%X=7kCw2YxT2.WIx~=v80Pqmp`}md+eGD{rdW~A5XZ6pZF~lMzNzO-{*^8Oy*7Q+cDwwS|jGwCbq.k|7&Pby6$5y`Od9`HPh3jAI3u*?HY?#.jT&N7ZELavUjL4w$W8GOA/iFYRihZYJPn0ym$~hjh15ut48Hb5}A~~T'Z7N*jl0.N1PX38gmt0CnV&*!Fy~9PYW`O}X8^Zwg*4T=.W3z&YoohI4OcYABkKA-{-qfeIvy%UK8hlTA1R1hSoW!6Uqy9S.MSItPxh5ET90H*?h_`pmcq`y{0PKp3}mo?7Vpy+GCvfJkRPW?CCJ1NpFQFk9B1^J8.A#GpUSzEiA'|4U?qA~ERv$hXW{tvKb?4&DcTvGKJ8^R6H%/~FgqmkMQIV8R}'!-FfZHI0r6f%$u7VqYjy`DGZ+BU.pP2SIMvH8j${rUm8w34-7381C8$pS#y8R-q_TT~dWyTztybJuM?41G'NPX.}lDS}H3|v/3A.h#ikh{VcD2s7^-9R|5qFr7ixZ*O_H4?u324fbhMH*-`5VyR`%3u3Lf7TYK!.28KKvsp}z*kXaJj`.yga}|uRvPaih2s~4k7`p1Y4!G*f$Cj1xcI`y}diYEQk&/{l.6K~w~#^I=O9g$b3kJff`Fiz{9wrX-1v1uT1V8|zgeS-VyRDmU%*rRJ*hiV3K3+HAJV8{eLL3m.RF{Hco^qi'`DLQ-T|YGj*|*8_'l_NajW/!^BZ~He6?63XSE?0-&RVA$.T0ZGp`Vfm6CmzI&v%CWVu'xD/iqV=afMqo+w3a5}f._G|voHMnRc/&|L3%ej^Nfd-Xj|09F_QELr~/xFlF/tPbU_E/k_!~mnii5mtQrdER9P7VoV`.bu?+9M*%{w&O%W$1.C3{4#O`H!*00xx&%!H`jT?3hbq?d`0G6ZcV9berP26Cr7N.soTO{SUFJLm.wN%Z!!wrOI#Gzc!xm}.D?7s+Cy.G#aEEm%UR{0/vi|xY=Z-aH$3qnA_s~O7I*J.W?=1^+H5!dE+xTg-ByWax-sxRVadH9CI.OI}b1x7DQEIVS|rY-T=t2/#N7a2Lq*N7j&'/V?7x%I1nuf=+hyKjePv_q!Wo=07OgON9Z'KlOK}hmMzi}&8qB6W-.4d3Eq&tN/hWFV#h6EE-Na1|9giAFfO_n1.JG|RwZNaXj.`bkV$KF&0#mETI~nt&YlZ}KNpYdl^coM8^4!-mG-VL1KMaL#jnb0uNS?Q/E+Xf%p*v28jsKxacx`ARKh?|Bntj~lbL^b=.oppD~QSq!zhLbLcI0fOI=rrMn36yTauutf|SZQEtMJyJLCeu0M9.0q?0lTDi7c&`3!aOuKWwiMtZaJebNxa'`1T^`1ZJB|hON_Tp'32G{PVc|my/=cJ&4r`cTa9'u*HObsZhA5{V%-u}GKFuROW.t-3i3AOonpuxN}9-VGdeWH5c`b2c{ctEs=t7|oGM54Yw'NR?dQ.cHbzP6u!sCExBknaYytUdCPN}sB?i%HIje.r?Y#DikrnDo}M$UbpBb.3R5A}u+Q7jEp?rivObIY%0ZnA|1rq5XhL}ekUc6A7q'K-1fgjOF1LqH_'t8HvEMIt7kzL|wdzrJ.SEIeR=`1%=&^7vSF{jttak&`hfX%Se7p?Gr*4G$s.954pwC1J|+wu&m20FLO$q?B7~v~FLU'88PT=T|-ex7fJ|sDOE^^$'7HzOE{PETn|EN5mtfuzKFf8${t77.!r?_1JT#!1/1p7B#FGIJ^&9-%UljNB?SAsBdw3FeyWH?&g{NV*}Pb|||rvpRy?gWIX}5h^wqip3E+bUW}h'G%bUugMEt`n/.u.giIC`8o_HxClR`_H{P4{p0m2/U}B8/#5x^6~8'}/F2m4/0k.0{azQ+ZYHJcP0t3lSzy?OI^HdM4`ORuT0K.oD_2XzTuU2/'%0^qJ3p4I+/PTlD#_WDwiKb#S.yoR+kk|EmTh-sMB+/IVz!4&w=0!v.rj/xD?xD{MfhGH%E49KRxAvqBv!eOx*$lnsHsZ5~7q4405|2SP_h'$~Ti'Z~xrV9hl#U%ZDmtkR=htU^R.y7Biwh{dPO0SUE%yKy*&b#cE1XV$$`Pg=Kw~}4E|1TT.v~b4a&BMp#Pc|#D|U=/Hc8/pe.N.DSUNa6b=||*hKvpbw{XzCZSqU84}n=.0erxQU6t?JQstw8bSe_{{YBv*fJi/bHOl%~hTp5rN'k^bh~?dT8WA9pxi}EN/DKk1pKz5d7VrNn7w!Bpou+DL%$?93.wXcG?Uim2WGZXo.f!aY'i.v+X+Vw=nT.N'cpvUIE`6`dolBDy4&X3FWVT?R^QF_2OImoZ!ZSShemCg`QjoQVbNE00tGMBofxNJ.W+-_|FjzXMsW8^wESCh2Yau'u?*yunPFt'H-.wDfX1ODzM`%6j4x!f3!`%dylZtb8U8ljhu_s.eq!sekNi-^hob64}FvNhZl_^&}VBh{bAAbkD2vOgZgs|_|ck%w^^2oV_~=zaMBmlm9-JjpO#tHXoZl.0QF+XUTx%By4D=802HI#'lx#P_+7!lNbEz5*o4q!Q&D+%aZ5gKU&4nY&.F8n%l|#5K&MU38OYRC-$U#ysBuW*Gu4.+5!$hlG#ienjCGMBbL`O%9pXFEwvrnZOc|yeiAEkqacTtYXABXxN/aQM-KPo'1Y*-_M-?qw.EcCS#'DBlUI*o7_xsox7D6Vcl%K.yKYWst$!xUvsdRxw$nhC3oG3xrbqr&CmBCRtTA'z$NaHUYk`.+}VW.GgHO//5xYC_UM&8D|~=qbCa-DOx^wCAl/Ak+c3e&JC0T*czocRbFY5++.QvWrL750MD^PDvn}GOljTsyn'cA5v*i-^~8bOI}*z1^lvP&8jqtM4snk{D^gzs_^&5icJ`D9jqC9=k6c#iTk.`N3D2H}12{p6Y9NJsv/|d9lVS~H+b3jnZm?~Ya|ABfSSYPC~oMD$DVrl#-3e.~QZlHhy_Wrkaa&^+y70wHCBX{dHdH0Fz1Lu5KoF'tc5UfI=A4|Dt^E41d?mWzV3xwMJ6{5m^Ltbn$|UTW3|y{A3O_+E2dlM7*.5RF^?nKu*4e8ikF%wP9wIy/iY=Oku_UffmHkUoVF~a-QVvX_WLsotA7_gyWr#/$K6K!x3$9FEpCZI0*=8.VHEXTYBn6~JdiY!V1*=UO1Gg}QPtn=8MuQ~o$Md^3f^Wl{aJ|Kx8Z6KrNo63?^K5dIX*.FG3+#ojjS2o}R2IHXK9TBliYq?X+WUk3m{0tN/lw!aYs{/xYq_xc$}J'.38{oiJ8QbdPfeL5`.ann6P8PLKq'a{u&2}QVWSz}+O~{4&PcsT$i^t?GAgxi&mg*kg6F~39M_HLkm2ARj3sXY*IiL^?u7'1S7bxm$M|PAc'1~OM_U0epV@Uw3o7bGJFAxDmjp8R-rlInxKc3EWfJNqE1K4apn48yZsSVG3J-AF4DX.WyNlY",
        title: "title_example",
        phone: "+9072888",
        receiveInvoiceEmail: true,
      },
    ],
    source: "Stripe",
    legalName: "legalName_example",
    taxIds: [],
    status: "Active",
    taxId: "taxId_example",
    cloudProviderSettings: {
      cloudProvider: "AWS",
      cloudProviderMarketplaceId: "cloudProviderMarketplaceId_example",
      customerIdentifier: "customerIdentifier_example",
    },
    externalId: "externalId_example",
    customerErpId: "customerErpId_example",
    address: {
      country: "country_example",
      countryCode: "countryCode_example",
      city: "city_example",
      addressText: "addressText_example",
      state: "state_example",
      postalCode: "postalCode_example",
    },
    salesForceAccountId: "salesForceAccountId_example",
    externalIntegration: [
      {
        type: "NetSuite",
        id: "id_example",
        name: "name_example",
      },
    ],
    dueDays: "END_OF_MONTH",
    currency: "USD",
    customFields: [
      {
        integrationSource: "NetSuite",
        integrationEntityType: "Account",
        fieldPath: "fieldPath_example",
        vayuCustomFieldName: "vayuCustomFieldName_example",
        valueType: "String",
        value: null,
      },
    ],
    subsidiary: "subsidiary_example",
    totalOutstandingAmount: 3.14,
    openAmount: 3.14,
    overdueAmount: 3.14,
    pendingPaymentAmount: 3.14,
    paidAmount: 3.14,
  },
};

const data = await apiInstance.createCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomerRequest** | **CreateCustomerRequest**|  |


### Return type

**CreateCustomerResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCustomerRelation**
> CreateCustomerRelationResponse createCustomerRelation(createCustomerRelationRequest)

Create a new Customer relation.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiCreateCustomerRelationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiCreateCustomerRelationRequest = {
  
  createCustomerRelationRequest: {
    vayuParentCustomerId: "62ECB020842930cc01FFCCfe",
    vayuChildCustomerId: "62ECB020842930cc01FFCCfe",
    relationType: "accumulateUsage",
  },
};

const data = await apiInstance.createCustomerRelation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomerRelationRequest** | **CreateCustomerRelationRequest**|  |


### Return type

**CreateCustomerRelationResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomer**
> DeleteCustomerResponse deleteCustomer()

Delete a Customer by id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiDeleteCustomerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiDeleteCustomerRequest = {
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.deleteCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] |  | defaults to undefined


### Return type

**DeleteCustomerResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomer**
> GetCustomerResponse getCustomer()

Get a Customer by id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerRequest = {
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided externalId |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerByExternalId**
> GetCustomerResponse getCustomerByExternalId()

Use this endpoint to get a specific customer using its external Id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerByExternalIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerByExternalIdRequest = {
  
  externalId: "externalId_example",
};

const data = await apiInstance.getCustomerByExternalId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided externalId |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerByIntegrationId**
> GetCustomerByIntegrationIdResponse getCustomerByIntegrationId()

Use this endpoint to get a specific customer using its integration provider and identifier.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerByIntegrationIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerByIntegrationIdRequest = {
  
  integrationType: "Hubspot",
  
  integrationId: "integrationId_example",
};

const data = await apiInstance.getCustomerByIntegrationId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationType** | **IntegrationProviders** |  | defaults to undefined
 **integrationId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerByIntegrationIdResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided integration id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerByName**
> GetCustomerByNameResponse getCustomerByName()

Use this endpoint to get a specific customer using its name.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerByNameRequest = {
  
  name: "name_example",
};

const data = await apiInstance.getCustomerByName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerByNameResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the customer matching the provided name |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerProductsConsumptions**
> GetCustomerProductsConsumptionsResponse getCustomerProductsConsumptions()

Use this endpoint to get the products consumptions by the customer id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerProductsConsumptionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerProductsConsumptionsRequest = {
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getCustomerProductsConsumptions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerProductsConsumptionsResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the products consumptions by the customer id |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerProductsConsumptionsByAlias**
> GetCustomerProductsConsumptionsByAliasResponse getCustomerProductsConsumptionsByAlias()

Use this endpoint to get the products consumptions by the customer alias.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerProductsConsumptionsByAliasRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerProductsConsumptionsByAliasRequest = {
  
  alias: "alias_example",
};

const data = await apiInstance.getCustomerProductsConsumptionsByAlias(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerProductsConsumptionsByAliasResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the products consumptions by the customer alias |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerRelation**
> GetCustomerRelationResponse getCustomerRelation()

Get a Customer relation by id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiGetCustomerRelationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerRelationRequest = {
  
  customerRelationId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.getCustomerRelation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerRelationId** | [**string**] |  | defaults to undefined


### Return type

**GetCustomerRelationResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomers**
> ListCustomersResponse listCustomers()

Get a list of Customers.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiListCustomersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiListCustomersRequest = {
  
  status: "Active",
  
  limit: 10,
  
  cursor: "cursor_example",
};

const data = await apiInstance.listCustomers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **CustomerStatus** |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListCustomersResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomer**
> UpdateCustomerResponse updateCustomer(updateCustomerRequest, )

Update a Customer by id.

### Example


```typescript
import { createConfiguration, CustomersApi } from '';
import type { CustomersApiUpdateCustomerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiUpdateCustomerRequest = {
  
  updateCustomerRequest: {
    name: "name_example",
    aliases: [],
    contacts: [
      {
        name: "name_example",
        email: "/-a7kp.R/g2*SVXkjc1XP^68kTyn!RSD}A?k-F-^+^%dG+%40$okj#v~z_k`mAwSdahssq^U0eYAPBcee8jqrm.='mk#ik&^m~.#-y|{pDW.OFjEPFVfXE8^Ej3ivU+}0'3ba5ng!NY8RFHCzKsJ3PJRFdvJiioPWo'G!+Cqg&xs8QX|V.zSdd'BOPeeq0ytC_7QRG9&n+ADTr%qIWZ{G7^q#/XM5}uMUC3oXkEDfs9iVJJ6uyAxmx4KkpP%rUjo.nRLjHba0KFCPIf_nngxBYmN&J~wT`mhGFn#i0v_Xcw%2gT=K2=_I4WfD{f`'}/7G{.EGFK*'LUA7V3c.}m|^AjUCYqyL38l3}B23YEfvC!9OtvR&5!_0`8.F#18cYR5`H9FRePCcc4Yolh+cnRMpkE=bpD3'K-1~06?.!M+aY?vEa%fOhK!MRzF3Fji=e&6O$kG~zQCd2r4}2E{qT-mTc!tE~/^YCWi$cMr.r`Q|'lDEC~nSmNUy&Z7-+oWzGSi'ZP.9!xG4esl%N9G6|EXKX8alZiUDfb4*${W?`fN-_7{e?*?sTQL3D5.Mx5OJk32RgE~m=NXAh'pEI*mKM=RuSculcIYSM?pH4y&D6$t||?+k6nvg0LJW!u%#GygMxUEFm.j+l~hjNdSTA{h!!OElFLP+R&mIyjH7u!^kZ}w$I~yiw'Xb$hdzwmW_TinGxtcW!.}Jugm=#zWcX8Fjx/EM5#0wkWX1c*wb'2n1{d8&2*X!xf'%GhF{oo?j51AuL5c}QXTMsz!hO-%}g{Vb|_ja--.*UOnpNz#-fkfhpE2CwY$YzM4J~6BZaF!h/A}UaMlRV`ZrDq+_IDiYQ~xyp-IOF{G24J5%/.22Z*Akgrq4-6WAVfnxMC-%QRapCV{tL*tvsh'LNSxNSy4EBqPfGaMgMn$C_5%v*3sV^s5%uQZ=FYbWpfwzHfx%X$D36bL$ZT.'uHMWCKhE3FiRc?N'&MDPvgs9votz0~vT~tZLB2cP3uEESw?gqG`Ldb6R~~V92=|_NxRLyue6P0oGa29M3B7y&rKpL.gKl_3vMPSNYYbf2gi-71~%pohKYhHe4cFLB64BD+QW^-D+U%H==FQ9$Ys.}zh/GFK?lDX.%X=7kCw2YxT2.WIx~=v80Pqmp`}md+eGD{rdW~A5XZ6pZF~lMzNzO-{*^8Oy*7Q+cDwwS|jGwCbq.k|7&Pby6$5y`Od9`HPh3jAI3u*?HY?#.jT&N7ZELavUjL4w$W8GOA/iFYRihZYJPn0ym$~hjh15ut48Hb5}A~~T'Z7N*jl0.N1PX38gmt0CnV&*!Fy~9PYW`O}X8^Zwg*4T=.W3z&YoohI4OcYABkKA-{-qfeIvy%UK8hlTA1R1hSoW!6Uqy9S.MSItPxh5ET90H*?h_`pmcq`y{0PKp3}mo?7Vpy+GCvfJkRPW?CCJ1NpFQFk9B1^J8.A#GpUSzEiA'|4U?qA~ERv$hXW{tvKb?4&DcTvGKJ8^R6H%/~FgqmkMQIV8R}'!-FfZHI0r6f%$u7VqYjy`DGZ+BU.pP2SIMvH8j${rUm8w34-7381C8$pS#y8R-q_TT~dWyTztybJuM?41G'NPX.}lDS}H3|v/3A.h#ikh{VcD2s7^-9R|5qFr7ixZ*O_H4?u324fbhMH*-`5VyR`%3u3Lf7TYK!.28KKvsp}z*kXaJj`.yga}|uRvPaih2s~4k7`p1Y4!G*f$Cj1xcI`y}diYEQk&/{l.6K~w~#^I=O9g$b3kJff`Fiz{9wrX-1v1uT1V8|zgeS-VyRDmU%*rRJ*hiV3K3+HAJV8{eLL3m.RF{Hco^qi'`DLQ-T|YGj*|*8_'l_NajW/!^BZ~He6?63XSE?0-&RVA$.T0ZGp`Vfm6CmzI&v%CWVu'xD/iqV=afMqo+w3a5}f._G|voHMnRc/&|L3%ej^Nfd-Xj|09F_QELr~/xFlF/tPbU_E/k_!~mnii5mtQrdER9P7VoV`.bu?+9M*%{w&O%W$1.C3{4#O`H!*00xx&%!H`jT?3hbq?d`0G6ZcV9berP26Cr7N.soTO{SUFJLm.wN%Z!!wrOI#Gzc!xm}.D?7s+Cy.G#aEEm%UR{0/vi|xY=Z-aH$3qnA_s~O7I*J.W?=1^+H5!dE+xTg-ByWax-sxRVadH9CI.OI}b1x7DQEIVS|rY-T=t2/#N7a2Lq*N7j&'/V?7x%I1nuf=+hyKjePv_q!Wo=07OgON9Z'KlOK}hmMzi}&8qB6W-.4d3Eq&tN/hWFV#h6EE-Na1|9giAFfO_n1.JG|RwZNaXj.`bkV$KF&0#mETI~nt&YlZ}KNpYdl^coM8^4!-mG-VL1KMaL#jnb0uNS?Q/E+Xf%p*v28jsKxacx`ARKh?|Bntj~lbL^b=.oppD~QSq!zhLbLcI0fOI=rrMn36yTauutf|SZQEtMJyJLCeu0M9.0q?0lTDi7c&`3!aOuKWwiMtZaJebNxa'`1T^`1ZJB|hON_Tp'32G{PVc|my/=cJ&4r`cTa9'u*HObsZhA5{V%-u}GKFuROW.t-3i3AOonpuxN}9-VGdeWH5c`b2c{ctEs=t7|oGM54Yw'NR?dQ.cHbzP6u!sCExBknaYytUdCPN}sB?i%HIje.r?Y#DikrnDo}M$UbpBb.3R5A}u+Q7jEp?rivObIY%0ZnA|1rq5XhL}ekUc6A7q'K-1fgjOF1LqH_'t8HvEMIt7kzL|wdzrJ.SEIeR=`1%=&^7vSF{jttak&`hfX%Se7p?Gr*4G$s.954pwC1J|+wu&m20FLO$q?B7~v~FLU'88PT=T|-ex7fJ|sDOE^^$'7HzOE{PETn|EN5mtfuzKFf8${t77.!r?_1JT#!1/1p7B#FGIJ^&9-%UljNB?SAsBdw3FeyWH?&g{NV*}Pb|||rvpRy?gWIX}5h^wqip3E+bUW}h'G%bUugMEt`n/.u.giIC`8o_HxClR`_H{P4{p0m2/U}B8/#5x^6~8'}/F2m4/0k.0{azQ+ZYHJcP0t3lSzy?OI^HdM4`ORuT0K.oD_2XzTuU2/'%0^qJ3p4I+/PTlD#_WDwiKb#S.yoR+kk|EmTh-sMB+/IVz!4&w=0!v.rj/xD?xD{MfhGH%E49KRxAvqBv!eOx*$lnsHsZ5~7q4405|2SP_h'$~Ti'Z~xrV9hl#U%ZDmtkR=htU^R.y7Biwh{dPO0SUE%yKy*&b#cE1XV$$`Pg=Kw~}4E|1TT.v~b4a&BMp#Pc|#D|U=/Hc8/pe.N.DSUNa6b=||*hKvpbw{XzCZSqU84}n=.0erxQU6t?JQstw8bSe_{{YBv*fJi/bHOl%~hTp5rN'k^bh~?dT8WA9pxi}EN/DKk1pKz5d7VrNn7w!Bpou+DL%$?93.wXcG?Uim2WGZXo.f!aY'i.v+X+Vw=nT.N'cpvUIE`6`dolBDy4&X3FWVT?R^QF_2OImoZ!ZSShemCg`QjoQVbNE00tGMBofxNJ.W+-_|FjzXMsW8^wESCh2Yau'u?*yunPFt'H-.wDfX1ODzM`%6j4x!f3!`%dylZtb8U8ljhu_s.eq!sekNi-^hob64}FvNhZl_^&}VBh{bAAbkD2vOgZgs|_|ck%w^^2oV_~=zaMBmlm9-JjpO#tHXoZl.0QF+XUTx%By4D=802HI#'lx#P_+7!lNbEz5*o4q!Q&D+%aZ5gKU&4nY&.F8n%l|#5K&MU38OYRC-$U#ysBuW*Gu4.+5!$hlG#ienjCGMBbL`O%9pXFEwvrnZOc|yeiAEkqacTtYXABXxN/aQM-KPo'1Y*-_M-?qw.EcCS#'DBlUI*o7_xsox7D6Vcl%K.yKYWst$!xUvsdRxw$nhC3oG3xrbqr&CmBCRtTA'z$NaHUYk`.+}VW.GgHO//5xYC_UM&8D|~=qbCa-DOx^wCAl/Ak+c3e&JC0T*czocRbFY5++.QvWrL750MD^PDvn}GOljTsyn'cA5v*i-^~8bOI}*z1^lvP&8jqtM4snk{D^gzs_^&5icJ`D9jqC9=k6c#iTk.`N3D2H}12{p6Y9NJsv/|d9lVS~H+b3jnZm?~Ya|ABfSSYPC~oMD$DVrl#-3e.~QZlHhy_Wrkaa&^+y70wHCBX{dHdH0Fz1Lu5KoF'tc5UfI=A4|Dt^E41d?mWzV3xwMJ6{5m^Ltbn$|UTW3|y{A3O_+E2dlM7*.5RF^?nKu*4e8ikF%wP9wIy/iY=Oku_UffmHkUoVF~a-QVvX_WLsotA7_gyWr#/$K6K!x3$9FEpCZI0*=8.VHEXTYBn6~JdiY!V1*=UO1Gg}QPtn=8MuQ~o$Md^3f^Wl{aJ|Kx8Z6KrNo63?^K5dIX*.FG3+#ojjS2o}R2IHXK9TBliYq?X+WUk3m{0tN/lw!aYs{/xYq_xc$}J'.38{oiJ8QbdPfeL5`.ann6P8PLKq'a{u&2}QVWSz}+O~{4&PcsT$i^t?GAgxi&mg*kg6F~39M_HLkm2ARj3sXY*IiL^?u7'1S7bxm$M|PAc'1~OM_U0epV@Uw3o7bGJFAxDmjp8R-rlInxKc3EWfJNqE1K4apn48yZsSVG3J-AF4DX.WyNlY",
        title: "title_example",
        phone: "+9072888",
        receiveInvoiceEmail: true,
      },
    ],
    source: "Stripe",
    legalName: "legalName_example",
    taxIds: [],
    status: "Active",
    taxId: "taxId_example",
    cloudProviderSettings: {
      cloudProvider: "AWS",
      cloudProviderMarketplaceId: "cloudProviderMarketplaceId_example",
      customerIdentifier: "customerIdentifier_example",
    },
    externalId: "externalId_example",
    customerErpId: "customerErpId_example",
    address: {
      country: "country_example",
      countryCode: "countryCode_example",
      city: "city_example",
      addressText: "addressText_example",
      state: "state_example",
      postalCode: "postalCode_example",
    },
    salesForceAccountId: "salesForceAccountId_example",
    externalIntegration: [
      {
        type: "NetSuite",
        id: "id_example",
        name: "name_example",
      },
    ],
    dueDays: "END_OF_MONTH",
    currency: "USD",
    customFields: [
      {
        integrationSource: "NetSuite",
        integrationEntityType: "Account",
        fieldPath: "fieldPath_example",
        vayuCustomFieldName: "vayuCustomFieldName_example",
        valueType: "String",
        value: null,
      },
    ],
    subsidiary: "subsidiary_example",
    totalOutstandingAmount: 3.14,
    openAmount: 3.14,
    overdueAmount: 3.14,
    pendingPaymentAmount: 3.14,
    paidAmount: 3.14,
  },
  
  customerId: "62ECB020842930cc01FFCCfe",
};

const data = await apiInstance.updateCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomerRequest** | **UpdateCustomerRequest**|  |
 **customerId** | [**string**] |  | defaults to undefined


### Return type

**UpdateCustomerResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


