import { Models } from '../_interfaces/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  private readonly API = `${environment.API}modelos`

  constructor(private _http: HttpClient) { }

  public getModels(): Observable<Models[]> {
    return this._http.get<Models[]>(this.API);
  }

  public postModels(model: Models) {
    return this._http.post(this.API, model).pipe(take(1));
  }

  public loadById(id: number) {
    return this._http.get<Models>(`${this.API}/${id}`).pipe(take(1));
  }

  public update(model: Models) {
    return this._http.put(`${this.API}/${model.id}`, model).pipe(take(1))
  }

  public remove(id: number) {
    return this._http.delete(`${this.API}/${id}`).pipe(take(1))
  }

}
