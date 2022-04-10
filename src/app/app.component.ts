
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { list, onShowDetail } from './animations';
import { CurrenciesService, Currency } from './SERVICES_AND_PIPES/currencies.service';

@Component({
  selector: "app-root",
  template: `
    <app-navbar>
      <app-navbar-logo></app-navbar-logo>
      <app-navbar-title></app-navbar-title>
    </app-navbar>

    <app-search-currency #search>
      <app-drop-down-search-currency
        #filtered
        [currencies]="(currencies$ | async)!"
        [search]="search.searchedCurrency.value"
        (detail)="showDetail($event)"
      ></app-drop-down-search-currency>
    </app-search-currency>

    <app-currency-list-and-detail *ngIf="currencies$ | async as currencies">

      <app-currency-list [@onShowDetail]="onShowDetail" @list>
        <ng-container *ngFor="let currency of currencies | sortbycountry">
          <app-currency
            (click)="showDetail(currency)"
            [currency]="currency"
            [selected]="selected"
            [filteredCurrency]="(search.searchedCurrency.value && filtered.code)"
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
        align-items: center;
        box-sizing: border-box;
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
export class AppComponent {
  constructor(
    public currenciesService: CurrenciesService,
    private routerService: Router
  ) {}

  currencies$ = this.currenciesService.getCurrencies();
  showLoader!: string;

  showDetail(currency: Currency): void {
    this.showLoader = currency.code;
    timer(2000).subscribe(
      (_) => (
        (this.showLoader = ""),
        this.routerService.navigate([
          "currency-detail",
          `${currency.code} ${currency.country}`,
        ])
      )
    );
  }

  get onShowDetail(): string {
    this.selected;
    return this.routerService.url.split("/")[1];
  }

  get selected(): string {
    return this.routerService.url.length > 1
      ? this.routerService.url.split("/")[2].slice(0, 3)
      : "";
  }
}
    
    
    

  
  
