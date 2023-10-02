import { jsPDF } from 'jspdf'
import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { FeriasService } from '../services/ferias.service';
import { Relatorio } from '../models/relatorio';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {



  constructor (private relatorioService : FeriasService){}

  arrayrelatorio:Relatorio[] = [];

  relatorio?:Relatorio;

  @ViewChild ('content', {static:false}) el!:ElementRef;

  ngOnInit():void{
    this.relatorioService.getFeriasporDpto()
  .subscribe((result:Relatorio[])=>(this.arrayrelatorio=result));

  }

  imprimirRelatorioferias(){
    let pdf= new jsPDF('l','pt','a4');
    pdf.html(this.el.nativeElement,{
     callback:(pdf)=>{
       pdf.save("relpferiaspordepto.pdf");
     }
     })
   }
}
