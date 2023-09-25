import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Ferias } from '../models/ferias';
import {FeriasService} from '../services/ferias.service';
import { ListaFeriasComponent } from '../lista-ferias/lista-ferias.component';


@Component({
  selector: 'app-edit-ferias',
  templateUrl: './edit-ferias.component.html',
  styleUrls: ['./edit-ferias.component.css']
})

export class EditFeriasComponent implements OnInit{

  @Input() ferias?:Ferias;
  @Output() feriasUpdated = new EventEmitter<Ferias[]>();

  constructor (private feriasService : FeriasService){}

ngOnInit():void{

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
   this.feriasService
  .createFerias(ferias)
  .subscribe((arraydeferias:Ferias[])=>this.feriasUpdated.emit(arraydeferias));
}
}
