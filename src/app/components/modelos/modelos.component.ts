import { catchError, empty, Observable } from 'rxjs';
import { Modelos } from './../../_interfaces/modelos';
import { Component, OnInit } from '@angular/core';
import { ModelosService } from 'src/app/_servicos/modelos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  public modelos$!:Observable<Modelos[]>

  constructor( private _modeloService:ModelosService,private _router:Router,private _rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.modelos$ = this._modeloService.getModelos()
  }

  onEditi(id:number){
    this._router.navigate(['editarModelo',id]),{relativeTo:this._rout}
  }

  onDelete(modelo:Modelos){
    this._modeloService.remove(modelo.id).subscribe();
    this.onRefresch()

     }

  onRefresch(){
    window.location.reload()
  }
}
