import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName: string = '';

  constructor(private _wishes: WishesService, private _route: ActivatedRoute) {

    const listId = this._route.snapshot.paramMap.get('listId');

    this.list = this._wishes.getList(listId);

  }

  ngOnInit() {
  }

  addItem() {

    if (this.itemName.length === 0) {
      return;
    }

    const newItem = new ListItem(this.itemName);
    this.list.items.push(newItem);

    this.itemName = '';
    this._wishes.saveStorage();

  }

}
