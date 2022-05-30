import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/_interfaces/collection';
import { CollectionService } from 'src/app/_services/collection.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-colecao-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent implements OnInit {

  public form!: FormGroup
  public submitted = false
  public collection$!: Observable<Collection[]>

  constructor(private _formBuilder: FormBuilder, private _collectionService: CollectionService, private _route: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    this.collection$ = this._collectionService.getCollections()
    let record = null
    this.form = this._formBuilder.group({
      id: null,
      name: ["", [Validators.required]],
      station: ["", [Validators.required]],
      responsible: ["", [Validators.required]],
      brand: ["", [Validators.required]],
      releaseYear: [false, [Validators.required]],
      budget: [false, [Validators.required]]
    });
    this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const collection$ = this._collectionService.loadById(id);
        collection$.subscribe(collection => {
          record = collection;
          this.updateForm(collection)
        }
        )
      }
    )
  }

  public onSubmit() {

    this.submitted = true
    if (this.form.valid) {

      if (this.form.value.id) {
        this._collectionService.update(this.form.value).subscribe()
        this._location.back()
      } else {
        this._collectionService.postCollections(this.form.value).subscribe()
        this._location.back()
      }
    }
  }

  public updateForm(collection: any) {
    this.form.patchValue({
      id: collection.id,
      name: collection.name,
      station: collection.station,
      responsible: collection.responsible,
      brand: collection.brand,
      releaseYear: collection.releaseYear,
      budget: collection.budget
    })
  }

  public onCancel() {
    this.submitted = false;
    if (this.form.value.id) {
      this._location.back()
    } else {
      this.form.reset();
      this._location.back()
    }
  }


}
