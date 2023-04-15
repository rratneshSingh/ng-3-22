import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if ( typeof value === 'string' ) {
      return value.substring(0, 15) + '...';
    }
    return 'N/A';
  }
}
