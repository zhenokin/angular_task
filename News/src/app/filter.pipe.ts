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
              const propValue = item[prop];
              if (typeof propValue !== 'string') {
                return m || false;
              }
              return (
                m || propValue.toLowerCase().indexOf(word.toLowerCase()) !== -1
              );
            }, false)
          );
        }, true);
      });
    }
    return value;
  }
}
