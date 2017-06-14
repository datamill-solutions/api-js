# datamill-js-client.VATApi

All URIs are relative to *https://api-beta.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkVAT**](VATApi.md#checkVAT) | **POST** /vat/check | Check vat number for correctness
[**resolveVAT**](VATApi.md#resolveVAT) | **POST** /vat/resolve | Try to resolve VAT number to company information
[**searchVAT**](VATApi.md#searchVAT) | **POST** /vat/search | Find VAT number and company information by name


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

var apiInstance = new datamill-js-client.VATApi();

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

var apiInstance = new datamill-js-client.VATApi();

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

var apiInstance = new datamill-js-client.VATApi();

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

