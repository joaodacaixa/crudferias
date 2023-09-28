import { Funcionario } from './../models/funcionario';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeriasService } from '../services/ferias.service';
import { Departamento } from '../models/departamento';


@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit{

  dados = new FormGroup({
    matricula:new FormControl('', Validators.pattern(/^[Cc]{1}[0-9]{6}$/)),
    nome:new FormControl('', Validators.minLength(3)),
    departamento:new FormControl('')
  })


  @Input() funcionario?:Funcionario;
  @Output() funcionarioUpdate = new EventEmitter<Funcionario[]>();

  arraydefuncionario:Funcionario[]=[];
  funcionarioToEdit?:Funcionario;

  arraydedepartamentos:Departamento[]=[];


  constructor (private funcionarioService : FeriasService,
){}

ngOnInit(){

  var arraydedepartamentos=this.funcionarioService.getDepartamento()
  .subscribe((result:Departamento[])=>(this.arraydedepartamentos=result));
  var arraydefuncionario=this.funcionarioService.getFuncionario()
  .subscribe((result:Funcionario[])=>(this.arraydefuncionario=result));
}

onSubmit(){
  console.log(this.dados);
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
  if (funcionario.nome=="" || funcionario.matricula=="" || funcionario.nome=="Nome" || funcionario.matricula=="C######"){
    alert('Campos obriogatórios em branco!')
}else{
  this.funcionarioService
  .createFuncionario(funcionario)
  .subscribe((funcionario:Funcionario[])=>this.funcionarioUpdate.emit(funcionario));
  alert('Funcionário cadastrado com sucesso');
}
}

verificamatricula(matricula:string){

    const estanaarray=this.arraydefuncionario.some(objeto=>objeto.matricula.includes(matricula));

    if(estanaarray)
    {
      alert("Essa matrícula já foi cadastrada");
      this.funcionario=new Funcionario();
      this.funcionario.matricula="";
    }
}

}
