import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    let iex = parseFloat(exponent);
    return Math.pow(value,isNaN(iex)?iex:1);
    //return null;
  }
}
