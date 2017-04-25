# DatamillForApplications.PhoneNumberApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkMobilePhone**](PhoneNumberApi.md#checkMobilePhone) | **POST** /phone/mobile/check | Verify mobile phone number
[**formatPhoneNumber**](PhoneNumberApi.md#formatPhoneNumber) | **POST** /phone/format | Parse, format and validate phone numbers
[**getPhoneCountryCode**](PhoneNumberApi.md#getPhoneCountryCode) | **POST** /phone/countrycode/get | International and national dial prefix


<a name="checkMobilePhone"></a>
# **checkMobilePhone**
> PhoneMobileCheckResponse checkMobilePhone(license, guid, phonenumber, countrycode)

Verify mobile phone number

Real time validation of mobile numbers without triggering a call of send a text message.

### Example
```javascript
var DatamillForApplications = require('datamill_for_applications');

var apiInstance = new DatamillForApplications.PhoneNumberApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var phonenumber = "phonenumber_example"; // String | Mobile phone number to be verified.

var countrycode = "countrycode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkMobilePhone(license, guid, phonenumber, countrycode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **phonenumber** | **String**| Mobile phone number to be verified. | 
 **countrycode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 

### Return type

[**PhoneMobileCheckResponse**](PhoneMobileCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="formatPhoneNumber"></a>
# **formatPhoneNumber**
> PhoneFormatResponse formatPhoneNumber(license, guid, phonenumber, countrycode, opts)

Parse, format and validate phone numbers

Validates a given phone number and converts it to the canonical form. In addition the type of the phone number is determined (e.g. \&quot;fixed line\&quot;, \&quot;mobile\&quot;, ...). The number is not checked for existence. 

### Example
```javascript
var DatamillForApplications = require('datamill_for_applications');

var apiInstance = new DatamillForApplications.PhoneNumberApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var phonenumber = "phonenumber_example"; // String | Phone number to be formatted and validated

var countrycode = "countrycode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.

var opts = { 
  'format': "format_example", // String | The custom format of the returning phone number if valid. The format is a combination of the following placeholders:  * **{countrycode}**: The international dial prefix for the country without leading zero or the \\\"+\\\" sign  * **{nationalcode}**: The regional dial prefix  * **{phonenumber}**: The phone number including the extension and without the international and regional prefix  * **{national_prefix}**: The national dial prefix including the leading zero  * **{international_prefix}**: The international dial prefix including leading zeros.  If no custom format is specified the following combination is used: **+{countrycode} {nationalcode} {phonenumber}** (canonical format) 
  'directDialingDelimiter': "directDialingDelimiter_example", // String | Optional define a special character (e.g. -) as delimiter between the phone number and the extension.
  'allowedDelimiters': "allowedDelimiters_example" // String | Optional collection of characters inside the specified phone number which are allowed for delimiter. The collection must be provided as **JSON** formatted string.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.formatPhoneNumber(license, guid, phonenumber, countrycode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **phonenumber** | **String**| Phone number to be formatted and validated | 
 **countrycode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 
 **format** | **String**| The custom format of the returning phone number if valid. The format is a combination of the following placeholders:  * **{countrycode}**: The international dial prefix for the country without leading zero or the \\\&quot;+\\\&quot; sign  * **{nationalcode}**: The regional dial prefix  * **{phonenumber}**: The phone number including the extension and without the international and regional prefix  * **{national_prefix}**: The national dial prefix including the leading zero  * **{international_prefix}**: The international dial prefix including leading zeros.  If no custom format is specified the following combination is used: **+{countrycode} {nationalcode} {phonenumber}** (canonical format)  | [optional] 
 **directDialingDelimiter** | **String**| Optional define a special character (e.g. -) as delimiter between the phone number and the extension. | [optional] 
 **allowedDelimiters** | **String**| Optional collection of characters inside the specified phone number which are allowed for delimiter. The collection must be provided as **JSON** formatted string. | [optional] 

### Return type

[**PhoneFormatResponse**](PhoneFormatResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getPhoneCountryCode"></a>
# **getPhoneCountryCode**
> PhoneCountryCodeGetResponse getPhoneCountryCode(license, guid, countrycode)

International and national dial prefix

Resolves the national and international dial prefix for a country specified by the given ISO country code.

### Example
```javascript
var DatamillForApplications = require('datamill_for_applications');

var apiInstance = new DatamillForApplications.PhoneNumberApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var countrycode = "countrycode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhoneCountryCode(license, guid, countrycode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **countrycode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 

### Return type

[**PhoneCountryCodeGetResponse**](PhoneCountryCodeGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

