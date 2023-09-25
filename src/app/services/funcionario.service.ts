import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { HttpClient } from '@angular/common/http';
import {Observable} from  'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
/*
  private url="Ferias";
  constructor(private http:HttpClient) { }

  public getFuncionario() : Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateFuncionario(funcionario:Funcionario) : Observable<Funcionario[]>{
    return this.http.put<Funcionario[]>(
      `${environment.apiUrl}/${this.url}`,
      funcionario);
  }

  public createFuncionario(funcionario:Funcionario) : Observable<Funcionario[]>{
    return this.http.post<Funcionario[]>(
      `${environment.apiUrl}/${this.url}`,
      funcionario);
  }

  public deleteFuncionario(funcionario:Funcionario) : Observable<any>{
    return this.http.delete<any>(
      `${environment.apiUrl}/${this.url}/${funcionario.id}`);
  }*/
}
