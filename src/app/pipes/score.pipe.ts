import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value > 0 ? `+ ${value}` : `- ${Math.abs(value)}`;
  }

}
