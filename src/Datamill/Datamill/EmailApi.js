/**
 * /data.mill for applications
 * **&#47;data.mill for applications** is the most versatile and powerful API for all aspects of data quality in your business application.  Use **&#47;data.mill** to check, correct and enrich personal data and business information. The internationally applicable functions can be integrated easily into existing applications, whether desktop, online or mobile and thus enable you to professionally improve your customer or supplier database, directly in your system. Due to **&#47;data.mill**'s pay-per-use credit model there are no setup fees or fixed monthly subscription fees.  **&#47;data.mill** is constantly evolving and upgraded with the latest technology and data services available on the market. 
 *
 * OpenAPI spec version: 1.6.4
 * Contact: info@datamill.solutions
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Datamill/ApiClient', 'Datamill/Datamill/EmailDomainCheckResponse', 'Datamill/Datamill/EmailExtendedCheckResponse', 'Datamill/Datamill/EmailSyntaxCheckResponse', 'Datamill/Datamill/ErrorForbidden', 'Datamill/Datamill/ErrorIncorrectParameters', 'Datamill/Datamill/ErrorInternalError', 'Datamill/Datamill/ErrorMissingParameters', 'Datamill/Datamill/ErrorNotAllowed', 'Datamill/Datamill/ErrorNotFound', 'Datamill/Datamill/ErrorQuotaExceeded', 'Datamill/Datamill/ErrorServiceUnavailable', 'Datamill/Datamill/ErrorUnauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Datamill/EmailDomainCheckResponse'), require('../Datamill/EmailExtendedCheckResponse'), require('../Datamill/EmailSyntaxCheckResponse'), require('../Datamill/ErrorForbidden'), require('../Datamill/ErrorIncorrectParameters'), require('../Datamill/ErrorInternalError'), require('../Datamill/ErrorMissingParameters'), require('../Datamill/ErrorNotAllowed'), require('../Datamill/ErrorNotFound'), require('../Datamill/ErrorQuotaExceeded'), require('../Datamill/ErrorServiceUnavailable'), require('../Datamill/ErrorUnauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.datamill-js-client) {
      root.datamill-js-client = {};
    }
    root.datamill-js-client.EmailApi = factory(root.datamill-js-client.ApiClient, root.datamill-js-client.EmailDomainCheckResponse, root.datamill-js-client.EmailExtendedCheckResponse, root.datamill-js-client.EmailSyntaxCheckResponse, root.datamill-js-client.ErrorForbidden, root.datamill-js-client.ErrorIncorrectParameters, root.datamill-js-client.ErrorInternalError, root.datamill-js-client.ErrorMissingParameters, root.datamill-js-client.ErrorNotAllowed, root.datamill-js-client.ErrorNotFound, root.datamill-js-client.ErrorQuotaExceeded, root.datamill-js-client.ErrorServiceUnavailable, root.datamill-js-client.ErrorUnauthorized);
  }
}(this, function(ApiClient, EmailDomainCheckResponse, EmailExtendedCheckResponse, EmailSyntaxCheckResponse, ErrorForbidden, ErrorIncorrectParameters, ErrorInternalError, ErrorMissingParameters, ErrorNotAllowed, ErrorNotFound, ErrorQuotaExceeded, ErrorServiceUnavailable, ErrorUnauthorized) {
  'use strict';

  /**
   * Email service.
   * @module Datamill/Datamill/EmailApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EmailApi. 
   * @alias module:Datamill/Datamill/EmailApi
   * @class
   * @param {module:Datamill/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:Datamill/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkEmailDomain operation.
     * @callback module:Datamill/Datamill/EmailApi~checkEmailDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:Datamill/Datamill/EmailDomainCheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check email syntax and mail server domain
     * Checks the spelling of an email address to detect typos and spelling errors. In addition if the email address has a valid syntax its mail server is determined and checked for existence. The mail server itself will be compared with a list of disposable providers to detect addresses with a short lifetime. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} email The email address to be checked
     * @param {module:Datamill/Datamill/EmailApi~checkEmailDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Datamill/Datamill/EmailDomainCheckResponse}
     */
    this.checkEmailDomain = function(license, guid, email, callback) {
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling checkEmailDomain");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling checkEmailDomain");
      }

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw new Error("Missing the required parameter 'email' when calling checkEmailDomain");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'license': license,
        'guid': guid,
        'email': email
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = EmailDomainCheckResponse;

      return this.apiClient.callApi(
        '/email/domain/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkEmailMailbox operation.
     * @callback module:Datamill/Datamill/EmailApi~checkEmailMailboxCallback
     * @param {String} error Error message, if any.
     * @param {module:Datamill/Datamill/EmailExtendedCheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check email syntax, mail server domain and mailbox itself
     * Checks the spelling of an email address to detect typos and spelling errors. If the email address has a valid syntax its mail server is determined and checked for existence. The mail server itself will be compared with a list of disposable providers to detect addresses with a short lifetime. Additionally the mail server will be checked if an email for the given mailbox can be received. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} email The email address to be checked
     * @param {module:Datamill/Datamill/EmailApi~checkEmailMailboxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Datamill/Datamill/EmailExtendedCheckResponse}
     */
    this.checkEmailMailbox = function(license, guid, email, callback) {
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling checkEmailMailbox");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling checkEmailMailbox");
      }

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw new Error("Missing the required parameter 'email' when calling checkEmailMailbox");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'license': license,
        'guid': guid,
        'email': email
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = EmailExtendedCheckResponse;

      return this.apiClient.callApi(
        '/email/extended/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkEmailSyntax operation.
     * @callback module:Datamill/Datamill/EmailApi~checkEmailSyntaxCallback
     * @param {String} error Error message, if any.
     * @param {module:Datamill/Datamill/EmailSyntaxCheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check email syntax
     * Checks the spelling of an email address to detect typos and spelling errors. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} email The email address to be checked
     * @param {module:Datamill/Datamill/EmailApi~checkEmailSyntaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Datamill/Datamill/EmailSyntaxCheckResponse}
     */
    this.checkEmailSyntax = function(license, guid, email, callback) {
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling checkEmailSyntax");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling checkEmailSyntax");
      }

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw new Error("Missing the required parameter 'email' when calling checkEmailSyntax");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'license': license,
        'guid': guid,
        'email': email
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = EmailSyntaxCheckResponse;

      return this.apiClient.callApi(
        '/email/syntax/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
