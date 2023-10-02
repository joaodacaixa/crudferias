import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { EditFeriasComponent } from './edit-ferias/edit-ferias.component';
import { EditDepartamentoComponent } from './edit-departamento/edit-departamento.component';
import { ListaFeriasComponent } from './lista-ferias/lista-ferias.component';
import { ListaDepartamentoComponent } from './lista-departamento/lista-departamento.component';
import { RelatorioComponent } from './relatorio/relatorio.component';



const routes: Routes = [
  {path:'', component:Component},
  {path:'ferias', component:ListaFeriasComponent},
  {path:'funcionario', component:ListaFuncionarioComponent},
  {path:'departamento', component:ListaDepartamentoComponent},
  {path:'relatorio', component:RelatorioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
