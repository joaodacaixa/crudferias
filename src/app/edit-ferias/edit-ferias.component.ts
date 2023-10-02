import { Funcionario } from './../models/funcionario';
import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Ferias } from '../models/ferias';
import {FeriasService} from '../services/ferias.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ListaFeriasComponent } from '../lista-ferias/lista-ferias.component';




@Component({
  selector: 'app-edit-ferias',
  templateUrl: './edit-ferias.component.html',
  styleUrls: ['./edit-ferias.component.css']
})

export class EditFeriasComponent implements OnInit{

  dadosferias= new FormGroup({
      funcionario: new FormControl(''),
      data :new FormControl('', Validators.required),
      diasdegozo:new FormControl('5',Validators.pattern(/^[0-9][0-9]?$/))

  });
  @Input() ferias?:Ferias;
  @Output() feriasUpdated = new EventEmitter<Ferias[]>();

  arraydefuncionario : Funcionario[]=[];
  arraydeferias:Ferias[]=[];
  constructor (private feriasService : FeriasService){}

ngOnInit():void{

var arraydefuncionario=this.feriasService.getFuncionario()
.subscribe((result:Funcionario[])=>(this.arraydefuncionario=result));

var arraydeferias=this.feriasService.getFerias()
.subscribe((result:Ferias[])=>(this.arraydeferias=result));
}

deleteFerias(ferias:Ferias)
{
this.feriasService
.deleteFerias(ferias)
.subscribe((arraydeferias:Ferias[])=>this.feriasUpdated.emit(arraydeferias));

this.ferias=new Ferias();
this.ferias.funcionario="";
this.ferias.dataInicio="";
this.ferias.quantidadededias="5";
}

createFerias(ferias:Ferias){
if (ferias.funcionario=="" || ferias.quantidadededias=="##" || ferias.dataInicio=="##/##/####")
{
  alert('Dados inválidos! Favor verificar!')
}
else
{
  this.feriasService
 .createFerias(ferias)
 .subscribe((arraydeferias:Ferias[])=>this.feriasUpdated.emit(arraydeferias));
  alert('Férias cadastradas com sucesso');
  this.ferias=new Ferias();
  this.ferias.funcionario="";
  this.ferias.dataInicio="";
  this.ferias.quantidadededias="5";

}
}
validadata(data:string)
{
  var dia=new Date();
  var dataselecionada = new Date(data);
  switch(dataselecionada.getDay()){
    case 5:
      alert('Sábado- Férias não podem comecar no final de semana!');
      break;
    case 6:
      alert('Domingo - Férias não podem comecar no final de semana!');
      break;
}
var diferencadedatas=((dataselecionada.getTime() - dia.getTime()) );
  if (diferencadedatas<356400000)
  {
    alert('Dados inválidos! Férias não podem ser marcadas com menos de 5 dias!');
  }
}

validaqtddias(qtdedias:string){
  var x= qtdedias;
  var y: number=+x;
  if (y>30)
  {
    alert('Dados inválidos! Férias não podem ultrapassar de 30 dias!')
  }
  else if (y<5)
  {
    alert('Dados inválidos! Férias não podem ser menores que 5 dias!')
  }
}
verificaferias(nome:string){

  var estanaarray=this.arraydeferias.some(objeto=>objeto.funcionario.includes(nome));

  if(estanaarray)
  {
    alert("Esse funcionário já possui férias cadastrada!");
  }
}
/*
excluisabadosedomingos = (d: Date): boolean => {
  const dia=d.getDay();
  return dia !=0 && dia!=6;
}*/


}
