
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: "app-currency-detail",
  template: ` <ng-content></ng-content>`,
  styles: [`
      :host {
        position: absolute;
        right: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyDetailComponent {}

  