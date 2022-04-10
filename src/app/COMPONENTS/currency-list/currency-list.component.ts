import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';



@Component({
  selector: "app-currency-list",
  template: `
    <ul>
      <ng-content></ng-content>
    </ul>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 400px;
        height: 600px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
        position: absolute;
        left: 400px;
        transition: all 500ms ease;
      }

      ul {
        list-style-type: none;
        height: 100%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        gap: 1px;
        background: rgba(35, 35, 83, 1);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyListComponent {}
