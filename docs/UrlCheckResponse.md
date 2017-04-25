# datamill-js-client.UrlCheckResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **Number** | Flag if the root resource (website) is valid or not [0, 1] | 
**url** | **String** | The final url of the resource | 
**httpCode** | **Number** | The HTTP status code according to https://en.wikipedia.org/wiki/List_of_HTTP_status_codes | 
**totalTime** | **Number** | Total time of the request in seconds | 
**namelookupTime** | **Number** | Time until host name resolved in seconds | 
**connectTime** | **Number** | Time until connection established in seconds | 
**pretransferTime** | **Number** | Time until file transfer began in seconds | 
**starttransferTime** | **Number** | Time to first byte in seconds | 
**primaryIp** | **String** | IP address of the most recent connection | 
**primaryPort** | **Number** | Destination port of the connection | 
**downloadContentLength** | **Number** | Number of bytes to download from the resource (-1 means no information available) | 
**contentType** | **String** | Content type of the requested resource | 
**redirects** | **[Object]** | Array collection of all urls including redirects | 
**parameters** | **[Object]** | Array collection of all url parameters | 


<a name="ValidEnum"></a>
## Enum: ValidEnum


* `0` (value: `0`)

* `1` (value: `1`)




