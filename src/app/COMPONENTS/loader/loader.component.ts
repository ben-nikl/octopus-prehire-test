import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: "app-loader",
  template: `
    <svg viewBox="0 0 50 50" fill="none">
      <circle cx="25" cy="25" r="22.5" />
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        position: absolute;
        right: 5%;
        width: 20px;
        height: 100%;
        border-radius: 50%;
        animation: circle 500ms ease-in-out infinite;
      }
      svg {
        width: 100%;
        height: 100%;
      }
      svg circle {
        stroke: white;
        stroke-width: 8;
        stroke-dasharray: 100;
        stroke-dashoffset: 40;
      }

      @keyframes circle {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {}
