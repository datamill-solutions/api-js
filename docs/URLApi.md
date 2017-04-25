# datamill-js-client.URLApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkUrl**](URLApi.md#checkUrl) | **POST** /url/check | Information about web resources


<a name="checkUrl"></a>
# **checkUrl**
> UrlCheckResponse checkUrl(license, guid, url, opts)

Information about web resources

Fetches the resource of a given url and checks if it is available. Only websites using HTTP/HTTPS are allowed. IP addresses and ports other than 80/443 are not permitted and will be ignored. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');

var apiInstance = new datamill-js-client.URLApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

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
apiInstance.checkUrl(license, guid, url, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **url** | **String**| The url to be checked (e.g. any website) | 
 **maxRedirects** | **String**| The maximum amount of redirects until the lookup for the root resource will be stopped (default **10**) | [optional] [default to 10]

### Return type

[**UrlCheckResponse**](UrlCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

