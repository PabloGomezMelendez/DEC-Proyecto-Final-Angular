
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_ALL_ANIME='https://api.jikan.moe/v4/anime?page=1&limit=25';

@Injectable({
  providedIn: 'root'
})


export class AnimeSeviceService {

  constructor(private HttpClient: HttpClient) { }

  //Metodo que devuelve un array de productos
  obtenerAllAnime(){
    return this.HttpClient.get<any>(`${URL_ALL_ANIME}`);
  }
}
