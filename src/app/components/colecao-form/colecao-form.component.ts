import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/_interfaces/colecao';
import { ColecaoService } from 'src/app/_servicos/colecao.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-colecao-form',
  templateUrl: './colecao-form.component.html',
  styleUrls: ['./colecao-form.component.scss']
})
export class ColecaoFormComponent implements OnInit {

  public form!:FormGroup
  public submitted = false
  public colecao$!:Observable<Colecao[]>

  constructor(private _formBuilder:FormBuilder, private _colecaoService :ColecaoService, private _route:ActivatedRoute, private _location :Location) { }

  ngOnInit(): void {
    this.colecao$ = this._colecaoService.getColecao()
    let registro = null
    this.form = this._formBuilder.group({
      id: null,
      nome:["",[Validators.required]],
      estacao:["",[Validators.required]],
      responsavel:["",[Validators.required]],
      marca:["",[Validators.required]],
      anoLancamento:[false,[Validators.required]],
      orcamento:[false,[Validators.required]]
    });
    this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];
         const colecao$ = this._colecaoService.loadById(id);
         colecao$.subscribe( colecao => {
           registro = colecao;
           this.updateForm(colecao)
         }

         )
      }
    )
  }

  public onSubmit(){
    
    this.submitted = true
    if(this.form.valid){
      
      if(this.form.value.id){
        this._colecaoService.update(this.form.value).subscribe(
          success => console.log('sucess'),
          () => console.log('erro')
        )
        this._location.back()
      }else {
        this._colecaoService.postModelos(this.form.value).subscribe()
        this._location.back()
      }
    }  
  }

  public updateForm(colecao:any){
    this.form.patchValue({
      id : colecao.id,
      nome: colecao.nome,
      estacao: colecao.estacao,
      responsavel:colecao.responsavel,
      marca: colecao.marca,
      anoLancamento: colecao.anoLancamento,
      orcamento: colecao.orcamento
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
