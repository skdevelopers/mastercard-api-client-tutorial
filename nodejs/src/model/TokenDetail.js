/**
 * MDES for Merchants
 * The MDES APIs are designed as RPC style stateless web services where each API endpoint represents an operation to be performed.  All request and response payloads are sent in the JSON (JavaScript Object Notation) data-interchange format. Each endpoint in the API specifies the HTTP Method used to access it. All strings in request and response objects are to be UTF-8 encoded.  Each API URI includes the major and minor version of API that it conforms to.  This will allow multiple concurrent versions of the API to be deployed simultaneously.  
 *
 * The version of the OpenAPI document: 1.2.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TokenDetailData from './TokenDetailData';

/**
 * The TokenDetail model module.
 * @module model/TokenDetail
 * @version 1.2.7
 */
class TokenDetail {
    /**
     * Constructs a new <code>TokenDetail</code>.
     * @alias module:model/TokenDetail
     */
    constructor() { 
        
        TokenDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenDetail} obj Optional instance to populate.
     * @return {module:model/TokenDetail} The populated <code>TokenDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenDetail();

            if (data.hasOwnProperty('tokenUniqueReference')) {
                obj['tokenUniqueReference'] = ApiClient.convertToType(data['tokenUniqueReference'], 'String');
            }
            if (data.hasOwnProperty('publicKeyFingerprint')) {
                obj['publicKeyFingerprint'] = ApiClient.convertToType(data['publicKeyFingerprint'], 'String');
            }
            if (data.hasOwnProperty('encryptedKey')) {
                obj['encryptedKey'] = ApiClient.convertToType(data['encryptedKey'], 'String');
            }
            if (data.hasOwnProperty('oaepHashingAlgorithm')) {
                obj['oaepHashingAlgorithm'] = ApiClient.convertToType(data['oaepHashingAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('iv')) {
                obj['iv'] = ApiClient.convertToType(data['iv'], 'String');
            }
            if (data.hasOwnProperty('encryptedData')) {
                obj['encryptedData'] = TokenDetailData.constructFromObject(data['encryptedData']);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier for the Token, as assigned by MDES.<br>     __Max Length:64__ 
 * @member {String} tokenUniqueReference
 */
TokenDetail.prototype['tokenUniqueReference'] = undefined;

/**
 * The certificate fingerprint identifying the public key used to encrypt the ephemeral AES key.<br>     __Max Length:64__ Hex-encoded data (case-insensitive). 
 * @member {String} publicKeyFingerprint
 */
TokenDetail.prototype['publicKeyFingerprint'] = undefined;

/**
 * One-time use AES key encrypted by the MasterCard public key (as identified by 'publicKeyFingerprint') using the OAEP or RSA Encryption Standard PKCS #1 v1.5 scheme (depending on the value of 'oaepHashingAlgorithm'. Requirement is for a 128-bit key (with 256-bit key supported as an option).<br>     __Max Length:512__ 
 * @member {String} encryptedKey
 */
TokenDetail.prototype['encryptedKey'] = undefined;

/**
 * Hashing algorithm used with the OAEP scheme. If omitted, then the RSA Encryption Standard PKCS #1 v1.5 will be used. Must be either 'SHA256' (Use the SHA-256 algorithm) or 'SHA512' (Use the SHA-512 algorithm).<br>     __Max Length:6__ 
 * @member {String} oaepHashingAlgorithm
 */
TokenDetail.prototype['oaepHashingAlgorithm'] = undefined;

/**
 * It is recommended to supply a random initialization vector when encrypting the data using the one-time use AES key. Must be exactly 16 bytes (32 character hex string) to match the block size. Hex-encoded data (case-insensitive).  __Max Length:32__ 
 * @member {String} iv
 */
TokenDetail.prototype['iv'] = undefined;

/**
 * @member {module:model/TokenDetailData} encryptedData
 */
TokenDetail.prototype['encryptedData'] = undefined;






export default TokenDetail;
