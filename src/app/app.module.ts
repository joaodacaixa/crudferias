import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EditFeriasComponent } from './edit-ferias/edit-ferias.component';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { EditDepartamentoComponent } from './edit-departamento/edit-departamento.component';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';
import { ListaDepartamentoComponent } from './lista-departamento/lista-departamento.component';
import { ListaFeriasComponent } from './lista-ferias/lista-ferias.component';

@NgModule({
  declarations: [
    AppComponent,
    EditFeriasComponent,
    EditFuncionarioComponent,
    EditDepartamentoComponent,
    ListaFuncionarioComponent,
    ListaDepartamentoComponent,
    ListaFeriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
