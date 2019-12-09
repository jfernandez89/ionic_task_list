import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tabName: string = 'Pendientes';

  constructor(public wishes: WishesService, private _router: Router, private _alertCtrl: AlertController) {
  }

  // Transform the method result in to a promise, needed by await option
  async addList() {

    const alert = await this._alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            
            if (data.title.length === 0) {
              return;
            }

            const listId = this.wishes.createList(data.title);

            //Navigates from the index to an specific list
            this._router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          }
        }
      ]
    });

    alert.present();
  }
}
