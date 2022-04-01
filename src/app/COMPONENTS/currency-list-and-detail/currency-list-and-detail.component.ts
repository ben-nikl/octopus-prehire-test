
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
      width: 1200px;
      height: 100%;
      position: relative;

    }

    h4{
      position: relative;
      top: 15px;
      &::before{
        content: '';
        position: absolute;
        width: 110%;
        height: 1px;
        background: white;
        top: 50%;
        left: -120%;
      }
      &::after{
        content: '';
        position: absolute;
        width: 110%;
        height: 1px;
        background: white;
        top: 50%;
        right: -120%;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyListAndDetailComponent {}
