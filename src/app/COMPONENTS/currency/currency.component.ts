import { CurrenciesService } from './../../SERVICES_AND_PIPES/currencies.service';
import { Component, ChangeDetectionStrategy, Input, HostBinding, OnInit } from '@angular/core';


import { Currency } from '../../SERVICES_AND_PIPES/currencies.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-currency",
  template: `
    <li [class.selected]="selected === currency.code">
      {{ currency.code }} -
      {{ currency.country | uppercase }}
      <ng-content></ng-content>
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
        overflow: hidden;
        &.searched {
          color: rgba(255, 255, 255, 1);
          background-color: rgba(35, 35, 83, 1);
          font-weight: bold;
        }
        &:hover {
          color: rgba(255, 255, 255, 1);
          background-color: rgba(35, 35, 83, 1);
        }
      }
      li {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding-left: 15px;
        height: 28px;
        color: inherit;
        position: relative;
      }
      li.selected {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(35, 35, 83, 1);
        &::after {
          content: "";
          position: absolute;
          width: 4px;
          height: 100%;
          left: 0;
          background: white;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyComponent {
  @Input() currency!: Currency;
  @Input() selected!: string;
  @Input() filteredCurrency!: string;

  @HostBinding("class.searched")
  get searched(): boolean {
    return this.filteredCurrency === 
    this.currency.code
  }

  
  
}

  

  


  

