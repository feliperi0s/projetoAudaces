import { Observable } from 'rxjs';
import { Models } from '../../_interfaces/models';
import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/_services/models.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modelos',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  public models$!: Observable<Models[]>

  constructor(private _modelService: ModelsService, private _router: Router, private _rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.models$ = this._modelService.getModels()
  }

  onEditi(id: number) {
    this._router.navigate(['logado/editarModelo', id]), { relativeTo: this._rout }
  }

  onDelete(model: Models) {
    this._modelService.remove(model.id).subscribe();
    this.onRefresch()

  }

  onRefresch() {
    window.location.reload()
  }
}
