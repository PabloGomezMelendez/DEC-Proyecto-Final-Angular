import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { BibliotecaAnimeComponent } from './components/biblioteca-anime/biblioteca-anime.component';
import { BibliotecaMangaComponent } from './components/biblioteca-manga/biblioteca-manga.component';
import { MoreInfoAnimeComponent } from './components/more-info-anime/more-info-anime.component';

const routes: Routes = [
  {
    path: 'masInfo/:id',
    component: MoreInfoAnimeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'listado-anime',
    component: BibliotecaAnimeComponent,
  },
  {
    path: 'listado-manga',
    component: BibliotecaMangaComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
