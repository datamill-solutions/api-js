# DatamillForApplications.DeliveryInformationApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUndeliverableContact**](DeliveryInformationApi.md#searchUndeliverableContact) | **POST** /business-data/undeliverable-contacts/search | Find moved and deceased contacts


<a name="searchUndeliverableContact"></a>
# **searchUndeliverableContact**
> BusinessDataUndeliverableContactsResponse searchUndeliverableContact(license, guid, firstName, lastName, countryCode, zip, street, reason)

Find moved and deceased contacts

Checks if the postal address of a person identified by its full name is invalid (moved to a new address or deceased). This function does NOT verify/check if a known postal address is still valid, instead it only checks if the person is moved to another address or is deceased and therefore a mail will result in an undeliverable state. 

### Example
```javascript
var DatamillForApplications = require('datamill_for_applications');

var apiInstance = new DatamillForApplications.DeliveryInformationApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var firstName = "firstName_example"; // String | The person's first name

var lastName = "lastName_example"; // String | The person's last name

var countryCode = "countryCode_example"; // String | ISO 3166-1 alpha-2 country code e.g. 'US'. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information.

var zip = "zip_example"; // String | Last known postal code the person lives in

var street = "street_example"; // String | Last known street name the person lives in

var reason = "reason_example"; // String | Free-form text written in english why you submit the query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUndeliverableContact(license, guid, firstName, lastName, countryCode, zip, street, reason, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **firstName** | **String**| The person&#39;s first name | 
 **lastName** | **String**| The person&#39;s last name | 
 **countryCode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 
 **zip** | **String**| Last known postal code the person lives in | 
 **street** | **String**| Last known street name the person lives in | 
 **reason** | **String**| Free-form text written in english why you submit the query. | 

### Return type

[**BusinessDataUndeliverableContactsResponse**](BusinessDataUndeliverableContactsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

