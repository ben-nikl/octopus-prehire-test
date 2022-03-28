
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-currency-list-and-detail',
  template: `
    <h4>CURRENCIES</h4>
    <section>
      <ng-content></ng-content>
    </section>

  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    h4{
      font-weight: normal;
      position: relative;
      top: 15px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyListAndDetailComponent {}
