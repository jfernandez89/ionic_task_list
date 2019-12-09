import { Component, OnInit, Input } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() isFinished = true;


  constructor(public wishes: WishesService, private _router: Router) { }

  ngOnInit() { }

  selectedList(currentList: List) {

    if (this.isFinished) {
      this._router.navigateByUrl(`/tabs/tab2/add/${currentList.id}`);
    } else {
      this._router.navigateByUrl(`/tabs/tab1/add/${currentList.id}`);
    }
  }
}
