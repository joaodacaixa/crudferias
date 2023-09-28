
import { Component, OnInit  } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { FeriasService } from '../services/ferias.service';



@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit{

  arraydefuncionario:Funcionario[]=[];
  funcionarioToEdit?:Funcionario;

  constructor (private funcionarioService : FeriasService){}

onSubmit():void{}

ngOnInit():void{
  this.funcionarioService.getFuncionario()
  .subscribe((result:Funcionario[])=>(this.arraydefuncionario=result));
}

updateFuncionarioList(arraydefuncionario:Funcionario[]){
  this.arraydefuncionario=arraydefuncionario;
}
initNovoFuncionario(){
  this.funcionarioToEdit=new Funcionario();
}

editFuncionario(funcionario:Funcionario){
  this.funcionarioToEdit=funcionario;
}

}
