import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup


  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      login: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/logado/home'])
    }
    else {
      alert("Por Favor , Verifique se o login e senha estão corretos")
    }
  }


}

