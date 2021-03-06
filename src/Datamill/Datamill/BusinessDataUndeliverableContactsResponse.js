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
    define(['Datamill/ApiClient', 'Datamill/Datamill/BusinessDataUndeliverableContactsSearchContact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BusinessDataUndeliverableContactsSearchContact'));
  } else {
    // Browser globals (root is window)
    if (!root.datamill-js-client) {
      root.datamill-js-client = {};
    }
    root.datamill-js-client.BusinessDataUndeliverableContactsResponse = factory(root.datamill-js-client.ApiClient, root.datamill-js-client.BusinessDataUndeliverableContactsSearchContact);
  }
}(this, function(ApiClient, BusinessDataUndeliverableContactsSearchContact) {
  'use strict';




  /**
   * The BusinessDataUndeliverableContactsResponse model module.
   * @module Datamill/Datamill/BusinessDataUndeliverableContactsResponse
   * @version 1.6.5
   */

  /**
   * Constructs a new <code>BusinessDataUndeliverableContactsResponse</code>.
   * Response of successful transformation request for /business-data/undeliverable-contacts/search
   * @alias module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse
   * @class
   * @param undeliverable {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse.UndeliverableEnum} Flag if sending a mail would result in an undeliverable state [**0**, **1**]
   * @param deceased {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse.DeceasedEnum} Flag if the person is deceased [**0**, **1**]
   * @param moved {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse.MovedEnum} Flag if the person has moved to a new address but we do not know the new address [**0**, **1**]
   * @param newAddressAvailable {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse.NewAddressAvailableEnum} Flag if the person has moved to a new address and we know the new address [**0**, **1**]
   * @param contact {module:Datamill/Datamill/BusinessDataUndeliverableContactsSearchContact} 
   */
  var exports = function(undeliverable, deceased, moved, newAddressAvailable, contact) {
    var _this = this;

    _this['undeliverable'] = undeliverable;
    _this['deceased'] = deceased;
    _this['moved'] = moved;
    _this['new_address_available'] = newAddressAvailable;
    _this['contact'] = contact;
  };

  /**
   * Constructs a <code>BusinessDataUndeliverableContactsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse} The populated <code>BusinessDataUndeliverableContactsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('undeliverable')) {
        obj['undeliverable'] = ApiClient.convertToType(data['undeliverable'], 'String');
      }
      if (data.hasOwnProperty('deceased')) {
        obj['deceased'] = ApiClient.convertToType(data['deceased'], 'String');
      }
      if (data.hasOwnProperty('moved')) {
        obj['moved'] = ApiClient.convertToType(data['moved'], 'String');
      }
      if (data.hasOwnProperty('new_address_available')) {
        obj['new_address_available'] = ApiClient.convertToType(data['new_address_available'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = BusinessDataUndeliverableContactsSearchContact.constructFromObject(data['contact']);
      }
    }
    return obj;
  }

  /**
   * Flag if sending a mail would result in an undeliverable state [**0**, **1**]
   * @member {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse.UndeliverableEnum} undeliverable
   */
  exports.prototype['undeliverable'] = undefined;
  /**
   * Flag if the person is deceased [**0**, **1**]
   * @member {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse.DeceasedEnum} deceased
   */
  exports.prototype['deceased'] = undefined;
  /**
   * Flag if the person has moved to a new address but we do not know the new address [**0**, **1**]
   * @member {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse.MovedEnum} moved
   */
  exports.prototype['moved'] = undefined;
  /**
   * Flag if the person has moved to a new address and we know the new address [**0**, **1**]
   * @member {module:Datamill/Datamill/BusinessDataUndeliverableContactsResponse.NewAddressAvailableEnum} new_address_available
   */
  exports.prototype['new_address_available'] = undefined;
  /**
   * @member {module:Datamill/Datamill/BusinessDataUndeliverableContactsSearchContact} contact
   */
  exports.prototype['contact'] = undefined;


  /**
   * Allowed values for the <code>undeliverable</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UndeliverableEnum = {
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
   * Allowed values for the <code>deceased</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeceasedEnum = {
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
   * Allowed values for the <code>moved</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MovedEnum = {
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
   * Allowed values for the <code>new_address_available</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NewAddressAvailableEnum = {
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


  return exports;
}));


