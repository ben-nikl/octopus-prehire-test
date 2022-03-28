import { CurrenciesService } from './SERVICES/currencies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  template: ` 
   <app-navbar>
     <app-navbar-logo></app-navbar-logo>
     <app-navbar-title></app-navbar-title>
   </app-navbar>
   <app-search-currency></app-search-currency>
   <app-currency-list-and-detail>
     <router-outlet></router-outlet>
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
  constructor(public currencyService: CurrenciesService) {}
  ngOnInit() { 
    this.currencyService.getCurrencies().subscribe(console.log);
  } 
}

  
  
