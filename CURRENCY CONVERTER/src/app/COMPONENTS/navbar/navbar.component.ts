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
        height: 180px;
        width: 100%;
        justify-content: center;
        background-color: rgba(35, 35, 83, 1);
      }
      nav {
        width: 90%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
