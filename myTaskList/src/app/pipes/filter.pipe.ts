import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filter',
  pure: false //Detect when the pipe is active and reload the dom
})
export class FilterPipe implements PipeTransform {

  transform(lists: List[], completed: boolean = true): List[] {

    return lists.filter(list => { list.isFinished === completed; });

  }
}
