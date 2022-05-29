import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/_interfaces/colecao';
import { ColecaoService } from 'src/app/_servicos/colecao.service';

@Component({
  selector: 'app-colecao-valor',
  templateUrl: './colecao-valor.component.html',
  styleUrls: ['./colecao-valor.component.scss']
})
export class ColecaoValorComponent implements OnInit {

  public colecao$!: Colecao[]


  constructor(private _colecaoService: ColecaoService) { }

  ngOnInit(): void {
    this._colecaoService.getColecao().subscribe(
      turns => {
        this.colecao$ = turns.sort((a, b) => {
          return b.orcamento - a.orcamento
        })
      }
    )
  }

}
