import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrenciesService, Currency } from './SERVICES/currencies.service';

@Component({
  selector: "app-root",
  template: `
    <app-navbar>
      <app-navbar-logo></app-navbar-logo>
      <app-navbar-title></app-navbar-title>
    </app-navbar>

    <app-search-currency #search></app-search-currency>

    <app-currency-list-and-detail *ngIf="currencies$ | async as currencies">
      <app-currency-list>
        <ng-container *ngFor="let currency of currencies | sortbycountry">
          <app-currency (click)="showDetail(currency)"
            [currency]="currency"
            [filteredCurrency]="(search.searchedCurrency$) | async | filter: currency"
          >
          </app-currency>
        </ng-container>
      </app-currency-list>
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
})
export class AppComponent implements OnInit {
  constructor(
    private currenciesService: CurrenciesService,
    private routerService: Router
  ) { }
  currencies$!: Observable<Currency[]>;

  ngOnInit() {
    this.currencies$ = this.currenciesService.getCurrencies();
  }

  showDetail(currency: Currency): void {
    console.log(currency);
    
  }
}
    
    
    

  
  
