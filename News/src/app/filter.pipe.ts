import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], words: string[]): any {
    if (words.length && value) {
      return value.filter(item => {
        return !words.reduce((mod: boolean, word: string) => {
          return (
            mod &&
            !Object.keys(item).reduce((m, prop) => {
              return m || item[prop].toLowerCase().indexOf(word) !== -1;
            }, false)
          );
        }, true);
      });
    }
    return value;
  }
}
