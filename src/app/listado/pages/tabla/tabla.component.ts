import { Component } from '@angular/core';


export interface PeriodicElement {
  Empleado:string,
  CuentaI:string,
  GastoV:string,
  Meses:[number,number,number],
  Total:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Empleado:"Elias Flores",CuentaI:"Amazonas",GastoV:"xd",Meses:[198,120,130],Total:200},
  {Empleado:"Elias Flores",CuentaI:"Amazonas",GastoV:"xd",Meses:[198,120,130],Total:300},
];



@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
  
})
export class TablaComponent {
  //Entrys
  elementos: string[] = ['Sucursal', 'C. de Gasto', 'Divison', 'Seccion', 'Usuario', 'Año'];

  //Tabla principal
  displayedColumns: string[] = ['Empleado', 'CuentaI', 'GastoV' ,'Meses1','Meses2','Meses3','Total'];
  dataSource = ELEMENT_DATA;
  
  //Subtabla
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  moveLeft() {
    // Lógica para mover la tabla hacia la izquierda (actualizar la lista de meses)
    // Puedes implementar aquí la lógica específica para tu caso
  }

  moveRight() {
    // Lógica para mover la tabla hacia la derecha (actualizar la lista de meses)
    // Puedes implementar aquí la lógica específica para tu caso
  }
  

}


