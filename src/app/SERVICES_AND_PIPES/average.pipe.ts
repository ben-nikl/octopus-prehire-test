import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {
  
  transform(twelveMonths: number[]): number {
    return (twelveMonths.slice(0, -1).reduce((a, b) => (a + b)) / twelveMonths.length);
  }

}
