import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Departamento } from '../models/departamento';
import { FeriasService } from '../services/ferias.service';

@Component({
  selector: 'app-edit-departamento',
  templateUrl: './edit-departamento.component.html',
  styleUrls: ['./edit-departamento.component.css']
})
export class EditDepartamentoComponent implements OnInit{

    @Input() departamento?:Departamento;
    @Output() departamentoUpdate = new EventEmitter<Departamento[]>();

    constructor (private departamentoService : FeriasService){}




ngOnInit():void{}


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
    console.log(departamento);
    this.departamentoService
    .createDepartamento(departamento)
    .subscribe((arraydedepartamento:Departamento[])=>this.departamentoUpdate.emit(arraydedepartamento));
  }
}
