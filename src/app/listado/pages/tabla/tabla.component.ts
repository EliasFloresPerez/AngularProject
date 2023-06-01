import { Component } from '@angular/core';

export interface PeriodicElement {
  Empleado:string,
  CuentaI:string,
  GastoV:string,
  Meses:any,
  Total:number

}

const ELEMENT_DATA: PeriodicElement[] = [
    {
      Empleado: "Elias Flores",
      CuentaI: "Amazonas",
      GastoV: "xd",
      Meses: {
        "Enero": 1,
        "Febrero": 2,
        "Marzo": 3,
        "Abril": 4,
        "Mayo": 5,
        "Junio": 6,
        "Julio": 7,
        "Agosto": 8,
        "Septiembre": 9,
        "Octubre": 10,
        "Noviembre": 11,
        "Diciembre": 12
      },
      Total: 200
    },
    {
      Empleado: "Elias Flores",
      CuentaI: "Amazonas",
      GastoV: "xd",
      Meses: {
        "Enero": 191,
        "Febrero": 122,
        "Marzo": 130,
        "Abril": 198,
        "Mayo": 120,
        "Junio": 136,
        "Julio": 197,
        "Agosto": 120,
        "Septiembre": 130,
        "Octubre": 198,
        "Noviembre": 122,
        "Diciembre": 130
      },
      Total: 300
    },
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

  contador  = 0;

  mes1 =   this.meses[this.contador]
  mes2  =  this.meses[this.contador+1];
  mes3  =  this.meses[this.contador+2];

  moveLeft() {
    this.contador -= 3 ;

    if (this.contador < -1) {
        this.contador = 9;
    }
    this.mes1 =   this.meses[this.contador]
    this.mes2  =  this.meses[(this.contador+1) %12];
    this.mes3  =  this.meses[(this.contador+2) %12];


  }

  moveRight() {
    this.contador += 3 ;

    if (this.contador == 12) {
        this.contador = 0;
    }
    this.mes1 =   this.meses[this.contador]
    this.mes2  =  this.meses[(this.contador+1) %12];
    this.mes3  =  this.meses[(this.contador+2) %12];
    
  }
  

}


