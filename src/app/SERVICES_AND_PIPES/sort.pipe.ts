import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from './currencies.service';

@Pipe({
  name: "sortbycountry",
})
export class SortByCountryPipe implements PipeTransform {
  transform(value: Currency[]): Currency[] {
    if (value?.length) {
      return value.sort(function (a, b) {
        return a.country.localeCompare(b.country);
      });
    }
    return []
  }
}
