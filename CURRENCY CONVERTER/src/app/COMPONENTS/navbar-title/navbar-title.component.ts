import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar-title',
  template: `
    <h1>CURRENCY CONVERTER</h1>
  `,
  styles: [`
   :host {
     border-bottom: 1px solid white;
     padding-bottom: 10px;
   }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarTitleComponent {}