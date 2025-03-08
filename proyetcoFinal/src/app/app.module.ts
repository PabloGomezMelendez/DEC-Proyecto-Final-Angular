import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { BibliotecaAnimeComponent } from './components/biblioteca-anime/biblioteca-anime.component';
import { BibliotecaMangaComponent } from './components/biblioteca-manga/biblioteca-manga.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    BibliotecaAnimeComponent,
    BibliotecaMangaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
