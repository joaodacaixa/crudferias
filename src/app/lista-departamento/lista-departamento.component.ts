import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Departamento } from '../models/departamento';
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

updateDepartamentoList(arraydedepartamentos:Departamento[]){
  console.log(arraydedepartamentos);
  this.arraydedepartamentos=arraydedepartamentos;
}
initNovoDepartamento(){

  this.departamentoToEdit=new Departamento();
  console.log(this.departamentoToEdit);
}

editDepartamento(departamento:Departamento){
  this.departamentoToEdit=departamento;
}
}



