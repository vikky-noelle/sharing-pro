import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacechar'
})
export class ReplacecharPipe implements PipeTransform {

  transform(value: string, regexValue: string, replaceValue: string): any {
    let regex = new RegExp(regexValue, 'g');
    return value.replace(regex, replaceValue);
  }

}
