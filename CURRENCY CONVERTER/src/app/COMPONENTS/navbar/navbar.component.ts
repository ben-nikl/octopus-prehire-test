import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: "app-navbar",
  template: `
    <nav>
      <ng-content></ng-content>
    </nav>
  `,
  styles: [
    `
      :host {
        display: flex;
        height: 100px;
        justify-content: center;
        background-color: rgba(49, 48, 94, 1);
      }
      nav {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
