import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { TablaComponent } from './pages/tabla/tabla.component';
import { NavbarComponent } from './pages/navbar/navbar.component';


import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    TablaComponent,
    NavbarComponent,
    
    
  ],
  imports: [
    CommonModule,
    ListadoRoutingModule,
    MatTableModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ListadoModule { }
