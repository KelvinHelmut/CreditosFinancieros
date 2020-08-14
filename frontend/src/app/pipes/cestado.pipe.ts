import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cestado'
})
export class CestadoPipe implements PipeTransform {

  ESTADOS = ['RECHAZADO', 'SOLICITADO', 'APROBADO'];

  transform(value: number, ...args: unknown[]): unknown {
    return this.ESTADOS[value + 1];
  }

}
