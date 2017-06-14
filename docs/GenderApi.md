# datamill-js-client.GenderApi

All URIs are relative to *https://api-beta.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGender**](GenderApi.md#getGender) | **POST** /gender/get | Recognize gender by first name
[**getGenderExtended**](GenderApi.md#getGenderExtended) | **POST** /gender/extended/get | Recognize gender by first name (advanced)


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

var apiInstance = new datamill-js-client.GenderApi();

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

var apiInstance = new datamill-js-client.GenderApi();

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

