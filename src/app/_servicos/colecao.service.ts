import { Colecao } from './../_interfaces/colecao';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private readonly API = `${environment.API}colecoes`

  constructor(public _http:HttpClient) { }

  public getColecao():Observable<Colecao[]>{
    return this._http.get<Colecao[]>(this.API);
  }

  public postModelos(colecao:Colecao){
    return this._http.post(this.API, colecao).pipe(take(1));
  }

  public loadById(id:number){
    return this._http.get<Colecao>(`${this.API}/${id}`).pipe(take(1));
  }

  public update(modelo: Colecao){
    return this._http.put(`${this.API}/${modelo.id}`, modelo).pipe(take(1))
  }


}
