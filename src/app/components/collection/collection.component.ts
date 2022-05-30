import { Observable } from 'rxjs';
import { Collection } from '../../_interfaces/collection';
import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/_services/collection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colecao',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class ColecaoComponent implements OnInit {

  public collection$!: Observable<Collection[]>

  constructor(private _collectionService: CollectionService, private _router: Router, private _rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.collection$ = this._collectionService.getCollections()
  }

  onEditi(id: number) {
    this._router.navigate(['logado/editarColecao', id]), { relativeTo: this._rout }
  }

  onRefresch() {
    window.location.reload()
  }

}
