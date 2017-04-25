# datamill-js-client.BusinessDataUndeliverableContactsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**undeliverable** | **String** | Flag if sending a mail would result in an undeliverable state [**0**, **1**] | 
**deceased** | **String** | Flag if the person is deceased [**0**, **1**] | 
**moved** | **String** | Flag if the person has moved to a new address but we do not know the new address [**0**, **1**] | 
**newAddressAvailable** | **String** | Flag if the person has moved to a new address and we know the new address [**0**, **1**] | 
**contact** | [**BusinessDataUndeliverableContactsSearchContact**](BusinessDataUndeliverableContactsSearchContact.md) |  | 


<a name="UndeliverableEnum"></a>
## Enum: UndeliverableEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




<a name="DeceasedEnum"></a>
## Enum: DeceasedEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




<a name="MovedEnum"></a>
## Enum: MovedEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




<a name="NewAddressAvailableEnum"></a>
## Enum: NewAddressAvailableEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




