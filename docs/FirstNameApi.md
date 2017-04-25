# DatamillForApplications.FirstNameApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFirstNames**](FirstNameApi.md#getFirstNames) | **POST** /firstname/get | Recognize and extract first names


<a name="getFirstNames"></a>
# **getFirstNames**
> FirstNameGetResponse getFirstNames(license, guid, name)

Recognize and extract first names

Detects all first names in a given sting (e.g. a person&#39;s name) and extracts them. (Works only with common first names in Germany, Austria and Switzerland) 

### Example
```javascript
var DatamillForApplications = require('datamill_for_applications');

var apiInstance = new DatamillForApplications.FirstNameApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var name = "name_example"; // String | Full name to detect all first names and extract them


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFirstNames(license, guid, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **name** | **String**| Full name to detect all first names and extract them | 

### Return type

[**FirstNameGetResponse**](FirstNameGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

