import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from './currencies.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(searchedCurrency: Currency | null, currency: Currency): boolean {
    return (
      (this.normalize(searchedCurrency?.code.toLowerCase() || '') === currency.code.toLowerCase()) && 
      (this.normalize(searchedCurrency?.country || '') === this.normalize(currency.country))
    )
  }

  private normalize(arg: string): string {
    return (
      arg.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    );
  }

    

}
