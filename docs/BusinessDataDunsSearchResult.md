# DatamillForApplications.BusinessDataDunsSearchResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **String** | The official company name | [optional] 
**city** | **String** | The city of the company&#39;s address | [optional] 
**zip** | **String** | The zip of the company&#39;s address | [optional] 
**street** | **String** | The street of the company&#39;s address | [optional] 
**houseNumber** | **String** | The house number of the company&#39;s address | [optional] 
**dunsNumber** | **String** | The company&#39;s D-U-N-S number | [optional] 
**dunsNumberHq** | **String** | Optional the D-U-N-S number of the company&#39;s headquarters if this isn&#39;t the headquarter | [optional] 
**phoneNumber** | **String** | The company&#39;s phone number | [optional] 
**branchCode** | **String** | One-letter code describing the company&#39;s branch: **B**: branch, **N**: not a branch, **H**: headquarter, **S**: single location  | [optional] 
**branchDescription** | **String** | Description of the company&#39;s branch | [optional] 
**score** | **Number** | Internal ranking for all results compared with each other. the value is normalized between **0** and **1** (**1** is the best matching result and **0** the least one) | [optional] 


<a name="BranchCodeEnum"></a>
## Enum: BranchCodeEnum


* `B` (value: `"B"`)

* `N` (value: `"N"`)

* `H` (value: `"H"`)

* `S` (value: `"S"`)




<a name="BranchDescriptionEnum"></a>
## Enum: BranchDescriptionEnum


* `branch` (value: `"branch"`)

* `not a branch` (value: `"not a branch"`)

* `headquarter` (value: `"headquarter"`)

* `single location` (value: `"single location"`)




