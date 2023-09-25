import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Departamento } from '../models/departamento';
import { DepartamentoService } from './../services/departamento.service';
import { FeriasService } from '../services/ferias.service';

@Component({
  selector: 'app-lista-departamento',
  templateUrl: './lista-departamento.component.html',
  styleUrls: ['./lista-departamento.component.css']
})
export class ListaDepartamentoComponent implements OnInit{

    arraydedepartamentos:Departamento[]=[];
    departamentoToEdit?:Departamento;

    constructor (private departamentoService : FeriasService){}

ngOnInit():void{
  this.departamentoService.getDepartamento()
  .subscribe((result:Departamento[])=>(this.arraydedepartamentos=result));
}

updateDepartamentoList(arraydepartamentos:Departamento[]){
  this.arraydedepartamentos=arraydepartamentos;
}
initNovoDepartamento(){
  this.departamentoToEdit=new Departamento();
}

editDepartamento(departamento:Departamento){
  this.departamentoToEdit=departamento;
}
}



