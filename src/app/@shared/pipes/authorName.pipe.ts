import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorPipe',
})
export class AuthorNamePipe implements PipeTransform {
  transform(value: string): string {
    if (value === null) {
      return 'FudoNews';
    }
    return value;
  }
}
