import { CurrencyDetail } from './../../SERVICES_AND_PIPES/currencies.service';

import { Component, ChangeDetectionStrategy,  HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { CurrenciesService } from '../../SERVICES_AND_PIPES/currencies.service';
import { detail } from './../../animations';
import { Observable, Subject, switchMap } from 'rxjs';


@Component({
  selector: "app-detail",
  template: `
    <ng-container *ngIf="currencyDetail$ | async as currencyDetail">
      <app-detail-table [currencyDetail]="currencyDetail"> </app-detail-table>

      <app-line-chart [rates]="currencyDetail.rates"></app-line-chart>
      <app-button [routerLink]="'/'">CLOSE</app-button>
      

      <app-detail-not-found *ngIf="!(currencyDetail.rates.length)">
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
  animations: [detail],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  constructor(
    public currencyService: CurrenciesService,
    public activeRoute: ActivatedRoute
  ) {}
  currencyDetail$!: Observable<CurrencyDetail>;

  @HostBinding("@detail")
  

  ngOnInit() {
    this.currencyDetail$ = this.activeRoute.params.pipe(
      switchMap((params) =>
        this.currencyService.getCurrencyDetail(params["currency"])
      )
    );
      
  }
}
  

