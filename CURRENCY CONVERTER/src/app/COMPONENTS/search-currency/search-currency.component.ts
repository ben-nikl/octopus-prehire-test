import { Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Currency } from './../../SERVICES/currencies.service';

@Component({
  selector: "app-search-currency",
  template: `
    <input [formControl]="searchedCurrency" placeholder="Search Currency"/>
  `,
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
        width: 35%;
        height: 40px;
        border-radius: 30px;
        padding-left: 20px;
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
    this.sub = this.searchedCurrency.valueChanges
      .subscribe((searched: string) => {
        let filteredCurrency = this.extractText(searched).split(' ');
        this.searchedCurrency$.next({
          code: filteredCurrency[0].slice(0, 3),
          country: filteredCurrency.slice(1).join(' ')
        })
      }
    )

  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private extractText(text: string): string {
    return (
      text.replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, " ")
      .trim()
    );
    
  }
}