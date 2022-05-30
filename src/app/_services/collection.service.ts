import { Collection } from '../_interfaces/collection';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private readonly API = `${environment.API}colecoes`

  constructor(public _http: HttpClient) { }

  public getCollections(): Observable<Collection[]> {
    return this._http.get<Collection[]>(this.API);
  }

  public postCollections(collection: Collection) {
    return this._http.post(this.API, collection).pipe(take(1));
  }

  public loadById(id: number) {
    return this._http.get<Collection>(`${this.API}/${id}`).pipe(take(1));
  }

  public update(model: Collection) {
    return this._http.put(`${this.API}/${model.id}`, model).pipe(take(1))
  }


}
