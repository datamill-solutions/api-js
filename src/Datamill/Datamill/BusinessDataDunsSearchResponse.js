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
    define(['Datamill/ApiClient', 'Datamill/Datamill/BusinessDataDunsSearchResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BusinessDataDunsSearchResult'));
  } else {
    // Browser globals (root is window)
    if (!root.datamill-js-client) {
      root.datamill-js-client = {};
    }
    root.datamill-js-client.BusinessDataDunsSearchResponse = factory(root.datamill-js-client.ApiClient, root.datamill-js-client.BusinessDataDunsSearchResult);
  }
}(this, function(ApiClient, BusinessDataDunsSearchResult) {
  'use strict';




  /**
   * The BusinessDataDunsSearchResponse model module.
   * @module Datamill/Datamill/BusinessDataDunsSearchResponse
   * @version 1.6.5
   */

  /**
   * Constructs a new <code>BusinessDataDunsSearchResponse</code>.
   * Response of successful transformation request for /business-data/duns/search
   * @alias module:Datamill/Datamill/BusinessDataDunsSearchResponse
   * @class
   * @param status {module:Datamill/Datamill/BusinessDataDunsSearchResponse.StatusEnum} Short description about the number of results found: **no result**: Could not find any company which matches the specified criteria, **single result**: We found 1 company which matches the specified criteria, **multiple results**: We found at least 2 companies which matches the specified criteria 
   * @param results {Array.<module:Datamill/Datamill/BusinessDataDunsSearchResult>} Collection of all found companies
   */
  var exports = function(status, results) {
    var _this = this;

    _this['status'] = status;
    _this['results'] = results;
  };

  /**
   * Constructs a <code>BusinessDataDunsSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/BusinessDataDunsSearchResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/BusinessDataDunsSearchResponse} The populated <code>BusinessDataDunsSearchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [BusinessDataDunsSearchResult]);
      }
    }
    return obj;
  }

  /**
   * Short description about the number of results found: **no result**: Could not find any company which matches the specified criteria, **single result**: We found 1 company which matches the specified criteria, **multiple results**: We found at least 2 companies which matches the specified criteria 
   * @member {module:Datamill/Datamill/BusinessDataDunsSearchResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Collection of all found companies
   * @member {Array.<module:Datamill/Datamill/BusinessDataDunsSearchResult>} results
   */
  exports.prototype['results'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "no result"
     * @const
     */
    "no result": "no result",
    /**
     * value: "single result"
     * @const
     */
    "single result": "single result",
    /**
     * value: "multiple results"
     * @const
     */
    "multiple results": "multiple results"  };


  return exports;
}));


