import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {

    if (!value) return null;

    let prepositions = [
      'and',
      'or',
      'of',
      'a',
      'the'
    ]

    let words = value.split(' ');

    words[0] = words[0].substr(0, 1).toUpperCase() +
      words[0].substr(1).toLowerCase();

    for (var i = 1; i < words.length; i++) {

      if (prepositions.includes(words[i].toLowerCase())) {
        words[i] = words[i].toLowerCase();
      }
      else {
        words[i] = words[i].substr(0, 1).toUpperCase() +
          words[i].substr(1).toLowerCase();
      }
    }

    return words.join(' ');
  }
}
