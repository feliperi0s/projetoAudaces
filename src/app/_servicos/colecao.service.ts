import { Colecao } from './../_interfaces/colecao';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private readonly API = `${environment.API}colecoes`

  constructor(public _http:HttpClient) { }

  public getColecao():Observable<Colecao[]>{
    return this._http.get<Colecao[]>(this.API);
  }


}
