import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: "app-line-chart",
  template: ``,
  styles: [
    `
      :host {
        display: flex;
        width: 83%;
        height: calc(100% - 250px);
        background: rgba(35, 35, 83, 1);
        border-radius: 10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
