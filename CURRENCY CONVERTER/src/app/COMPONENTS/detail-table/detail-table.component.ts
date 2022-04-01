import { CurrencyDetail } from './../../SERVICES/currencies.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: "app-detail-table",
  template: `
    <h4>CURRENCY DETAIL</h4>
    <ul>
      <li>CURRENCY CODE</li>
      <li>COUNTRY</li>
      <li>CONVERSION RATE</li>
      <li>AVERAGE RATE THE LAST 12 MONTHS</li>
      <li>{{ currencyDetail.currency.code }}</li>
      <li>{{ currencyDetail.currency.country }}</li>
      <li>{{currencyDetail.rates[0]}}</li>
      <li>{{currencyDetail.rates | average}}</li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 80%;
        border-radius: 10px;
        background: rgba(35, 35, 83, 1);
        padding: 10px;
      }
      ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
        gap: 10px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
      }
      li {
        text-align: center;
      }

      h4 {
        border-bottom: 1px solid white;
        padding-bottom: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailTableComponent {
  @Input() currencyDetail!: CurrencyDetail;
}
