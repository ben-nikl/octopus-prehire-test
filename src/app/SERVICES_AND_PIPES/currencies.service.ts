import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, catchError, of } from 'rxjs';

export interface Currency {
  code: string;
  country: string;
}

export interface Currencies {
  currencies: Currency[]
}

export interface CurrencyDetail {
  currency: Currency;
  rates: number[]
}
@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }
  
 

  getCurrencies(): Observable<Currency[]> {
    return this.http
      .get<Currencies>("assets/data/currencies.json")
      .pipe(
        map(({ currencies }) => currencies)
      );
  }

 

  getCurrencyDetail(currency: string): Observable<CurrencyDetail> {
    let code = currency.split(' ', 1).join('');
    let country = currency.split(' ').slice(1).join(' ');
    return this.http
      .get<{ rates: number[] }>(`assets/data/${code.toLowerCase()}.json`)
      .pipe(
        map(data => ({
            currency: { code, country },
            rates: data.rates
        })),
        catchError(() => of({ currency: { code, country }, rates: []}))
      )
  }
        

  
  
}
