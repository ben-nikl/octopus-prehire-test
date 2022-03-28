import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Currency } from './../../SERVICES/currencies.service';


@Component({
  selector: "app-currency-list",
  template: `
    <ul>
      <li *ngFor="let currency of currencies | sortbycountry">
        {{ currency.country | uppercase }} - ({{ currency.code }})
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 400px;
        height: 600px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
      }

      ul {
        list-style-type: none;
        height: 100%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        gap: 1px;
        background: rgba(255, 255, 255, 0.2);
      }
      li {
        display: flex;
        align-items: center;
        padding-left: 15px;
        height: 30px;
        background-color: rgba(49, 48, 94, 1);
        color: rgba(255, 255, 255, 0.8);
        &:hover {
          color: rgba(255, 255, 255, 1);
          background-color: rgba(35, 35, 83, 1);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyListComponent {
  @Input() currencies!: Currency[];
}
