import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Departamento } from '../models/departamento';
import { DepartamentoService } from './../services/departamento.service';
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




ngOnInit():void{

}


updateDepartamento(departamento:Departamento){
  this.departamentoService
  .updateDepartamento(departamento)
  .subscribe((departamento:Departamento[])=>this.departamentoUpdate.emit(departamento));

}

deleteDepartamento(departamento:Departamento)
{
  this.departamentoService
  .deleteDepartamento(departamento)
  .subscribe((departamento:Departamento[])=>this.departamentoUpdate.emit(departamento));

}

  createDepartamento(departamento:Departamento){
    this.departamentoService
    .createDepartamento(departamento)
    .subscribe((departamento:Departamento[])=>this.departamentoUpdate.emit(departamento));
  }
}
