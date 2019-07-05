/**
 * MDES for Merchants
 * The MDES APIs are designed as RPC style stateless web services where each API endpoint represents an operation to be performed.  All request and response payloads are sent in the JSON (JavaScript Object Notation) data-interchange format. Each endpoint in the API specifies the HTTP Method used to access it. All strings in request and response objects are to be UTF-8 encoded.  Each API URI includes the major and minor version of API that it conforms to.  This will allow multiple concurrent versions of the API to be deployed simultaneously.  
 *
 * OpenAPI spec version: 1.2.7
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AssetResponseSchema', 'model/AuthenticationMethods', 'model/BillingAddress', 'model/CardInfo', 'model/CardInfoData', 'model/DecisioningData', 'model/DeleteRequestSchema', 'model/DeleteResponseSchema', 'model/EncryptedPayload', 'model/EncryptedPayloadTransact', 'model/Error', 'model/ErrorsResponse', 'model/GetTaskStatusRequestSchema', 'model/GetTaskStatusResponseSchema', 'model/GetTokenRequestSchema', 'model/GetTokenResponseSchema', 'model/MediaContent', 'model/NotifyTokenEncryptedPayload', 'model/NotifyTokenUpdatedRequestSchema', 'model/NotifyTokenUpdatedResponseSchema', 'model/ProductConfig', 'model/SearchTokensRequestSchema', 'model/SearchTokensResponseSchema', 'model/SuspendRequestSchema', 'model/SuspendResponseSchema', 'model/Token', 'model/TokenDetail', 'model/TokenDetailData', 'model/TokenDetailDataPAR', 'model/TokenDetailTokenizeResponse', 'model/TokenForLCM', 'model/TokenInfo', 'model/TokenizeRequestSchema', 'model/TokenizeResponseSchema', 'model/TransactEncryptedData', 'model/TransactError', 'model/TransactRequestSchema', 'model/TransactResponseSchema', 'model/UnSuspendRequestSchema', 'model/UnSuspendResponseSchema', 'api/DeleteApi', 'api/GetAssetApi', 'api/GetTaskStatusApi', 'api/GetTokenApi', 'api/NotifyTokenUpdatedApi', 'api/SearchTokensApi', 'api/SuspendApi', 'api/TokenizeApi', 'api/TransactApi', 'api/UnsuspendApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AssetResponseSchema'), require('./model/AuthenticationMethods'), require('./model/BillingAddress'), require('./model/CardInfo'), require('./model/CardInfoData'), require('./model/DecisioningData'), require('./model/DeleteRequestSchema'), require('./model/DeleteResponseSchema'), require('./model/EncryptedPayload'), require('./model/EncryptedPayloadTransact'), require('./model/Error'), require('./model/ErrorsResponse'), require('./model/GetTaskStatusRequestSchema'), require('./model/GetTaskStatusResponseSchema'), require('./model/GetTokenRequestSchema'), require('./model/GetTokenResponseSchema'), require('./model/MediaContent'), require('./model/NotifyTokenEncryptedPayload'), require('./model/NotifyTokenUpdatedRequestSchema'), require('./model/NotifyTokenUpdatedResponseSchema'), require('./model/ProductConfig'), require('./model/SearchTokensRequestSchema'), require('./model/SearchTokensResponseSchema'), require('./model/SuspendRequestSchema'), require('./model/SuspendResponseSchema'), require('./model/Token'), require('./model/TokenDetail'), require('./model/TokenDetailData'), require('./model/TokenDetailDataPAR'), require('./model/TokenDetailTokenizeResponse'), require('./model/TokenForLCM'), require('./model/TokenInfo'), require('./model/TokenizeRequestSchema'), require('./model/TokenizeResponseSchema'), require('./model/TransactEncryptedData'), require('./model/TransactError'), require('./model/TransactRequestSchema'), require('./model/TransactResponseSchema'), require('./model/UnSuspendRequestSchema'), require('./model/UnSuspendResponseSchema'), require('./api/DeleteApi'), require('./api/GetAssetApi'), require('./api/GetTaskStatusApi'), require('./api/GetTokenApi'), require('./api/NotifyTokenUpdatedApi'), require('./api/SearchTokensApi'), require('./api/SuspendApi'), require('./api/TokenizeApi'), require('./api/TransactApi'), require('./api/UnsuspendApi'));
  }
}(function(ApiClient, AssetResponseSchema, AuthenticationMethods, BillingAddress, CardInfo, CardInfoData, DecisioningData, DeleteRequestSchema, DeleteResponseSchema, EncryptedPayload, EncryptedPayloadTransact, Error, ErrorsResponse, GetTaskStatusRequestSchema, GetTaskStatusResponseSchema, GetTokenRequestSchema, GetTokenResponseSchema, MediaContent, NotifyTokenEncryptedPayload, NotifyTokenUpdatedRequestSchema, NotifyTokenUpdatedResponseSchema, ProductConfig, SearchTokensRequestSchema, SearchTokensResponseSchema, SuspendRequestSchema, SuspendResponseSchema, Token, TokenDetail, TokenDetailData, TokenDetailDataPAR, TokenDetailTokenizeResponse, TokenForLCM, TokenInfo, TokenizeRequestSchema, TokenizeResponseSchema, TransactEncryptedData, TransactError, TransactRequestSchema, TransactResponseSchema, UnSuspendRequestSchema, UnSuspendResponseSchema, DeleteApi, GetAssetApi, GetTaskStatusApi, GetTokenApi, NotifyTokenUpdatedApi, SearchTokensApi, SuspendApi, TokenizeApi, TransactApi, UnsuspendApi) {
  'use strict';

  /**
   * The_MDES_APIs_are_designed_as_RPC_style_stateless_web_services_where_each_API_endpoint_represents_an_operation_to_be_performed___All_request_and_response_payloads_are_sent_in_the_JSON__JavaScript_Object_Notation_data_interchange_format__Each_endpoint_in_the_API_specifies_the_HTTP_Method_used_to_access_it__All_strings_in_request_and_response_objects_are_to_be_UTF_8_encoded___Each_API_URI_includes_the_major_and_minor_version_of_API_that_it_conforms_to___This_will_allow_multiple_concurrent_versions_of_the_API_to_be_deployed_simultaneously__.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MdesForMerchants = require('index'); // See note below*.
   * var xxxSvc = new MdesForMerchants.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MdesForMerchants.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MdesForMerchants.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MdesForMerchants.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.7
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AssetResponseSchema model constructor.
     * @property {module:model/AssetResponseSchema}
     */
    AssetResponseSchema: AssetResponseSchema,
    /**
     * The AuthenticationMethods model constructor.
     * @property {module:model/AuthenticationMethods}
     */
    AuthenticationMethods: AuthenticationMethods,
    /**
     * The BillingAddress model constructor.
     * @property {module:model/BillingAddress}
     */
    BillingAddress: BillingAddress,
    /**
     * The CardInfo model constructor.
     * @property {module:model/CardInfo}
     */
    CardInfo: CardInfo,
    /**
     * The CardInfoData model constructor.
     * @property {module:model/CardInfoData}
     */
    CardInfoData: CardInfoData,
    /**
     * The DecisioningData model constructor.
     * @property {module:model/DecisioningData}
     */
    DecisioningData: DecisioningData,
    /**
     * The DeleteRequestSchema model constructor.
     * @property {module:model/DeleteRequestSchema}
     */
    DeleteRequestSchema: DeleteRequestSchema,
    /**
     * The DeleteResponseSchema model constructor.
     * @property {module:model/DeleteResponseSchema}
     */
    DeleteResponseSchema: DeleteResponseSchema,
    /**
     * The EncryptedPayload model constructor.
     * @property {module:model/EncryptedPayload}
     */
    EncryptedPayload: EncryptedPayload,
    /**
     * The EncryptedPayloadTransact model constructor.
     * @property {module:model/EncryptedPayloadTransact}
     */
    EncryptedPayloadTransact: EncryptedPayloadTransact,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorsResponse model constructor.
     * @property {module:model/ErrorsResponse}
     */
    ErrorsResponse: ErrorsResponse,
    /**
     * The GetTaskStatusRequestSchema model constructor.
     * @property {module:model/GetTaskStatusRequestSchema}
     */
    GetTaskStatusRequestSchema: GetTaskStatusRequestSchema,
    /**
     * The GetTaskStatusResponseSchema model constructor.
     * @property {module:model/GetTaskStatusResponseSchema}
     */
    GetTaskStatusResponseSchema: GetTaskStatusResponseSchema,
    /**
     * The GetTokenRequestSchema model constructor.
     * @property {module:model/GetTokenRequestSchema}
     */
    GetTokenRequestSchema: GetTokenRequestSchema,
    /**
     * The GetTokenResponseSchema model constructor.
     * @property {module:model/GetTokenResponseSchema}
     */
    GetTokenResponseSchema: GetTokenResponseSchema,
    /**
     * The MediaContent model constructor.
     * @property {module:model/MediaContent}
     */
    MediaContent: MediaContent,
    /**
     * The NotifyTokenEncryptedPayload model constructor.
     * @property {module:model/NotifyTokenEncryptedPayload}
     */
    NotifyTokenEncryptedPayload: NotifyTokenEncryptedPayload,
    /**
     * The NotifyTokenUpdatedRequestSchema model constructor.
     * @property {module:model/NotifyTokenUpdatedRequestSchema}
     */
    NotifyTokenUpdatedRequestSchema: NotifyTokenUpdatedRequestSchema,
    /**
     * The NotifyTokenUpdatedResponseSchema model constructor.
     * @property {module:model/NotifyTokenUpdatedResponseSchema}
     */
    NotifyTokenUpdatedResponseSchema: NotifyTokenUpdatedResponseSchema,
    /**
     * The ProductConfig model constructor.
     * @property {module:model/ProductConfig}
     */
    ProductConfig: ProductConfig,
    /**
     * The SearchTokensRequestSchema model constructor.
     * @property {module:model/SearchTokensRequestSchema}
     */
    SearchTokensRequestSchema: SearchTokensRequestSchema,
    /**
     * The SearchTokensResponseSchema model constructor.
     * @property {module:model/SearchTokensResponseSchema}
     */
    SearchTokensResponseSchema: SearchTokensResponseSchema,
    /**
     * The SuspendRequestSchema model constructor.
     * @property {module:model/SuspendRequestSchema}
     */
    SuspendRequestSchema: SuspendRequestSchema,
    /**
     * The SuspendResponseSchema model constructor.
     * @property {module:model/SuspendResponseSchema}
     */
    SuspendResponseSchema: SuspendResponseSchema,
    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token: Token,
    /**
     * The TokenDetail model constructor.
     * @property {module:model/TokenDetail}
     */
    TokenDetail: TokenDetail,
    /**
     * The TokenDetailData model constructor.
     * @property {module:model/TokenDetailData}
     */
    TokenDetailData: TokenDetailData,
    /**
     * The TokenDetailDataPAR model constructor.
     * @property {module:model/TokenDetailDataPAR}
     */
    TokenDetailDataPAR: TokenDetailDataPAR,
    /**
     * The TokenDetailTokenizeResponse model constructor.
     * @property {module:model/TokenDetailTokenizeResponse}
     */
    TokenDetailTokenizeResponse: TokenDetailTokenizeResponse,
    /**
     * The TokenForLCM model constructor.
     * @property {module:model/TokenForLCM}
     */
    TokenForLCM: TokenForLCM,
    /**
     * The TokenInfo model constructor.
     * @property {module:model/TokenInfo}
     */
    TokenInfo: TokenInfo,
    /**
     * The TokenizeRequestSchema model constructor.
     * @property {module:model/TokenizeRequestSchema}
     */
    TokenizeRequestSchema: TokenizeRequestSchema,
    /**
     * The TokenizeResponseSchema model constructor.
     * @property {module:model/TokenizeResponseSchema}
     */
    TokenizeResponseSchema: TokenizeResponseSchema,
    /**
     * The TransactEncryptedData model constructor.
     * @property {module:model/TransactEncryptedData}
     */
    TransactEncryptedData: TransactEncryptedData,
    /**
     * The TransactError model constructor.
     * @property {module:model/TransactError}
     */
    TransactError: TransactError,
    /**
     * The TransactRequestSchema model constructor.
     * @property {module:model/TransactRequestSchema}
     */
    TransactRequestSchema: TransactRequestSchema,
    /**
     * The TransactResponseSchema model constructor.
     * @property {module:model/TransactResponseSchema}
     */
    TransactResponseSchema: TransactResponseSchema,
    /**
     * The UnSuspendRequestSchema model constructor.
     * @property {module:model/UnSuspendRequestSchema}
     */
    UnSuspendRequestSchema: UnSuspendRequestSchema,
    /**
     * The UnSuspendResponseSchema model constructor.
     * @property {module:model/UnSuspendResponseSchema}
     */
    UnSuspendResponseSchema: UnSuspendResponseSchema,
    /**
     * The DeleteApi service constructor.
     * @property {module:api/DeleteApi}
     */
    DeleteApi: DeleteApi,
    /**
     * The GetAssetApi service constructor.
     * @property {module:api/GetAssetApi}
     */
    GetAssetApi: GetAssetApi,
    /**
     * The GetTaskStatusApi service constructor.
     * @property {module:api/GetTaskStatusApi}
     */
    GetTaskStatusApi: GetTaskStatusApi,
    /**
     * The GetTokenApi service constructor.
     * @property {module:api/GetTokenApi}
     */
    GetTokenApi: GetTokenApi,
    /**
     * The NotifyTokenUpdatedApi service constructor.
     * @property {module:api/NotifyTokenUpdatedApi}
     */
    NotifyTokenUpdatedApi: NotifyTokenUpdatedApi,
    /**
     * The SearchTokensApi service constructor.
     * @property {module:api/SearchTokensApi}
     */
    SearchTokensApi: SearchTokensApi,
    /**
     * The SuspendApi service constructor.
     * @property {module:api/SuspendApi}
     */
    SuspendApi: SuspendApi,
    /**
     * The TokenizeApi service constructor.
     * @property {module:api/TokenizeApi}
     */
    TokenizeApi: TokenizeApi,
    /**
     * The TransactApi service constructor.
     * @property {module:api/TransactApi}
     */
    TransactApi: TransactApi,
    /**
     * The UnsuspendApi service constructor.
     * @property {module:api/UnsuspendApi}
     */
    UnsuspendApi: UnsuspendApi
  };

  return exports;
}));