import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFeriasComponent } from '../edit-ferias/edit-ferias.component';
import { EditFuncionarioComponent } from './edit-funcionario.component';

const routes: Routes = [
  {
    path:'', component:EditFuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditFeriasRoutingModule { }
