import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'combine',
    standalone: false
})
export class CombinePipe implements PipeTransform {

  transform<T>(values: Array<T>, ...items: (T | ConcatArray<T>)[]): Array<T> {
    return values && values.concat(...items);
  }

}
