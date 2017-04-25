# datamill-js-client.SocialMediaApi

All URIs are relative to *https://api.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSocialMediaActivities**](SocialMediaApi.md#getSocialMediaActivities) | **POST** /social-media/activities/get | Retrieve social media data by email address


<a name="getSocialMediaActivities"></a>
# **getSocialMediaActivities**
> SocialMediaActivitiesGetResponse getSocialMediaActivities(license, guid, email)

Retrieve social media data by email address

Get the number of followers and account information of multiple social media platforms from individual email addresses. If the social media information for a specific email address aren&#39;t fetched yet the request will be queued and the data will be available within the next 12 hours. Please consider that the response of a social media platform may be empty because of restricted access (privacy setting of the person being checked). The following social media platforms are currently checked:  * **LinkedIn**  * **XING**  * **Facebook**  * **Twitter**  * **Pinterest**  * **Instagram**  * **Youtube**  * **Google Plus**  * **Klout** 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');

var apiInstance = new datamill-js-client.SocialMediaApi();

var license = "license_example"; // String | The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var guid = "guid_example"; // String | The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request. 

var email = "email_example"; // String | The person's email address being checked on mentioned social media plattforms


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSocialMediaActivities(license, guid, email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| The license key is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **guid** | **String**| The guid is part of the authentication key pair consisting of license and guid (global unique identifier). These two keys are used as your personal API keys. Note that every API request requires both keys, so you will need to include them in each request.  | 
 **email** | **String**| The person&#39;s email address being checked on mentioned social media plattforms | 

### Return type

[**SocialMediaActivitiesGetResponse**](SocialMediaActivitiesGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

