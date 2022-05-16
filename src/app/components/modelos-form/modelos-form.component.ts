import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelos-form',
  templateUrl: './modelos-form.component.html',
  styleUrls: ['./modelos-form.component.scss']
})
export class ModelosFormComponent implements OnInit {

  public form!:FormGroup

  constructor( private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nome:["",[Validators.required]],
      estacao:["",[Validators.required]],
      responsavel:["",[Validators.required]],
      marca:["",[Validators.required]],
      ano:[Number,[Validators.required]],
      orcamento:[Number,[Validators.required]],
    })
  }

}
