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


class TransactEncryptedData(object):
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
        'account_number': 'str',
        'application_expiry_date': 'str',
        'pan_sequence_number': 'str',
        'track2_equivalent': 'str',
        'de48se43_data': 'str',
        'de55_data': 'str'
    }

    attribute_map = {
        'account_number': 'accountNumber',
        'application_expiry_date': 'applicationExpiryDate',
        'pan_sequence_number': 'panSequenceNumber',
        'track2_equivalent': 'track2Equivalent',
        'de48se43_data': 'de48se43Data',
        'de55_data': 'de55Data'
    }

    def __init__(self, account_number=None, application_expiry_date=None, pan_sequence_number=None, track2_equivalent=None, de48se43_data=None, de55_data=None):  # noqa: E501
        """TransactEncryptedData - a model defined in OpenAPI"""  # noqa: E501

        self._account_number = None
        self._application_expiry_date = None
        self._pan_sequence_number = None
        self._track2_equivalent = None
        self._de48se43_data = None
        self._de55_data = None
        self.discriminator = None

        if account_number is not None:
            self.account_number = account_number
        if application_expiry_date is not None:
            self.application_expiry_date = application_expiry_date
        if pan_sequence_number is not None:
            self.pan_sequence_number = pan_sequence_number
        if track2_equivalent is not None:
            self.track2_equivalent = track2_equivalent
        if de48se43_data is not None:
            self.de48se43_data = de48se43_data
        if de55_data is not None:
            self.de55_data = de55_data

    @property
    def account_number(self):
        """Gets the account_number of this TransactEncryptedData.  # noqa: E501

        The Primary Account Number for the transaction – this is the Token PAN.  <br>__Min Length: 9__ <br>__Max Length: 19__   # noqa: E501

        :return: The account_number of this TransactEncryptedData.  # noqa: E501
        :rtype: str
        """
        return self._account_number

    @account_number.setter
    def account_number(self, account_number):
        """Sets the account_number of this TransactEncryptedData.

        The Primary Account Number for the transaction – this is the Token PAN.  <br>__Min Length: 9__ <br>__Max Length: 19__   # noqa: E501

        :param account_number: The account_number of this TransactEncryptedData.  # noqa: E501
        :type: str
        """

        self._account_number = account_number

    @property
    def application_expiry_date(self):
        """Gets the application_expiry_date of this TransactEncryptedData.  # noqa: E501

        Application expiry date for the Token. Expressed in YYMMDD format.  <br> __Length: 6__   # noqa: E501

        :return: The application_expiry_date of this TransactEncryptedData.  # noqa: E501
        :rtype: str
        """
        return self._application_expiry_date

    @application_expiry_date.setter
    def application_expiry_date(self, application_expiry_date):
        """Sets the application_expiry_date of this TransactEncryptedData.

        Application expiry date for the Token. Expressed in YYMMDD format.  <br> __Length: 6__   # noqa: E501

        :param application_expiry_date: The application_expiry_date of this TransactEncryptedData.  # noqa: E501
        :type: str
        """

        self._application_expiry_date = application_expiry_date

    @property
    def pan_sequence_number(self):
        """Gets the pan_sequence_number of this TransactEncryptedData.  # noqa: E501

        Application PAN sequence number for the Token <br>  __Length: 2__   # noqa: E501

        :return: The pan_sequence_number of this TransactEncryptedData.  # noqa: E501
        :rtype: str
        """
        return self._pan_sequence_number

    @pan_sequence_number.setter
    def pan_sequence_number(self, pan_sequence_number):
        """Sets the pan_sequence_number of this TransactEncryptedData.

        Application PAN sequence number for the Token <br>  __Length: 2__   # noqa: E501

        :param pan_sequence_number: The pan_sequence_number of this TransactEncryptedData.  # noqa: E501
        :type: str
        """

        self._pan_sequence_number = pan_sequence_number

    @property
    def track2_equivalent(self):
        """Gets the track2_equivalent of this TransactEncryptedData.  # noqa: E501

        Track 2 equivalent data for the Token. Expressed according to ISO/IEC 7813, excluding start sentinel, end sentinel, and Longitudinal Redundancy Check (LRC), using hex nibble 'D' as field separator, and padded to whole bytes using one hex nibble 'F' as needed.  <br>   __Max Length: 38__   # noqa: E501

        :return: The track2_equivalent of this TransactEncryptedData.  # noqa: E501
        :rtype: str
        """
        return self._track2_equivalent

    @track2_equivalent.setter
    def track2_equivalent(self, track2_equivalent):
        """Sets the track2_equivalent of this TransactEncryptedData.

        Track 2 equivalent data for the Token. Expressed according to ISO/IEC 7813, excluding start sentinel, end sentinel, and Longitudinal Redundancy Check (LRC), using hex nibble 'D' as field separator, and padded to whole bytes using one hex nibble 'F' as needed.  <br>   __Max Length: 38__   # noqa: E501

        :param track2_equivalent: The track2_equivalent of this TransactEncryptedData.  # noqa: E501
        :type: str
        """

        self._track2_equivalent = track2_equivalent

    @property
    def de48se43_data(self):
        """Gets the de48se43_data of this TransactEncryptedData.  # noqa: E501

        Data for DE 48 Subelement 43 containing the cryptogram.<br> __Max Length: 32__   # noqa: E501

        :return: The de48se43_data of this TransactEncryptedData.  # noqa: E501
        :rtype: str
        """
        return self._de48se43_data

    @de48se43_data.setter
    def de48se43_data(self, de48se43_data):
        """Sets the de48se43_data of this TransactEncryptedData.

        Data for DE 48 Subelement 43 containing the cryptogram.<br> __Max Length: 32__   # noqa: E501

        :param de48se43_data: The de48se43_data of this TransactEncryptedData.  # noqa: E501
        :type: str
        """

        self._de48se43_data = de48se43_data

    @property
    def de55_data(self):
        """Gets the de55_data of this TransactEncryptedData.  # noqa: E501

        Data for DE 55 if present<br> __Max Length: 200__   # noqa: E501

        :return: The de55_data of this TransactEncryptedData.  # noqa: E501
        :rtype: str
        """
        return self._de55_data

    @de55_data.setter
    def de55_data(self, de55_data):
        """Sets the de55_data of this TransactEncryptedData.

        Data for DE 55 if present<br> __Max Length: 200__   # noqa: E501

        :param de55_data: The de55_data of this TransactEncryptedData.  # noqa: E501
        :type: str
        """

        self._de55_data = de55_data

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
        if not isinstance(other, TransactEncryptedData):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
