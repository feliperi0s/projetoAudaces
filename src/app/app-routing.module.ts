import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { ModelsFormComponent } from './components/models-form/models-form.component';
import { ModelsComponent } from './components/models/models.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { ColecaoComponent } from './components/collection/collection.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CollectionValueComponent } from './components/collection-value/collection-value.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'esqueciSenha',
    component: ResetPasswordComponent
  },

  {
    path: 'logado',
    component: ContentComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },

      {
        path: 'nav',
        component: NavComponent
      },

      {
        path: 'colecao',
        component: ColecaoComponent
      },
      {
        path: 'novaColecao',
        component: CollectionFormComponent
      },
      {
        path: 'editarColecao/:id',
        component: CollectionFormComponent
      },
      {
        path: 'modelos',
        component: ModelsComponent
      },
      {
        path: 'novoModelo',
        component: ModelsFormComponent
      },
      {
        path: 'editarModelo/:id',
        component: ModelsFormComponent
      },

      {
        path: 'colecaovalor',
        component: CollectionValueComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
