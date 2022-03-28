import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: "app-search-currency",
  template: ` <input placeholder="Search Currency" /> `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100%;
        background-color: rgba(35, 35, 83, 1);
      }
      input {
        border: none;
        outline: none;
        width: 30%;
        height: 40px;
        border-radius: 30px;
        padding-left: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCurrencyComponent {}