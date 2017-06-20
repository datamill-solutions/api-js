# datamill-js-client.DataMillApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkBIC**](DataMillApi.md#checkBIC) | **POST** /bic/check | Check BIC for spelling
[**checkEmailDomain**](DataMillApi.md#checkEmailDomain) | **POST** /email/domain/check | Check email syntax and mail server domain
[**checkEmailMailbox**](DataMillApi.md#checkEmailMailbox) | **POST** /email/extended/check | Check email syntax, mail server domain and mailbox itself
[**checkEmailSyntax**](DataMillApi.md#checkEmailSyntax) | **POST** /email/syntax/check | Check email syntax
[**checkIBAN**](DataMillApi.md#checkIBAN) | **POST** /iban/check | Check IBAN for spelling
[**checkMobilePhone**](DataMillApi.md#checkMobilePhone) | **POST** /phone/mobile/check | Verify mobile phone number
[**checkUrl**](DataMillApi.md#checkUrl) | **POST** /url/check | Information about web resources
[**checkVAT**](DataMillApi.md#checkVAT) | **POST** /vat/check | Check vat number for correctness
[**convertCapitalFirst**](DataMillApi.md#convertCapitalFirst) | **POST** /convert/capitalfirst | Convert any string to capitalize words
[**convertLowerCase**](DataMillApi.md#convertLowerCase) | **POST** /convert/lowercase | Convert any string to lower case
[**convertUpperCase**](DataMillApi.md#convertUpperCase) | **POST** /convert/uppercase | Convert any string to upper case
[**convertWrap**](DataMillApi.md#convertWrap) | **POST** /convert/wrap | Wrap text
[**extractHouseNumber**](DataMillApi.md#extractHouseNumber) | **POST** /address/housenumber/extract | Try to extract house number from street information
[**formatPhoneNumber**](DataMillApi.md#formatPhoneNumber) | **POST** /phone/format | Parse, format and validate phone numbers
[**getDUNSRating**](DataMillApi.md#getDUNSRating) | **POST** /business-data/duns/rating | Get marketing information by DUNS number
[**getFirstNames**](DataMillApi.md#getFirstNames) | **POST** /firstname/get | Recognize and extract first names
[**getGender**](DataMillApi.md#getGender) | **POST** /gender/get | Recognize gender by first name
[**getGenderExtended**](DataMillApi.md#getGenderExtended) | **POST** /gender/extended/get | Recognize gender by first name (advanced)
[**getPhoneCountryCode**](DataMillApi.md#getPhoneCountryCode) | **POST** /phone/countrycode/get | International and national dial prefix
[**getPhoneticCode**](DataMillApi.md#getPhoneticCode) | **POST** /phonetic/code/get | Calculate phonetic codes of a given text
[**getSocialMediaActivities**](DataMillApi.md#getSocialMediaActivities) | **POST** /social-media/activities/get | Retrieve social media data by email address
[**locateAddress**](DataMillApi.md#locateAddress) | **POST** /address/locate | Reverse address lookup
[**resolveDUNS**](DataMillApi.md#resolveDUNS) | **POST** /business-data/duns/resolve | Resolve company information by DUNS number
[**resolveVAT**](DataMillApi.md#resolveVAT) | **POST** /vat/resolve | Try to resolve VAT number to company information
[**searchAddress**](DataMillApi.md#searchAddress) | **POST** /address/search | Lookup physical postal address
[**searchAddressMultiple**](DataMillApi.md#searchAddressMultiple) | **POST** /address/search/multiple | Address lookup with multiple possible results
[**searchDUNS**](DataMillApi.md#searchDUNS) | **POST** /business-data/duns/search | Find DUNS number and company information by name
[**searchUndeliverableContact**](DataMillApi.md#searchUndeliverableContact) | **POST** /business-data/undeliverable-contacts/search | Find moved and deceased contacts
[**searchVAT**](DataMillApi.md#searchVAT) | **POST** /vat/search | Find VAT number and company information by name


<a name="checkBIC"></a>
# **checkBIC**
> BicCheckResponse checkBIC(bic)

Check BIC for spelling

Checks the spelling of a given BIC (Business Identifier Code), also known as SWIFT code which is defined in the ISO 9362. The function does not verify if the BIC really exists, instead the format is checked for validity only. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var bic = "bic_example"; // String | BIC to be checked


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkBIC(bic, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bic** | **String**| BIC to be checked | 

### Return type

[**BicCheckResponse**](BicCheckResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="checkEmailDomain"></a>
# **checkEmailDomain**
> EmailDomainCheckResponse checkEmailDomain(email)

Check email syntax and mail server domain

Checks the spelling of an email address to detect typos and spelling errors. In addition if the email address has a valid syntax its mail server is determined and checked for existence. The mail server itself will be compared with a list of disposable providers to detect addresses with a short lifetime. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var email = "email_example"; // String | The email address to be checked


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkEmailDomain(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The email address to be checked | 

### Return type

[**EmailDomainCheckResponse**](EmailDomainCheckResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="checkEmailMailbox"></a>
# **checkEmailMailbox**
> EmailExtendedCheckResponse checkEmailMailbox(email)

Check email syntax, mail server domain and mailbox itself

Checks the spelling of an email address to detect typos and spelling errors. If the email address has a valid syntax its mail server is determined and checked for existence. The mail server itself will be compared with a list of disposable providers to detect addresses with a short lifetime. Additionally the mail server will be checked if an email for the given mailbox can be received. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var email = "email_example"; // String | The email address to be checked


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkEmailMailbox(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The email address to be checked | 

### Return type

[**EmailExtendedCheckResponse**](EmailExtendedCheckResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="checkEmailSyntax"></a>
# **checkEmailSyntax**
> EmailSyntaxCheckResponse checkEmailSyntax(email)

Check email syntax

Checks the spelling of an email address to detect typos and spelling errors. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var email = "email_example"; // String | The email address to be checked


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkEmailSyntax(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The email address to be checked | 

### Return type

[**EmailSyntaxCheckResponse**](EmailSyntaxCheckResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="checkIBAN"></a>
# **checkIBAN**
> IbanCheckResponse checkIBAN(iban)

Check IBAN for spelling

Checks the spelling, country code and checksum of an IBAN (International Bank Account Number). The IBAN is an internationally agreed system of identifying bank accounts across national borders. The function does not verify if the IBAN really exists, instead the format is checked for validity only. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var iban = "iban_example"; // String | IBAN to be checked.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkIBAN(iban, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iban** | **String**| IBAN to be checked. | 

### Return type

[**IbanCheckResponse**](IbanCheckResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="checkMobilePhone"></a>
# **checkMobilePhone**
> PhoneMobileCheckResponse checkMobilePhone(phonenumber, countrycode)

Verify mobile phone number

Real time validation of mobile numbers without triggering a call of send a text message.

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var phonenumber = "phonenumber_example"; // String | Mobile phone number to be verified.

var countrycode = "countrycode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkMobilePhone(phonenumber, countrycode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phonenumber** | **String**| Mobile phone number to be verified. | 
 **countrycode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 

### Return type

[**PhoneMobileCheckResponse**](PhoneMobileCheckResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="checkUrl"></a>
# **checkUrl**
> UrlCheckResponse checkUrl(url, opts)

Information about web resources

Fetches the resource of a given url and checks if it is available. Only websites using HTTP/HTTPS are allowed. IP addresses and ports other than 80/443 are not permitted and will be ignored. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var url = "url_example"; // String | The url to be checked (e.g. any website)

var opts = { 
  'maxRedirects': "10" // String | The maximum amount of redirects until the lookup for the root resource will be stopped (default **10**)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkUrl(url, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| The url to be checked (e.g. any website) | 
 **maxRedirects** | **String**| The maximum amount of redirects until the lookup for the root resource will be stopped (default **10**) | [optional] [default to 10]

### Return type

[**UrlCheckResponse**](UrlCheckResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="checkVAT"></a>
# **checkVAT**
> VatCheckResponse checkVAT(vatnumber)

Check vat number for correctness

Checks if a given VAT (Value Added Tax) identification number is valid or not. Only VAT numbers of companies within the European Union can be verified. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var vatnumber = "vatnumber_example"; // String | The VAT number of a company within the European Union


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkVAT(vatnumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vatnumber** | **String**| The VAT number of a company within the European Union | 

### Return type

[**VatCheckResponse**](VatCheckResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertCapitalFirst"></a>
# **convertCapitalFirst**
> ConvertCapitalFirstResponse convertCapitalFirst(text)

Convert any string to capitalize words

Changes any word of a given text so that the first letter is capitalized and all the others turned into lower case. Special proper names, like \&quot;DiCaprio\&quot; are detected and ignored. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var text = "text_example"; // String | Free-form text to be converted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertCapitalFirst(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Free-form text to be converted. | 

### Return type

[**ConvertCapitalFirstResponse**](ConvertCapitalFirstResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertLowerCase"></a>
# **convertLowerCase**
> ConvertLowerCaseResponse convertLowerCase(text)

Convert any string to lower case

Converts all letters of any word in a given string in the respective lowercase. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var text = "text_example"; // String | Free-form text to be converted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertLowerCase(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Free-form text to be converted. | 

### Return type

[**ConvertLowerCaseResponse**](ConvertLowerCaseResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertUpperCase"></a>
# **convertUpperCase**
> ConvertUpperCaseResponse convertUpperCase(text)

Convert any string to upper case

Converts all letters of any word in a given string in the respective capital. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var text = "text_example"; // String | Free-form text to be converted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertUpperCase(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Free-form text to be converted. | 

### Return type

[**ConvertUpperCaseResponse**](ConvertUpperCaseResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertWrap"></a>
# **convertWrap**
> ConvertWrapResponse convertWrap(text, limit, opts)

Wrap text

Breaks a text into multiple newlines. Each line will be separated by a \\r (CR, ASCII 13) and \\n (LF, ASCII 10) character. The number of characters a line break will be inserted after can be justified. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var text = "text_example"; // String | Fre-form text to be wrapped.

var limit = 56; // Number | The number of characters a linefeed will be inserted after (maximum character length per line).

var opts = { 
  'mode': "mode_example", // String | The mode how the linefeed will be inserted. Either before (default) the current word, after the current word or exactly after the character. Possible values are **before** to break before last word, **after** to break after last word, **exact** to break at limit. 
  'linebreak': "linebreak_example" // String | Defines which line separator should be used. Possible values are **full** for *\\r\\n*, **single** for *\\n*, **html** for *&lt;br&gt;* 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertWrap(text, limit, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Fre-form text to be wrapped. | 
 **limit** | **Number**| The number of characters a linefeed will be inserted after (maximum character length per line). | 
 **mode** | **String**| The mode how the linefeed will be inserted. Either before (default) the current word, after the current word or exactly after the character. Possible values are **before** to break before last word, **after** to break after last word, **exact** to break at limit.  | [optional] 
 **linebreak** | **String**| Defines which line separator should be used. Possible values are **full** for *\\r\\n*, **single** for *\\n*, **html** for *&amp;lt;br&amp;gt;*  | [optional] 

### Return type

[**ConvertWrapResponse**](ConvertWrapResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="extractHouseNumber"></a>
# **extractHouseNumber**
> AddressHouseNumberExtractResponse extractHouseNumber(opts)

Try to extract house number from street information

Find and extract the house number based on partial address information. The result is an extracted street name, house number and additional house number information (e.g. Apartment, Floor, Room). It is necessary to provide street and housenumber, either in street field or separated in street and house number field. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var opts = { 
  'street': "street_example", // String | Free-form text containing the street name and optional the house number including additional house number information. The key is required if housenumber is empty or unset.
  'housenumber': "housenumber_example" // String | Free-form text containing the house number including additional house number information and optional the street name. The key is required if street is empty or unset.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.extractHouseNumber(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **street** | **String**| Free-form text containing the street name and optional the house number including additional house number information. The key is required if housenumber is empty or unset. | [optional] 
 **housenumber** | **String**| Free-form text containing the house number including additional house number information and optional the street name. The key is required if street is empty or unset. | [optional] 

### Return type

[**AddressHouseNumberExtractResponse**](AddressHouseNumberExtractResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="formatPhoneNumber"></a>
# **formatPhoneNumber**
> PhoneFormatResponse formatPhoneNumber(phonenumber, countrycode, opts)

Parse, format and validate phone numbers

Validates a given phone number and converts it to the canonical form. In addition the type of the phone number is determined (e.g. \&quot;fixed line\&quot;, \&quot;mobile\&quot;, ...). The number is not checked for existence. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

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
apiInstance.formatPhoneNumber(phonenumber, countrycode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phonenumber** | **String**| Phone number to be formatted and validated | 
 **countrycode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 
 **format** | **String**| The custom format of the returning phone number if valid. The format is a combination of the following placeholders:  * **{countrycode}**: The international dial prefix for the country without leading zero or the \\\&quot;+\\\&quot; sign  * **{nationalcode}**: The regional dial prefix  * **{phonenumber}**: The phone number including the extension and without the international and regional prefix  * **{national_prefix}**: The national dial prefix including the leading zero  * **{international_prefix}**: The international dial prefix including leading zeros.  If no custom format is specified the following combination is used: **+{countrycode} {nationalcode} {phonenumber}** (canonical format)  | [optional] 
 **directDialingDelimiter** | **String**| Optional define a special character (e.g. -) as delimiter between the phone number and the extension. | [optional] 
 **allowedDelimiters** | **String**| Optional collection of characters inside the specified phone number which are allowed for delimiter. The collection must be provided as **JSON** formatted string. | [optional] 

### Return type

[**PhoneFormatResponse**](PhoneFormatResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getDUNSRating"></a>
# **getDUNSRating**
> BusinessDataDunsRatingResponse getDUNSRating(dunsNumber, reasonCode)

Get marketing information by DUNS number

Get marketing information about a company (credit rating, PAYDEX score, demographic information, ...) based on the company&#39;s D-U-N-S number. In order to get the marketing information each request requires a reason. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var dunsNumber = "dunsNumber_example"; // String | The D-U-N-S number you are looking for detailed information

var reasonCode = "reasonCode_example"; // String | Unique code describing the reason why you like to get detailed information about the specified company. Possible codes are:  * **1**: Credit decisions  * **2**: Credit check (intended business connection)  * **3**: Credit check (ongoing business connection)  * **4**: Debt collections  * **5**: Commercial credit insurance  * **6**: Insurance contract  * **7**: Leasing agreement  * **8**: Rental agreement 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDUNSRating(dunsNumber, reasonCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dunsNumber** | **String**| The D-U-N-S number you are looking for detailed information | 
 **reasonCode** | **String**| Unique code describing the reason why you like to get detailed information about the specified company. Possible codes are:  * **1**: Credit decisions  * **2**: Credit check (intended business connection)  * **3**: Credit check (ongoing business connection)  * **4**: Debt collections  * **5**: Commercial credit insurance  * **6**: Insurance contract  * **7**: Leasing agreement  * **8**: Rental agreement  | 

### Return type

[**BusinessDataDunsRatingResponse**](BusinessDataDunsRatingResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getFirstNames"></a>
# **getFirstNames**
> FirstNameGetResponse getFirstNames(name)

Recognize and extract first names

Detects all first names in a given sting (e.g. a person&#39;s name) and extracts them. (Works only with common first names in Germany, Austria and Switzerland) 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var name = "name_example"; // String | Full name to detect all first names and extract them


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFirstNames(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Full name to detect all first names and extract them | 

### Return type

[**FirstNameGetResponse**](FirstNameGetResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getGender"></a>
# **getGender**
> GenderGetResponse getGender(firstname)

Recognize gender by first name

Recognizes the gender of a given first name. (Works only with common first names in Germany, Austria and Switzerland) 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var firstname = "firstname_example"; // String | First name to recognize gender.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGender(firstname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstname** | **String**| First name to recognize gender. | 

### Return type

[**GenderGetResponse**](GenderGetResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getGenderExtended"></a>
# **getGenderExtended**
> GenderExtendedGetResponse getGenderExtended(firstname, countrycode)

Recognize gender by first name (advanced)

Recognizes the gender of a given first name considering country specific peculiarities.

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var firstname = "firstname_example"; // String | First name to recognize gender.

var countrycode = "countrycode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenderExtended(firstname, countrycode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstname** | **String**| First name to recognize gender. | 
 **countrycode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 

### Return type

[**GenderExtendedGetResponse**](GenderExtendedGetResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getPhoneCountryCode"></a>
# **getPhoneCountryCode**
> PhoneCountryCodeGetResponse getPhoneCountryCode(countrycode)

International and national dial prefix

Resolves the national and international dial prefix for a country specified by the given ISO country code.

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var countrycode = "countrycode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhoneCountryCode(countrycode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countrycode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 

### Return type

[**PhoneCountryCodeGetResponse**](PhoneCountryCodeGetResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getPhoneticCode"></a>
# **getPhoneticCode**
> PhoneticCodeGetResponse getPhoneticCode(text, opts)

Calculate phonetic codes of a given text

Get the phonetic code of a given text. Currently three phonetic algorithms are available:  * **Soundex** (algorithm code 1)  * **Colcogne Phonetic** (algorithm code 2)  * **Metaphon** (algorithm code 3) 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var text = "text_example"; // String | The text which should be converted. Each word will be converted separatly and generate a single entry in the result. 

var opts = { 
  'phoneticAlgorithm': 56 // Number | The phonetic algorithm which should be applied. If no algorithm code will be provided **Soundex** will be used. Codes:  * 1 = Soundex  * 2 = Colcogne Phonetic  * 3 = Metaphon 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhoneticCode(text, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| The text which should be converted. Each word will be converted separatly and generate a single entry in the result.  | 
 **phoneticAlgorithm** | **Number**| The phonetic algorithm which should be applied. If no algorithm code will be provided **Soundex** will be used. Codes:  * 1 &#x3D; Soundex  * 2 &#x3D; Colcogne Phonetic  * 3 &#x3D; Metaphon  | [optional] 

### Return type

[**PhoneticCodeGetResponse**](PhoneticCodeGetResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getSocialMediaActivities"></a>
# **getSocialMediaActivities**
> SocialMediaActivitiesGetResponse getSocialMediaActivities(email)

Retrieve social media data by email address

Get the number of followers and account information of multiple social media platforms from individual email addresses. If the social media information for a specific email address aren&#39;t fetched yet the request will be queued and the data will be available within the next 12 hours. Please consider that the response of a social media platform may be empty because of restricted access (privacy setting of the person being checked). The following social media platforms are currently checked:  * **LinkedIn**  * **XING**  * **Facebook**  * **Twitter**  * **Pinterest**  * **Instagram**  * **Youtube**  * **Google Plus**  * **Klout** 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var email = "email_example"; // String | The person's email address being checked on mentioned social media plattforms


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSocialMediaActivities(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The person&#39;s email address being checked on mentioned social media plattforms | 

### Return type

[**SocialMediaActivitiesGetResponse**](SocialMediaActivitiesGetResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="locateAddress"></a>
# **locateAddress**
> AddressSearchResponse locateAddress(latitude, longitude, opts)

Reverse address lookup

Resolve an address corresponding to a given geo-coordinate. The result is a single record which matches the given latitude and longitude. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var latitude = "latitude_example"; // String | Latitude of the address (use a dot as decimal point)

var longitude = "longitude_example"; // String | Longitude of the address (use a dot as decimal point)

var opts = { 
  'locale': "locale_example" // String | The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.locateAddress(latitude, longitude, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **String**| Latitude of the address (use a dot as decimal point) | 
 **longitude** | **String**| Longitude of the address (use a dot as decimal point) | 
 **locale** | **String**| The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code). | [optional] 

### Return type

[**AddressSearchResponse**](AddressSearchResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="resolveDUNS"></a>
# **resolveDUNS**
> BusinessDataDunsResolveResponse resolveDUNS(dunsNumber, reasonCode)

Resolve company information by DUNS number

Resolves company information (official name, postal address, annual turnover, number of employees, ...) based on  the company&#39;s D-U-N-S number. In order to get the company information each request requires a reason. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var dunsNumber = "dunsNumber_example"; // String | The D-U-N-S number you are looking for detailed information

var reasonCode = "reasonCode_example"; // String | Unique code describing the reason why you like to get detailed information about the specified company. Possible codes are:  * **1**: Credit decisions  * **2**: Credit check (intended business connection)  * **3**: Credit check (ongoing business connection)  * **4**: Debt collections  * **5**: Commercial credit insurance  * **6**: Insurance contract  * **7**: Leasing agreement  * **8**: Rental agreement 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resolveDUNS(dunsNumber, reasonCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dunsNumber** | **String**| The D-U-N-S number you are looking for detailed information | 
 **reasonCode** | **String**| Unique code describing the reason why you like to get detailed information about the specified company. Possible codes are:  * **1**: Credit decisions  * **2**: Credit check (intended business connection)  * **3**: Credit check (ongoing business connection)  * **4**: Debt collections  * **5**: Commercial credit insurance  * **6**: Insurance contract  * **7**: Leasing agreement  * **8**: Rental agreement  | 

### Return type

[**BusinessDataDunsResolveResponse**](BusinessDataDunsResolveResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="resolveVAT"></a>
# **resolveVAT**
> VatResolveResponse resolveVAT(vatnumber, opts)

Try to resolve VAT number to company information

Resolves company information (company name and postal address) based on the company&#39;s VAT (Value Added Tax) identification number. Only VAT numbers of companies within the European Union can be verified and resolved. Some countries have access restrictions and may not deliver the full company information. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var vatnumber = "vatnumber_example"; // String | The VAT number of a company within the European Union

var opts = { 
  'locale': "locale_example" // String | The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resolveVAT(vatnumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vatnumber** | **String**| The VAT number of a company within the European Union | 
 **locale** | **String**| The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code). | [optional] 

### Return type

[**VatResolveResponse**](VatResolveResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="searchAddress"></a>
# **searchAddress**
> AddressSearchResponse searchAddress(opts)

Lookup physical postal address

Find geo-location based on unstructured (single-line entry, un-qualified) or based on structured (qualified) address information. The result is a single record which matches the given geo-location. The response depends on the data quality of the request. If the request contains too many typos the response keys may be empty.  The unstructured query determines each address part by its own and afterwards finds the closest geo-location. It should only be used if you do not know which address information fits in which query parameter. The structured query provides an additional logic for specific countries to improve the result of the determined geo-location. Please consider that if you do not provide a country name/code the result may end in a different country because the same city + street combination may exist in multiple countries. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var opts = { 
  'address': "address_example", // String | Unstructured query parameter. Free-form text containing address elements (e.g. city, postal code, street, house number). Each element is separated using a whitespace. The order of the elements does not matter. You can specify the 'address' parameter by itself or you can specify it with other parameters to narrow your search. 
  'country': "country_example", // String | Specify the country using the country code (ISO 3166-1 alpha-3) or the country name.
  'state': "state_example", // String | First subdivision level below the country. Specify the state using full or abbreviated notation.
  'county': "county_example", // String | Second subdivision level below the country. Depending on the admin hierarchy in a country this level might not be applicable.
  'city': "city_example", // String | The city name.
  'zip': "zip_example", // String | Postal code defined by the government of the country.
  'district': "district_example", // String | Subdivision level below the city. Depending on the admin hierarchy in a country this level might not be applicable.
  'street': "street_example", // String | The street name.
  'housenumber': "housenumber_example", // String | The house number or building name.
  'locale': "locale_example" // String | The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAddress(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Unstructured query parameter. Free-form text containing address elements (e.g. city, postal code, street, house number). Each element is separated using a whitespace. The order of the elements does not matter. You can specify the &#39;address&#39; parameter by itself or you can specify it with other parameters to narrow your search.  | [optional] 
 **country** | **String**| Specify the country using the country code (ISO 3166-1 alpha-3) or the country name. | [optional] 
 **state** | **String**| First subdivision level below the country. Specify the state using full or abbreviated notation. | [optional] 
 **county** | **String**| Second subdivision level below the country. Depending on the admin hierarchy in a country this level might not be applicable. | [optional] 
 **city** | **String**| The city name. | [optional] 
 **zip** | **String**| Postal code defined by the government of the country. | [optional] 
 **district** | **String**| Subdivision level below the city. Depending on the admin hierarchy in a country this level might not be applicable. | [optional] 
 **street** | **String**| The street name. | [optional] 
 **housenumber** | **String**| The house number or building name. | [optional] 
 **locale** | **String**| The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code). | [optional] 

### Return type

[**AddressSearchResponse**](AddressSearchResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="searchAddressMultiple"></a>
# **searchAddressMultiple**
> AddressSearchMultipleResponse searchAddressMultiple(address, opts)

Address lookup with multiple possible results

Find multiple geo-locations based on unstructured (single-line entry, un-qualified) address information. The result is a set of records which matches the given geo-location. The response depends on the data quality of the request. If the request contains too many typo errors the response keys may be empty. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var address = "address_example"; // String | Free-form text containing address elements (e.g. city, postal code, street, house number). Each element is separated using a whitespace. The order of the elements does not matter.

var opts = { 
  'locale': "locale_example" // String | The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAddressMultiple(address, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Free-form text containing address elements (e.g. city, postal code, street, house number). Each element is separated using a whitespace. The order of the elements does not matter. | 
 **locale** | **String**| The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code). | [optional] 

### Return type

[**AddressSearchMultipleResponse**](AddressSearchMultipleResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="searchDUNS"></a>
# **searchDUNS**
> BusinessDataDunsSearchResponse searchDUNS(countryCode, , opts)

Find DUNS number and company information by name

Finds the D-U-N-S number and additional company information by the company&#39;s name. Optionally a filter for the headquarters location can be added to get a more accurate response. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var countryCode = "countryCode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.

var opts = { 
  'companyName': "companyName_example", // String | The company name you are looking for or relevant parts of it (may be empty if the duns_number is set)
  'dunsNumber': "dunsNumber_example", // String | The D-U-N-S number you are looking for detailed information (may be empty if the company_name and country_code are set)
  'state': "state_example", // String | Filter to get only companies which matches the specified state (required for United States)
  'city': "city_example", // String | Filter to get only companies which matches the specified city
  'zip': "zip_example", // String | Filter to get only companies which matches the specified postal code
  'street': "street_example" // String | Filter to get only companies which matches the specified street
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchDUNS(countryCode, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 
 **companyName** | **String**| The company name you are looking for or relevant parts of it (may be empty if the duns_number is set) | [optional] 
 **dunsNumber** | **String**| The D-U-N-S number you are looking for detailed information (may be empty if the company_name and country_code are set) | [optional] 
 **state** | **String**| Filter to get only companies which matches the specified state (required for United States) | [optional] 
 **city** | **String**| Filter to get only companies which matches the specified city | [optional] 
 **zip** | **String**| Filter to get only companies which matches the specified postal code | [optional] 
 **street** | **String**| Filter to get only companies which matches the specified street | [optional] 

### Return type

[**BusinessDataDunsSearchResponse**](BusinessDataDunsSearchResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="searchUndeliverableContact"></a>
# **searchUndeliverableContact**
> BusinessDataUndeliverableContactsResponse searchUndeliverableContact(firstName, lastName, countryCode, zip, street, reason)

Find moved and deceased contacts

Checks if the postal address of a person identified by its full name is invalid (moved to a new address or deceased). This function does NOT verify/check if a known postal address is still valid, instead it only checks if the person is moved to another address or is deceased and therefore a mail will result in an undeliverable state. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var firstName = "firstName_example"; // String | The person's first name

var lastName = "lastName_example"; // String | The person's last name

var countryCode = "countryCode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.

var zip = "zip_example"; // String | Last known postal code the person lives in

var street = "street_example"; // String | Last known street name the person lives in

var reason = "reason_example"; // String | Free-form text written in english why you submit the query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUndeliverableContact(firstName, lastName, countryCode, zip, street, reason, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**| The person&#39;s first name | 
 **lastName** | **String**| The person&#39;s last name | 
 **countryCode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 
 **zip** | **String**| Last known postal code the person lives in | 
 **street** | **String**| Last known street name the person lives in | 
 **reason** | **String**| Free-form text written in english why you submit the query. | 

### Return type

[**BusinessDataUndeliverableContactsResponse**](BusinessDataUndeliverableContactsResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="searchVAT"></a>
# **searchVAT**
> VatSearchResponse searchVAT(company, opts)

Find VAT number and company information by name

Finds the VAT number and additional company information by the company&#39;s name and headquarters location. The function returns multiple results if similar companies are found in the same city. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DataMillApi();

var company = "company_example"; // String | The name of an company. You may enter the fully qualified name or only partial information.

var opts = { 
  'city': "city_example", // String | The city where the company's headquarters is located.
  'countryCode': "countryCode_example", // String | ISO 3166-1 alpha-2 country code to specify in which country to look for. Possible countries are: **AT, BE, CZ, DK, FI, GB, GR, HU, IT, LU, MT, SI** 
  'limit': "10", // String | The maximum amount of results returned if multiple companies are found. Default value is **10**. 
  'minScore': "0.8" // String | Threshold to set the minimum score rate of results being returned. Default: **0.8** 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchVAT(company, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **String**| The name of an company. You may enter the fully qualified name or only partial information. | 
 **city** | **String**| The city where the company&#39;s headquarters is located. | [optional] 
 **countryCode** | **String**| ISO 3166-1 alpha-2 country code to specify in which country to look for. Possible countries are: **AT, BE, CZ, DK, FI, GB, GR, HU, IT, LU, MT, SI**  | [optional] 
 **limit** | **String**| The maximum amount of results returned if multiple companies are found. Default value is **10**.  | [optional] [default to 10]
 **minScore** | **String**| Threshold to set the minimum score rate of results being returned. Default: **0.8**  | [optional] [default to 0.8]

### Return type

[**VatSearchResponse**](VatSearchResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

