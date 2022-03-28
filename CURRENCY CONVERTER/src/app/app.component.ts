import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: ` 
   <app-navbar>
     <app-navbar-logo></app-navbar-logo>
     <app-navbar-title></app-navbar-title>
   </app-navbar>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        color: white;
        background-image: linear-gradient(
          rgba(68, 67, 109, 1), 
          rgba(49, 48, 94, 1)
        );
      }
    `,
  ],
})
export class AppComponent {
  title = "currency-converter";
}
