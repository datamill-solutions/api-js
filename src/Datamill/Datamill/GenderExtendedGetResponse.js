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
    root.datamill-js-client.GenderExtendedGetResponse = factory(root.datamill-js-client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GenderExtendedGetResponse model module.
   * @module Datamill/Datamill/GenderExtendedGetResponse
   * @version 1.6.5
   */

  /**
   * Constructs a new <code>GenderExtendedGetResponse</code>.
   * Response of successful transformation request for /gender/extended/get
   * @alias module:Datamill/Datamill/GenderExtendedGetResponse
   * @class
   * @param gender {module:Datamill/Datamill/GenderExtendedGetResponse.GenderEnum} The gender of the first name where the following codes apply 'M' for male 'F' for female '?' for unknown gender 
   */
  var exports = function(gender) {
    var _this = this;

    _this['gender'] = gender;
  };

  /**
   * Constructs a <code>GenderExtendedGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/GenderExtendedGetResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/GenderExtendedGetResponse} The populated <code>GenderExtendedGetResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
    }
    return obj;
  }

  /**
   * The gender of the first name where the following codes apply 'M' for male 'F' for female '?' for unknown gender 
   * @member {module:Datamill/Datamill/GenderExtendedGetResponse.GenderEnum} gender
   */
  exports.prototype['gender'] = undefined;


  /**
   * Allowed values for the <code>gender</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GenderEnum = {
    /**
     * value: "M"
     * @const
     */
    "M": "M",
    /**
     * value: "F"
     * @const
     */
    "F": "F",
    /**
     * value: "?"
     * @const
     */
    "QUESTION_MARK": "?"  };


  return exports;
}));


