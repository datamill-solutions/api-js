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
    root.datamill-js-client.PhoneFormatResponse = factory(root.datamill-js-client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PhoneFormatResponse model module.
   * @module Datamill/Datamill/PhoneFormatResponse
   * @version 1.6.5
   */

  /**
   * Constructs a new <code>PhoneFormatResponse</code>.
   * Response of successful transformation request for /phone/format
   * @alias module:Datamill/Datamill/PhoneFormatResponse
   * @class
   * @param valid {String} Flag if the spelling of the phone number is valid or not [**0**, **1**]
   * @param _number {String} The phone number formatted to the canonical or custom form if valid
   * @param type {module:Datamill/Datamill/PhoneFormatResponse.TypeEnum} The determined phone number type: **PREMIUM_RATE**: premium rate, **TOLL_FREE**: toll free, **MOBILE**: mobile phone number, **FIXED_LINE**: fixed line, **FIXED_LINE_OR_MOBILE**: fixed line or mobile phone number, **SHARED_COST**: shard cost, **VOIP**: voice over ip, **PERSONAL_NUMBER**: personal number, **PAGER**: pager, **UAN**: universal access number, **VOICEMAIL**: voicemail, **UNKNOWN**: unknown connection type 
   */
  var exports = function(valid, _number, type) {
    var _this = this;

    _this['valid'] = valid;
    _this['number'] = _number;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>PhoneFormatResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/PhoneFormatResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/PhoneFormatResponse} The populated <code>PhoneFormatResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('valid')) {
        obj['valid'] = ApiClient.convertToType(data['valid'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Flag if the spelling of the phone number is valid or not [**0**, **1**]
   * @member {String} valid
   */
  exports.prototype['valid'] = undefined;
  /**
   * The phone number formatted to the canonical or custom form if valid
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * The determined phone number type: **PREMIUM_RATE**: premium rate, **TOLL_FREE**: toll free, **MOBILE**: mobile phone number, **FIXED_LINE**: fixed line, **FIXED_LINE_OR_MOBILE**: fixed line or mobile phone number, **SHARED_COST**: shard cost, **VOIP**: voice over ip, **PERSONAL_NUMBER**: personal number, **PAGER**: pager, **UAN**: universal access number, **VOICEMAIL**: voicemail, **UNKNOWN**: unknown connection type 
   * @member {module:Datamill/Datamill/PhoneFormatResponse.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "MOBILE"
     * @const
     */
    "MOBILE": "MOBILE",
    /**
     * value: "FIXED_LINE"
     * @const
     */
    "FIXED_LINE": "FIXED_LINE",
    /**
     * value: "FIXED_LINE_OR_MOBILE"
     * @const
     */
    "FIXED_LINE_OR_MOBILE": "FIXED_LINE_OR_MOBILE",
    /**
     * value: "TOLL_FREE"
     * @const
     */
    "TOLL_FREE": "TOLL_FREE",
    /**
     * value: "PREMIUM_RATE"
     * @const
     */
    "PREMIUM_RATE": "PREMIUM_RATE",
    /**
     * value: "SHARED_COST"
     * @const
     */
    "SHARED_COST": "SHARED_COST",
    /**
     * value: "VOIP"
     * @const
     */
    "VOIP": "VOIP",
    /**
     * value: "PERSONAL_NUMBER"
     * @const
     */
    "PERSONAL_NUMBER": "PERSONAL_NUMBER",
    /**
     * value: "PAGER"
     * @const
     */
    "PAGER": "PAGER",
    /**
     * value: "UAN"
     * @const
     */
    "UAN": "UAN",
    /**
     * value: "VOICEMAIL"
     * @const
     */
    "VOICEMAIL": "VOICEMAIL",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };


  return exports;
}));


