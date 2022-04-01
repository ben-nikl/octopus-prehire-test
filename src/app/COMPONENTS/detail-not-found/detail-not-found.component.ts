import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-detail-not-found',
  template: `
    <p>CURRENCY DETAIL NOT FOUND!</p>
  `,
  styles: [`
    :host {
      color: red;
      position: absolute;
      top: 50%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailNotFoundComponent {}
