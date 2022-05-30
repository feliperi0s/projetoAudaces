import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/_interfaces/collection';
import { CollectionService } from 'src/app/_services/collection.service';

@Component({
  selector: 'app-colecao-valor',
  templateUrl: './collection-value.component.html',
  styleUrls: ['./collection-value.component.scss']
})
export class CollectionValueComponent implements OnInit {

  public collection$!: Collection[]


  constructor(private _collectionService: CollectionService) { }

  ngOnInit(): void {
    this._collectionService.getCollections().subscribe(
      turns => {
        this.collection$ = turns.sort((a, b) => {
          return b.budget - a.budget
        })
      }
    )
  }

}
