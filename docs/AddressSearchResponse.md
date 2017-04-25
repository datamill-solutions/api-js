# DatamillForApplications.AddressSearchResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryIso2** | **String** | ISO 3166-1 alpha-2 country code | 
**countryIso3** | **String** | ISO 3166-1 alpha-3 country code | 
**country** | **String** | Country name together with the language information | 
**state** | **String** | State name/code together with the language information | 
**stateName** | **String** | State name together with the language information | 
**stateCode** | **String** | ISO 3166-2 state code (if available) | 
**county** | **String** | County name together with the language information (if available) | 
**district** | **String** | District name together with the language information (if available) | 
**zip** | **String** | Postal code | 
**city** | **String** | City name together with the language information | 
**street** | **String** | Street name together with the language information | 
**housenumber** | **String** | House number or building name together with the language information (if available) | 
**additionalData** | **String** | Additional house number information (e.g. floor, apartment, top) | 
**relevance** | **String** | Indicates the relevance of the result found. The higher the score the more relevant the alternative. The score is a normalized value between 0 and 100. Every typo or mismatch between the request and response data (e.g. incorrect data, abbreviation, ..) will reduce the relevance.  | 
**latitude** | **String** | Latitude to place a marker indicating the given location on a map (uses a dot as decimal point) | 
**longitude** | **String** | Longitude to place a marker indicating the given location on a map (uses a dot as decimal point) | 
**navigationLatitude** | **String** | Latitude of a potential route waypoint (uses a dot as decimal point) | 
**navigationLongitude** | **String** | Longitude of a potential route waypoint (uses a dot as decimal point) | 
**matchlevel** | **String** | The most detailed address field that matches the geo-coding query. **housenumber**: the whole geo-location including the house number / building name was found. **street**: the whole geo-location excluding the house number / building name was found. Please consider if you do not provide a house number or building name in the request the most detailed address field possible will always be the street. **general**: our service could only resolve a few address parts above the street level (e.g. only country or country + city, ...).  | 


<a name="MatchlevelEnum"></a>
## Enum: MatchlevelEnum


* `housenumber` (value: `"housenumber"`)

* `street` (value: `"street"`)

* `general` (value: `"general"`)

* `` (value: `""`)




