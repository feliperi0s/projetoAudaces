import { HomeComponent } from './components/home/home.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './components/login/login.component';
import { ModelosFormComponent } from './components/modelos-form/modelos-form.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { ColecaoFormComponent } from './components/colecao-form/colecao-form.component';
import { ColecaoComponent } from './components/colecao/colecao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent
  },

  {
    path:'esqueciSenha',
    component:EsqueciSenhaComponent
  },

  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'nav',
    component:NavComponent
  },

  {
    path:'colecao',
    component:ColecaoComponent
  },
  {
    path:'novaColecao',
    component:ColecaoFormComponent
  },
  {
    path:'editarColecao/:id',
    component:ColecaoFormComponent
  },
  {
    path:'modelos',
    component:ModelosComponent
  },
  {
    path:'novoModelo',
    component:ModelosFormComponent
  },
  {
    path:'editarModelo/:id',
    component:ModelosFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }