import { Component, ChangeDetectionStrategy } from '@angular/core';


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
      top: 20px;
      &:after {
        content: '';
        background: white;
        position: absolute;
        height: 1px;
        width: 150%;
        bottom: -10px;
        left: -25px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyListAndDetailComponent {}
