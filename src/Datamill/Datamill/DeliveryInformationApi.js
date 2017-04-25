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
    define(['Datamill/ApiClient', 'Datamill/Datamill/BusinessDataUndeliverableContactsResponse', 'Datamill/Datamill/ErrorForbidden', 'Datamill/Datamill/ErrorIncorrectParameters', 'Datamill/Datamill/ErrorInternalError', 'Datamill/Datamill/ErrorMissingParameters', 'Datamill/Datamill/ErrorNotAllowed', 'Datamill/Datamill/ErrorNotFound', 'Datamill/Datamill/ErrorQuotaExceeded', 'Datamill/Datamill/ErrorServiceUnavailable', 'Datamill/Datamill/ErrorUnauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Datamill/BusinessDataUndeliverableContactsResponse'), require('../Datamill/ErrorForbidden'), require('../Datamill/ErrorIncorrectParameters'), require('../Datamill/ErrorInternalError'), require('../Datamill/ErrorMissingParameters'), require('../Datamill/ErrorNotAllowed'), require('../Datamill/ErrorNotFound'), require('../Datamill/ErrorQuotaExceeded'), require('../Datamill/ErrorServiceUnavailable'), require('../Datamill/ErrorUnauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.datamill-js-client) {
      root.datamill-js-client = {};
    }
    root.datamill-js-client.DeliveryInformationApi = factory(root.datamill-js-client.ApiClient, root.datamill-js-client.BusinessDataUndeliverableContactsResponse, root.datamill-js-client.ErrorForbidden, root.datamill-js-client.ErrorIncorrectParameters, root.datamill-js-client.ErrorInternalError, root.datamill-js-client.ErrorMissingParameters, root.datamill-js-client.ErrorNotAllowed, root.datamill-js-client.ErrorNotFound, root.datamill-js-client.ErrorQuotaExceeded, root.datamill-js-client.ErrorServiceUnavailable, root.datamill-js-client.ErrorUnauthorized);
  }
}(this, function(ApiClient, BusinessDataUndeliverableContactsResponse, ErrorForbidden, ErrorIncorrectParameters, ErrorInternalError, ErrorMissingParameters, ErrorNotAllowed, ErrorNotFound, ErrorQuotaExceeded, ErrorServiceUnavailable, ErrorUnauthorized) {
  'use strict';

  /**
   * DeliveryInformation service.
   * @module Datamill/Datamill/DeliveryInformationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DeliveryInformationApi. 
   * @alias module:Datamill/Datamill/DeliveryInformationApi
   * @class
   * @param {module:Datamill/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:Datamill/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the searchUndeliverableContact operation.
     * @callback module:Datamill/Datamill/DeliveryInformationApi~searchUndeliverableContactCallback
     * @param {String} error Error message, if any.
     * @param {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find moved and deceased contacts
     * Checks if the postal address of a person identified by its full name is invalid (moved to a new address or deceased). This function does NOT verify/check if a known postal address is still valid, instead it only checks if the person is moved to another address or is deceased and therefore a mail will result in an undeliverable state. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} firstName The person&#39;s first name
     * @param {String} lastName The person&#39;s last name
     * @param {String} countryCode ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.
     * @param {String} zip Last known postal code the person lives in
     * @param {String} street Last known street name the person lives in
     * @param {String} reason Free-form text written in english why you submit the query.
     * @param {module:Datamill/Datamill/DeliveryInformationApi~searchUndeliverableContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse}
     */
    this.searchUndeliverableContact = function(license, guid, firstName, lastName, countryCode, zip, street, reason, callback) {
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling searchUndeliverableContact");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling searchUndeliverableContact");
      }

      // verify the required parameter 'firstName' is set
      if (firstName == undefined || firstName == null) {
        throw new Error("Missing the required parameter 'firstName' when calling searchUndeliverableContact");
      }

      // verify the required parameter 'lastName' is set
      if (lastName == undefined || lastName == null) {
        throw new Error("Missing the required parameter 'lastName' when calling searchUndeliverableContact");
      }

      // verify the required parameter 'countryCode' is set
      if (countryCode == undefined || countryCode == null) {
        throw new Error("Missing the required parameter 'countryCode' when calling searchUndeliverableContact");
      }

      // verify the required parameter 'zip' is set
      if (zip == undefined || zip == null) {
        throw new Error("Missing the required parameter 'zip' when calling searchUndeliverableContact");
      }

      // verify the required parameter 'street' is set
      if (street == undefined || street == null) {
        throw new Error("Missing the required parameter 'street' when calling searchUndeliverableContact");
      }

      // verify the required parameter 'reason' is set
      if (reason == undefined || reason == null) {
        throw new Error("Missing the required parameter 'reason' when calling searchUndeliverableContact");
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
        'first_name': firstName,
        'last_name': lastName,
        'country_code': countryCode,
        'zip': zip,
        'street': street,
        'reason': reason
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = BusinessDataUndeliverableContactsResponse;

      return this.apiClient.callApi(
        '/business-data/undeliverable-contacts/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));