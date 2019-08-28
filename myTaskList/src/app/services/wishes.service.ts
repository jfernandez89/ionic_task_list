import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[];

  constructor() { 
    console.log('Wishes Service Ready');
  }
}
