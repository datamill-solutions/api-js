# DatamillForApplications.PhoneFormatResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **String** | Flag if the spelling of the phone number is valid or not [**0**, **1**] | 
**_number** | **String** | The phone number formatted to the canonical or custom form if valid | 
**type** | **String** | The determined phone number type: **PREMIUM_RATE**: premium rate, **TOLL_FREE**: toll free, **MOBILE**: mobile phone number, **FIXED_LINE**: fixed line, **FIXED_LINE_OR_MOBILE**: fixed line or mobile phone number, **SHARED_COST**: shard cost, **VOIP**: voice over ip, **PERSONAL_NUMBER**: personal number, **PAGER**: pager, **UAN**: universal access number, **VOICEMAIL**: voicemail, **UNKNOWN**: unknown connection type  | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `MOBILE` (value: `"MOBILE"`)

* `FIXED_LINE` (value: `"FIXED_LINE"`)

* `FIXED_LINE_OR_MOBILE` (value: `"FIXED_LINE_OR_MOBILE"`)

* `TOLL_FREE` (value: `"TOLL_FREE"`)

* `PREMIUM_RATE` (value: `"PREMIUM_RATE"`)

* `SHARED_COST` (value: `"SHARED_COST"`)

* `VOIP` (value: `"VOIP"`)

* `PERSONAL_NUMBER` (value: `"PERSONAL_NUMBER"`)

* `PAGER` (value: `"PAGER"`)

* `UAN` (value: `"UAN"`)

* `VOICEMAIL` (value: `"VOICEMAIL"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




