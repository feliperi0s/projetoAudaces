import { Modelos } from './../_interfaces/modelos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  private readonly API = `${environment.API}modelos`

  constructor(private _http:HttpClient) { }

  public getModelos():Observable<Modelos[]> {
    return this._http.get<Modelos[]>(this.API);
  }

}