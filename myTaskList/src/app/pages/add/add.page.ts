import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  tabName: string = 'Nombre de la lista';

  constructor() { }

  ngOnInit() {
  }

}
