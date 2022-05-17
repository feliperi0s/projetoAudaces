import { ModelosService } from './../../_servicos/modelos.service';
import { Component, OnInit } from '@angular/core';
import { ColecaoService } from 'src/app/_servicos/colecao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public somaColecao!:Number
  public somaModelo!:Number
  public mediaColecao!:number
  public stringMedia!:string


  constructor(private _colecaoService:ColecaoService,private _modeloService:ModelosService) {}

  ngOnInit(): void {
    this._colecaoService.getColecao().subscribe(
      retorno => {
        this.somaColecao = retorno.length
      }
    )

    this._colecaoService.getColecao().subscribe(
      retorno => {
        this.mediaColecao = retorno.map((item) => item.orcamento).reduce((a,b) => a+b)
        this.mediaColecao = this.mediaColecao / retorno.length
        this.stringMedia = Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(this.mediaColecao)
      }
    )

    this._modeloService.getModelos().subscribe(
      retorno => {
        this.somaModelo = retorno.length
      }
    )

  }

  

}
