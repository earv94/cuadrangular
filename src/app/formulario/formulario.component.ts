import { Component } from '@angular/core';
import { Resultado } from '../equipo';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  equipoModel: Resultado[]=[];
  tabla:string[]=[];
  puntuaciones:number[]=[];
  show:boolean=false;
  errorflag:boolean=false;
  
  constructor () {
    for (let i=0; i<6; i++){
      this.equipoModel.push(new Resultado("","",0,0));
    }
  }

  puntuarEquipo(nombre: string, puntos: number){
    //si el nombre no esta en la tabla a;ade el nombre en la posicion del corrimiento, mueve el corrimiento
    if((!this.tabla.includes(nombre)) && (nombre != null)) {
      if(this.tabla.length>3){
        if (!this.errorflag) {
          alert("Ha ingresado más de 4 equipos, revise e intente nuevamente");
          this.errorflag = true;
        }
        return;
      }else{
        this.tabla.push(nombre); 
        this.puntuaciones.push(0);
      }
    }
    //suma los puntos en la misma posicion del equipo en el array tabla
    this.puntuaciones[this.tabla.indexOf(nombre)]+=puntos;
  }

  calculo(nombre1: string, nombre2: string, resultado1: number, resultado2: number) {
      //validacion equipo a gana
    if (resultado1 > resultado2) {
      this.puntuarEquipo(nombre1,3);
      this.puntuarEquipo(nombre2,0);
    } 
      //validacion equipo b gana
    else if (resultado1 < resultado2) {
      this.puntuarEquipo(nombre1,0);
      this.puntuarEquipo(nombre2,3);
    } 
      //validacion empate
    else {
      this.puntuarEquipo(nombre1,1);
      this.puntuarEquipo(nombre2,1);
    }
  }


  formularioEnviado(){
    this.tabla=[];
    this.puntuaciones=[];
    this.errorflag=false;
    this.show=false;
  
    for (let equipo of this.equipoModel){
      this.calculo(equipo.nombre1,equipo.nombre2,equipo.resultado1,equipo.resultado2);
    }
    
    for (let i=0;i<this.puntuaciones.length;i++){
      console.log("Equipo:    ",this.tabla[i],"  Resultado:    ", this.puntuaciones[i]);
    }
    
    if(!this.errorflag){
      this.show=true; //para mostrar los resultados ya que al inicio estan ocultos
    }
  }
}
