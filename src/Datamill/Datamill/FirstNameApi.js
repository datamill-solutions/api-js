/**
 * /data.mill for applications
 * **&#47;data.mill for applications** is the most versatile and powerful API for all aspects of data quality in your business application.  Use **&#47;data.mill** to check, correct and enrich personal data and business information. The internationally applicable functions can be integrated easily into existing applications, whether desktop, online or mobile and thus enable you to professionally improve your customer or supplier database, directly in your system. Due to **&#47;data.mill**'s pay-per-use credit model there are no setup fees or fixed monthly subscription fees.  **&#47;data.mill** is constantly evolving and upgraded with the latest technology and data services available on the market.  GitHub for SDKs: https://github.com/datamill-solutions 
 *
 * OpenAPI spec version: 1.6.5
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
    define(['Datamill/ApiClient', 'Datamill/Datamill/ErrorForbidden', 'Datamill/Datamill/ErrorIncorrectParameters', 'Datamill/Datamill/ErrorInternalError', 'Datamill/Datamill/ErrorMissingParameters', 'Datamill/Datamill/ErrorNotAllowed', 'Datamill/Datamill/ErrorNotFound', 'Datamill/Datamill/ErrorQuotaExceeded', 'Datamill/Datamill/ErrorServiceUnavailable', 'Datamill/Datamill/ErrorUnauthorized', 'Datamill/Datamill/FirstNameGetResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Datamill/ErrorForbidden'), require('../Datamill/ErrorIncorrectParameters'), require('../Datamill/ErrorInternalError'), require('../Datamill/ErrorMissingParameters'), require('../Datamill/ErrorNotAllowed'), require('../Datamill/ErrorNotFound'), require('../Datamill/ErrorQuotaExceeded'), require('../Datamill/ErrorServiceUnavailable'), require('../Datamill/ErrorUnauthorized'), require('../Datamill/FirstNameGetResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.datamill-js-client) {
      root.datamill-js-client = {};
    }
    root.datamill-js-client.FirstNameApi = factory(root.datamill-js-client.ApiClient, root.datamill-js-client.ErrorForbidden, root.datamill-js-client.ErrorIncorrectParameters, root.datamill-js-client.ErrorInternalError, root.datamill-js-client.ErrorMissingParameters, root.datamill-js-client.ErrorNotAllowed, root.datamill-js-client.ErrorNotFound, root.datamill-js-client.ErrorQuotaExceeded, root.datamill-js-client.ErrorServiceUnavailable, root.datamill-js-client.ErrorUnauthorized, root.datamill-js-client.FirstNameGetResponse);
  }
}(this, function(ApiClient, ErrorForbidden, ErrorIncorrectParameters, ErrorInternalError, ErrorMissingParameters, ErrorNotAllowed, ErrorNotFound, ErrorQuotaExceeded, ErrorServiceUnavailable, ErrorUnauthorized, FirstNameGetResponse) {
  'use strict';

  /**
   * FirstName service.
   * @module Datamill/Datamill/FirstNameApi
   * @version 1.6.5
   */

  /**
   * Constructs a new FirstNameApi. 
   * @alias module:Datamill/Datamill/FirstNameApi
   * @class
   * @param {module:Datamill/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:Datamill/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getFirstNames operation.
     * @callback module:Datamill/Datamill/FirstNameApi~getFirstNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:Datamill/Datamill/FirstNameGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recognize and extract first names
     * Detects all first names in a given sting (e.g. a person&#39;s name) and extracts them. (Works only with common first names in Germany, Austria and Switzerland) 
     * @param {String} name Full name to detect all first names and extract them
     * @param {module:Datamill/Datamill/FirstNameApi~getFirstNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Datamill/Datamill/FirstNameGetResponse}
     */
    this.getFirstNames = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling getFirstNames");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'name': name
      };

      var authNames = ['APISecurity'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = FirstNameGetResponse;

      return this.apiClient.callApi(
        '/firstname/get', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
