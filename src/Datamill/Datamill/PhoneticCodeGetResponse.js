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
    define(['Datamill/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.datamill-js-client) {
      root.datamill-js-client = {};
    }
    root.datamill-js-client.PhoneticCodeGetResponse = factory(root.datamill-js-client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PhoneticCodeGetResponse model module.
   * @module Datamill/Datamill/PhoneticCodeGetResponse
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>PhoneticCodeGetResponse</code>.
   * Response of successful transformation request for /phonetic/code/get
   * @alias module:Datamill/Datamill/PhoneticCodeGetResponse
   * @class
   * @param phoneticCodes {Array.<String>} The phonetic codes for each word of the input text 
   */
  var exports = function(phoneticCodes) {
    var _this = this;

    _this['phonetic_codes'] = phoneticCodes;
  };

  /**
   * Constructs a <code>PhoneticCodeGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/PhoneticCodeGetResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/PhoneticCodeGetResponse} The populated <code>PhoneticCodeGetResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('phonetic_codes')) {
        obj['phonetic_codes'] = ApiClient.convertToType(data['phonetic_codes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The phonetic codes for each word of the input text 
   * @member {Array.<String>} phonetic_codes
   */
  exports.prototype['phonetic_codes'] = undefined;



  return exports;
}));

