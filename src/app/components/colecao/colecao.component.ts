import { Observable } from 'rxjs';
import { Colecao } from './../../_interfaces/colecao';
import { Component, OnInit } from '@angular/core';
import { ColecaoService } from 'src/app/_servicos/colecao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.scss']
})
export class ColecaoComponent implements OnInit {

  public colection$!:Observable<Colecao[]>

  constructor(private _colecaoService:ColecaoService,private _router:Router,private _rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.colection$ = this._colecaoService.getColecao()
  }

  onEditi(id:number){
    this._router.navigate(['logado/editarColecao',id]),{relativeTo:this._rout}
  }

  onRefresch(){
    window.location.reload()
  }

}
