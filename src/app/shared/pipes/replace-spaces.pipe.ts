import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaces'
})
export class ReplaceSpacesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
