import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ColecaoComponent } from './components/collection/collection.component';
import { ModelsComponent } from './components/models/models.component';
import { HttpClientModule } from '@angular/common/http';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { ModelsFormComponent } from './components/models-form/models-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CollectionValueComponent } from './components/collection-value/collection-value.component';
import { ContentComponent } from './components/content/content.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ColecaoComponent,
    ModelsComponent,
    CollectionFormComponent,
    ModelsFormComponent,
    HomeComponent,
    NavComponent,
    CollectionValueComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
