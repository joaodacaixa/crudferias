import { Departamento } from './../models/departamento';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FeriasService } from '../services/ferias.service';

@Component({
  selector: 'app-edit-departamento',
  templateUrl: './edit-departamento.component.html',
  styleUrls: ['./edit-departamento.component.css']
})
export class EditDepartamentoComponent implements OnInit{

    @Input() departamento?:Departamento;
    @Output() departamentoUpdate = new EventEmitter<Departamento[]>();

    arraydedepartamentos:Departamento[]=[];
    constructor (private departamentoService : FeriasService){}

    dpto=new FormGroup({
      departamentoInput:new FormControl('',Validators.minLength(3))
        });



ngOnInit():void{
var arraydedpto=this.departamentoService.getDepartamento()
.subscribe((result:Departamento[])=>(this.arraydedepartamentos=result));
}


UpdateDepartamento(departamento:Departamento){
  console.log(departamento);
  this.departamentoService
  .updateDepartamento(departamento)
  .subscribe((arraydedepartamento:Departamento[])=>this.departamentoUpdate.emit(arraydedepartamento));

}

DeleteDepartamento(departamento:Departamento)
{
  console.log(departamento);
  this.departamentoService
  .deleteDepartamento(departamento)
  .subscribe((arraydedepartamento:Departamento[])=>this.departamentoUpdate.emit(arraydedepartamento));

}

  CreateDepartamento(departamento:Departamento){

    if (departamento.nome=="" || departamento.nome=="Nome do Departamento"){
      alert('Dados Inválidos - min 3 letras para departamento!')
    }
    else
    {
    console.log(departamento);
    this.departamentoService
    .createDepartamento(departamento)
    .subscribe((arraydedepartamento:Departamento[])=>this.departamentoUpdate.emit(arraydedepartamento));
    alert('Departamento cadastrado com sucesso');
    }
  }

  validanomedpto(nome:string){
    const estanaarray=this.arraydedepartamentos.some(objeto=>objeto.nome.includes(nome));
    if(estanaarray)
    {
      this.departamento=new Departamento();
      this.departamento.nome="";
      alert("Este Departamento já foi criado")
    }
  }
}
