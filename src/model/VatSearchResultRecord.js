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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DatamillForApplications) {
      root.DatamillForApplications = {};
    }
    root.DatamillForApplications.VatSearchResultRecord = factory(root.DatamillForApplications.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VatSearchResultRecord model module.
   * @module model/VatSearchResultRecord
   * @version 1.6.4
   */

  /**
   * Constructs a new <code>VatSearchResultRecord</code>.
   * Single record of successful VatSearchResponse
   * @alias module:model/VatSearchResultRecord
   * @class
   * @param vatnumber {String} The VAT numbers including the country code as prefix separated by a newline [only if uglify is set to 1]
   * @param company {String} Name of the company
   * @param address {String} Address of the company
   */
  var exports = function(vatnumber, company, address) {
    var _this = this;

    _this['vatnumber'] = vatnumber;
    _this['company'] = company;
    _this['address'] = address;
  };

  /**
   * Constructs a <code>VatSearchResultRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VatSearchResultRecord} obj Optional instance to populate.
   * @return {module:model/VatSearchResultRecord} The populated <code>VatSearchResultRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('vatnumber')) {
        obj['vatnumber'] = ApiClient.convertToType(data['vatnumber'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
    }
    return obj;
  }

  /**
   * The VAT numbers including the country code as prefix separated by a newline [only if uglify is set to 1]
   * @member {String} vatnumber
   */
  exports.prototype['vatnumber'] = undefined;
  /**
   * Name of the company
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Address of the company
   * @member {String} address
   */
  exports.prototype['address'] = undefined;



  return exports;
}));


