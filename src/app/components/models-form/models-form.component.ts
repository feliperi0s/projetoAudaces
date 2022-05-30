import { CollectionService } from '../../_services/collection.service';
import { Collection } from '../../_interfaces/collection';
import { ActivatedRoute } from '@angular/router';
import { ModelsService } from 'src/app/_services/models.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Models } from 'src/app/_interfaces/models';

@Component({
  selector: 'app-modelos-form',
  templateUrl: './models-form.component.html',
  styleUrls: ['./models-form.component.scss']
})
export class ModelsFormComponent implements OnInit {

  public form!: FormGroup
  public submitted = false
  public collection$!: Observable<Collection[]>
  public models$!: Observable<Models[]>



  constructor(private _formBuilder: FormBuilder, private _modelService: ModelsService, private _route: ActivatedRoute, public _collectionService: CollectionService, private _location: Location) { }

  ngOnInit(): void {
    this.models$ = this._modelService.getModels()
    this.collection$ = this._collectionService.getCollections()
    let record = null
    this.form = this._formBuilder.group({
      id: null,
      name: [null, [Validators.required, Validators.minLength(3)]],
      responsible: [null, [Validators.required]],
      type: ["Tipo do modelo", [Validators.required]],
      collection: ["Selecionar Coleção", [Validators.required]],
      embroidery: [null],
      patterned: [null],
    });
    this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const models$ = this._modelService.loadById(id);
        models$.subscribe(model => {
          record = model;
          this.updateForm(model)
        }

        )
      }
    )

  }

  public onSubmit() {

    this.submitted = true
    if (this.form.valid) {

      if (this.form.value.id) {
        this._modelService.update(this.form.value).subscribe()
        this._location.back()
      } else {
        this._modelService.postModels(this.form.value).subscribe()
        this._location.back()
      }
    }
  }

  public updateForm(model: any) {
    this.form.patchValue({
      id: model.id,
      name: model.name,
      collection: model.collection,
      responsible: model.responsible,
      type: model.type,
      embroidery: model.embroidery,
      patterned: model.patterned
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

  onDelete() {

    this.submitted = true
    if (this.form.valid) {

      if (this.form.value.id) {
        this._modelService.remove(this.form.value.id).subscribe()
        this._location.back()
      }
    }
  }

}


