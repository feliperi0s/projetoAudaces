import { ColecaoComponent } from './../colecao/colecao.component';
import { Colecao } from './../../_interfaces/colecao';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColecaoService } from 'src/app/_servicos/colecao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public colecao$!:Observable<Colecao[]>
  public person:Colecao[] = []
  public tamanho = ''
  public verdadeiro = false

  constructor(private _colecaoService:ColecaoService) {}

  ngOnInit(): void {
    this.colecao$ = this._colecaoService.getColecao()
  }


}
