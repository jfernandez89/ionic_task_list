import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  //Get the only IonList available in the view, if there was more than one, we must add an id element to get it
  @ViewChild(IonList) myIonList :IonList;
  @Input() finishedFrom = true;

  constructor(public wishes: WishesService, private _router: Router, private _alertCtrl: AlertController) { }

  ngOnInit() { }

  selectedList(currentList: List) {

    if (this.finishedFrom) {
      this._router.navigateByUrl(`/tabs/tab2/add/${currentList.id}`);
    } else {
      this._router.navigateByUrl(`/tabs/tab1/add/${currentList.id}`);
    }
  }

  deleteList(list: List) {
    this.wishes.deleteList(list);
  }

  async editTitleList(list: List) {

    const alert = await this._alertCtrl.create({
      header: 'Editar título',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.myIonList.closeSlidingItems();
          }
        },
        {
          text: 'Modificar',
          handler: (data) => {
            
            if (data.title.length === 0) {
              return;
            }

            list.title = data.title;
            this.wishes.saveStorage();
            this.myIonList.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }
}
