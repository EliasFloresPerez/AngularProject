import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './pages/tabla/tabla.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'mostrar' , component:TablaComponent},
      {path:'**' , redirectTo:'mostrar'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRoutingModule { }
