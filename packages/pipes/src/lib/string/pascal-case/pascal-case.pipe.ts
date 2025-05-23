import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
    name: 'pascalCase',
    standalone: false
})
export class PascalCasePipe implements PipeTransform {

  transform(value: string): string {
    return StringUtils.toPascalCase(value);
  }

}
