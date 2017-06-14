# datamill-js-client.FirstNameApi

All URIs are relative to *https://api-beta.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFirstNames**](FirstNameApi.md#getFirstNames) | **POST** /firstname/get | Recognize and extract first names


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

var apiInstance = new datamill-js-client.FirstNameApi();

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

