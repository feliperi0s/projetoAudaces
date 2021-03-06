import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public form!: FormGroup

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      login: ["", [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate([''])
      alert('Nova senha enviada com sucesso!')
    }
    else {
      alert("Por Favor , Verifique se o e-mail está correto")
    }
  }

}
