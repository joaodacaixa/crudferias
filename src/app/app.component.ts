
import { FeriasService } from './services/ferias.service';
import { Component, OnInit, Input } from '@angular/core';
import { Ferias } from './models/ferias';
import { Funcionario } from './models/funcionario';
import { Departamento } from './models/departamento';
import { EditFeriasComponent } from './edit-ferias/edit-ferias.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gestão de Período de Férias';

  /*arraydeferias:Ferias[]=[];
  feriasToEdit?:Ferias;*/

  /*arraydefuncionario:Funcionario[]=[];
  funcionarioToEdit?:Funcionario;*/

  /*arraydedepartamentos:Departamento[]=[];
  departamentoToEdit?:Departamento;*/

  //constructor (private feriasService: FeriasService){}


  ngOnInit(): void {}
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   /* this.feriasService.getFerias()
    .subscribe((result:Ferias[])=>(this.arraydeferias=result));*/

   /* this.feriasService.getFuncionario()
    .subscribe((result:Funcionario[])=>(this.arraydefuncionario=result));*/
    /*this.feriasService.getDepartamento()
    .subscribe((result:Departamento[])=>(this.arraydedepartamentos=result));

  }*/

 /* updateFeriasList(arraydeferias:Ferias[]){
    this.arraydeferias=arraydeferias;
  }
  initNovasFerias(){
    this.feriasToEdit=new Ferias();
  }

  editFerias(ferias:Ferias){
    this.feriasToEdit=ferias;
  }*/

 /* updateFuncionarioList(funcionario:Funcionario[]){
    this.arraydefuncionario=funcionario;
  }
  initNovoFuncionario(){
    this.funcionarioToEdit=new Funcionario();
  }

  editFuncionario(funcionario:Funcionario){
    this.funcionarioToEdit=funcionario;
  }*/

  /*updateDepartamentoList(departamento:Departamento[]){
    this.arraydedepartamentos=departamento;
  }
  initNovoDepartamento(){
    this.departamentoToEdit=new Departamento();
  }

  editDepartamento(funcionario:Departamento){
    this.departamentoToEdit=funcionario;
  }*/

}

