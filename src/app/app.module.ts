import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { ColecaoComponent } from './components/colecao/colecao.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import {HttpClientModule} from '@angular/common/http';
import { ColecaoFormComponent } from './components/colecao-form/colecao-form.component';
import { ModelosFormComponent } from './components/modelos-form/modelos-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ColecaoValorComponent } from './components/colecao-valor/colecao-valor.component';
import { ContentComponent } from './components/content/content.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    ColecaoComponent,
    ModelosComponent,
    ColecaoFormComponent,
    ModelosFormComponent,
    HomeComponent,
    NavComponent,
    ColecaoValorComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
