import { Component, ChangeDetectionStrategy} from '@angular/core';
import {  FormControl } from '@angular/forms';

@Component({
  selector: "app-search-currency",
  template: `
    <div>
      <input [formControl]="searchedCurrency" placeholder="Search Currency" />
      <label [class.moveUp]="searchedCurrency.value">Search Currency</label>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        width: 500px;
        background-color: rgba(35, 35, 83, 1);
        position: absolute;
        top: 100px;
        z-index: 200;
      }

      div {
        height: 40px;
        width: 500px;
        position: relative;
      }

      label {
        position: absolute;
        top: 11px;
        left: 21px;
        color: black;
        font-size: 12px;
        transition: all 200ms ease;
        color: gray;
        &.moveUp {
          color: red;
          top: -18px;
          color: white;
        }
      }

      input::placeholder {
        color: transparent;
      }
      input {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        padding-left: 20px;
        &:focus ~ label {
          color: red;
          top: -18px;
          color: white;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCurrencyComponent {
  searchedCurrency = new FormControl("");
}
  

  
  