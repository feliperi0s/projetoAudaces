import { ModelsService } from '../../_services/models.service';
import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/_services/collection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sumCollection!: Number
  public sumModel!: Number
  public averageCollection!: number


  constructor(private _collectionService: CollectionService, private _modelService: ModelsService) { }

  ngOnInit(): void {
    this._collectionService.getCollections().subscribe(
      turns => {
        this.sumCollection = turns.length
      }
    )

    this._collectionService.getCollections().subscribe(
      turns => {
        this.averageCollection = turns.map((item) => item.budget).reduce((a, b) => a + b)
        this.averageCollection = this.averageCollection / turns.length
      }
    )

    this._modelService.getModels().subscribe(
      turns => {
        this.sumModel = turns.length
      }
    )

  }



}
