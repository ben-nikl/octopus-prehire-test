
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { list, onShowDetail } from './animations';
import { CurrenciesService, Currency } from './SERVICES_AND_PIPES/currencies.service';

@Component({
  selector: "app-root",
  template: `
    <app-navbar>
      <app-navbar-logo></app-navbar-logo>
      <app-navbar-title></app-navbar-title>
    </app-navbar>

    <app-search-currency #search></app-search-currency>

    <app-currency-list-and-detail *ngIf="currencies$ | async as currencies">
      <app-currency-list [@onShowDetail]="onShowDetail()" @list>
        <ng-container *ngFor="let currency of currencies | sortbycountry">
          <app-currency
            (click)="showDetail(currency)"
            [currency]="currency"
            [selected]="currenciesService.selectedCurrency$ | async"
            [filteredCurrency]="
              search.searchedCurrency$ | async | filter: currency
            "
          >
          <app-loader *ngIf="showLoader === currency.code"></app-loader>
          </app-currency>
        </ng-container>
      </app-currency-list>
      
      <app-currency-detail>
        <router-outlet></router-outlet>
      </app-currency-detail>
    </app-currency-list-and-detail>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        color: white;
        background-image: linear-gradient(
          rgba(68, 67, 109, 1),
          rgba(49, 48, 94, 1)
        );
      }
    `,
  ],
  animations: [list, onShowDetail],
})
export class AppComponent implements OnInit {
  constructor(
    public currenciesService: CurrenciesService,
    private routerService: Router
  ) {}
  currencies$!: Observable<Currency[]>;
  showLoader!: string;

  ngOnInit() {
    this.currencies$ = this.currenciesService.getCurrencies();
  }

   
  _showDetail(currency: Currency): void {
    this.showLoader = '';
      this.currenciesService.selectedCurrency$.next(currency.code);
    this.currenciesService.getCurrencyDetail(currency);
    
      let country = currency.country.split(" ").join("-");
      this.routerService.navigate([
        "currency-detail",
        `${currency.code}-${country}`,
      ]);
  }

  showDetail(currency: Currency): void {
    this.showLoader = currency.code;
    timer(2000).subscribe(_ => this._showDetail(currency))
  }

    

  onShowDetail(): string {
    return this.routerService.url.split("/")[1];
  }
}
    
    
    

  
  
