import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { TablaComponent } from './pages/tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    TablaComponent,
    
    
  ],
  imports: [
    CommonModule,
    ListadoRoutingModule,
    MatTableModule,
    MatSlideToggleModule,
  ]
})
export class ListadoModule { }
