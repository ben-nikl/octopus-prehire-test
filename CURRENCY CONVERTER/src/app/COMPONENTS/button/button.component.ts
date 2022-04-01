import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button><ng-content></ng-content></button>
  `,
  styles: [`
       button {
         border: none;
         outline: none;
         width: 100px;
         height: 25px;
         border-radius: 30px;
         background: white;
         font-weight: bold;
         cursor: pointer;
       }
     `],
  animations: [
    trigger('button', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(100%)'
        }),

        animate('300ms ease')
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @HostBinding('@button') animate = true;
}