import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-colecao-form',
  templateUrl: './colecao-form.component.html',
  styleUrls: ['./colecao-form.component.scss']
})
export class ColecaoFormComponent implements OnInit {

  public form!:FormGroup

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nome:["",[Validators.required]],
      responsavel:["",[Validators.required]],
      tipo:["",[Validators.required]],
      colecao:["",[Validators.required]],
      bordado:[false,[Validators.required]],
      estampa:[false,[Validators.required]]
    })
  }

}
