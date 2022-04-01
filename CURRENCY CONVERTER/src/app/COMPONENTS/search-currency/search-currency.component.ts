import { Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Currency } from '../../SERVICES_AND_PIPES/currencies.service';

@Component({
  selector: "app-search-currency",
  template: `
    <div>
      <input [formControl]="searchedCurrency" placeholder="Search Currency" />
      <label [class.moveUp]="searchedCurrency.value">Search Currency</label>
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
        font-weight: bold;
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
export class SearchCurrencyComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  searchedCurrency = new FormControl("");
  searchedCurrency$ = new BehaviorSubject<Currency | null>(null);

  ngOnInit() {
    this.sub = this.searchedCurrency.valueChanges.subscribe(
      (searched: string) => {
        let filteredCurrency = this.extractText(searched).split(" ");
        this.searchedCurrency$.next({
          code: filteredCurrency[0].slice(0, 3),
          country: filteredCurrency.slice(1).join(" "),
        });
      }
    );
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private extractText(text: string): string {
    return text.replace(/\s+/g, " ").trim();
  }
}