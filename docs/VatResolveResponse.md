# DatamillForApplications.VatResolveResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **String** | Flag if the VAT number is valid or not [0, 1] | 
**countrycode** | **String** | ISO 3166-1 alpha-2 country code | 
**vatnumber** | **String** | The verified VAT number without the country code as prefix | 
**name** | **String** | The official company name if VAT number is valid | 
**countryname** | **String** | Country name together with the language information | 
**state** | **String** | State name/code together with the language information | 
**county** | **String** | County name together with the language information (if available) | 
**city** | **String** | City name together with the language information | 
**zip** | **String** | Postal code | 
**street** | **String** | Street name together with the language information | 
**housenumber** | **String** | House number together with the language information (if available) | 
**additionalData** | **String** | Additional house number information (e.g. floor, apartment, top) | 
**rawAddress** | **String** | The raw address of the company received before its split into its address parts | 
**countrycodeIso3** | **String** | ISO 3166-1 alpha-3 country code | 
**relevance** | **String** | Indicates the relevance of the result found. The higher the score the more relevant the alternative. The score is a normalized value between 0 and 100. Every typo or mismatch between the request and response data (e.g. incorrect data, abbreviation, ..) will reduce the relevance.  | 
**latitude** | **String** | Latitude to place a marker indicating the given location on a map (uses a dot as decimal point) | 
**longitude** | **String** | Longitude to place a marker indicating the given location on a map (uses a dot as decimal point) | 
**matchlevel** | **String** | The most detailed address field that matches the geo-coding query: **housenumber**: the whole geo-location including the house number / building name was found. **street**: the whole geo-location excluding the house number / building name was found. Please consider if you do not provide a house number or building name in the request the most detailed address field possible will always be the street. **general**: our service could only resolve a few address parts above the street level (e.g. only country or country + city, ...).  | 


