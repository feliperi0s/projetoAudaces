import { Modelos } from './../_interfaces/modelos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  private readonly API = `${environment.API}modelos`

  constructor(private _http:HttpClient) { }

  public getModelos():Observable<Modelos[]> {
    return this._http.get<Modelos[]>(this.API);
  }

  public postModelos(modelo:Modelos){
    return this._http.post(this.API, modelo).pipe(take(1));
  }

  public loadById(id:number){
    return this._http.get<Modelos>(`${this.API}/${id}`).pipe(take(1));
  }

  public update(modelo: Modelos){
    return this._http.put(`${this.API}/${modelo.id}`, modelo).pipe(take(1))
  }

  public remove(id:number){
   return this._http.delete(`${this.API}/${id}`).pipe(take(1))
  }

}
