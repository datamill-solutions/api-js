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
    root.datamill-js-client.VatResolveResponse = factory(root.datamill-js-client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VatResolveResponse model module.
   * @module Datamill/Datamill/VatResolveResponse
   * @version 1.6.5
   */

  /**
   * Constructs a new <code>VatResolveResponse</code>.
   * Response of successful transformation request for /vat/resolve
   * @alias module:Datamill/Datamill/VatResolveResponse
   * @class
   * @param valid {String} Flag if the VAT number is valid or not [0, 1]
   * @param countrycode {String} ISO 3166-1 alpha-2 country code
   * @param vatnumber {String} The verified VAT number without the country code as prefix
   * @param name {String} The official company name if VAT number is valid
   * @param countryname {String} Country name together with the language information
   * @param state {String} State name/code together with the language information
   * @param county {String} County name together with the language information (if available)
   * @param city {String} City name together with the language information
   * @param zip {String} Postal code
   * @param street {String} Street name together with the language information
   * @param housenumber {String} House number together with the language information (if available)
   * @param additionalData {String} Additional house number information (e.g. floor, apartment, top)
   * @param rawAddress {String} The raw address of the company received before its split into its address parts
   * @param countrycodeIso3 {String} ISO 3166-1 alpha-3 country code
   * @param relevance {String} Indicates the relevance of the result found. The higher the score the more relevant the alternative. The score is a normalized value between 0 and 100. Every typo or mismatch between the request and response data (e.g. incorrect data, abbreviation, ..) will reduce the relevance. 
   * @param latitude {String} Latitude to place a marker indicating the given location on a map (uses a dot as decimal point)
   * @param longitude {String} Longitude to place a marker indicating the given location on a map (uses a dot as decimal point)
   * @param matchlevel {String} The most detailed address field that matches the geo-coding query: **housenumber**: the whole geo-location including the house number / building name was found. **street**: the whole geo-location excluding the house number / building name was found. Please consider if you do not provide a house number or building name in the request the most detailed address field possible will always be the street. **general**: our service could only resolve a few address parts above the street level (e.g. only country or country + city, ...). 
   */
  var exports = function(valid, countrycode, vatnumber, name, countryname, state, county, city, zip, street, housenumber, additionalData, rawAddress, countrycodeIso3, relevance, latitude, longitude, matchlevel) {
    var _this = this;

    _this['valid'] = valid;
    _this['countrycode'] = countrycode;
    _this['vatnumber'] = vatnumber;
    _this['name'] = name;
    _this['countryname'] = countryname;
    _this['state'] = state;
    _this['county'] = county;
    _this['city'] = city;
    _this['zip'] = zip;
    _this['street'] = street;
    _this['housenumber'] = housenumber;
    _this['additional_data'] = additionalData;
    _this['raw_address'] = rawAddress;
    _this['countrycode_iso_3'] = countrycodeIso3;
    _this['relevance'] = relevance;
    _this['latitude'] = latitude;
    _this['longitude'] = longitude;
    _this['matchlevel'] = matchlevel;
  };

  /**
   * Constructs a <code>VatResolveResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/VatResolveResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/VatResolveResponse} The populated <code>VatResolveResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('valid')) {
        obj['valid'] = ApiClient.convertToType(data['valid'], 'String');
      }
      if (data.hasOwnProperty('countrycode')) {
        obj['countrycode'] = ApiClient.convertToType(data['countrycode'], 'String');
      }
      if (data.hasOwnProperty('vatnumber')) {
        obj['vatnumber'] = ApiClient.convertToType(data['vatnumber'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('countryname')) {
        obj['countryname'] = ApiClient.convertToType(data['countryname'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('county')) {
        obj['county'] = ApiClient.convertToType(data['county'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('housenumber')) {
        obj['housenumber'] = ApiClient.convertToType(data['housenumber'], 'String');
      }
      if (data.hasOwnProperty('additional_data')) {
        obj['additional_data'] = ApiClient.convertToType(data['additional_data'], 'String');
      }
      if (data.hasOwnProperty('raw_address')) {
        obj['raw_address'] = ApiClient.convertToType(data['raw_address'], 'String');
      }
      if (data.hasOwnProperty('countrycode_iso_3')) {
        obj['countrycode_iso_3'] = ApiClient.convertToType(data['countrycode_iso_3'], 'String');
      }
      if (data.hasOwnProperty('relevance')) {
        obj['relevance'] = ApiClient.convertToType(data['relevance'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'String');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'String');
      }
      if (data.hasOwnProperty('matchlevel')) {
        obj['matchlevel'] = ApiClient.convertToType(data['matchlevel'], 'String');
      }
    }
    return obj;
  }

  /**
   * Flag if the VAT number is valid or not [0, 1]
   * @member {String} valid
   */
  exports.prototype['valid'] = undefined;
  /**
   * ISO 3166-1 alpha-2 country code
   * @member {String} countrycode
   */
  exports.prototype['countrycode'] = undefined;
  /**
   * The verified VAT number without the country code as prefix
   * @member {String} vatnumber
   */
  exports.prototype['vatnumber'] = undefined;
  /**
   * The official company name if VAT number is valid
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Country name together with the language information
   * @member {String} countryname
   */
  exports.prototype['countryname'] = undefined;
  /**
   * State name/code together with the language information
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * County name together with the language information (if available)
   * @member {String} county
   */
  exports.prototype['county'] = undefined;
  /**
   * City name together with the language information
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * Postal code
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;
  /**
   * Street name together with the language information
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * House number together with the language information (if available)
   * @member {String} housenumber
   */
  exports.prototype['housenumber'] = undefined;
  /**
   * Additional house number information (e.g. floor, apartment, top)
   * @member {String} additional_data
   */
  exports.prototype['additional_data'] = undefined;
  /**
   * The raw address of the company received before its split into its address parts
   * @member {String} raw_address
   */
  exports.prototype['raw_address'] = undefined;
  /**
   * ISO 3166-1 alpha-3 country code
   * @member {String} countrycode_iso_3
   */
  exports.prototype['countrycode_iso_3'] = undefined;
  /**
   * Indicates the relevance of the result found. The higher the score the more relevant the alternative. The score is a normalized value between 0 and 100. Every typo or mismatch between the request and response data (e.g. incorrect data, abbreviation, ..) will reduce the relevance. 
   * @member {String} relevance
   */
  exports.prototype['relevance'] = undefined;
  /**
   * Latitude to place a marker indicating the given location on a map (uses a dot as decimal point)
   * @member {String} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * Longitude to place a marker indicating the given location on a map (uses a dot as decimal point)
   * @member {String} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * The most detailed address field that matches the geo-coding query: **housenumber**: the whole geo-location including the house number / building name was found. **street**: the whole geo-location excluding the house number / building name was found. Please consider if you do not provide a house number or building name in the request the most detailed address field possible will always be the street. **general**: our service could only resolve a few address parts above the street level (e.g. only country or country + city, ...). 
   * @member {String} matchlevel
   */
  exports.prototype['matchlevel'] = undefined;



  return exports;
}));


