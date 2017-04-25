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
    define(['ApiClient', 'model/ConvertCapitalFirstResponse', 'model/ConvertLowerCaseResponse', 'model/ConvertUpperCaseResponse', 'model/ConvertWrapResponse', 'model/ErrorForbidden', 'model/ErrorIncorrectParameters', 'model/ErrorInternalError', 'model/ErrorMissingParameters', 'model/ErrorNotAllowed', 'model/ErrorNotFound', 'model/ErrorQuotaExceeded', 'model/ErrorServiceUnavailable', 'model/ErrorUnauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConvertCapitalFirstResponse'), require('../model/ConvertLowerCaseResponse'), require('../model/ConvertUpperCaseResponse'), require('../model/ConvertWrapResponse'), require('../model/ErrorForbidden'), require('../model/ErrorIncorrectParameters'), require('../model/ErrorInternalError'), require('../model/ErrorMissingParameters'), require('../model/ErrorNotAllowed'), require('../model/ErrorNotFound'), require('../model/ErrorQuotaExceeded'), require('../model/ErrorServiceUnavailable'), require('../model/ErrorUnauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.DatamillForApplications) {
      root.DatamillForApplications = {};
    }
    root.DatamillForApplications.ConvertApi = factory(root.DatamillForApplications.ApiClient, root.DatamillForApplications.ConvertCapitalFirstResponse, root.DatamillForApplications.ConvertLowerCaseResponse, root.DatamillForApplications.ConvertUpperCaseResponse, root.DatamillForApplications.ConvertWrapResponse, root.DatamillForApplications.ErrorForbidden, root.DatamillForApplications.ErrorIncorrectParameters, root.DatamillForApplications.ErrorInternalError, root.DatamillForApplications.ErrorMissingParameters, root.DatamillForApplications.ErrorNotAllowed, root.DatamillForApplications.ErrorNotFound, root.DatamillForApplications.ErrorQuotaExceeded, root.DatamillForApplications.ErrorServiceUnavailable, root.DatamillForApplications.ErrorUnauthorized);
  }
}(this, function(ApiClient, ConvertCapitalFirstResponse, ConvertLowerCaseResponse, ConvertUpperCaseResponse, ConvertWrapResponse, ErrorForbidden, ErrorIncorrectParameters, ErrorInternalError, ErrorMissingParameters, ErrorNotAllowed, ErrorNotFound, ErrorQuotaExceeded, ErrorServiceUnavailable, ErrorUnauthorized) {
  'use strict';

  /**
   * Convert service.
   * @module api/ConvertApi
   * @version 1.6.4
   */

  /**
   * Constructs a new ConvertApi. 
   * @alias module:api/ConvertApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the convertCapitalFirst operation.
     * @callback module:api/ConvertApi~convertCapitalFirstCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvertCapitalFirstResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert any string to capitalize words
     * Changes any word of a given text so that the first letter is capitalized and all the others turned into lower case. Special proper names, like \&quot;DiCaprio\&quot; are detected and ignored. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} text Free-form text to be converted.
     * @param {module:api/ConvertApi~convertCapitalFirstCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConvertCapitalFirstResponse}
     */
    this.convertCapitalFirst = function(license, guid, text, callback) {
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling convertCapitalFirst");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling convertCapitalFirst");
      }

      // verify the required parameter 'text' is set
      if (text == undefined || text == null) {
        throw new Error("Missing the required parameter 'text' when calling convertCapitalFirst");
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
        'text': text
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ConvertCapitalFirstResponse;

      return this.apiClient.callApi(
        '/convert/capitalfirst', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertLowerCase operation.
     * @callback module:api/ConvertApi~convertLowerCaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvertLowerCaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert any string to lower case
     * Converts all letters of any word in a given string in the respective lowercase. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} text Free-form text to be converted.
     * @param {module:api/ConvertApi~convertLowerCaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConvertLowerCaseResponse}
     */
    this.convertLowerCase = function(license, guid, text, callback) {
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling convertLowerCase");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling convertLowerCase");
      }

      // verify the required parameter 'text' is set
      if (text == undefined || text == null) {
        throw new Error("Missing the required parameter 'text' when calling convertLowerCase");
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
        'text': text
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ConvertLowerCaseResponse;

      return this.apiClient.callApi(
        '/convert/lowercase', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertUpperCase operation.
     * @callback module:api/ConvertApi~convertUpperCaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvertUpperCaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert any string to upper case
     * Converts all letters of any word in a given string in the respective capital. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} text Free-form text to be converted.
     * @param {module:api/ConvertApi~convertUpperCaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConvertUpperCaseResponse}
     */
    this.convertUpperCase = function(license, guid, text, callback) {
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling convertUpperCase");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling convertUpperCase");
      }

      // verify the required parameter 'text' is set
      if (text == undefined || text == null) {
        throw new Error("Missing the required parameter 'text' when calling convertUpperCase");
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
        'text': text
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ConvertUpperCaseResponse;

      return this.apiClient.callApi(
        '/convert/uppercase', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertWrap operation.
     * @callback module:api/ConvertApi~convertWrapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvertWrapResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wrap text
     * Breaks a text into multiple newlines. Each line will be separated by a \\r (CR, ASCII 13) and \\n (LF, ASCII 10) character. The number of characters a line break will be inserted after can be justified. 
     * @param {String} license The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} guid The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 
     * @param {String} text Fre-form text to be wrapped.
     * @param {Number} limit The number of characters a linefeed will be inserted after (maximum character length per line).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.mode The mode how the linefeed will be inserted. Either before (default) the current word, after the current word or exactly after the character. Possible values are **before** to break before last word, **after** to break after last word, **exact** to break at limit. 
     * @param {module:model/String} opts.linebreak Defines which line separator should be used. Possible values are **full** for *\\r\\n*, **single** for *\\n*, **html** for *&amp;lt;br&amp;gt;* 
     * @param {module:api/ConvertApi~convertWrapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConvertWrapResponse}
     */
    this.convertWrap = function(license, guid, text, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'license' is set
      if (license == undefined || license == null) {
        throw new Error("Missing the required parameter 'license' when calling convertWrap");
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw new Error("Missing the required parameter 'guid' when calling convertWrap");
      }

      // verify the required parameter 'text' is set
      if (text == undefined || text == null) {
        throw new Error("Missing the required parameter 'text' when calling convertWrap");
      }

      // verify the required parameter 'limit' is set
      if (limit == undefined || limit == null) {
        throw new Error("Missing the required parameter 'limit' when calling convertWrap");
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
        'text': text,
        'limit': limit,
        'mode': opts['mode'],
        'linebreak': opts['linebreak']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ConvertWrapResponse;

      return this.apiClient.callApi(
        '/convert/wrap', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
