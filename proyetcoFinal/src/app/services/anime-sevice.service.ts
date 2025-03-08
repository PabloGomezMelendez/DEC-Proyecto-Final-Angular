
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IfiltroAnime } from '../interface/ifiltro-anime';

const URL_ALL_ANIME = 'https://api.jikan.moe/v4/anime';
const URL_FILTER_ANIME = 'https://api.jikan.moe/v4/anime?page=1&limit=25';
const URL_GENRES_ANIME = 'https://api.jikan.moe/v4/genres/anime?filter=genres';

@Injectable({
  providedIn: 'root'
})


export class AnimeSeviceService {

  constructor(private HttpClient: HttpClient) { }

  //Metodo que devuelve un array de animes
  obtenerAllAnime() {
    return this.HttpClient.get<any>(`${URL_ALL_ANIME}`);
  }
  obtenerGenerosAnime() {
    return this.HttpClient.get<any>(`${URL_GENRES_ANIME}`);
  }
  //Metodo que devuelve los generos de anime
  obtenerFilterAnime(filtro: IfiltroAnime) {
    let url = `${URL_FILTER_ANIME}`;
    if (filtro.name && filtro.name.trim() !== '') {
      url += `&q=${filtro.name}`;
    }
    if (filtro.status && filtro.status.trim() !== '') {
      url += `&status=${filtro.status}`;
    }
    if (filtro.type && filtro.type.trim() !== '') {
      url += `&type=${filtro.type}`;
    }
    if (filtro.genres && filtro.genres !== '') {
      url += `&genres=${filtro.genres}`;
    }
    console.log(url);
    return this.HttpClient.get<any>(url);
  }
}
