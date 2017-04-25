# DatamillForApplications.GenderApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGender**](GenderApi.md#getGender) | **POST** /gender/get | Recognize gender by first name
[**getGenderExtended**](GenderApi.md#getGenderExtended) | **POST** /gender/extended/get | Recognize gender by first name (advanced)


<a name="getGender"></a>
# **getGender**
> GenderGetResponse getGender(license, guid, firstname)

Recognize gender by first name

Recognizes the gender of a given first name. (Works only with common first names in Germany, Austria and Switzerland) 

### Example
```javascript
var DatamillForApplications = require('datamill_for_applications');

var apiInstance = new DatamillForApplications.GenderApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var firstname = "firstname_example"; // String | First name to recognize gender.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGender(license, guid, firstname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **firstname** | **String**| First name to recognize gender. | 

### Return type

[**GenderGetResponse**](GenderGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getGenderExtended"></a>
# **getGenderExtended**
> GenderExtendedGetResponse getGenderExtended(license, guid, firstname, countrycode)

Recognize gender by first name (advanced)

Recognizes the gender of a given first name considering country specific peculiarities.

### Example
```javascript
var DatamillForApplications = require('datamill_for_applications');

var apiInstance = new DatamillForApplications.GenderApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var firstname = "firstname_example"; // String | First name to recognize gender.

var countrycode = "countrycode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenderExtended(license, guid, firstname, countrycode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **firstname** | **String**| First name to recognize gender. | 
 **countrycode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 

### Return type

[**GenderExtendedGetResponse**](GenderExtendedGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

