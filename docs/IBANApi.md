# datamill-js-client.IBANApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkIBAN**](IBANApi.md#checkIBAN) | **POST** /iban/check | Check IBAN for spelling


<a name="checkIBAN"></a>
# **checkIBAN**
> IbanCheckResponse checkIBAN(license, guid, iban)

Check IBAN for spelling

Checks the spelling, country code and checksum of an IBAN (International Bank Account Number). The IBAN is an internationally agreed system of identifying bank accounts across national borders. The function does not verify if the IBAN really exists, instead the format is checked for validity only. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');

var apiInstance = new datamill-js-client.IBANApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var iban = "iban_example"; // String | IBAN to be checked.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkIBAN(license, guid, iban, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **iban** | **String**| IBAN to be checked. | 

### Return type

[**IbanCheckResponse**](IbanCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

