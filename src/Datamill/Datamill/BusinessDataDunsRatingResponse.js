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
    root.datamill-js-client.BusinessDataDunsRatingResponse = factory(root.datamill-js-client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BusinessDataDunsRatingResponse model module.
   * @module Datamill/Datamill/BusinessDataDunsRatingResponse
   * @version 1.6.5
   */

  /**
   * Constructs a new <code>BusinessDataDunsRatingResponse</code>.
   * Response of successful transformation request for /business-data/duns/rating
   * @alias module:Datamill/Datamill/BusinessDataDunsRatingResponse
   * @class
   * @param status {module:Datamill/Datamill/BusinessDataDunsRatingResponse.StatusEnum} Flag if a company was found by its D-U-N-S number or not [**0**, **1**] 
   * @param statusDescription {module:Datamill/Datamill/BusinessDataDunsRatingResponse.StatusDescriptionEnum} Describes if a company was found or if the specified D-U-N-S number could not be resolved. Possible values are: **company not found**, **company found**, **invalid duns number** 
   */
  var exports = function(status, statusDescription) {
    var _this = this;

    _this['status'] = status;
    _this['status_description'] = statusDescription;

























































  };

  /**
   * Constructs a <code>BusinessDataDunsRatingResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Datamill/Datamill/BusinessDataDunsRatingResponse} obj Optional instance to populate.
   * @return {module:Datamill/Datamill/BusinessDataDunsRatingResponse} The populated <code>BusinessDataDunsRatingResponse</code> instance.
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
      if (data.hasOwnProperty('duns_number')) {
        obj['duns_number'] = ApiClient.convertToType(data['duns_number'], 'String');
      }
      if (data.hasOwnProperty('company_name')) {
        obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
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
      if (data.hasOwnProperty('country_name')) {
        obj['country_name'] = ApiClient.convertToType(data['country_name'], 'String');
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
      if (data.hasOwnProperty('ceo_name')) {
        obj['ceo_name'] = ApiClient.convertToType(data['ceo_name'], 'String');
      }
      if (data.hasOwnProperty('ceo_title')) {
        obj['ceo_title'] = ApiClient.convertToType(data['ceo_title'], 'String');
      }
      if (data.hasOwnProperty('sic_code')) {
        obj['sic_code'] = ApiClient.convertToType(data['sic_code'], 'String');
      }
      if (data.hasOwnProperty('sic_description')) {
        obj['sic_description'] = ApiClient.convertToType(data['sic_description'], 'String');
      }
      if (data.hasOwnProperty('sic_version')) {
        obj['sic_version'] = ApiClient.convertToType(data['sic_version'], 'String');
      }
      if (data.hasOwnProperty('year_started')) {
        obj['year_started'] = ApiClient.convertToType(data['year_started'], 'String');
      }
      if (data.hasOwnProperty('net_worth')) {
        obj['net_worth'] = ApiClient.convertToType(data['net_worth'], 'Number');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('currency_name')) {
        obj['currency_name'] = ApiClient.convertToType(data['currency_name'], 'String');
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
      if (data.hasOwnProperty('legal_form_code')) {
        obj['legal_form_code'] = ApiClient.convertToType(data['legal_form_code'], 'Number');
      }
      if (data.hasOwnProperty('legal_form_description')) {
        obj['legal_form_description'] = ApiClient.convertToType(data['legal_form_description'], 'String');
      }
      if (data.hasOwnProperty('report_date')) {
        obj['report_date'] = ApiClient.convertToType(data['report_date'], 'Date');
      }
      if (data.hasOwnProperty('is_out_of_business')) {
        obj['is_out_of_business'] = ApiClient.convertToType(data['is_out_of_business'], 'Boolean');
      }
      if (data.hasOwnProperty('is_branch')) {
        obj['is_branch'] = ApiClient.convertToType(data['is_branch'], 'Boolean');
      }
      if (data.hasOwnProperty('business_registration_number')) {
        obj['business_registration_number'] = ApiClient.convertToType(data['business_registration_number'], 'String');
      }
      if (data.hasOwnProperty('business_registration_type')) {
        obj['business_registration_type'] = ApiClient.convertToType(data['business_registration_type'], 'String');
      }
      if (data.hasOwnProperty('incorporation_year')) {
        obj['incorporation_year'] = ApiClient.convertToType(data['incorporation_year'], 'String');
      }
      if (data.hasOwnProperty('trade_styles')) {
        obj['trade_styles'] = ApiClient.convertToType(data['trade_styles'], ['String']);
      }
      if (data.hasOwnProperty('enquiry_duns')) {
        obj['enquiry_duns'] = ApiClient.convertToType(data['enquiry_duns'], 'String');
      }
      if (data.hasOwnProperty('sales')) {
        obj['sales'] = ApiClient.convertToType(data['sales'], 'Number');
      }
      if (data.hasOwnProperty('sales_estimated_description')) {
        obj['sales_estimated_description'] = ApiClient.convertToType(data['sales_estimated_description'], 'String');
      }
      if (data.hasOwnProperty('paydex_score')) {
        obj['paydex_score'] = ApiClient.convertToType(data['paydex_score'], 'Number');
      }
      if (data.hasOwnProperty('paydex_score_description')) {
        obj['paydex_score_description'] = ApiClient.convertToType(data['paydex_score_description'], 'String');
      }
      if (data.hasOwnProperty('paydex_norm')) {
        obj['paydex_norm'] = ApiClient.convertToType(data['paydex_norm'], 'Number');
      }
      if (data.hasOwnProperty('intangible_assets')) {
        obj['intangible_assets'] = ApiClient.convertToType(data['intangible_assets'], 'Number');
      }
      if (data.hasOwnProperty('max_credit_recommendation')) {
        obj['max_credit_recommendation'] = ApiClient.convertToType(data['max_credit_recommendation'], 'Number');
      }
      if (data.hasOwnProperty('dub_rating')) {
        obj['dub_rating'] = ApiClient.convertToType(data['dub_rating'], 'String');
      }
      if (data.hasOwnProperty('dub_rating_financial_strength')) {
        obj['dub_rating_financial_strength'] = ApiClient.convertToType(data['dub_rating_financial_strength'], 'String');
      }
      if (data.hasOwnProperty('dub_rating_risk')) {
        obj['dub_rating_risk'] = ApiClient.convertToType(data['dub_rating_risk'], 'String');
      }
      if (data.hasOwnProperty('dub_rating_risk_description')) {
        obj['dub_rating_risk_description'] = ApiClient.convertToType(data['dub_rating_risk_description'], 'String');
      }
      if (data.hasOwnProperty('has_open_claims')) {
        obj['has_open_claims'] = ApiClient.convertToType(data['has_open_claims'], 'Boolean');
      }
      if (data.hasOwnProperty('has_criminal_proceedings')) {
        obj['has_criminal_proceedings'] = ApiClient.convertToType(data['has_criminal_proceedings'], 'Boolean');
      }
      if (data.hasOwnProperty('has_disaster_event')) {
        obj['has_disaster_event'] = ApiClient.convertToType(data['has_disaster_event'], 'Boolean');
      }
      if (data.hasOwnProperty('has_financial_embarrassment')) {
        obj['has_financial_embarrassment'] = ApiClient.convertToType(data['has_financial_embarrassment'], 'Boolean');
      }
      if (data.hasOwnProperty('has_financial_legal_event')) {
        obj['has_financial_legal_event'] = ApiClient.convertToType(data['has_financial_legal_event'], 'Boolean');
      }
      if (data.hasOwnProperty('has_special_event')) {
        obj['has_special_event'] = ApiClient.convertToType(data['has_special_event'], 'Boolean');
      }
      if (data.hasOwnProperty('has_other_event')) {
        obj['has_other_event'] = ApiClient.convertToType(data['has_other_event'], 'Boolean');
      }
      if (data.hasOwnProperty('has_secured_filings')) {
        obj['has_secured_filings'] = ApiClient.convertToType(data['has_secured_filings'], 'Boolean');
      }
      if (data.hasOwnProperty('has_lawsuit')) {
        obj['has_lawsuit'] = ApiClient.convertToType(data['has_lawsuit'], 'Boolean');
      }
      if (data.hasOwnProperty('are_employees_estimated')) {
        obj['are_employees_estimated'] = ApiClient.convertToType(data['are_employees_estimated'], 'Boolean');
      }
      if (data.hasOwnProperty('are_sales_estimated')) {
        obj['are_sales_estimated'] = ApiClient.convertToType(data['are_sales_estimated'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Flag if a company was found by its D-U-N-S number or not [**0**, **1**] 
   * @member {module:Datamill/Datamill/BusinessDataDunsRatingResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Describes if a company was found or if the specified D-U-N-S number could not be resolved. Possible values are: **company not found**, **company found**, **invalid duns number** 
   * @member {module:Datamill/Datamill/BusinessDataDunsRatingResponse.StatusDescriptionEnum} status_description
   */
  exports.prototype['status_description'] = undefined;
  /**
   * The DUNS number of the company. The same ase the input parameter if company was found.
   * @member {String} duns_number
   */
  exports.prototype['duns_number'] = undefined;
  /**
   * The company's official name
   * @member {String} company_name
   */
  exports.prototype['company_name'] = undefined;
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
   * Country name together with the language information
   * @member {String} country_name
   */
  exports.prototype['country_name'] = undefined;
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
   * The version of SIC (either 1972, 1977 or 1987)
   * @member {String} sic_version
   */
  exports.prototype['sic_version'] = undefined;
  /**
   * Year of establishment
   * @member {String} year_started
   */
  exports.prototype['year_started'] = undefined;
  /**
   * The company's net worth (net value) in its local currency (may be NULL if unset)
   * @member {Number} net_worth
   */
  exports.prototype['net_worth'] = undefined;
  /**
   * The local currency code of the company's headquarters country
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The local currency name of the company's headquarters country
   * @member {String} currency_name
   */
  exports.prototype['currency_name'] = undefined;
  /**
   * The total number of employees (may be NULL if unset)
   * @member {Number} total_employees
   */
  exports.prototype['total_employees'] = undefined;
  /**
   * Indicator if subsidiaries are included or not **A**: subsidiaries are not included **B**: total value including subsidiaries 
   * @member {module:Datamill/Datamill/BusinessDataDunsRatingResponse.TotalEmployeesIndicatorEnum} total_employees_indicator
   */
  exports.prototype['total_employees_indicator'] = undefined;
  /**
   * Description of the total number of employees indicator
   * @member {String} total_employees_indicator_description
   */
  exports.prototype['total_employees_indicator_description'] = undefined;
  /**
   * Code of the company's legal form
   * @member {Number} legal_form_code
   */
  exports.prototype['legal_form_code'] = undefined;
  /**
   * Description of the legal form code
   * @member {String} legal_form_description
   */
  exports.prototype['legal_form_description'] = undefined;
  /**
   * Timestamp when the company's information were updated the last time
   * @member {Date} report_date
   */
  exports.prototype['report_date'] = undefined;
  /**
   * Flag if the company is already out of business
   * @member {Boolean} is_out_of_business
   */
  exports.prototype['is_out_of_business'] = undefined;
  /**
   * Flag if the company found is a branch or the main headquarter
   * @member {Boolean} is_branch
   */
  exports.prototype['is_branch'] = undefined;
  /**
   * Primary business identification number assigned to the business by government agency
   * @member {String} business_registration_number
   */
  exports.prototype['business_registration_number'] = undefined;
  /**
   * Type of identification number assigned to the business (e.g. Registration number, Judicial number, ...)
   * @member {String} business_registration_type
   */
  exports.prototype['business_registration_type'] = undefined;
  /**
   * Year business incorporated
   * @member {String} incorporation_year
   */
  exports.prototype['incorporation_year'] = undefined;
  /**
   * Array with other names of the company
   * @member {Array.<String>} trade_styles
   */
  exports.prototype['trade_styles'] = undefined;
  /**
   * The D-U-N-S number of the enquiry. May vary from the specified D-U-N-S number if the headquarters data are returned
   * @member {String} enquiry_duns
   */
  exports.prototype['enquiry_duns'] = undefined;
  /**
   * Net sales for the period after returns, allowances and discounts are deducted (may be NULL if unset)
   * @member {Number} sales
   */
  exports.prototype['sales'] = undefined;
  /**
   * Qualifies the annual sales volume (actual, estimated, forecast, projected or calculated)
   * @member {String} sales_estimated_description
   */
  exports.prototype['sales_estimated_description'] = undefined;
  /**
   * D&B® PAYDEX® for the last 2 months experiences (not for all countries) (may be NULL if unset)
   * @member {Number} paydex_score
   */
  exports.prototype['paydex_score'] = undefined;
  /**
   * Description about the D&B® PAYDEX® score (either Anticipate, Discount, Prompt, X days beyond terms or Unavailable) (may be NULL if unset)
   * @member {String} paydex_score_description
   */
  exports.prototype['paydex_score_description'] = undefined;
  /**
   * Industry D&B® PAYDEX® median or average (may be NULL if unset)
   * @member {Number} paydex_norm
   */
  exports.prototype['paydex_norm'] = undefined;
  /**
   * Total of intangible assets (may be NULL if unset)
   * @member {Number} intangible_assets
   */
  exports.prototype['intangible_assets'] = undefined;
  /**
   * Maximum amount of credit recommended by Dun & Bradstreet (Europe only) (may be NULL if unset)
   * @member {Number} max_credit_recommendation
   */
  exports.prototype['max_credit_recommendation'] = undefined;
  /**
   * Rating assigned by Dun & Bradstreet (meaning varies by country)
   * @member {String} dub_rating
   */
  exports.prototype['dub_rating'] = undefined;
  /**
   * Part of the Dun & Bradstreet rating which indicates the financial strength of the business (from - to in USD)
   * @member {String} dub_rating_financial_strength
   */
  exports.prototype['dub_rating_financial_strength'] = undefined;
  /**
   * Part of the Dun & Bradstreet rating which indicates the risk of a potential business cooperation: **1**: minimal risk, **2**: low risk, **3**: greater than average risk, **4**: significant level of risk, **<other values>**: insufficient information to define a risk indicator 
   * @member {String} dub_rating_risk
   */
  exports.prototype['dub_rating_risk'] = undefined;
  /**
   * Part of the Dun & Bradstreet rating which indicates the risk of a potential business cooperation: **1**: proceed with transaction - offer terms required, **2**: proceed with transaction, **3**: process with transaction, but monitor closely, **4**: take suitable assurances before extending credit, **<other values>**: no public information or D&B proprietary information 
   * @member {String} dub_rating_risk_description
   */
  exports.prototype['dub_rating_risk_description'] = undefined;
  /**
   * Flag if open claims, legal claims, liens, protested bills or equivalent exists
   * @member {Boolean} has_open_claims
   */
  exports.prototype['has_open_claims'] = undefined;
  /**
   * Flag if criminal proceedings exists
   * @member {Boolean} has_criminal_proceedings
   */
  exports.prototype['has_criminal_proceedings'] = undefined;
  /**
   * Flag if special events concerning disasters such as fire, hurricanes etc. exists
   * @member {Boolean} has_disaster_event
   */
  exports.prototype['has_disaster_event'] = undefined;
  /**
   * Flag if open bankruptcy, receivership liquidation or equivalent exists
   * @member {Boolean} has_financial_embarrassment
   */
  exports.prototype['has_financial_embarrassment'] = undefined;
  /**
   * Flag if special events available including financial embarrassment and legal fillings exists
   * @member {Boolean} has_financial_legal_event
   */
  exports.prototype['has_financial_legal_event'] = undefined;
  /**
   * Flag if special events are available concerning changes to operational aspects including name changes, management changes, etc.
   * @member {Boolean} has_special_event
   */
  exports.prototype['has_special_event'] = undefined;
  /**
   * Flag if special events exists that are not otherwise specified
   * @member {Boolean} has_other_event
   */
  exports.prototype['has_other_event'] = undefined;
  /**
   * Flag if open secured filing such as UCC filings, secured charges or equivalent exists
   * @member {Boolean} has_secured_filings
   */
  exports.prototype['has_secured_filings'] = undefined;
  /**
   * Flag if open suit(s), judgement(s), petitions or payment remarks exists
   * @member {Boolean} has_lawsuit
   */
  exports.prototype['has_lawsuit'] = undefined;
  /**
   * Flag if the total number of employees is estimated or actual
   * @member {Boolean} are_employees_estimated
   */
  exports.prototype['are_employees_estimated'] = undefined;
  /**
   * Flag if the annual sales volume is estimated or actual
   * @member {Boolean} are_sales_estimated
   */
  exports.prototype['are_sales_estimated'] = undefined;


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
   * Allowed values for the <code>total_employees_indicator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TotalEmployeesIndicatorEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "B"
     * @const
     */
    "B": "B"  };


  return exports;
}));


