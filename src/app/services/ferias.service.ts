import { Injectable } from '@angular/core';
import { Ferias } from '../models/ferias';
import { HttpClient } from '@angular/common/http';
import {Observable} from  'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionario';
import { Departamento } from '../models/departamento';
@Injectable({
  providedIn: 'root'
})
export class FeriasService {


  private urlferias="Ferias";
  private urlfuncionario="Funcionario";
  private urldepartamento="Departamento";

  constructor(private http:HttpClient) { }

  public getFerias() : Observable<Ferias[]>{
    return this.http.get<Ferias[]>(`${environment.apiUrl}/${this.urlferias}`);
  }

  public updateFerias(ferias:Ferias) : Observable<Ferias[]>{
      return this.http.put<Ferias[]>(
      `${environment.apiUrl}/${this.urlferias}`,
      ferias);
  }

  public createFerias(ferias:Ferias): Observable<Ferias[]> {

    return this.http.post<Ferias[]>(
      `${environment.apiUrl}/${this.urlferias}`,
      ferias);
  }

  public deleteFerias(ferias:Ferias) : Observable<Ferias[]>{
    return this.http.delete<Ferias[]>(
      `${environment.apiUrl}/${this.urlferias}/${ferias.id}`);
  }

  /* service funcionarios*/
  public getFuncionario() : Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${environment.apiUrl}/${this.urlfuncionario}`);
  }

  public updateFuncionario(funcionario:Funcionario) : Observable<Funcionario[]>{
    return this.http.put<Funcionario[]>(
      `${environment.apiUrl}/${this.urlfuncionario}`,
      funcionario);
  }

  public createFuncionario(funcionario:Funcionario) : Observable<Funcionario[]>{
    return this.http.post<Funcionario[]>(
      `${environment.apiUrl}/${this.urlfuncionario}`,
      funcionario);
  }

   /* service funcionarios*/

  public deleteFuncionario(funcionario:Funcionario) : Observable<any>{
    return this.http.delete<any>(
      `${environment.apiUrl}/${this.urlfuncionario}/${funcionario.id}`);
  }

  public getDepartamento() : Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${environment.apiUrl}/${this.urldepartamento}`);
  }

  public updateDepartamento(departamento:Departamento) : Observable<Departamento[]>{
    return this.http.put<Departamento[]>(
      `${environment.apiUrl}/${this.urldepartamento}`,
      departamento);
  }

  public createDepartamento(departamento:Departamento) : Observable<Departamento[]>{
    return this.http.post<Departamento[]>(
      `${environment.apiUrl}/${this.urldepartamento}`,
      departamento);
  }

  public deleteDepartamento(departamento:Departamento) : Observable<any>{
    return this.http.delete<any>(
      `${environment.apiUrl}/${this.urldepartamento}/${departamento.id}`);
  }
}
