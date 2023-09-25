import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFeriasComponent } from './edit-ferias.component';

const routes: Routes = [
  {
    path:'', component:EditFeriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditFeriasRoutingModule { }
