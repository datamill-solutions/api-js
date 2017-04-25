# DatamillForApplications.PhoneMobileCheckResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phonenumber** | **String** | Phone number formatted to the canonical form if valid | 
**status** | **String** | Flag if the mobile phone number is either valid and active, valid but disabled (out of network coverage), has an invalid syntax /is unreachable, or not a mobile phone number type: **valid**: the mobile phone number is valid, **inactive**: the mobile phone number is valid but out of network coverage or is turned off, **invalid**: the mobile phone number is invalid or unreachable, **no mobile number**: the phone number is not a mobile phone number, **unknown**: the phone number could not be verified  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `valid` (value: `"valid"`)

* `invalid` (value: `"invalid"`)

* `unknown` (value: `"unknown"`)

* `no mobile number` (value: `"no mobile number"`)




