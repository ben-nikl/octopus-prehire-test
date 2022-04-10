import { Component,  ChangeDetectionStrategy, Input, Output, EventEmitter,  } from '@angular/core';
import { Currency } from '../../SERVICES_AND_PIPES/currencies.service';

import { dropDown } from '../../animations';

@Component({
  selector: "app-drop-down-search-currency",
  template: `
    <ul *ngIf="searching && showDropDown" @dropDown>
      <li
        *ngFor="let currency of currencies | sortbycountry"
        (click)="filter(currency)"
        [class.matching]="searching | filter: currency"
      >
        {{ currency.code }}
        {{ currency.country }}
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        position: absolute;
        width: 104%;
        left: 0;
        top: 0px;
        z-index: -10;
        color: gray;
        overflow: hidden;
        border-radius: 20px 20px 0px 0px;
        cursor: pointer;
      }

      ul {
        background: white;
        list-style-type: none;
        padding-top: 40px;
      }
      li:first-child {
        border-top: 1px solid gray;
      }
      li {
        background: rgba(255, 255, 255, 0.5);
        padding: 2px;
        padding-left: 20px;
      }
      li.matching {
        color: white;
        background: gray;
      }
    `,
  ],
  animations: [dropDown],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropDownSearchCurrencyComponent {
  searching!: string;
  showDropDown!: boolean;
  code!: string;

  @Output() detail = new EventEmitter<Currency>();
  @Input() currencies!: Currency[];
  @Input()
  set search(search: string) {
    this.searching = search;
    this.showDropDown = true;
  }

  filter(currency: Currency): void {
    this.code = currency.code;
    this.detail.emit(currency);
    this.showDropDown = false;
  }
}
