import { ColecaoService } from './../../_servicos/colecao.service';
import { Colecao } from './../../_interfaces/colecao';
import { ActivatedRoute } from '@angular/router';
import { ModelosService } from 'src/app/_servicos/modelos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modelos-form',
  templateUrl: './modelos-form.component.html',
  styleUrls: ['./modelos-form.component.scss']
})
export class ModelosFormComponent implements OnInit {

  public form!:FormGroup
  public submitted = false
  public colecao$!:Observable<Colecao[]>

  
  constructor( private _formBuilder:FormBuilder, private _modeloService:ModelosService, private _route:ActivatedRoute, public _colecaoService:ColecaoService, private _location :Location) { }

  ngOnInit(): void {
    this.colecao$ = this._colecaoService.getColecao()
    let registro = null
    this.form = this._formBuilder.group({
      id: null,
      nome:[null,[Validators.required,Validators.minLength(3)]],
      responsavel:[null,[Validators.required]],
      tipo:[null,[Validators.required]],
      colecao:['',[Validators.required]],
      bordado:[],
      estampa:[],
      bordadoNao:[],
      estampaNao:[],
    });
    this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];
         const modelos$ = this._modeloService.loadById(id);
         modelos$.subscribe( modelo => {
           registro = modelo;
           this.updateForm(modelo)
         }

         )
      }
    )

  }

  public onSubmit(){
    
    this.submitted = true
    if(this.form.valid){
      
      if(this.form.value.id){
        this._modeloService.update(this.form.value).subscribe(
          success => console.log('sucess'),
          () => console.log('erro')
        )
        this._location.back()
      }else {
        this._modeloService.postModelos(this.form.value).subscribe()
        this._location.back()
      }
    }
  }

  public updateForm(modelo:any){
    this.form.patchValue({
      id : modelo.id,
      nome: modelo.nome,
      colecao: modelo.colecao,
      responsavel:modelo.responsavel,
      tipo: modelo.tipo,
      bordado: modelo.bordado,
      estampado: modelo.estampado
    })
  }

  public onCancel(){
    this.submitted = false;
    if(this.form.value.id){
      this._location.back()
    }else {
      this.form.reset();
      this._location.back()
    }
  }


  
  }


  