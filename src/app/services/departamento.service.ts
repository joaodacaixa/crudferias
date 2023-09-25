import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento';
import { HttpClient } from '@angular/common/http';
import {Observable} from  'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {}

/*  private url="Ferias";
  constructor(private http:HttpClient) { }

  public getDepartamento() : Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateDepartamento(departamento:Departamento) : Observable<Departamento[]>{
    return this.http.put<Departamento[]>(
      `${environment.apiUrl}/${this.url}`,
      departamento);
  }

  public createDepartamento(departamento:Departamento) : Observable<Departamento[]>{
    return this.http.post<Departamento[]>(
      `${environment.apiUrl}/${this.url}`,
      departamento);
  }

  public deleteDepartamento(departamento:Departamento) : Observable<any>{
    return this.http.delete<any>(
      `${environment.apiUrl}/${this.url}/${departamento.id}`);
  }
}*/
