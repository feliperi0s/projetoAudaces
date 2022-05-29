import { ModelosService } from './../../_servicos/modelos.service';
import { Component, OnInit } from '@angular/core';
import { ColecaoService } from 'src/app/_servicos/colecao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sumColection!: Number
  public sumModel!: Number
  public mediaColection!: number
  public stringMedia!: string


  constructor(private _colecaoService: ColecaoService, private _modeloService: ModelosService) { }

  ngOnInit(): void {
    this._colecaoService.getColecao().subscribe(
      retorno => {
        this.sumColection = retorno.length
      }
    )

    this._colecaoService.getColecao().subscribe(
      retorno => {
        this.mediaColection = retorno.map((item) => item.orcamento).reduce((a, b) => a + b)
        this.mediaColection = this.mediaColection / retorno.length
        this.stringMedia = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.mediaColection)
      }
    )

    this._modeloService.getModelos().subscribe(
      retorno => {
        this.sumModel = retorno.length
      }
    )

  }



}
