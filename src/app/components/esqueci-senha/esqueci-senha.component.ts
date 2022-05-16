import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarEmail(){
    alert('Novo senha enviada com sucesso!')
  }

}
