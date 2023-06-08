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
  public corrimiento = 0;
  show:boolean=false;

  verificarEmpate(nombre: string){
    //si el nombre esta en la tabla suma el punto en la misma posicion del equipo en el array tabla
    if((this.tabla.includes(nombre)) && (nombre != null)) {
      this.puntuaciones[this.tabla.indexOf(nombre)]++; 
    }
    //si nombre no esta en la tabla y nombre no es nulo a;ade el nombre en la posicion del corrimiento, mueve el corrimiento y 
    //suma el punto en la misma posicion del equipo en el array tabla
    else { 
      this.tabla[this.corrimiento] = nombre;
      this.corrimiento++;
      this.puntuaciones[this.tabla.indexOf(nombre)]++; 
    }
  }

  calculo(nombre1: string, nombre2: string, resultado1: number, resultado2: number) {
    console.log(this.puntuaciones[0]);
      //validacion equipo a gana
    if (resultado1 > resultado2) {
      let flag = 5;
      for (let i = 0; i < 3; i++) { //verificar que este en la tabla
        if (this.tabla[i] === nombre1 && nombre1 != null) {
          flag = i;//guarda la ubicacion del equipo
        }
      }
      if (flag == 5) {//entra cuando no esta en tabla
        this.tabla[this.corrimiento] = nombre1; //a;ade al equipo en la posicion del corrimiento
        flag=this.corrimiento; //guarda la ubicacion del equipo y desplaza el corrimiento
        this.corrimiento++;
      }
      this.puntuaciones[flag] = this.puntuaciones[flag] + 3; //suma +3 al equipo ganador
      //validacion equipo b gana
    } else if (resultado1 < resultado2) {
      let flag = 5;
      for (let i = 0; i < 3; i++) { //verificar que este en la tabla
        if (this.tabla[i] === nombre2 && nombre2 != null) {
          flag = i;//guarda la ubicacion del equipo
        }
      }
      if (flag == 5) {//entra cuando no esta en tabla
        this.tabla[this.corrimiento] = nombre2;//a;ade al equipo en la posicion del corrimiento
        flag=this.corrimiento; //guarda la ubicacion del equipo y desplaza el corrimiento
        this.corrimiento++;
      }
      this.puntuaciones[flag] += 3;
      //validacion empate
    } else {
      this.verificarEmpate(nombre1);
      this.verificarEmpate(nombre2);
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
