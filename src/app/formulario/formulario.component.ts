import { Component } from '@angular/core';
import { Resultado } from '../equipo';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  equipoModel= new Resultado("","", 0,0,"","", 0, 0,"","", 0, 0,"","", 0, 0,"","", 0, 0,"","", 0, 0);
  constructor() {}
  ngOnInit() {}
  tabla:string[]=["","","",""];
  puntuaciones:number[]=[0,0,0,0];
  corrimiento = 0;
  show:boolean=false;

  puntuarEquipo(nombre: string, puntos: number){
    //si el nombre no esta en la tabla a;ade el nombre en la posicion del corrimiento, mueve el corrimiento
    if((!this.tabla.includes(nombre)) && (nombre != null)) {
      this.tabla[this.corrimiento] = nombre;
      this.corrimiento++; 
    }
    //suma los puntos en la misma posicion del equipo en el array tabla
    this.puntuaciones[this.tabla.indexOf(nombre)]+=puntos;
  }

  calculo(nombre1: string, nombre2: string, resultado1: number, resultado2: number) {
    console.log(this.puntuaciones[0]);
      //validacion equipo a gana
    if (resultado1 > resultado2) {
      this.puntuarEquipo(nombre1,3);
    } else if (resultado1 < resultado2) {
      this.puntuarEquipo(nombre2,3);
    } else {
      this.puntuarEquipo(nombre1,1);
      this.puntuarEquipo(nombre2,1);
    }
  }


  formularioEnviado(){
    this.tabla=["","","",""];
    this.puntuaciones=[0,0,0,0];
    this.corrimiento=0;
    this.calculo(this.equipoModel.nombre1,this.equipoModel.nombre2,this.equipoModel.resultado1,this.equipoModel.resultado2);
    this.calculo(this.equipoModel.nombre3,this.equipoModel.nombre4,this.equipoModel.resultado3,this.equipoModel.resultado4);
    this.calculo(this.equipoModel.nombre5,this.equipoModel.nombre6,this.equipoModel.resultado5,this.equipoModel.resultado6);
    this.calculo(this.equipoModel.nombre7,this.equipoModel.nombre8,this.equipoModel.resultado7,this.equipoModel.resultado8);
    this.calculo(this.equipoModel.nombre9,this.equipoModel.nombre10,this.equipoModel.resultado9,this.equipoModel.resultado10);
    this.calculo(this.equipoModel.nombre11,this.equipoModel.nombre12,this.equipoModel.resultado11,this.equipoModel.resultado12);
    for (let i=0;i<this.puntuaciones.length;i++){
      console.log("Equipo:    ",this.tabla[i],"  Resultado:    ", this.puntuaciones[i]);
    }

    this.show=true; //para mostrar los resultados ya que al inicio estan ocultos
  }
}
