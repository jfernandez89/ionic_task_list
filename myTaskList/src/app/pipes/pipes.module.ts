import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [FilterPipe],
  //We dont need commonModule (*ngIf, *ngFor...)
  exports: [FilterPipe]
})
export class PipesModule { }
