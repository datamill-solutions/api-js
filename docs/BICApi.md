# datamill-js-client.BICApi

All URIs are relative to *https://api-beta.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkBIC**](BICApi.md#checkBIC) | **POST** /bic/check | Check BIC for spelling


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

var apiInstance = new datamill-js-client.BICApi();

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

