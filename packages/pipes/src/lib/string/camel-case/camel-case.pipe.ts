import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
    name: 'camelCase',
    standalone: false
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    return StringUtils.toCamelCase(value);
  }

}
