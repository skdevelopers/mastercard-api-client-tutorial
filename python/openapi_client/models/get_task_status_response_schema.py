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


class GetTaskStatusResponseSchema(object):
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
        'response_id': 'str',
        'response_host': 'str',
        'status': 'str',
        'error_code': 'str',
        'error_description': 'str',
        'errors': 'list[Error]'
    }

    attribute_map = {
        'response_id': 'responseId',
        'response_host': 'responseHost',
        'status': 'status',
        'error_code': 'errorCode',
        'error_description': 'errorDescription',
        'errors': 'errors'
    }

    def __init__(self, response_id=None, response_host=None, status=None, error_code=None, error_description=None, errors=None):  # noqa: E501
        """GetTaskStatusResponseSchema - a model defined in OpenAPI"""  # noqa: E501

        self._response_id = None
        self._response_host = None
        self._status = None
        self._error_code = None
        self._error_description = None
        self._errors = None
        self.discriminator = None

        if response_id is not None:
            self.response_id = response_id
        if response_host is not None:
            self.response_host = response_host
        if status is not None:
            self.status = status
        if error_code is not None:
            self.error_code = error_code
        if error_description is not None:
            self.error_description = error_description
        if errors is not None:
            self.errors = errors

    @property
    def response_id(self):
        """Gets the response_id of this GetTaskStatusResponseSchema.  # noqa: E501

        Unique identifier for the response.   # noqa: E501

        :return: The response_id of this GetTaskStatusResponseSchema.  # noqa: E501
        :rtype: str
        """
        return self._response_id

    @response_id.setter
    def response_id(self, response_id):
        """Sets the response_id of this GetTaskStatusResponseSchema.

        Unique identifier for the response.   # noqa: E501

        :param response_id: The response_id of this GetTaskStatusResponseSchema.  # noqa: E501
        :type: str
        """

        self._response_id = response_id

    @property
    def response_host(self):
        """Gets the response_host of this GetTaskStatusResponseSchema.  # noqa: E501

        The host that originated the request. Future calls in the same conversation may be routed to this host.   # noqa: E501

        :return: The response_host of this GetTaskStatusResponseSchema.  # noqa: E501
        :rtype: str
        """
        return self._response_host

    @response_host.setter
    def response_host(self, response_host):
        """Sets the response_host of this GetTaskStatusResponseSchema.

        The host that originated the request. Future calls in the same conversation may be routed to this host.   # noqa: E501

        :param response_host: The response_host of this GetTaskStatusResponseSchema.  # noqa: E501
        :type: str
        """

        self._response_host = response_host

    @property
    def status(self):
        """Gets the status of this GetTaskStatusResponseSchema.  # noqa: E501

        The status of the specified task. Must be either 'PENDING' (The Task has been recieved and is pending processing), 'IN_PROGRESS' (The task is currently in progress), 'COMPLETED' (The task was completed successfully) or 'FAILED' The task was processed but failed to complete successfully.     __Max Length:64__   # noqa: E501

        :return: The status of this GetTaskStatusResponseSchema.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this GetTaskStatusResponseSchema.

        The status of the specified task. Must be either 'PENDING' (The Task has been recieved and is pending processing), 'IN_PROGRESS' (The task is currently in progress), 'COMPLETED' (The task was completed successfully) or 'FAILED' The task was processed but failed to complete successfully.     __Max Length:64__   # noqa: E501

        :param status: The status of this GetTaskStatusResponseSchema.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def error_code(self):
        """Gets the error_code of this GetTaskStatusResponseSchema.  # noqa: E501

        __CONDITIONAL__<br> Returned in the event of an error and contains the reason the operation failed. Only use if errors object is not present.<br> __Max Length: 32__   # noqa: E501

        :return: The error_code of this GetTaskStatusResponseSchema.  # noqa: E501
        :rtype: str
        """
        return self._error_code

    @error_code.setter
    def error_code(self, error_code):
        """Sets the error_code of this GetTaskStatusResponseSchema.

        __CONDITIONAL__<br> Returned in the event of an error and contains the reason the operation failed. Only use if errors object is not present.<br> __Max Length: 32__   # noqa: E501

        :param error_code: The error_code of this GetTaskStatusResponseSchema.  # noqa: E501
        :type: str
        """

        self._error_code = error_code

    @property
    def error_description(self):
        """Gets the error_description of this GetTaskStatusResponseSchema.  # noqa: E501

        __CONDITIONAL__<br> Returned in the event of an error and contains a description of why the operation failed. Only use if errors object is not present.<br> __Max Length: 32__     # noqa: E501

        :return: The error_description of this GetTaskStatusResponseSchema.  # noqa: E501
        :rtype: str
        """
        return self._error_description

    @error_description.setter
    def error_description(self, error_description):
        """Sets the error_description of this GetTaskStatusResponseSchema.

        __CONDITIONAL__<br> Returned in the event of an error and contains a description of why the operation failed. Only use if errors object is not present.<br> __Max Length: 32__     # noqa: E501

        :param error_description: The error_description of this GetTaskStatusResponseSchema.  # noqa: E501
        :type: str
        """

        self._error_description = error_description

    @property
    def errors(self):
        """Gets the errors of this GetTaskStatusResponseSchema.  # noqa: E501


        :return: The errors of this GetTaskStatusResponseSchema.  # noqa: E501
        :rtype: list[Error]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this GetTaskStatusResponseSchema.


        :param errors: The errors of this GetTaskStatusResponseSchema.  # noqa: E501
        :type: list[Error]
        """

        self._errors = errors

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
        if not isinstance(other, GetTaskStatusResponseSchema):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
