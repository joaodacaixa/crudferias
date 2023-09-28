import { Component, OnInit  } from '@angular/core';
import { Ferias } from '../models/ferias';
import {FeriasService} from '../services/ferias.service';


@Component({
  selector: 'app-lista-ferias',
  templateUrl: './lista-ferias.component.html',
  styleUrls: ['./lista-ferias.component.css']
})

export class ListaFeriasComponent implements OnInit{


  arraydeferias:Ferias[]=[];
  feriasToEdit?:Ferias;

  constructor (private feriasService : FeriasService){}

ngOnInit():void{
  this.feriasService.getFerias()
  .subscribe((result:Ferias[])=>(this.arraydeferias=result));
}

updateFeriasList(arraydeferias:Ferias[]){
  this.arraydeferias=arraydeferias;
}
initNovasFerias(){
  this.feriasToEdit=new Ferias();
}

editFerias(ferias:Ferias){
  this.feriasToEdit=ferias;
}


}
