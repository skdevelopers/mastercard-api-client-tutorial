/**
 * MDES for Merchants
 * The MDES APIs are designed as RPC style stateless web services where each API endpoint represents an operation to be performed.  All request and response payloads are sent in the JSON (JavaScript Object Notation) data-interchange format. Each endpoint in the API specifies the HTTP Method used to access it. All strings in request and response objects are to be UTF-8 encoded.  Each API URI includes the major and minor version of API that it conforms to.  This will allow multiple concurrent versions of the API to be deployed simultaneously. <br> __Authentication__ Mastercard uses OAuth 1.0a with body hash extension for authenticating the API clients. This requires every request that you send to  Mastercard to be signed with an RSA private key. A private-public RSA key pair must be generated consisting of: <br> 1 . A private key for the OAuth signature for API requests. It is recommended to keep the private key in a password-protected or hardware keystore. <br> 2. A public key is shared with Mastercard during the project setup process through either a certificate signing request (CSR) or the API Key Generator. Mastercard will use the public key to verify the OAuth signature that is provided on every API call.<br>  An OAUTH1.0a signer library is available on [GitHub](https://github.com/Mastercard/oauth1-signer-java) <br>  __Encryption__<br>  All communications between Issuer web service and the Mastercard gateway is encrypted using TLS. <br> __Additional Encryption of Sensitive Data__ In addition to the OAuth authentication, when using MDES Digital Enablement Service, any PCI sensitive and all account holder Personally Identifiable Information (PII) data must be encrypted. This requirement applies to the API fields containing encryptedData. Sensitive data is encrypted using a symmetric session (one-time-use) key. The symmetric session key is then wrapped with an RSA Public Key supplied by Mastercard during API setup phase (the Customer Encryption Key). <br>  Java Client Encryption Library available on [GitHub](https://github.com/Mastercard/client-encryption-java) 
 *
 * The version of the OpenAPI document: 1.2.9
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.1.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetDigitalAssetsEncryptedData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetDigitalAssetsEncryptedData'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesForMerchants) {
      root.MdesForMerchants = {};
    }
    root.MdesForMerchants.GetDigitalAssetsRequestSchemaEncryptedPayload = factory(root.MdesForMerchants.ApiClient, root.MdesForMerchants.GetDigitalAssetsEncryptedData);
  }
}(this, function(ApiClient, GetDigitalAssetsEncryptedData) {
  'use strict';



  /**
   * The GetDigitalAssetsRequestSchemaEncryptedPayload model module.
   * @module model/GetDigitalAssetsRequestSchemaEncryptedPayload
   * @version 1.2.9
   */

  /**
   * Constructs a new <code>GetDigitalAssetsRequestSchemaEncryptedPayload</code>.
   * @alias module:model/GetDigitalAssetsRequestSchemaEncryptedPayload
   * @class
   * @param publicKeyFingerprint {String} The fingerpint of the public key used to encrypt the ephemeral AES key. __Max Length:64__ 
   * @param encryptedKey {String} One-time use AES key encrypted by the Mastercard public key (as identified by publicKeyFingerprint) using the OEAP or PKCS#1 v1.5 scheme (depending on the value of oeapHashingAlgorithm.) __Max Length:512__ 
   * @param encryptedData {module:model/GetDigitalAssetsEncryptedData} 
   */
  var exports = function(publicKeyFingerprint, encryptedKey, encryptedData) {
    var _this = this;

    _this['publicKeyFingerprint'] = publicKeyFingerprint;
    _this['encryptedKey'] = encryptedKey;
    _this['encryptedData'] = encryptedData;
  };

  /**
   * Constructs a <code>GetDigitalAssetsRequestSchemaEncryptedPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDigitalAssetsRequestSchemaEncryptedPayload} obj Optional instance to populate.
   * @return {module:model/GetDigitalAssetsRequestSchemaEncryptedPayload} The populated <code>GetDigitalAssetsRequestSchemaEncryptedPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('publicKeyFingerprint')) {
        obj['publicKeyFingerprint'] = ApiClient.convertToType(data['publicKeyFingerprint'], 'String');
      }
      if (data.hasOwnProperty('encryptedKey')) {
        obj['encryptedKey'] = ApiClient.convertToType(data['encryptedKey'], 'String');
      }
      if (data.hasOwnProperty('oaepHashingAlgorithm')) {
        obj['oaepHashingAlgorithm'] = ApiClient.convertToType(data['oaepHashingAlgorithm'], 'String');
      }
      if (data.hasOwnProperty('encryptedData')) {
        obj['encryptedData'] = GetDigitalAssetsEncryptedData.constructFromObject(data['encryptedData']);
      }
    }
    return obj;
  }

  /**
   * The fingerpint of the public key used to encrypt the ephemeral AES key. __Max Length:64__ 
   * @member {String} publicKeyFingerprint
   */
  exports.prototype['publicKeyFingerprint'] = undefined;
  /**
   * One-time use AES key encrypted by the Mastercard public key (as identified by publicKeyFingerprint) using the OEAP or PKCS#1 v1.5 scheme (depending on the value of oeapHashingAlgorithm.) __Max Length:512__ 
   * @member {String} encryptedKey
   */
  exports.prototype['encryptedKey'] = undefined;
  /**
   * Hashing algorithm used with the OAEP scheme. Must be either SHA256 or SHA512. 
   * @member {String} oaepHashingAlgorithm
   */
  exports.prototype['oaepHashingAlgorithm'] = undefined;
  /**
   * @member {module:model/GetDigitalAssetsEncryptedData} encryptedData
   */
  exports.prototype['encryptedData'] = undefined;



  return exports;
}));


