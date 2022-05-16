import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!:FormGroup


  constructor( private _formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      login:["",[Validators.required,Validators.email]],
      senha:["",[Validators.required,Validators.minLength(6)]],
    })
  }

}
