import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDepartamentoComponent } from './edit-departamento.component';

const routes: Routes = [
  {
    path:'', component:EditDepartamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditFeriasRoutingModule { }
