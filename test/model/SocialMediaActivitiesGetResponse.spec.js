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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.datamill-js-client);
  }
}(this, function(expect, datamill-js-client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new datamill-js-client.SocialMediaActivitiesGetResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SocialMediaActivitiesGetResponse', function() {
    it('should create an instance of SocialMediaActivitiesGetResponse', function() {
      // uncomment below and update the code to test SocialMediaActivitiesGetResponse
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be.a(datamill-js-client.SocialMediaActivitiesGetResponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusDescription (base name: "status_description")', function() {
      // uncomment below and update the code to test the property statusDescription
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property bio (base name: "bio")', function() {
      // uncomment below and update the code to test the property bio
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxFollowers (base name: "max_followers")', function() {
      // uncomment below and update the code to test the property maxFollowers
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property sumFollowers (base name: "sum_followers")', function() {
      // uncomment below and update the code to test the property sumFollowers
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property education (base name: "education")', function() {
      // uncomment below and update the code to test the property education
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property employment (base name: "employment")', function() {
      // uncomment below and update the code to test the property employment
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property linkedin (base name: "linkedin")', function() {
      // uncomment below and update the code to test the property linkedin
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property xing (base name: "xing")', function() {
      // uncomment below and update the code to test the property xing
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property facebook (base name: "facebook")', function() {
      // uncomment below and update the code to test the property facebook
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property twitter (base name: "twitter")', function() {
      // uncomment below and update the code to test the property twitter
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property pinterest (base name: "pinterest")', function() {
      // uncomment below and update the code to test the property pinterest
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property instagram (base name: "instagram")', function() {
      // uncomment below and update the code to test the property instagram
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property youtube (base name: "youtube")', function() {
      // uncomment below and update the code to test the property youtube
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property googleplus (base name: "googleplus")', function() {
      // uncomment below and update the code to test the property googleplus
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property klout (base name: "klout")', function() {
      // uncomment below and update the code to test the property klout
      //var instane = new datamill-js-client.SocialMediaActivitiesGetResponse();
      //expect(instance).to.be();
    });

  });

}));