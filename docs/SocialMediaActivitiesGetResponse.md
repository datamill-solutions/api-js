# datamill-js-client.SocialMediaActivitiesGetResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Number** | Unique status code describing the response  * **1**: Social media activities found and present in the response,  * **-1**: No social media activities found for the requested email address (in this case all following response keys except the status_description are not present),  * **-2**: Your request is queued and a response will be available within the next 12 hours (in this case all following response keys except the status_description are not present),  * **-3**: Your requested email address is invalid (please check that the email is url encoded).  | 
**statusDescription** | **String** | Short description of the status code | 
**name** | **String** | First name and last name of the person | [optional] 
**email** | **String** | The requested email address | [optional] 
**gender** | **String** | The person&#39;s gender written in english and all lowercase. Either **female** or **male** | [optional] 
**avatar** | **String** | Profile image (fully qualified url) of the social media profile with the most followers | [optional] 
**bio** | **String** | Biography of the social media profile where the person has the most followers (unless it doesn&#39;t show a biography, then the social media profile with the second most followers is checked) | [optional] 
**maxFollowers** | **Number** | The maximum number of followers found by any of the social media platforms | [optional] 
**sumFollowers** | **Number** | The total number of followers of all social media platforms | [optional] 
**location** | [**SocialMediaActivitiesGetLocation**](SocialMediaActivitiesGetLocation.md) |  | [optional] 
**education** | [**[SocialMediaActivitiesGetEducation]**](SocialMediaActivitiesGetEducation.md) | Collection of all educations found. | [optional] 
**employment** | [**[SocialMediaActivitiesGetEmployment]**](SocialMediaActivitiesGetEmployment.md) | Collection of all companies the person worked for. | [optional] 
**linkedin** | [**SocialMediaActivitiesGetLinkedIn**](SocialMediaActivitiesGetLinkedIn.md) |  | [optional] 
**xing** | [**SocialMediaActivitiesGetXing**](SocialMediaActivitiesGetXing.md) |  | [optional] 
**facebook** | [**SocialMediaActivitiesGetFacebook**](SocialMediaActivitiesGetFacebook.md) |  | [optional] 
**twitter** | [**SocialMediaActivitiesGetTwitter**](SocialMediaActivitiesGetTwitter.md) |  | [optional] 
**pinterest** | [**SocialMediaActivitiesGetPinterest**](SocialMediaActivitiesGetPinterest.md) |  | [optional] 
**instagram** | [**SocialMediaActivitiesGetInstagram**](SocialMediaActivitiesGetInstagram.md) |  | [optional] 
**youtube** | [**SocialMediaActivitiesGetYouTube**](SocialMediaActivitiesGetYouTube.md) |  | [optional] 
**googleplus** | [**SocialMediaActivitiesGetGooglePlus**](SocialMediaActivitiesGetGooglePlus.md) |  | [optional] 
**klout** | [**SocialMediaActivitiesGetKlout**](SocialMediaActivitiesGetKlout.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `1` (value: `1`)

* `-1` (value: `-1`)

* `-2` (value: `-2`)

* `-3` (value: `-3`)




