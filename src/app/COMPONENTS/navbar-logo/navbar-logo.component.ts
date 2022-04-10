import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar-logo',
  template: `
    <img src="../../../assets/LOGO.png">
  `,
  styles: [`
    :host {
      display: inline-block;
      width: 200px;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLogoComponent {}
