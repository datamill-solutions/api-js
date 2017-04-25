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
    define(['Datamill/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.datamill-js-client) {
      root.datamill-js-client = {};
    }
    root.datamill-js-client.EmailDomainCheckResponse = factory(root.datamill-js-client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailDomainCheckResponse model module.
   * @module Datamill/Datamill/EmailDomainCheckResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EmailDomainCheckResponse</code>.
   * Response of successful transformation request for /email/domain/check
   * @alias module:Datamill/Datamill/EmailDomainCheckResponse
   * @class
   * @param valid {module:Datamill/Datamill/EmailDomainCheckResponse.ValidEnum} Flag if the email address is valid or not. '0' for invalid and '1' for valid email address.
   * @param description {module:Datamill/Datamill/EmailDomainCheckResponse.DescriptionEnum} Error description if syntax or mail server are invalid. Empty value means no error.
   * @param statusCode {module:Datamill/Datamill/EmailDomainCheckResponse.StatusCodeEnum} Unique status code for each possible validation state. '10' for invalid syntax, '20' for missing MX record, '21' for disposable email and '1' for valid email address.
   */
  var exports = function(valid, description, statusCode) {
    var _this = this;

    _this['valid'] = valid;
    _this['description'] = description;
    _this['status_code'] = statusCode;
  };

  /**
   * Constructs a <code>EmailDomainCheckResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/EmailDomainCheckResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/EmailDomainCheckResponse} The populated <code>EmailDomainCheckResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('valid')) {
        obj['valid'] = ApiClient.convertToType(data['valid'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('status_code')) {
        obj['status_code'] = ApiClient.convertToType(data['status_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * Flag if the email address is valid or not. '0' for invalid and '1' for valid email address.
   * @member {module:Datamill/Datamill/EmailDomainCheckResponse.ValidEnum} valid
   */
  exports.prototype['valid'] = undefined;
  /**
   * Error description if syntax or mail server are invalid. Empty value means no error.
   * @member {module:Datamill/Datamill/EmailDomainCheckResponse.DescriptionEnum} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Unique status code for each possible validation state. '10' for invalid syntax, '20' for missing MX record, '21' for disposable email and '1' for valid email address.
   * @member {module:Datamill/Datamill/EmailDomainCheckResponse.StatusCodeEnum} status_code
   */
  exports.prototype['status_code'] = undefined;


  /**
   * Allowed values for the <code>valid</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ValidEnum = {
    /**
     * value: "0"
     * @const
     */
    "0": "0",
    /**
     * value: "1"
     * @const
     */
    "1": "1"  };

  /**
   * Allowed values for the <code>description</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DescriptionEnum = {
    /**
     * value: "syntax"
     * @const
     */
    "syntax": "syntax",
    /**
     * value: "domain"
     * @const
     */
    "domain": "domain",
    /**
     * value: "disposable"
     * @const
     */
    "disposable": "disposable",
    /**
     * value: ""
     * @const
     */
    "": ""  };

  /**
   * Allowed values for the <code>status_code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusCodeEnum = {
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "10"
     * @const
     */
    "10": "10",
    /**
     * value: "20"
     * @const
     */
    "20": "20",
    /**
     * value: "21"
     * @const
     */
    "21": "21"  };


  return exports;
}));


