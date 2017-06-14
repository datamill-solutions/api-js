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
    root.datamill-js-client.BusinessDataDunsResolveResponse = factory(root.datamill-js-client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BusinessDataDunsResolveResponse model module.
   * @module Datamill/Datamill/BusinessDataDunsResolveResponse
   * @version 1.6.5
   */

  /**
   * Constructs a new <code>BusinessDataDunsResolveResponse</code>.
   * Response of successful transformation request for /business-data/duns/resolve
   * @alias module:Datamill/Datamill/BusinessDataDunsResolveResponse
   * @class
   * @param status {module:Datamill/Datamill/BusinessDataDunsResolveResponse.StatusEnum} Flag if a company was found by its D-U-N-S number or not [**0*, **1**]
   * @param statusDescription {module:Datamill/Datamill/BusinessDataDunsResolveResponse.StatusDescriptionEnum} Describes if a company was found or if the specified D-U-N-S number could not be resolved. Possible values are: **company not found**, **company found**, **invalid duns number** 
   */
  var exports = function(status, statusDescription) {
    var _this = this;

    _this['status'] = status;
    _this['status_description'] = statusDescription;




















































  };

  /**
   * Constructs a <code>BusinessDataDunsResolveResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/BusinessDataDunsResolveResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/BusinessDataDunsResolveResponse} The populated <code>BusinessDataDunsResolveResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('status_description')) {
        obj['status_description'] = ApiClient.convertToType(data['status_description'], 'String');
      }
      if (data.hasOwnProperty('company_name')) {
        obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
      }
      if (data.hasOwnProperty('company_name_2')) {
        obj['company_name_2'] = ApiClient.convertToType(data['company_name_2'], 'String');
      }
      if (data.hasOwnProperty('continent_name')) {
        obj['continent_name'] = ApiClient.convertToType(data['continent_name'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
      }
      if (data.hasOwnProperty('country_code_3')) {
        obj['country_code_3'] = ApiClient.convertToType(data['country_code_3'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('house_number')) {
        obj['house_number'] = ApiClient.convertToType(data['house_number'], 'String');
      }
      if (data.hasOwnProperty('phone_number')) {
        obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
      }
      if (data.hasOwnProperty('fax_number')) {
        obj['fax_number'] = ApiClient.convertToType(data['fax_number'], 'String');
      }
      if (data.hasOwnProperty('state_name')) {
        obj['state_name'] = ApiClient.convertToType(data['state_name'], 'String');
      }
      if (data.hasOwnProperty('state_code')) {
        obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
      }
      if (data.hasOwnProperty('ceo_name')) {
        obj['ceo_name'] = ApiClient.convertToType(data['ceo_name'], 'String');
      }
      if (data.hasOwnProperty('ceo_title')) {
        obj['ceo_title'] = ApiClient.convertToType(data['ceo_title'], 'String');
      }
      if (data.hasOwnProperty('ceo_secondary')) {
        obj['ceo_secondary'] = ApiClient.convertToType(data['ceo_secondary'], ['String']);
      }
      if (data.hasOwnProperty('sic_code')) {
        obj['sic_code'] = ApiClient.convertToType(data['sic_code'], 'String');
      }
      if (data.hasOwnProperty('sic_description')) {
        obj['sic_description'] = ApiClient.convertToType(data['sic_description'], 'String');
      }
      if (data.hasOwnProperty('year_started')) {
        obj['year_started'] = ApiClient.convertToType(data['year_started'], 'String');
      }
      if (data.hasOwnProperty('annual_turnover_local_currency')) {
        obj['annual_turnover_local_currency'] = ApiClient.convertToType(data['annual_turnover_local_currency'], 'Number');
      }
      if (data.hasOwnProperty('annual_turnover_indicator_code')) {
        obj['annual_turnover_indicator_code'] = ApiClient.convertToType(data['annual_turnover_indicator_code'], 'String');
      }
      if (data.hasOwnProperty('annual_turnover_indicator_description')) {
        obj['annual_turnover_indicator_description'] = ApiClient.convertToType(data['annual_turnover_indicator_description'], 'String');
      }
      if (data.hasOwnProperty('annual_turnover_usd')) {
        obj['annual_turnover_usd'] = ApiClient.convertToType(data['annual_turnover_usd'], 'Number');
      }
      if (data.hasOwnProperty('net_income')) {
        obj['net_income'] = ApiClient.convertToType(data['net_income'], 'Number');
      }
      if (data.hasOwnProperty('net_income_usd')) {
        obj['net_income_usd'] = ApiClient.convertToType(data['net_income_usd'], 'Number');
      }
      if (data.hasOwnProperty('net_worth')) {
        obj['net_worth'] = ApiClient.convertToType(data['net_worth'], 'Number');
      }
      if (data.hasOwnProperty('net_worth_usd')) {
        obj['net_worth_usd'] = ApiClient.convertToType(data['net_worth_usd'], 'Number');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('currency_name')) {
        obj['currency_name'] = ApiClient.convertToType(data['currency_name'], 'String');
      }
      if (data.hasOwnProperty('marketability_code')) {
        obj['marketability_code'] = ApiClient.convertToType(data['marketability_code'], 'String');
      }
      if (data.hasOwnProperty('marketability_description')) {
        obj['marketability_description'] = ApiClient.convertToType(data['marketability_description'], 'String');
      }
      if (data.hasOwnProperty('total_employees')) {
        obj['total_employees'] = ApiClient.convertToType(data['total_employees'], 'Number');
      }
      if (data.hasOwnProperty('total_employees_indicator')) {
        obj['total_employees_indicator'] = ApiClient.convertToType(data['total_employees_indicator'], 'String');
      }
      if (data.hasOwnProperty('total_employees_indicator_description')) {
        obj['total_employees_indicator_description'] = ApiClient.convertToType(data['total_employees_indicator_description'], 'String');
      }
      if (data.hasOwnProperty('total_employees_physical_address')) {
        obj['total_employees_physical_address'] = ApiClient.convertToType(data['total_employees_physical_address'], 'Number');
      }
      if (data.hasOwnProperty('total_employees_physical_address_indicator')) {
        obj['total_employees_physical_address_indicator'] = ApiClient.convertToType(data['total_employees_physical_address_indicator'], 'String');
      }
      if (data.hasOwnProperty('import_export_indicator')) {
        obj['import_export_indicator'] = ApiClient.convertToType(data['import_export_indicator'], 'String');
      }
      if (data.hasOwnProperty('import_export_indicator_description')) {
        obj['import_export_indicator_description'] = ApiClient.convertToType(data['import_export_indicator_description'], 'String');
      }
      if (data.hasOwnProperty('legal_form_code')) {
        obj['legal_form_code'] = ApiClient.convertToType(data['legal_form_code'], 'Number');
      }
      if (data.hasOwnProperty('legal_form_description')) {
        obj['legal_form_description'] = ApiClient.convertToType(data['legal_form_description'], 'String');
      }
      if (data.hasOwnProperty('business_structure_code')) {
        obj['business_structure_code'] = ApiClient.convertToType(data['business_structure_code'], 'String');
      }
      if (data.hasOwnProperty('business_structure_description')) {
        obj['business_structure_description'] = ApiClient.convertToType(data['business_structure_description'], 'String');
      }
      if (data.hasOwnProperty('business_registration_number_code')) {
        obj['business_registration_number_code'] = ApiClient.convertToType(data['business_registration_number_code'], 'String');
      }
      if (data.hasOwnProperty('business_registration_number_code_description')) {
        obj['business_registration_number_code_description'] = ApiClient.convertToType(data['business_registration_number_code_description'], 'String');
      }
      if (data.hasOwnProperty('undeliverable_indicator')) {
        obj['undeliverable_indicator'] = ApiClient.convertToType(data['undeliverable_indicator'], 'String');
      }
      if (data.hasOwnProperty('undeliverable_description')) {
        obj['undeliverable_description'] = ApiClient.convertToType(data['undeliverable_description'], 'String');
      }
      if (data.hasOwnProperty('financial_statement_date')) {
        obj['financial_statement_date'] = ApiClient.convertToType(data['financial_statement_date'], 'Date');
      }
      if (data.hasOwnProperty('report_date')) {
        obj['report_date'] = ApiClient.convertToType(data['report_date'], 'Date');
      }
      if (data.hasOwnProperty('is_only_available_address')) {
        obj['is_only_available_address'] = ApiClient.convertToType(data['is_only_available_address'], 'Boolean');
      }
      if (data.hasOwnProperty('is_subsidiary')) {
        obj['is_subsidiary'] = ApiClient.convertToType(data['is_subsidiary'], 'Boolean');
      }
      if (data.hasOwnProperty('total_employees_including_principals_indicator')) {
        obj['total_employees_including_principals_indicator'] = ApiClient.convertToType(data['total_employees_including_principals_indicator'], 'Boolean');
      }
      if (data.hasOwnProperty('is_out_of_business')) {
        obj['is_out_of_business'] = ApiClient.convertToType(data['is_out_of_business'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Flag if a company was found by its D-U-N-S number or not [**0*, **1**]
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Describes if a company was found or if the specified D-U-N-S number could not be resolved. Possible values are: **company not found**, **company found**, **invalid duns number** 
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.StatusDescriptionEnum} status_description
   */
  exports.prototype['status_description'] = undefined;
  /**
   * The company's official name
   * @member {String} company_name
   */
  exports.prototype['company_name'] = undefined;
  /**
   * The company's second name or \"doing business as\"
   * @member {String} company_name_2
   */
  exports.prototype['company_name_2'] = undefined;
  /**
   * Continent name of the company's headquarters
   * @member {String} continent_name
   */
  exports.prototype['continent_name'] = undefined;
  /**
   * ISO 3166-1 alpha-2 country code of the company's headquarters
   * @member {String} country_code
   */
  exports.prototype['country_code'] = undefined;
  /**
   * ISO 3166-1 alpha-3 country code of the company's headquarters
   * @member {String} country_code_3
   */
  exports.prototype['country_code_3'] = undefined;
  /**
   * Postal code of the company's headquarters
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;
  /**
   * City of the company's headquarters
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * Street name of the company's headquarters
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * House number of the company's headquarters
   * @member {String} house_number
   */
  exports.prototype['house_number'] = undefined;
  /**
   * Phone number of the company's headquarters
   * @member {String} phone_number
   */
  exports.prototype['phone_number'] = undefined;
  /**
   * Fax number of the company's headquarters
   * @member {String} fax_number
   */
  exports.prototype['fax_number'] = undefined;
  /**
   * State name of the company's headquarters
   * @member {String} state_name
   */
  exports.prototype['state_name'] = undefined;
  /**
   * ISO 3166-2 state code of the company's headquarters
   * @member {String} state_code
   */
  exports.prototype['state_code'] = undefined;
  /**
   * Name of the company's CEO (Chief Executive Officer)
   * @member {String} ceo_name
   */
  exports.prototype['ceo_name'] = undefined;
  /**
   * Position / Business title of the company's CEO
   * @member {String} ceo_title
   */
  exports.prototype['ceo_title'] = undefined;
  /**
   * Collection of names of further CEOs
   * @member {Array.<String>} ceo_secondary
   */
  exports.prototype['ceo_secondary'] = undefined;
  /**
   * The company's international SIC (Standard Industrial Classification) code
   * @member {String} sic_code
   */
  exports.prototype['sic_code'] = undefined;
  /**
   * Description of the SIC code
   * @member {String} sic_description
   */
  exports.prototype['sic_description'] = undefined;
  /**
   * Year of establishment
   * @member {String} year_started
   */
  exports.prototype['year_started'] = undefined;
  /**
   * The company's annual turnover in its local currency (may be NULL if unset)
   * @member {Number} annual_turnover_local_currency
   */
  exports.prototype['annual_turnover_local_currency'] = undefined;
  /**
   * Indicator if the annual turnover is an approximated or exact value: **<empty value>**: not available, **0**: exact value, **1**: low end of range, **2**: approximated, **3**: modeled value 
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.AnnualTurnoverIndicatorCodeEnum} annual_turnover_indicator_code
   */
  exports.prototype['annual_turnover_indicator_code'] = undefined;
  /**
   * Description of the annual turnover indicator
   * @member {String} annual_turnover_indicator_description
   */
  exports.prototype['annual_turnover_indicator_description'] = undefined;
  /**
   * The company's annual turnover in US Dollar (may be NULL if unset)
   * @member {Number} annual_turnover_usd
   */
  exports.prototype['annual_turnover_usd'] = undefined;
  /**
   * The company's net income in its local currency (may be NULL if unset)
   * @member {Number} net_income
   */
  exports.prototype['net_income'] = undefined;
  /**
   * The company's net income in US Dollar (may be NULL if unset)
   * @member {Number} net_income_usd
   */
  exports.prototype['net_income_usd'] = undefined;
  /**
   * The company's net worth (net value) in its local currency (may be NULL if unset)
   * @member {Number} net_worth
   */
  exports.prototype['net_worth'] = undefined;
  /**
   * The company's net worth (net value) in US Dollar (may be NULL if unset)
   * @member {Number} net_worth_usd
   */
  exports.prototype['net_worth_usd'] = undefined;
  /**
   * The local currency code of the company's headquarters country (3-letter ISO 4217 currency code)
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The local currency name of the company's headquarters country
   * @member {String} currency_name
   */
  exports.prototype['currency_name'] = undefined;
  /**
   * Indicator if the company / branch can be used for marketing purposes: **1**: not marketable, but listed, **2**: not marketable and not listed, **3**: marketable and listed 
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.MarketabilityCodeEnum} marketability_code
   */
  exports.prototype['marketability_code'] = undefined;
  /**
   * Description of the marketable indicator value
   * @member {String} marketability_description
   */
  exports.prototype['marketability_description'] = undefined;
  /**
   * The total number of employees (may be NULL if unset)
   * @member {Number} total_employees
   */
  exports.prototype['total_employees'] = undefined;
  /**
   * Indicator if the total number of employees is an approximated or exact value: **0**: exact value, **1**: low end of range, **2**: approximated 
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.TotalEmployeesIndicatorEnum} total_employees_indicator
   */
  exports.prototype['total_employees_indicator'] = undefined;
  /**
   * Description of the total number of employees indicator
   * @member {String} total_employees_indicator_description
   */
  exports.prototype['total_employees_indicator_description'] = undefined;
  /**
   * The total number of employees working at the company's headquarters (may be NULL if unset)
   * @member {Number} total_employees_physical_address
   */
  exports.prototype['total_employees_physical_address'] = undefined;
  /**
   * Indicator if the total number of employees (working at the company's headquarters) is an approximated or exact value: **<empty value>**: not available, **0**: exact value, **1**: low end of range, **2**: approximated or not available if the number of employees at this location is zero, **3**: modeled value 
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.TotalEmployeesPhysicalAddressIndicatorEnum} total_employees_physical_address_indicator
   */
  exports.prototype['total_employees_physical_address_indicator'] = undefined;
  /**
   * Indicator if the company has an import and/or export trade: **<empty value>**: not available, **A**: import / export / agent, **B**: imports and exports, **C**: imports, **D**: imports and agents, **E**: exports and agents, **F**: agents, keeps no inventory, does not take title goods, **G**: not available or none, **H**: exports 
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.ImportExportIndicatorEnum} import_export_indicator
   */
  exports.prototype['import_export_indicator'] = undefined;
  /**
   * Description of the import/export indicator
   * @member {String} import_export_indicator_description
   */
  exports.prototype['import_export_indicator_description'] = undefined;
  /**
   * Code of the company's legal form (may be NULL if unset)
   * @member {Number} legal_form_code
   */
  exports.prototype['legal_form_code'] = undefined;
  /**
   * Description of the legal form code
   * @member {String} legal_form_description
   */
  exports.prototype['legal_form_description'] = undefined;
  /**
   * Code of the company's business structure: **<empty value>**: not available, **0**: single location, **1**: headquarter, **2**: branch, **4**: division, 
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.BusinessStructureCodeEnum} business_structure_code
   */
  exports.prototype['business_structure_code'] = undefined;
  /**
   * Description of the business structure code
   * @member {String} business_structure_description
   */
  exports.prototype['business_structure_description'] = undefined;
  /**
   * Unique code describing the national registration id
   * @member {String} business_registration_number_code
   */
  exports.prototype['business_registration_number_code'] = undefined;
  /**
   * Friendly name of the business registration number code
   * @member {String} business_registration_number_code_description
   */
  exports.prototype['business_registration_number_code_description'] = undefined;
  /**
   * Indicator if any of the company's information are undeliverable: **B**: both addresses are undeliverable, **M**: mail address is undeliverable, **N**: no nixie indication, **P**: physical address undeliverable, **Y**: one of the addresses is undeliverable 
   * @member {module:Datamill/Datamill/BusinessDataDunsResolveResponse.UndeliverableIndicatorEnum} undeliverable_indicator
   */
  exports.prototype['undeliverable_indicator'] = undefined;
  /**
   * Description of the undeliverable indicator
   * @member {String} undeliverable_description
   */
  exports.prototype['undeliverable_description'] = undefined;
  /**
   * Timestamp when the financial information were updated the last time (may be full year only or full date with day, month and year)
   * @member {Date} financial_statement_date
   */
  exports.prototype['financial_statement_date'] = undefined;
  /**
   * Timestamp when the company's information were updated the last time (may be full year only or full date with day, month and year)
   * @member {Date} report_date
   */
  exports.prototype['report_date'] = undefined;
  /**
   * Flag if this postal address is the only address available for the company
   * @member {Boolean} is_only_available_address
   */
  exports.prototype['is_only_available_address'] = undefined;
  /**
   * Flag if this postal address is a subsidiary of the company
   * @member {Boolean} is_subsidiary
   */
  exports.prototype['is_subsidiary'] = undefined;
  /**
   * Flag if the total number of employees includes principals
   * @member {Boolean} total_employees_including_principals_indicator
   */
  exports.prototype['total_employees_including_principals_indicator'] = undefined;
  /**
   * Flag if the company is already out of business
   * @member {Boolean} is_out_of_business
   */
  exports.prototype['is_out_of_business'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
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
   * Allowed values for the <code>status_description</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusDescriptionEnum = {
    /**
     * value: "company found"
     * @const
     */
    "company found": "company found",
    /**
     * value: "company not found"
     * @const
     */
    "company not found": "company not found",
    /**
     * value: "invalid duns number"
     * @const
     */
    "invalid duns number": "invalid duns number"  };

  /**
   * Allowed values for the <code>annual_turnover_indicator_code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AnnualTurnoverIndicatorCodeEnum = {
    /**
     * value: ""
     * @const
     */
    "": "",
    /**
     * value: "0"
     * @const
     */
    "0": "0",
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "3"
     * @const
     */
    "3": "3"  };

  /**
   * Allowed values for the <code>marketability_code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MarketabilityCodeEnum = {
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "3"
     * @const
     */
    "3": "3"  };

  /**
   * Allowed values for the <code>total_employees_indicator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TotalEmployeesIndicatorEnum = {
    /**
     * value: "0"
     * @const
     */
    "0": "0",
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2"  };

  /**
   * Allowed values for the <code>total_employees_physical_address_indicator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TotalEmployeesPhysicalAddressIndicatorEnum = {
    /**
     * value: "0"
     * @const
     */
    "0": "0",
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "3"
     * @const
     */
    "3": "3",
    /**
     * value: ""
     * @const
     */
    "": ""  };

  /**
   * Allowed values for the <code>import_export_indicator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ImportExportIndicatorEnum = {
    /**
     * value: ""
     * @const
     */
    "": "",
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "B"
     * @const
     */
    "B": "B",
    /**
     * value: "C"
     * @const
     */
    "C": "C",
    /**
     * value: "D"
     * @const
     */
    "D": "D",
    /**
     * value: "E"
     * @const
     */
    "E": "E",
    /**
     * value: "F"
     * @const
     */
    "F": "F",
    /**
     * value: "G"
     * @const
     */
    "G": "G",
    /**
     * value: "H"
     * @const
     */
    "H": "H"  };

  /**
   * Allowed values for the <code>business_structure_code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BusinessStructureCodeEnum = {
    /**
     * value: ""
     * @const
     */
    "": "",
    /**
     * value: "0"
     * @const
     */
    "0": "0",
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "4"
     * @const
     */
    "4": "4"  };

  /**
   * Allowed values for the <code>undeliverable_indicator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UndeliverableIndicatorEnum = {
    /**
     * value: "B"
     * @const
     */
    "B": "B",
    /**
     * value: "M"
     * @const
     */
    "M": "M",
    /**
     * value: "N"
     * @const
     */
    "N": "N",
    /**
     * value: "P"
     * @const
     */
    "P": "P",
    /**
     * value: "Y"
     * @const
     */
    "Y": "Y"  };


  return exports;
}));


