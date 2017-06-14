# datamill-js-client.AddressApi

All URIs are relative to *https://api-beta.methis.at*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extractHouseNumber**](AddressApi.md#extractHouseNumber) | **POST** /address/housenumber/extract | Try to extract house number from street information
[**locateAddress**](AddressApi.md#locateAddress) | **POST** /address/locate | Reverse address lookup
[**searchAddress**](AddressApi.md#searchAddress) | **POST** /address/search | Lookup physical postal address
[**searchAddressMultiple**](AddressApi.md#searchAddressMultiple) | **POST** /address/search/multiple | Address lookup with multiple possible results


<a name="extractHouseNumber"></a>
# **extractHouseNumber**
> AddressHouseNumberExtractResponse extractHouseNumber(opts)

Try to extract house number from street information

Find and extract the house number based on partial address information. The result is an extracted street name, house number and additional house number information (e.g. Apartment, Floor, Room). It is necessary to provide street and housenumber, either in street field or separated in street and house number field. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.AddressApi();

var opts = { 
  'street': "street_example", // String | Free-form text containing the street name and optional the house number including additional house number information. The key is required if housenumber is empty or unset.
  'housenumber': "housenumber_example" // String | Free-form text containing the house number including additional house number information and optional the street name. The key is required if street is empty or unset.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.extractHouseNumber(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **street** | **String**| Free-form text containing the street name and optional the house number including additional house number information. The key is required if housenumber is empty or unset. | [optional] 
 **housenumber** | **String**| Free-form text containing the house number including additional house number information and optional the street name. The key is required if street is empty or unset. | [optional] 

### Return type

[**AddressHouseNumberExtractResponse**](AddressHouseNumberExtractResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="locateAddress"></a>
# **locateAddress**
> AddressSearchResponse locateAddress(latitude, longitude, opts)

Reverse address lookup

Resolve an address corresponding to a given geo-coordinate. The result is a single record which matches the given latitude and longitude. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.AddressApi();

var latitude = "latitude_example"; // String | Latitude of the address (use a dot as decimal point)

var longitude = "longitude_example"; // String | Longitude of the address (use a dot as decimal point)

var opts = { 
  'locale': "locale_example" // String | The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.locateAddress(latitude, longitude, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **String**| Latitude of the address (use a dot as decimal point) | 
 **longitude** | **String**| Longitude of the address (use a dot as decimal point) | 
 **locale** | **String**| The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code). | [optional] 

### Return type

[**AddressSearchResponse**](AddressSearchResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="searchAddress"></a>
# **searchAddress**
> AddressSearchResponse searchAddress(opts)

Lookup physical postal address

Find geo-location based on unstructured (single-line entry, un-qualified) or based on structured (qualified) address information. The result is a single record which matches the given geo-location. The response depends on the data quality of the request. If the request contains too many typos the response keys may be empty.  The unstructured query determines each address part by its own and afterwards finds the closest geo-location. It should only be used if you do not know which address information fits in which query parameter. The structured query provides an additional logic for specific countries to improve the result of the determined geo-location. Please consider that if you do not provide a country name/code the result may end in a different country because the same city + street combination may exist in multiple countries. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.AddressApi();

var opts = { 
  'address': "address_example", // String | Unstructured query parameter. Free-form text containing address elements (e.g. city, postal code, street, house number). Each element is separated using a whitespace. The order of the elements does not matter. You can specify the 'address' parameter by itself or you can specify it with other parameters to narrow your search. 
  'country': "country_example", // String | Specify the country using the country code (ISO 3166-1 alpha-3) or the country name.
  'state': "state_example", // String | First subdivision level below the country. Specify the state using full or abbreviated notation.
  'county': "county_example", // String | Second subdivision level below the country. Depending on the admin hierarchy in a country this level might not be applicable.
  'city': "city_example", // String | The city name.
  'zip': "zip_example", // String | Postal code defined by the government of the country.
  'district': "district_example", // String | Subdivision level below the city. Depending on the admin hierarchy in a country this level might not be applicable.
  'street': "street_example", // String | The street name.
  'housenumber': "housenumber_example", // String | The house number or building name.
  'locale': "locale_example" // String | The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAddress(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Unstructured query parameter. Free-form text containing address elements (e.g. city, postal code, street, house number). Each element is separated using a whitespace. The order of the elements does not matter. You can specify the &#39;address&#39; parameter by itself or you can specify it with other parameters to narrow your search.  | [optional] 
 **country** | **String**| Specify the country using the country code (ISO 3166-1 alpha-3) or the country name. | [optional] 
 **state** | **String**| First subdivision level below the country. Specify the state using full or abbreviated notation. | [optional] 
 **county** | **String**| Second subdivision level below the country. Depending on the admin hierarchy in a country this level might not be applicable. | [optional] 
 **city** | **String**| The city name. | [optional] 
 **zip** | **String**| Postal code defined by the government of the country. | [optional] 
 **district** | **String**| Subdivision level below the city. Depending on the admin hierarchy in a country this level might not be applicable. | [optional] 
 **street** | **String**| The street name. | [optional] 
 **housenumber** | **String**| The house number or building name. | [optional] 
 **locale** | **String**| The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code). | [optional] 

### Return type

[**AddressSearchResponse**](AddressSearchResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="searchAddressMultiple"></a>
# **searchAddressMultiple**
> AddressSearchMultipleResponse searchAddressMultiple(address, opts)

Address lookup with multiple possible results

Find multiple geo-locations based on unstructured (single-line entry, un-qualified) address information. The result is a set of records which matches the given geo-location. The response depends on the data quality of the request. If the request contains too many typo errors the response keys may be empty. 

### Example
```javascript
var datamill-js-client = require('datamill-js-client');
var defaultClient = datamill-js-client.ApiClient.default;

// Configure HTTP basic authorization: APISecurity
var APISecurity = defaultClient.authentications['APISecurity'];
APISecurity.username = 'YOUR USERNAME';
APISecurity.password = 'YOUR PASSWORD';

var apiInstance = new datamill-js-client.AddressApi();

var address = "address_example"; // String | Free-form text containing address elements (e.g. city, postal code, street, house number). Each element is separated using a whitespace. The order of the elements does not matter.

var opts = { 
  'locale': "locale_example" // String | The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAddressMultiple(address, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Free-form text containing address elements (e.g. city, postal code, street, house number). Each element is separated using a whitespace. The order of the elements does not matter. | 
 **locale** | **String**| The preferred language of address elements in the result. The locale must be provided according to RFC 4647 standard (language code). | [optional] 

### Return type

[**AddressSearchMultipleResponse**](AddressSearchMultipleResponse.md)

### Authorization

[APISecurity](../README.md#APISecurity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

