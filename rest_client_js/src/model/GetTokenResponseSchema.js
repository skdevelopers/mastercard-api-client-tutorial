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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Token', 'model/TokenDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./Token'), require('./TokenDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesForMerchants) {
      root.MdesForMerchants = {};
    }
    root.MdesForMerchants.GetTokenResponseSchema = factory(root.MdesForMerchants.ApiClient, root.MdesForMerchants.Error, root.MdesForMerchants.Token, root.MdesForMerchants.TokenDetail);
  }
}(this, function(ApiClient, Error, Token, TokenDetail) {
  'use strict';




  /**
   * The GetTokenResponseSchema model module.
   * @module model/GetTokenResponseSchema
   * @version 1.2.7
   */

  /**
   * Constructs a new <code>GetTokenResponseSchema</code>.
   * @alias module:model/GetTokenResponseSchema
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>GetTokenResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTokenResponseSchema} obj Optional instance to populate.
   * @return {module:model/GetTokenResponseSchema} The populated <code>GetTokenResponseSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('responseId')) {
        obj['responseId'] = ApiClient.convertToType(data['responseId'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = Token.constructFromObject(data['token']);
      }
      if (data.hasOwnProperty('tokenDetail')) {
        obj['tokenDetail'] = TokenDetail.constructFromObject(data['tokenDetail']);
      }
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('errorDescription')) {
        obj['errorDescription'] = ApiClient.convertToType(data['errorDescription'], 'String');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = Error.constructFromObject(data['errors']);
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the response. 
   * @member {String} responseId
   */
  exports.prototype['responseId'] = undefined;
  /**
   * @member {module:model/Token} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {module:model/TokenDetail} tokenDetail
   */
  exports.prototype['tokenDetail'] = undefined;
  /**
   * __CONDITIONAL__<br> Returned in the event of and error and contains the reason the operation failed. Only use if errors object is not present.<br> __Max Length: 32__ 
   * @member {String} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * __CONDITIONAL__<br> Returned in the event of and error and contains a description of why the operation failed. Only use if errors object is not present.<br> __Max Length: 32__   
   * @member {String} errorDescription
   */
  exports.prototype['errorDescription'] = undefined;
  /**
   * @member {module:model/Error} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));

