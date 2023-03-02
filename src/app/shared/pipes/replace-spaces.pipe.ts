import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaces' // This is the name of the PIPE is we want to use it in others sections of the code.
})
export class ReplaceSpacesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
