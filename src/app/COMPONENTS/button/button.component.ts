
import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { button } from './../../animations';

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
  animations: [button],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @HostBinding('@button') animate = true;
}