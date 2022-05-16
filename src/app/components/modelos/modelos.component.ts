import { Observable } from 'rxjs';
import { Modelos } from './../../_interfaces/modelos';
import { Component, OnInit } from '@angular/core';
import { ModelosService } from 'src/app/_servicos/modelos.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  public modelos$!:Observable<Modelos[]>

  constructor( private _modeloService:ModelosService) { }

  ngOnInit(): void {
    this.modelos$ = this._modeloService.getModelos()
  }

}
