# datamill-js-client.DeliveryInformationApi

All URIs are relative to *https://api-beta.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUndeliverableContact**](DeliveryInformationApi.md#searchUndeliverableContact) | **POST** /business-data/undeliverable-contacts/search | Find moved and deceased contacts


<a name="searchUndeliverableContact"></a>
# **searchUndeliverableContact**
> BusinessDataUndeliverableContactsResponse searchUndeliverableContact(firstName, lastName, countryCode, zip, street, reason)

Find moved and deceased contacts

Checks if the postal address of a person identified by its full name is invalid (moved to a new address or deceased). This function does NOT verify/check if a known postal address is still valid, instead it only checks if the person is moved to another address or is deceased and therefore a mail will result in an undeliverable state. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.DeliveryInformationApi();

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
apiInstance.searchUndeliverableContact(firstName, lastName, countryCode, zip, street, reason, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**| The person&#39;s first name | 
 **lastName** | **String**| The person&#39;s last name | 
 **countryCode** | **String**| ISO 3166-1 alpha-2 country code e.g. &#39;US&#39;. Please see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for further information. | 
 **zip** | **String**| Last known postal code the person lives in | 
 **street** | **String**| Last known street name the person lives in | 
 **reason** | **String**| Free-form text written in english why you submit the query. | 

### Return type

[**BusinessDataUndeliverableContactsResponse**](BusinessDataUndeliverableContactsResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

