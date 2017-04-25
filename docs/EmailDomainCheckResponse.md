# DatamillForApplications.EmailDomainCheckResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **String** | Flag if the email address is valid or not. &#39;0&#39; for invalid and &#39;1&#39; for valid email address. | 
**description** | **String** | Error description if syntax or mail server are invalid. Empty value means no error. | 
**statusCode** | **String** | Unique status code for each possible validation state. &#39;10&#39; for invalid syntax, &#39;20&#39; for missing MX record, &#39;21&#39; for disposable email and &#39;1&#39; for valid email address. | 


<a name="ValidEnum"></a>
## Enum: ValidEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




<a name="DescriptionEnum"></a>
## Enum: DescriptionEnum


* `syntax` (value: `"syntax"`)

* `domain` (value: `"domain"`)

* `disposable` (value: `"disposable"`)

* `` (value: `""`)




<a name="StatusCodeEnum"></a>
## Enum: StatusCodeEnum


* `1` (value: `"1"`)

* `10` (value: `"10"`)

* `20` (value: `"20"`)

* `21` (value: `"21"`)




