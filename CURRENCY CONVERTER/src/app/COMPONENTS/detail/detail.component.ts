
import { Component, ChangeDetectionStrategy,  HostBinding } from '@angular/core';
import { Router } from '@angular/router';


import { CurrenciesService } from '../../SERVICES_AND_PIPES/currencies.service';
import { detail } from './../../animations';


@Component({
  selector: "app-detail",
  template: `
    <ng-container *ngIf="currencyService.currencyDetail$ | async as currencyDetail">

      <app-detail-table [currencyDetail]="currencyDetail"> </app-detail-table>
          
      <app-line-chart [rates]="currencyDetail.rates"></app-line-chart>
      <app-button (click)="closeDetail()">CLOSE</app-button>

      <app-detail-not-found 
        *ngIf="!(currencyDetail.rates.length)">
      </app-detail-not-found>

    </ng-container>

  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 820px;
        height: 600px;
        overflow: hidden;
        box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        position: relative;
        right: -20px;
      }

      app-button {
        position: absolute;
        bottom: 8px;
      }
    `,
  ],
  animations: [detail ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  constructor(
    private router: Router,
    public currencyService: CurrenciesService
  ) {}

  @HostBinding("@detail")
  ngOnDestroy() {
    this.currencyService.selectedCurrency$.next("");
  }

  closeDetail(): void {
    this.router.navigate(["/"]);
    this.currencyService.selectedCurrency$.next("");
  }

  
}
  

