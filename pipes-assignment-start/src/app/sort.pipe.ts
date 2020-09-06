import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortProp: string): any[] {
    return value.sort((a,b) => a[sortProp].localeCompare(b[sortProp]))
  }
}
