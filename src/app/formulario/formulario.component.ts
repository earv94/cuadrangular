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

  calculo(nombre1:string, nombre2: string, resultado1: number, resultado2:number){
    if ((resultado1)>(resultado2)) {
      let flag = 5;
      for (let i = 0; i < 3; i++) {
        if((this.tabla[i] === nombre1)&&(nombre1!=null)){
          flag=i;
        }
      }
      if(flag==5){
        this.tabla[this.corrimiento]=nombre1;
        this.corrimiento++;
      }
      this.puntuaciones[flag]+=3;
    }
    else if ((resultado1)<(resultado2)){
      let flag = 5;
      for (let i = 0; i < 3; i++) {
        if((this.tabla[i] === nombre2)&&(nombre2!=null)){
          flag=i;
        }
      }
      if(flag==5){
        this.tabla[this.corrimiento]=nombre2;
        this.corrimiento++
      }
      this.puntuaciones[flag]+=3;
    }
    else {
      let flag = 5;
      for (let i = 0; i < 3; i++) {
        if((this.tabla[i] === nombre1)&&(nombre1!=null)){
          flag=i;
        }
      }
      if(flag==5){
        this.tabla[this.corrimiento]=nombre1;
        this.corrimiento++;
      }
      this.puntuaciones[flag]+=1;
      flag=5;
      for (let i = 0; i < 3; i++) {
        if((this.tabla[i] === nombre2)&&(nombre2!=null)){
          flag=i;
        }
      }
      if(flag==5){
        this.tabla[this.corrimiento]=nombre2;
        this.corrimiento++;
      }
      this.puntuaciones[flag]+=1;
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
  

    /*if(this.corrimiento!=4){
      for ()
    }*/
    //vista por consola
    console.log("El resultado es:");
    for (let i = 0; i < this.corrimiento; i++) {
      console.log("Equipo",this.tabla[i],this.puntuaciones[i]);
    }
   
    alert("El resultado esta en el log");
  }
}
