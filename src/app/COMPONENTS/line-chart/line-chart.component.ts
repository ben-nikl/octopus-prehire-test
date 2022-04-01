import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
@Component({
  selector: "app-line-chart",
  template: `
    <h5>RATES TO CZK FOR THE LAST 12 MONTHS</h5>
    <canvas
      baseChart
      type="line"
      [datasets]="data"
      [labels]="months"
      [legend]="true"
    >
      >
    </canvas>
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 98%;
        border-radius: 10px;
        background: rgba(35, 35, 83, 1);
      }

      canvas {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent {
  @Input() rates!: number[];
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  get data(): [{ data: number[]; label: string }] {
    return [{ data: [...this.rates], label: "RATES IN CZK" }];
  }
}
