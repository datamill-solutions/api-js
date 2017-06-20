# datamill-js-client.ConvertApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertCapitalFirst**](ConvertApi.md#convertCapitalFirst) | **POST** /convert/capitalfirst | Convert any string to capitalize words
[**convertLowerCase**](ConvertApi.md#convertLowerCase) | **POST** /convert/lowercase | Convert any string to lower case
[**convertUpperCase**](ConvertApi.md#convertUpperCase) | **POST** /convert/uppercase | Convert any string to upper case
[**convertWrap**](ConvertApi.md#convertWrap) | **POST** /convert/wrap | Wrap text
[**getPhoneticCode**](ConvertApi.md#getPhoneticCode) | **POST** /phonetic/code/get | Calculate phonetic codes of a given text


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

var apiInstance = new datamill-js-client.ConvertApi();

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

var apiInstance = new datamill-js-client.ConvertApi();

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

var apiInstance = new datamill-js-client.ConvertApi();

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

var apiInstance = new datamill-js-client.ConvertApi();

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

var apiInstance = new datamill-js-client.ConvertApi();

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

