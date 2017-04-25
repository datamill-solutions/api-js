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
    define(['ApiClient', 'model/BicCheckResponse', 'model/ErrorForbidden', 'model/ErrorIncorrectParameters', 'model/ErrorInternalError', 'model/ErrorMissingParameters', 'model/ErrorNotAllowed', 'model/ErrorNotFound', 'model/ErrorQuotaExceeded', 'model/ErrorServiceUnavailable', 'model/ErrorUnauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BicCheckResponse'), require('../model/ErrorForbidden'), require('../model/ErrorIncorrectParameters'), require('../model/ErrorInternalError'), require('../model/ErrorMissingParameters'), require('../model/ErrorNotAllowed'), require('../model/ErrorNotFound'), require('../model/ErrorQuotaExceeded'), require('../model/ErrorServiceUnavailable'), require('../model/ErrorUnauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.DatamillForApplications) {
      root.DatamillForApplications = {};
    }
    root.DatamillForApplications.BICApi = factory(root.DatamillForApplications.ApiClient, root.DatamillForApplications.BicCheckResponse, root.DatamillForApplications.ErrorForbidden, root.DatamillForApplications.ErrorIncorrectParameters, root.DatamillForApplications.ErrorInternalError, root.DatamillForApplications.ErrorMissingParameters, root.DatamillForApplications.ErrorNotAllowed, root.DatamillForApplications.ErrorNotFound, root.DatamillForApplications.ErrorQuotaExceeded, root.DatamillForApplications.ErrorServiceUnavailable, root.DatamillForApplications.ErrorUnauthorized);
  }
}(this, function(ApiClient, BicCheckResponse, ErrorForbidden, ErrorIncorrectParameters, ErrorInternalError, ErrorMissingParameters, ErrorNotAllowed, ErrorNotFound, ErrorQuotaExceeded, ErrorServiceUnavailable, ErrorUnauthorized) {
  'use strict';

  /**
   * BIC service.
   * @module api/BICApi
   * @version 1.6.4
   */

  /**
   * Constructs a new BICApi. 
   * @alias module:api/BICApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkBIC operation.
     * @callback module:api/BICApi~checkBICCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BicCheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check BIC for spelling
     * Checks the spelling of a given BIC (Business Identifier Code), also known as SWIFT code which is defined in the ISO 9362. The function does not verify if the BIC really exists, instead the format is checked for validity only. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} bic BIC to be checked
     * @param {module:api/BICApi~checkBICCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BicCheckResponse}
     */
    this.checkBIC = function(license, guid, bic, callback) {
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling checkBIC");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling checkBIC");
      }

      // verify the required parameter 'bic' is set
      if (bic == undefined || bic == null) {
        throw new Error("Missing the required parameter 'bic' when calling checkBIC");
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
        'bic': bic
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = BicCheckResponse;

      return this.apiClient.callApi(
        '/bic/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));