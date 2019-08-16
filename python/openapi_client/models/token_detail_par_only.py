# coding: utf-8

"""
    MDES for Merchants

    The MDES APIs are designed as RPC style stateless web services where each API endpoint represents an operation to be performed.  All request and response payloads are sent in the JSON (JavaScript Object Notation) data-interchange format. Each endpoint in the API specifies the HTTP Method used to access it. All strings in request and response objects are to be UTF-8 encoded.  Each API URI includes the major and minor version of API that it conforms to.  This will allow multiple concurrent versions of the API to be deployed simultaneously. <br> __Authentication__ Mastercard uses OAuth 1.0a with body hash extension for authenticating the API clients. This requires every request that you send to  Mastercard to be signed with an RSA private key. A private-public RSA key pair must be generated consisting of: <br> 1 . A private key for the OAuth signature for API requests. It is recommended to keep the private key in a password-protected or hardware keystore. <br> 2. A public key is shared with Mastercard during the project setup process through either a certificate signing request (CSR) or the API Key Generator. Mastercard will use the public key to verify the OAuth signature that is provided on every API call.<br>  An OAUTH1.0a signer library is available on [GitHub](https://github.com/Mastercard/oauth1-signer-java) <br>  __Encryption__<br>  All communications between Issuer web service and the Mastercard gateway is encrypted using TLS. <br> __Additional Encryption of Sensitive Data__ In addition to the OAuth authentication, when using MDES Digital Enablement Service, any PCI sensitive and all account holder Personally Identifiable Information (PII) data must be encrypted. This requirement applies to the API fields containing encryptedData. Sensitive data is encrypted using a symmetric session (one-time-use) key. The symmetric session key is then wrapped with an RSA Public Key supplied by Mastercard during API setup phase (the Customer Encryption Key). <br>  Java Client Encryption Library available on [GitHub](https://github.com/Mastercard/client-encryption-java)   # noqa: E501

    The version of the OpenAPI document: 1.2.9
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class TokenDetailPAROnly(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'token_unique_reference': 'str',
        'public_key_fingerprint': 'str',
        'encrypted_key': 'str',
        'oaep_hashing_algorithm': 'str',
        'iv': 'str',
        'encrypted_data': 'TokenDetailDataPAROnly'
    }

    attribute_map = {
        'token_unique_reference': 'tokenUniqueReference',
        'public_key_fingerprint': 'publicKeyFingerprint',
        'encrypted_key': 'encryptedKey',
        'oaep_hashing_algorithm': 'oaepHashingAlgorithm',
        'iv': 'iv',
        'encrypted_data': 'encryptedData'
    }

    def __init__(self, token_unique_reference=None, public_key_fingerprint=None, encrypted_key=None, oaep_hashing_algorithm=None, iv=None, encrypted_data=None):  # noqa: E501
        """TokenDetailPAROnly - a model defined in OpenAPI"""  # noqa: E501

        self._token_unique_reference = None
        self._public_key_fingerprint = None
        self._encrypted_key = None
        self._oaep_hashing_algorithm = None
        self._iv = None
        self._encrypted_data = None
        self.discriminator = None

        if token_unique_reference is not None:
            self.token_unique_reference = token_unique_reference
        if public_key_fingerprint is not None:
            self.public_key_fingerprint = public_key_fingerprint
        if encrypted_key is not None:
            self.encrypted_key = encrypted_key
        if oaep_hashing_algorithm is not None:
            self.oaep_hashing_algorithm = oaep_hashing_algorithm
        if iv is not None:
            self.iv = iv
        if encrypted_data is not None:
            self.encrypted_data = encrypted_data

    @property
    def token_unique_reference(self):
        """Gets the token_unique_reference of this TokenDetailPAROnly.  # noqa: E501

        Globally unique identifier for the Token, as assigned by MDES.<br>     __Max Length:64__   # noqa: E501

        :return: The token_unique_reference of this TokenDetailPAROnly.  # noqa: E501
        :rtype: str
        """
        return self._token_unique_reference

    @token_unique_reference.setter
    def token_unique_reference(self, token_unique_reference):
        """Sets the token_unique_reference of this TokenDetailPAROnly.

        Globally unique identifier for the Token, as assigned by MDES.<br>     __Max Length:64__   # noqa: E501

        :param token_unique_reference: The token_unique_reference of this TokenDetailPAROnly.  # noqa: E501
        :type: str
        """

        self._token_unique_reference = token_unique_reference

    @property
    def public_key_fingerprint(self):
        """Gets the public_key_fingerprint of this TokenDetailPAROnly.  # noqa: E501

        The certificate fingerprint identifying the public key used to encrypt the ephemeral AES key.<br>     __Max Length:64__ Hex-encoded data (case-insensitive).   # noqa: E501

        :return: The public_key_fingerprint of this TokenDetailPAROnly.  # noqa: E501
        :rtype: str
        """
        return self._public_key_fingerprint

    @public_key_fingerprint.setter
    def public_key_fingerprint(self, public_key_fingerprint):
        """Sets the public_key_fingerprint of this TokenDetailPAROnly.

        The certificate fingerprint identifying the public key used to encrypt the ephemeral AES key.<br>     __Max Length:64__ Hex-encoded data (case-insensitive).   # noqa: E501

        :param public_key_fingerprint: The public_key_fingerprint of this TokenDetailPAROnly.  # noqa: E501
        :type: str
        """

        self._public_key_fingerprint = public_key_fingerprint

    @property
    def encrypted_key(self):
        """Gets the encrypted_key of this TokenDetailPAROnly.  # noqa: E501

        One-time use AES key encrypted by the MasterCard public key (as identified by 'publicKeyFingerprint') using the OAEP or RSA Encryption Standard PKCS #1 v1.5 scheme (depending on the value of 'oaepHashingAlgorithm'. Requirement is for a 128-bit key (with 256-bit key supported as an option).<br>     __Max Length:512__   # noqa: E501

        :return: The encrypted_key of this TokenDetailPAROnly.  # noqa: E501
        :rtype: str
        """
        return self._encrypted_key

    @encrypted_key.setter
    def encrypted_key(self, encrypted_key):
        """Sets the encrypted_key of this TokenDetailPAROnly.

        One-time use AES key encrypted by the MasterCard public key (as identified by 'publicKeyFingerprint') using the OAEP or RSA Encryption Standard PKCS #1 v1.5 scheme (depending on the value of 'oaepHashingAlgorithm'. Requirement is for a 128-bit key (with 256-bit key supported as an option).<br>     __Max Length:512__   # noqa: E501

        :param encrypted_key: The encrypted_key of this TokenDetailPAROnly.  # noqa: E501
        :type: str
        """

        self._encrypted_key = encrypted_key

    @property
    def oaep_hashing_algorithm(self):
        """Gets the oaep_hashing_algorithm of this TokenDetailPAROnly.  # noqa: E501

        Hashing algorithm used with the OAEP scheme. If omitted, then the RSA Encryption Standard PKCS #1 v1.5 will be used. Must be either 'SHA256' (Use the SHA-256 algorithm) or 'SHA512' (Use the SHA-512 algorithm).<br>     __Max Length:6__   # noqa: E501

        :return: The oaep_hashing_algorithm of this TokenDetailPAROnly.  # noqa: E501
        :rtype: str
        """
        return self._oaep_hashing_algorithm

    @oaep_hashing_algorithm.setter
    def oaep_hashing_algorithm(self, oaep_hashing_algorithm):
        """Sets the oaep_hashing_algorithm of this TokenDetailPAROnly.

        Hashing algorithm used with the OAEP scheme. If omitted, then the RSA Encryption Standard PKCS #1 v1.5 will be used. Must be either 'SHA256' (Use the SHA-256 algorithm) or 'SHA512' (Use the SHA-512 algorithm).<br>     __Max Length:6__   # noqa: E501

        :param oaep_hashing_algorithm: The oaep_hashing_algorithm of this TokenDetailPAROnly.  # noqa: E501
        :type: str
        """

        self._oaep_hashing_algorithm = oaep_hashing_algorithm

    @property
    def iv(self):
        """Gets the iv of this TokenDetailPAROnly.  # noqa: E501

        It is recommended to supply a random initialization vector when encrypting the data using the one-time use AES key. Must be exactly 16 bytes (32 character hex string) to match the block size. Hex-encoded data (case-insensitive).  __Max Length:32__   # noqa: E501

        :return: The iv of this TokenDetailPAROnly.  # noqa: E501
        :rtype: str
        """
        return self._iv

    @iv.setter
    def iv(self, iv):
        """Sets the iv of this TokenDetailPAROnly.

        It is recommended to supply a random initialization vector when encrypting the data using the one-time use AES key. Must be exactly 16 bytes (32 character hex string) to match the block size. Hex-encoded data (case-insensitive).  __Max Length:32__   # noqa: E501

        :param iv: The iv of this TokenDetailPAROnly.  # noqa: E501
        :type: str
        """

        self._iv = iv

    @property
    def encrypted_data(self):
        """Gets the encrypted_data of this TokenDetailPAROnly.  # noqa: E501


        :return: The encrypted_data of this TokenDetailPAROnly.  # noqa: E501
        :rtype: TokenDetailDataPAROnly
        """
        return self._encrypted_data

    @encrypted_data.setter
    def encrypted_data(self, encrypted_data):
        """Sets the encrypted_data of this TokenDetailPAROnly.


        :param encrypted_data: The encrypted_data of this TokenDetailPAROnly.  # noqa: E501
        :type: TokenDetailDataPAROnly
        """

        self._encrypted_data = encrypted_data

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, TokenDetailPAROnly):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
