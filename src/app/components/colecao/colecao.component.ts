import { Observable } from 'rxjs';
import { Colecao } from './../../_interfaces/colecao';
import { Component, OnInit } from '@angular/core';
import { ColecaoService } from 'src/app/_servicos/colecao.service';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.scss']
})
export class ColecaoComponent implements OnInit {

  public colecao$!:Observable<Colecao[]>

  constructor(private _colecaoService:ColecaoService) { }

  ngOnInit(): void {
    this.colecao$ = this._colecaoService.getColecao()
  }

}
