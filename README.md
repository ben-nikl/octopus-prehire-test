<img width="1256" alt="Screenshot 2022-04-05 at 12 46 48" src="https://user-images.githubusercontent.com/58525175/161738012-9e2e093c-2cd8-4f2e-83ec-79a8c608e182.png">
<img width="1261" alt="Screenshot 2022-04-05 at 12 47 19" src="https://user-images.githubusercontent.com/58525175/161738027-22fe94f0-2b7f-41f1-88ad-3a45dc13310c.png">
# octopus-prehire-test

## Test definition

* Create web application in Angular for displaying currencies and rates.

## Application definition
  * It is separated into list and detail parts.
  * List displays currencies. Each currency is represented by currency code and country name.
  * List can be filtered by fulltext search applied in currency code and country name. Fulltext is case insensitive and ignores diacritic.
  * List is sorted alphabetically from A to Z by country name.
  * Detail is displayed on click in currency list item. It is opened to the right from the list.
  * Detail shows currency code, country name, average rate to CZK counted from last 12 months and line chart with rates to CZK for last 12 months.

## Implementation specification
  * Use typescript as a programming language.
  * List of currencies is in `data/currencies.json` file.
  * Rates to CZK for last 12 months are in `data/[currencyCode].json`, ie. `data/eur.json`.
  * `data/sek.json` file is missing. Application should cover this situation and display an error message on SEK currency list item click.
  * Do not modify any file in `data` folder. You can move the folder whenever you want if it is necessary for implementation.
  * Content from files in `data` folder must be retrieved by HTTP communication. Do not include them directly into your code.
  * Url in browser should be changed dynamically when detail is opened.
  * Show some kind of loading indication to end user before the data for list or details are received.
  * Use OnPush change detection strategy when you implement the application in Angular.

## Development process
* Clone this project
* Implement the application based on the definition.
* After you are fine with your implementation, create a build for **production** use.
* Commit and push your work back to the forked repository
* Send us email that you finished the test
****
