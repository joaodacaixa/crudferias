import { Funcionario } from './../models/funcionario';
import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Ferias } from '../models/ferias';
import {FeriasService} from '../services/ferias.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-ferias',
  templateUrl: './edit-ferias.component.html',
  styleUrls: ['./edit-ferias.component.css']
})

export class EditFeriasComponent implements OnInit{

  dadosferias= new FormGroup({
      funcionario: new FormControl(''),
      data :new FormControl('', Validators.required),
      diasdegozo:new FormControl('',Validators.pattern(/^[0-9][0-9]?$/))

  });
  @Input() ferias?:Ferias;
  @Output() feriasUpdated = new EventEmitter<Ferias[]>();

  arraydefuncionario : Funcionario[]=[];
  arraydeferias:Ferias[]=[];
  constructor (private feriasService : FeriasService){}

ngOnInit():void{
var arraydefuncionario=this.feriasService.getFuncionario()
.subscribe((result:Funcionario[])=>(this.arraydefuncionario=result));

const arraydeferias=this.feriasService.getFerias()
.subscribe((result:Ferias[])=>(this.arraydeferias=result));
}

updateFerias(ferias:Ferias){
this.feriasService
.updateFerias(ferias)
.subscribe((arraydeferias:Ferias[])=>this.feriasUpdated.emit(arraydeferias));

}

deleteFerias(ferias:Ferias)
{
this.feriasService
.deleteFerias(ferias)
.subscribe((arraydeferias:Ferias[])=>this.feriasUpdated.emit(arraydeferias));
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
}
}

validadata(data:string)
{
  var dia=new Date();
  var dataselecionada = new Date(data);
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
  /*else if (y<7)
  {
    alert('Dados inválidos! Férias não podem ser menores que 7 dias!')
  }*/
}
verificaferias(nome:string){

  const estanaarray=this.arraydeferias.some(objeto=>objeto.funcionario.includes(nome));
  if(estanaarray)
  {

    alert("Esse funcionário já possui férias cadastrada!");
  }
}

/*excluisabadosedomingos = (d: Date): boolean => {
  const dia=d.getDay();
  return dia !=0 && dia!=6;
}*/
}
