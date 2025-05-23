import { Pipe, PipeTransform } from '@angular/core';

import { NumberUtils } from '../../utils/number-utils';
import { TypeUtils } from '../../utils/type-utils';

@Pipe({
    name: 'sum',
    standalone: false
})
export class SumPipe implements PipeTransform {

  transform(values: number[]): number {
    if (TypeUtils.isNullOrUndefined(values)) {
      return null;
    } else if (TypeUtils.isEmpty(values)) {
      return 0;
    } else if (!NumberUtils.areFinite(values)) {
      return NaN;
    }
    return NumberUtils.sum(values);
  }

}
