import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csentinel'
})
export class CsentinelPipe implements PipeTransform {

  PUNTUACIONES = ['MALO', 'REGULAR', 'BUENO'];

  transform(value: number, ...args: unknown[]): unknown {
    return this.PUNTUACIONES[value + 1];
  }

}
