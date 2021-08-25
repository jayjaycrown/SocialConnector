import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceLinebreaks',
})
export class ReplaceLinebreaksPipe implements PipeTransform {
  transform(value: string): string {
    if (value !== undefined || value != null) {
      return value.replace(/\n/g, '<br/>');
    }
  }
}
