import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tabName: string = 'Pendientes';

  constructor(public wishes: WishesService, private _router: Router) {

  }

  addList(){
    //Navigates from the index
    this._router.navigateByUrl('/tabs/tab1/add');
  }
}
