import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Currency {
  code: string;
  country: string;
}

export interface Currencies {
  currencies: Currency[]
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
}
