# datamill-js-client.DUNSApi

All URIs are relative to *https://api-beta.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDUNSRating**](DUNSApi.md#getDUNSRating) | **POST** /business-data/duns/rating | Get marketing information by DUNS number
[**resolveDUNS**](DUNSApi.md#resolveDUNS) | **POST** /business-data/duns/resolve | Resolve company information by DUNS number
[**searchDUNS**](DUNSApi.md#searchDUNS) | **POST** /business-data/duns/search | Find DUNS number and company information by name


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

var apiInstance = new datamill-js-client.DUNSApi();

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

var apiInstance = new datamill-js-client.DUNSApi();

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

var apiInstance = new datamill-js-client.DUNSApi();

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

