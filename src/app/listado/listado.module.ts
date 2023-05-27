import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { TablaComponent } from './pages/tabla/tabla.component';


@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    ListadoRoutingModule
  ]
})
export class ListadoModule { }
