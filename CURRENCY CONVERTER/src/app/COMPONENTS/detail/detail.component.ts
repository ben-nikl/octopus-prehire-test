
import { trigger, transition, style, animate, animateChild, query } from '@angular/animations';
import { CurrenciesService } from './../../SERVICES/currencies.service';
import { Component, ChangeDetectionStrategy, OnDestroy, HostBinding } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: "app-detail",
  template: `
    <app-detail-table
      *ngIf="(currencyService.currencyDetail$ | async) as currencyDetail"
      [currencyDetail]="currencyDetail"
    >
    </app-detail-table>
    <app-button (click)="closeDetail()">CLOSE</app-button>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 600px;
        height: 600px;
        overflow: hidden;
        box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
        box-shadow-left: none;
        border-radius: 10px;
      }

      app-button {
        position: absolute;
        bottom: 12px;
      }
    `,
  ],
  animations: [
    trigger("detail", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "translateX(-12%)",
        }),
        animate(
          "500ms 300ms ease",
          style({
            opacity: 1,
            transform: "translateX(0%)",
          })
        ),
        query('@button', animateChild(), {optional: true})
      ]),

      transition(":leave", [
        animate(
          "500ms ease",
          style({
            opacity: 0,
            transform: "translateX(-12%)",
          })
        ),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnDestroy {
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
  

