import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  
   
  equipo:any[] = [{

    nombre: 'Ignacio',
    especialidad: 'HTML',
    descripcion: 'Lorem Ipsum 1'},

    {

      nombre: 'Maria',
      especialidad: 'CSS',
      descripcion: 'Lorem Ipsum 2'},

  ]

  constructor() { 

    console.log('funcionando servicio')
  }

  obtenerequipo(){

    return this.equipo;
  }
  
  obtenerUno(i:number){

    return this.equipo[i];


  }
}
