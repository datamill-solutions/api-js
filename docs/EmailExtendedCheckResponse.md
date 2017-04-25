# datamill-js-client.EmailExtendedCheckResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **String** | Flag if the email address is valid or not. &#39;0&#39; for invalid and &#39;1&#39; for valid email address. &#39;unknown&#39; if mail server could not be verified. | 
**description** | **String** | Error description if syntax or mail server are invalid. Empty value means no error.  * **syntax**: Typo error in email address  * **domain**: No MX record found for domain part  * **disposable**: Known provider for disposable email addresses  * **mail server currently unavailable**: Connection to mail server could not be established  * **mailbox**: The mail server rejects emails for the given mailbox  * **greylisted**: The request was blocked by the mail server  * **catch all**: The mail server accepts mails for all email addresses  | 
**statusCode** | **String** | Unique status code for each possible validation state.  * **1**: The email address has a valid syntax, a MX record exists, it&#39;s not disposable and the mailbox exists.  * **10**: Typo error in email address  * **20**: No MX record found for domain part  * **21**: Known provider for disposable email addresses  * **30**: The mail server rejects emails for the given mailbox  * **31**: Connection to mail server could not be established  * **32**: The request was blocked by the mail server (greylisted)  * **33**: The mail server accepts mails for all email addresses  | 


<a name="ValidEnum"></a>
## Enum: ValidEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)

* `unknown` (value: `"unknown"`)




<a name="DescriptionEnum"></a>
## Enum: DescriptionEnum


* `syntax` (value: `"syntax"`)

* `domain` (value: `"domain"`)

* `disposable` (value: `"disposable"`)

* `mail server currently unavailable` (value: `"mail server currently unavailable"`)

* `mailbox` (value: `"mailbox"`)

* `greylisted` (value: `"greylisted"`)

* `catch all` (value: `"catch all"`)

* `` (value: `""`)




<a name="StatusCodeEnum"></a>
## Enum: StatusCodeEnum


* `1` (value: `"1"`)

* `10` (value: `"10"`)

* `20` (value: `"20"`)

* `21` (value: `"21"`)

* `30` (value: `"30"`)

* `31` (value: `"31"`)

* `32` (value: `"32"`)

* `33` (value: `"33"`)




