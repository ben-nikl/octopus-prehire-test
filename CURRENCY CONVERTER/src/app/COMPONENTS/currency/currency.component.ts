import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { Currency } from './../../SERVICES/currencies.service';

@Component({
  selector: "app-currency",
  template: `
    <li>
      {{ currency.code }} -
      {{ currency.country | uppercase }}
    </li>
  `,
  styles: [
    `
      :host {
        color: rgba(255, 255, 255, 0.8);
        font-weight: normal;
        transition: all 100ms ease;
        box-sizing: border-box;
        background-color: rgba(49, 48, 94, 1);
        &.searched {
          color: rgba(255, 255, 255, 1);
          background-color: rgba(35, 35, 83, 1);
          outline: 1px solid rgba(255, 255, 255, 0.7);
        }
        &:hover {
          color: rgba(255, 255, 255, 1);
          background-color: rgba(35, 35, 83, 1);
          outline: 1px solid rgba(255, 255, 255, 0.7);
        }
      }
      li {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding-left: 15px;
        height: 28px;
        color: inherit;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyComponent {
  @Input() currency!: Currency;
  @HostBinding("class.searched")
  @Input() filteredCurrency!: boolean;
}

  

