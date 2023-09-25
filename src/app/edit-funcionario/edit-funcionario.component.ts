import { Component, EventEmitter, Input, OnInit, Output, getNgModuleById  } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import {FuncionarioService} from '../services/funcionario.service';
import { Ferias } from '../models/ferias';
import { FeriasService } from '../services/ferias.service';
import { getHtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit{

  @Input() funcionario?:Funcionario;
  @Output() funcionarioUpdate = new EventEmitter<Funcionario[]>();

  arraydefuncionario:Funcionario[]=[];
  funcionarioToEdit?:Funcionario;


  constructor (private funcionarioService : FeriasService){}

ngOnInit():void{

}

updateFuncionario(funcionario:Funcionario){
this.funcionarioService
.updateFuncionario(funcionario)
.subscribe((funcionario:Funcionario[])=>this.funcionarioUpdate.emit(funcionario));
}

deleteFuncionario(funcionario:Funcionario)
{
this.funcionarioService
.deleteFuncionario(funcionario)
.subscribe((funcionario:Funcionario[])=>this.funcionarioUpdate.emit(funcionario));
}

createFuncionario(funcionario:Funcionario){
  this.funcionarioService
  .createFuncionario(funcionario)
  .subscribe((funcionario:Funcionario[])=>this.funcionarioUpdate.emit(funcionario));
}

testanome(){

  var nome = (<HTMLSelectElement>document.getElementById('nome')).value;
  alert(nome);
	if(nome.length < 3){
	    confirm("nome precisa ter mais de 3 letras!");
        nome="";
	}

}

}
