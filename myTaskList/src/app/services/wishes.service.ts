import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {

    this.loadStorage();

  }

  createList(title: string): number {

    const newList = new List(title);
    this.lists.push(newList);

    this.saveStorage();

    return newList.id;
  }

  //Filter the list array overwritting its value
  deleteList(plist: List) {
    this.lists = this.lists.filter(data => data.id !== plist.id);
    this.saveStorage();
  }

  getList(id: number | string): List {

    //Transform the id param to a Number in 
    id = Number(id);

    return this.lists.find(listData => listData.id === id);

  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists))
  }

  loadStorage() {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }
}
