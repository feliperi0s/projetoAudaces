import { ModelosService } from 'src/app/_servicos/modelos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelos-form',
  templateUrl: './modelos-form.component.html',
  styleUrls: ['./modelos-form.component.scss']
})
export class ModelosFormComponent implements OnInit {

  public form!:FormGroup
  public submitted = false

  constructor( private _formBuilder:FormBuilder, private _modeloService:ModelosService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nome:[null,[Validators.required,Validators.minLength(3)]],
      responsavel:[null,[Validators.required]],
      tipo:[null,[Validators.required]],
      colecao:[null,[Validators.required]],
      bordado:[null,[Validators.required]],
      estampa:[null,[Validators.required]]
    })
  }

  public onSubmit(){
    this.submitted = true
    if(this.form.valid){
      this._modeloService.postModelos(this.form.value).subscribe()
    }else {
      alert('preencha corretamente')
    }
  }

  public onCancel(){
    this.submitted = false;
    this.form.reset();

  }

}
