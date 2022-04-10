import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from './currencies.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(searchCurrency: string, { code, country }: Currency): boolean {
  [code, country, searchCurrency] = this._normalize(code, country, searchCurrency);

    return (
      searchCurrency === (`${code} ${country}`) || 
      searchCurrency === (`${country} ${code}`) || 
      searchCurrency === code ||
      searchCurrency === country
    );
      
  }
    
  private _normalize(...args: string[]): string[] {
    return args.map(arg => (
      arg.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        )
    );
        
  }
    


    

}
