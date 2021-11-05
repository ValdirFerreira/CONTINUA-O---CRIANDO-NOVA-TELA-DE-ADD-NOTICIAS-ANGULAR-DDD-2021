import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Interceptor } from './interceptor/interceptor';
import { AddNoticiaComponent } from './pages/add-noticia/add-noticia.component';


const serviceAutentica = [Interceptor]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    NoticiasComponent,
    NavbarComponent,
    AddNoticiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CommonModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [

    serviceAutentica,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
