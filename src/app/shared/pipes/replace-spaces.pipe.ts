import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaces' // This is the name of the PIPE is we want to use it in others sections of the code.
})
export class ReplaceSpacesPipe implements PipeTransform {

  transform(value: string, args?: string): string{
    value  = value.split(' ').join('-').toLocaleLowerCase();

    return value;
  }

}
