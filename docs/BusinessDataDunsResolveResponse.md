# datamill-js-client.BusinessDataDunsResolveResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Flag if a company was found by its D-U-N-S number or not [**0*, **1**] | 
**statusDescription** | **String** | Describes if a company was found or if the specified D-U-N-S number could not be resolved. Possible values are: **company not found**, **company found**, **invalid duns number**  | 
**companyName** | **String** | The company&#39;s official name | [optional] 
**companyName2** | **String** | The company&#39;s second name or \&quot;doing business as\&quot; | [optional] 
**continentName** | **String** | Continent name of the company&#39;s headquarters | [optional] 
**countryCode** | **String** | ISO 3166-1 alpha-2 country code of the company&#39;s headquarters | [optional] 
**countryCode3** | **String** | ISO 3166-1 alpha-3 country code of the company&#39;s headquarters | [optional] 
**zip** | **String** | Postal code of the company&#39;s headquarters | [optional] 
**city** | **String** | City of the company&#39;s headquarters | [optional] 
**street** | **String** | Street name of the company&#39;s headquarters | [optional] 
**houseNumber** | **String** | House number of the company&#39;s headquarters | [optional] 
**phoneNumber** | **String** | Phone number of the company&#39;s headquarters | [optional] 
**faxNumber** | **String** | Fax number of the company&#39;s headquarters | [optional] 
**stateName** | **String** | State name of the company&#39;s headquarters | [optional] 
**stateCode** | **String** | ISO 3166-2 state code of the company&#39;s headquarters | [optional] 
**ceoName** | **String** | Name of the company&#39;s CEO (Chief Executive Officer) | [optional] 
**ceoTitle** | **String** | Position / Business title of the company&#39;s CEO | [optional] 
**ceoSecondary** | **[String]** | Collection of names of further CEOs | [optional] 
**sicCode** | **String** | The company&#39;s international SIC (Standard Industrial Classification) code | [optional] 
**sicDescription** | **String** | Description of the SIC code | [optional] 
**yearStarted** | **String** | Year of establishment | [optional] 
**annualTurnoverLocalCurrency** | **Number** | The company&#39;s annual turnover in its local currency (may be NULL if unset) | [optional] 
**annualTurnoverIndicatorCode** | **String** | Indicator if the annual turnover is an approximated or exact value: **&lt;empty value&gt;**: not available, **0**: exact value, **1**: low end of range, **2**: approximated, **3**: modeled value  | [optional] 
**annualTurnoverIndicatorDescription** | **String** | Description of the annual turnover indicator | [optional] 
**annualTurnoverUsd** | **Number** | The company&#39;s annual turnover in US Dollar (may be NULL if unset) | [optional] 
**netIncome** | **Number** | The company&#39;s net income in its local currency (may be NULL if unset) | [optional] 
**netIncomeUsd** | **Number** | The company&#39;s net income in US Dollar (may be NULL if unset) | [optional] 
**netWorth** | **Number** | The company&#39;s net worth (net value) in its local currency (may be NULL if unset) | [optional] 
**netWorthUsd** | **Number** | The company&#39;s net worth (net value) in US Dollar (may be NULL if unset) | [optional] 
**currencyCode** | **String** | The local currency code of the company&#39;s headquarters country (3-letter ISO 4217 currency code) | [optional] 
**currencyName** | **String** | The local currency name of the company&#39;s headquarters country | [optional] 
**marketabilityCode** | **String** | Indicator if the company / branch can be used for marketing purposes: **1**: not marketable, but listed, **2**: not marketable and not listed, **3**: marketable and listed  | [optional] 
**marketabilityDescription** | **String** | Description of the marketable indicator value | [optional] 
**totalEmployees** | **Number** | The total number of employees (may be NULL if unset) | [optional] 
**totalEmployeesIndicator** | **String** | Indicator if the total number of employees is an approximated or exact value: **0**: exact value, **1**: low end of range, **2**: approximated  | [optional] 
**totalEmployeesIndicatorDescription** | **String** | Description of the total number of employees indicator | [optional] 
**totalEmployeesPhysicalAddress** | **Number** | The total number of employees working at the company&#39;s headquarters (may be NULL if unset) | [optional] 
**totalEmployeesPhysicalAddressIndicator** | **String** | Indicator if the total number of employees (working at the company&#39;s headquarters) is an approximated or exact value: **&lt;empty value&gt;**: not available, **0**: exact value, **1**: low end of range, **2**: approximated or not available if the number of employees at this location is zero, **3**: modeled value  | [optional] 
**importExportIndicator** | **String** | Indicator if the company has an import and/or export trade: **&lt;empty value&gt;**: not available, **A**: import / export / agent, **B**: imports and exports, **C**: imports, **D**: imports and agents, **E**: exports and agents, **F**: agents, keeps no inventory, does not take title goods, **G**: not available or none, **H**: exports  | [optional] 
**importExportIndicatorDescription** | **String** | Description of the import/export indicator | [optional] 
**legalFormCode** | **Number** | Code of the company&#39;s legal form (may be NULL if unset) | [optional] 
**legalFormDescription** | **String** | Description of the legal form code | [optional] 
**businessStructureCode** | **String** | Code of the company&#39;s business structure: **&lt;empty value&gt;**: not available, **0**: single location, **1**: headquarter, **2**: branch, **4**: division,  | [optional] 
**businessStructureDescription** | **String** | Description of the business structure code | [optional] 
**businessRegistrationNumberCode** | **String** | Unique code describing the national registration id | [optional] 
**businessRegistrationNumberCodeDescription** | **String** | Friendly name of the business registration number code | [optional] 
**undeliverableIndicator** | **String** | Indicator if any of the company&#39;s information are undeliverable: **B**: both addresses are undeliverable, **M**: mail address is undeliverable, **N**: no nixie indication, **P**: physical address undeliverable, **Y**: one of the addresses is undeliverable  | [optional] 
**undeliverableDescription** | **String** | Description of the undeliverable indicator | [optional] 
**financialStatementDate** | **Date** | Timestamp when the financial information were updated the last time (may be full year only or full date with day, month and year) | [optional] 
**reportDate** | **Date** | Timestamp when the company&#39;s information were updated the last time (may be full year only or full date with day, month and year) | [optional] 
**isOnlyAvailableAddress** | **Boolean** | Flag if this postal address is the only address available for the company | [optional] 
**isSubsidiary** | **Boolean** | Flag if this postal address is a subsidiary of the company | [optional] 
**totalEmployeesIncludingPrincipalsIndicator** | **Boolean** | Flag if the total number of employees includes principals | [optional] 
**isOutOfBusiness** | **Boolean** | Flag if the company is already out of business | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




<a name="StatusDescriptionEnum"></a>
## Enum: StatusDescriptionEnum


* `company found` (value: `"company found"`)

* `company not found` (value: `"company not found"`)

* `invalid duns number` (value: `"invalid duns number"`)




<a name="AnnualTurnoverIndicatorCodeEnum"></a>
## Enum: AnnualTurnoverIndicatorCodeEnum


* `` (value: `""`)

* `0` (value: `"0"`)

* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)




<a name="MarketabilityCodeEnum"></a>
## Enum: MarketabilityCodeEnum


* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)




<a name="TotalEmployeesIndicatorEnum"></a>
## Enum: TotalEmployeesIndicatorEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)

* `2` (value: `"2"`)




<a name="TotalEmployeesPhysicalAddressIndicatorEnum"></a>
## Enum: TotalEmployeesPhysicalAddressIndicatorEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)

* `` (value: `""`)




<a name="ImportExportIndicatorEnum"></a>
## Enum: ImportExportIndicatorEnum


* `` (value: `""`)

* `A` (value: `"A"`)

* `B` (value: `"B"`)

* `C` (value: `"C"`)

* `D` (value: `"D"`)

* `E` (value: `"E"`)

* `F` (value: `"F"`)

* `G` (value: `"G"`)

* `H` (value: `"H"`)




<a name="BusinessStructureCodeEnum"></a>
## Enum: BusinessStructureCodeEnum


* `` (value: `""`)

* `0` (value: `"0"`)

* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `4` (value: `"4"`)




<a name="UndeliverableIndicatorEnum"></a>
## Enum: UndeliverableIndicatorEnum


* `B` (value: `"B"`)

* `M` (value: `"M"`)

* `N` (value: `"N"`)

* `P` (value: `"P"`)

* `Y` (value: `"Y"`)




