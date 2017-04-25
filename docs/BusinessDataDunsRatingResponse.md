# datamill-js-client.BusinessDataDunsRatingResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Flag if a company was found by its D-U-N-S number or not [**0**, **1**]  | 
**statusDescription** | **String** | Describes if a company was found or if the specified D-U-N-S number could not be resolved. Possible values are: **company not found**, **company found**, **invalid duns number**  | 
**dunsNumber** | **String** | The DUNS number of the company. The same ase the input parameter if company was found. | [optional] 
**companyName** | **String** | The company&#39;s official name | [optional] 
**continentName** | **String** | Continent name of the company&#39;s headquarters | [optional] 
**countryCode** | **String** | ISO 3166-1 alpha-2 country code of the company&#39;s headquarters | [optional] 
**countryCode3** | **String** | ISO 3166-1 alpha-3 country code of the company&#39;s headquarters | [optional] 
**countryName** | **String** | Country name together with the language information | [optional] 
**zip** | **String** | Postal code of the company&#39;s headquarters | [optional] 
**city** | **String** | City of the company&#39;s headquarters | [optional] 
**street** | **String** | Street name of the company&#39;s headquarters | [optional] 
**houseNumber** | **String** | House number of the company&#39;s headquarters | [optional] 
**phoneNumber** | **String** | Phone number of the company&#39;s headquarters | [optional] 
**faxNumber** | **String** | Fax number of the company&#39;s headquarters | [optional] 
**stateName** | **String** | State name of the company&#39;s headquarters | [optional] 
**ceoName** | **String** | Name of the company&#39;s CEO (Chief Executive Officer) | [optional] 
**ceoTitle** | **String** | Position / Business title of the company&#39;s CEO | [optional] 
**sicCode** | **String** | The company&#39;s international SIC (Standard Industrial Classification) code | [optional] 
**sicDescription** | **String** | Description of the SIC code | [optional] 
**sicVersion** | **String** | The version of SIC (either 1972, 1977 or 1987) | [optional] 
**yearStarted** | **String** | Year of establishment | [optional] 
**netWorth** | **Number** | The company&#39;s net worth (net value) in its local currency (may be NULL if unset) | [optional] 
**currencyCode** | **String** | The local currency code of the company&#39;s headquarters country | [optional] 
**currencyName** | **String** | The local currency name of the company&#39;s headquarters country | [optional] 
**totalEmployees** | **Number** | The total number of employees (may be NULL if unset) | [optional] 
**totalEmployeesIndicator** | **String** | Indicator if subsidiaries are included or not **A**: subsidiaries are not included **B**: total value including subsidiaries  | [optional] 
**totalEmployeesIndicatorDescription** | **String** | Description of the total number of employees indicator | [optional] 
**legalFormCode** | **Number** | Code of the company&#39;s legal form | [optional] 
**legalFormDescription** | **String** | Description of the legal form code | [optional] 
**reportDate** | **Date** | Timestamp when the company&#39;s information were updated the last time | [optional] 
**isOutOfBusiness** | **Boolean** | Flag if the company is already out of business | [optional] 
**isBranch** | **Boolean** | Flag if the company found is a branch or the main headquarter | [optional] 
**businessRegistrationNumber** | **String** | Primary business identification number assigned to the business by government agency | [optional] 
**businessRegistrationType** | **String** | Type of identification number assigned to the business (e.g. Registration number, Judicial number, ...) | [optional] 
**incorporationYear** | **String** | Year business incorporated | [optional] 
**tradeStyles** | **[String]** | Array with other names of the company | [optional] 
**enquiryDuns** | **String** | The D-U-N-S number of the enquiry. May vary from the specified D-U-N-S number if the headquarters data are returned | [optional] 
**sales** | **Number** | Net sales for the period after returns, allowances and discounts are deducted (may be NULL if unset) | [optional] 
**salesEstimatedDescription** | **String** | Qualifies the annual sales volume (actual, estimated, forecast, projected or calculated) | [optional] 
**paydexScore** | **Number** | D&amp;B® PAYDEX® for the last 2 months experiences (not for all countries) (may be NULL if unset) | [optional] 
**paydexScoreDescription** | **String** | Description about the D&amp;B® PAYDEX® score (either Anticipate, Discount, Prompt, X days beyond terms or Unavailable) (may be NULL if unset) | [optional] 
**paydexNorm** | **Number** | Industry D&amp;B® PAYDEX® median or average (may be NULL if unset) | [optional] 
**intangibleAssets** | **Number** | Total of intangible assets (may be NULL if unset) | [optional] 
**maxCreditRecommendation** | **Number** | Maximum amount of credit recommended by Dun &amp; Bradstreet (Europe only) (may be NULL if unset) | [optional] 
**dubRating** | **String** | Rating assigned by Dun &amp; Bradstreet (meaning varies by country) | [optional] 
**dubRatingFinancialStrength** | **String** | Part of the Dun &amp; Bradstreet rating which indicates the financial strength of the business (from - to in USD) | [optional] 
**dubRatingRisk** | **String** | Part of the Dun &amp; Bradstreet rating which indicates the risk of a potential business cooperation: **1**: minimal risk, **2**: low risk, **3**: greater than average risk, **4**: significant level of risk, **&lt;other values&gt;**: insufficient information to define a risk indicator  | [optional] 
**dubRatingRiskDescription** | **String** | Part of the Dun &amp; Bradstreet rating which indicates the risk of a potential business cooperation: **1**: proceed with transaction - offer terms required, **2**: proceed with transaction, **3**: process with transaction, but monitor closely, **4**: take suitable assurances before extending credit, **&lt;other values&gt;**: no public information or D&amp;B proprietary information  | [optional] 
**hasOpenClaims** | **Boolean** | Flag if open claims, legal claims, liens, protested bills or equivalent exists | [optional] 
**hasCriminalProceedings** | **Boolean** | Flag if criminal proceedings exists | [optional] 
**hasDisasterEvent** | **Boolean** | Flag if special events concerning disasters such as fire, hurricanes etc. exists | [optional] 
**hasFinancialEmbarrassment** | **Boolean** | Flag if open bankruptcy, receivership liquidation or equivalent exists | [optional] 
**hasFinancialLegalEvent** | **Boolean** | Flag if special events available including financial embarrassment and legal fillings exists | [optional] 
**hasSpecialEvent** | **Boolean** | Flag if special events are available concerning changes to operational aspects including name changes, management changes, etc. | [optional] 
**hasOtherEvent** | **Boolean** | Flag if special events exists that are not otherwise specified | [optional] 
**hasSecuredFilings** | **Boolean** | Flag if open secured filing such as UCC filings, secured charges or equivalent exists | [optional] 
**hasLawsuit** | **Boolean** | Flag if open suit(s), judgement(s), petitions or payment remarks exists | [optional] 
**areEmployeesEstimated** | **Boolean** | Flag if the total number of employees is estimated or actual | [optional] 
**areSalesEstimated** | **Boolean** | Flag if the annual sales volume is estimated or actual | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




<a name="StatusDescriptionEnum"></a>
## Enum: StatusDescriptionEnum


* `company found` (value: `"company found"`)

* `company not found` (value: `"company not found"`)

* `invalid duns number` (value: `"invalid duns number"`)




<a name="TotalEmployeesIndicatorEnum"></a>
## Enum: TotalEmployeesIndicatorEnum


* `A` (value: `"A"`)

* `B` (value: `"B"`)




